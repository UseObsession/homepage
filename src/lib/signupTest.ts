/* Test build only. main.tsx loads this file when the build sets VITE_SIGNUP_TEST=1, which the site's own build never
   does, so none of it ships (the condition is a constant the bundler drops). It drives the real sign up card through
   real DOM events, against a test build whose VITE_WAITLIST_URL is a local stub, never the live script:
   - ?sd=N[.reader][.other]  fills the hero's form (a free shop's store or a check's AI agent first, then the email),
     sends it, and answers each step until step N of the card is on screen (the first option of each single choice,
     the first 2 of each multi select). `reader` picks the reader on a page that asks; `other` then taps "Something
     else" on step N. ?sd=thanks ends on the thank you.
   - ?sd=e2e  runs the checks below and posts the results to the stub's /__report.
   - ?sd=flow.NAME  runs 1 page's flow and posts its results the same way: agencies (the agencies use case with a store:
     its own thank you and its format question), agenciesblank (the same form left blank: a waitlist sign up),
     verify (/verify with an AI agent), verifyblank, recipe (/recipes/prospect-intelligence: its name and its question).
   Keys can't be pressed for real from a script: a pick from the keys is a click with no detail, exactly what the
   arrow keys and Space produce. */

import { hydrating } from './hydration'

const STUB = new URL((import.meta.env.VITE_WAITLIST_URL as string) || 'http://127.0.0.1:1/').origin
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms))
const $ = <T extends Element = HTMLElement>(sel: string, root: ParentNode = document) => root.querySelector<T>(sel)
const $$ = <T extends Element = HTMLElement>(sel: string, root: ParentNode = document) => Array.from(root.querySelectorAll<T>(sel))

async function until<T>(get: () => T | null | undefined | false, ms = 3000): Promise<T> {
  const end = Date.now() + ms
  for (;;) {
    const v = get()
    if (v) return v
    if (Date.now() > end) throw new Error('timed out')
    await sleep(20)
  }
}

function type(el: HTMLInputElement | HTMLTextAreaElement, value: string) {
  const proto = el instanceof HTMLTextAreaElement ? HTMLTextAreaElement.prototype : HTMLInputElement.prototype
  Object.getOwnPropertyDescriptor(proto, 'value')!.set!.call(el, value)
  el.dispatchEvent(new Event('input', { bubbles: true }))
}
const tap = (el: Element) => el.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, detail: 1 }))
const keyPick = (el: Element) => el.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, detail: 0 }))
const key = (el: Element, k: string) => el.dispatchEvent(new KeyboardEvent('keydown', { key: k, bubbles: true, cancelable: true }))

const card = () => $('.s-hero .s-signup') ?? $('.s-signup')
const currentStep = () => card()?.querySelector<HTMLElement>('.s-signup__step.is-current')
const currentId = () => (card()?.querySelector('.s-signup__card--thanks') ? 'thanks' : (currentStep()?.dataset.step ?? ''))
const nextBtn = () => card()?.querySelector<HTMLButtonElement>('.s-signup__next')
const skipBtn = () => card()?.querySelectorAll<HTMLButtonElement>('.s-signup__end .ob-btn')[0]

async function moved(from: string) {
  return until(() => currentId() !== from && currentId())
}

/* `first` is what a free shop or check's first field gets: the default store or AI agent, or null to leave it blank. */
async function signUp(email = 'maya@northwind-labs.co.uk', first: string | null | undefined = undefined) {
  const form = await until(() => $<HTMLFormElement>('.s-hero .s-capture form') ?? $<HTMLFormElement>('.s-capture form'))
  await sleep(200)
  /* A free shop or check asks for the store or the AI agent first, then opens the email under it. */
  const field = form.querySelector<HTMLInputElement>('input[name="store"], input[name="agent"]')
  if (field && first !== null) {
    type(field, first ?? (field.name === 'store' ? 'client-store.example' : 'help.client-store.example/chat'))
    form.requestSubmit()
    await sleep(200)
  } else if (field) {
    form.requestSubmit()
    await sleep(200)
  }
  type(form.querySelector<HTMLInputElement>('input[type="email"]')!, email)
  form.requestSubmit()
  await until(() => card())
}

/* Answers the step on screen the plain way. */
async function answer(reader = 'agency') {
  const id = currentId()
  const step = currentStep()!
  if (id === 'name') {
    type(step.querySelector<HTMLInputElement>('input[autocomplete="name"]')!, 'Maya Okafor')
    await sleep(30)
    nextBtn()!.click()
  } else if (id === 'note') {
    type(step.querySelector('textarea')!, 'Pitch on the 14th, 3 rivals in mind.')
    await sleep(30)
    nextBtn()!.click()
  } else if (id === 'reader') {
    tap(step.querySelector(`input[value="${reader}"]`)!)
  } else {
    const inputs = $$<HTMLInputElement>('.ob-chip-input', step)
    if (inputs[0].type === 'checkbox') {
      tap(inputs[0])
      tap(inputs[1])
      await sleep(30)
      nextBtn()!.click()
    } else tap(inputs[0])
  }
  await moved(id)
  await sleep(60)
}

async function demo(spec: string) {
  const [target, reader = 'agency', extra] = spec.split('.')
  await signUp()
  if (target === 'thanks') {
    while (currentId() !== 'thanks') await answer(reader)
  } else {
    const n = Number(target)
    for (let i = 2; i < n; i++) await answer(reader)
    if (extra === 'other') {
      const other = currentStep()!.querySelector<HTMLInputElement>('input[value="other"]')
      if (other) tap(other)
    }
  }
  ;(document.activeElement as HTMLElement | null)?.blur()
  /* Let the last chip finish its colour change before the shot: read a style so the change starts, then wait. */
  await sleep(100)
  void getComputedStyle(document.body).color
  requestAnimationFrame(() => undefined)
  await sleep(800)
}

type Result = { name: string; pass: boolean; detail?: string }

async function e2e() {
  const results: Result[] = []
  const check = (name: string, pass: boolean, detail = '') => results.push({ name, pass, detail })
  const phase = sessionStorage.getItem('obs-e2e') ?? '1'
  try {
    if (phase === '1') {
      const form = await until(() => $<HTMLFormElement>('.s-hero .s-capture form'))
      await sleep(200)
      const input = form.querySelector<HTMLInputElement>('input[type="email"]')!
      type(input, 'not an email')
      form.requestSubmit()
      await sleep(100)
      check('a bad email shows its error and no card', !card() && input.getAttribute('aria-invalid') === 'true' && !!$('.s-hero .ob-field-error:not([hidden])'))

      await signUp()
      check('the email saves and the card opens in place', !!card() && !$('.s-hero .ob-pill-form'))
      check('every form on the page shows the same card', $$('.s-signup').length === $$('.s-capture').length && $$('.s-signup').length >= 2, String($$('.s-signup').length))
      check('focus lands on the card’s title', document.activeElement?.classList.contains('ob-confirm-title') ?? false, document.activeElement?.className)
      const company = currentStep()!.querySelector<HTMLInputElement>('input[autocomplete="organization"]')!
      check('the company is filled in from the email', company.value === 'Northwind Labs', company.value)
      check('the email square is filled, the name square is current', !!card()!.querySelector('.s-signup__sq.is-done') && $$('.s-signup__sq', card()!)[1].classList.contains('is-current'))
      check('no Back on step 2', !card()!.querySelector('.s-signup__back'))
      const skipX = skipBtn()!.getBoundingClientRect().x

      await answer()
      check('Next moves to "Which of these is you?"', currentId() === 'reader')
      check('focus moves to the new question', document.activeElement?.classList.contains('s-signup__q') ?? false, document.activeElement?.textContent ?? '')
      check('the question reads its place first', /^Question 3 of 8\./.test(document.activeElement?.textContent ?? ''), document.activeElement?.textContent ?? '')
      check('progress says 3 of 8', card()!.querySelector('.s-signup__count')?.textContent === '3 of 8', card()!.querySelector('.s-signup__count')?.textContent ?? '')

      keyPick(currentStep()!.querySelector('input[value="founder"]')!)
      await sleep(600)
      check('a pick from the keys never moves on', currentId() === 'reader')
      check('Skip and Next sit where they sat on step 2', Math.abs(skipBtn()!.getBoundingClientRect().x - skipX) < 1 && !!nextBtn())
      key(currentStep()!.querySelector('input[value="founder"]')!, 'Enter')
      await moved('reader')
      check('Enter moves on', currentId() === 'F1', currentId())

      const legend = currentStep()!.querySelector('.s-signup__q')!
      key(legend, '2')
      await sleep(400)
      const picked = currentStep()!.querySelector<HTMLInputElement>('.ob-chip-input:checked')
      check('a number key picks that option and stays', currentId() === 'F1' && picked?.value === 'release', picked?.value)
      tap(currentStep()!.querySelector('input[value="find"]')!)
      await sleep(120)
      check('a tap waits for the chip to fill before moving on', currentId() === 'F1')
      await moved('F1')
      check('then moves on by itself', currentId() === 'F2', currentId())
      const squares = $$<HTMLButtonElement>('button.s-signup__sq', card()!)
      check('answered squares are buttons back', squares.length === 3, String(squares.length))

      tap(currentStep()!.querySelector('input[value="other"]')!)
      await sleep(400)
      const otherField = currentStep()!.querySelector<HTMLInputElement>('.s-signup__other input')
      check('"Something else" opens its field and waits', currentId() === 'F2' && !!otherField)
      check('the caret goes into that field', document.activeElement === otherField)
      type(otherField!, 'Training courses')
      await sleep(30)
      nextBtn()!.click()
      await moved('F2')

      check('results name the first job', currentStep()!.querySelector('.s-signup__help')?.textContent === 'For finding customers. Pick any.', currentStep()!.querySelector('.s-signup__help')?.textContent ?? '')
      skipBtn()!.click()
      await moved('F3')
      check('Skip moves on and marks the square skipped', currentId() === 'F4' && $$('.s-signup__sq', card()!)[5].classList.contains('is-skipped'))

      const opts = $$<HTMLInputElement>('.ob-chip-input', currentStep()!)
      tap(opts[0])
      tap(opts[1])
      tap(opts[5])
      await sleep(50)
      check('"None of these" clears the others', opts[5].checked && !opts[0].checked && !opts[1].checked)
      tap(opts[2])
      await sleep(50)
      check('any other choice clears "None of these"', opts[2].checked && !opts[5].checked)
      check('a multi select never moves on by itself', currentId() === 'F4')
      ;(card()!.querySelector('.s-signup__back') as HTMLButtonElement).click()
      await moved('F4')
      check('Back goes to the step before', currentId() === 'F3', currentId())
      skipBtn()!.click()
      await moved('F3')
      check('then Skip comes back to where they were', currentId() === 'F4', currentId())

      const other = $$('.s-signup')[1]
      check('the page’s other form follows along', other?.querySelector('.s-signup__step.is-current')?.getAttribute('data-step') === 'F4')

      sessionStorage.setItem('obs-e2e', '2')
      sessionStorage.setItem('obs-e2e-results', JSON.stringify(results))
      location.reload()
      return
    }

    results.push(...(JSON.parse(sessionStorage.getItem('obs-e2e-results') ?? '[]') as Result[]))
    await until(() => card(), 8000)
    check('a reload reopens the card at the first unanswered step', currentId() === 'F4', currentId())
    check('a reload keeps the answers', !!card()!.querySelector('.s-signup__sq.is-skipped'))
    const opts = $$<HTMLInputElement>('.ob-chip-input', currentStep()!)
    tap(opts[0])
    tap(opts[2])
    tap(opts[3])
    await sleep(30)
    nextBtn()!.click()
    await moved('F4')
    check('the note is last', currentId() === 'note')
    const ta = currentStep()!.querySelector('textarea')!
    type(ta, 'x'.repeat(420))
    await sleep(50)
    check('the count shows from 400 characters', currentStep()!.querySelector('.ob-field-count')?.textContent === '420 of 500', currentStep()!.querySelector('.ob-field-count')?.textContent ?? '')
    type(ta, 'Release on the 20th.')
    await sleep(30)
    check('the last step says Finish and Skip and finish', nextBtn()!.textContent === 'Finish' && skipBtn()!.textContent === 'Skip and finish')
    nextBtn()!.click()
    await until(() => currentId() === 'thanks')
    check('Finish lands on the thank you with its title focused', document.activeElement?.classList.contains('ob-confirm-title') ?? false)
    const said = card()!.querySelector('.ob-confirm-title > span:last-child')?.textContent ?? ''
    check('the thank you names them', said === 'Thanks, Maya. That’s everything.', said)
    const toggle = card()!.querySelector<HTMLButtonElement>('.s-signup__disclose')!
    toggle.click()
    await sleep(50)
    check('"Your answers" opens', toggle.getAttribute('aria-expanded') === 'true' && !card()!.querySelector<HTMLElement>('.s-signup__list')!.hidden)
    const rows = $$('.s-signup__row', card()!)
    check('every answer is listed', rows.length === 7, rows.map((r) => r.textContent).join(' | '))
    rows[4].querySelector('button')!.click()
    await until(() => currentId() === 'F3')
    check('Change opens that step', currentId() === 'F3')
    const res = $$<HTMLInputElement>('.ob-chip-input', currentStep()!)
    tap(res[1])
    await sleep(30)
    nextBtn()!.click()
    await until(() => currentId() === 'thanks')
    check('and returns to the thank you', currentId() === 'thanks')

    const next = card()!.querySelector<HTMLFormElement>('form.s-signup__next-step')
    check('a founder who picked "Find customers" is asked which company to start with', next?.querySelector('.s-signup__next-h')?.textContent === 'Which company should we start with?', next?.querySelector('.s-signup__next-h')?.textContent ?? '')
    const v = next!.querySelector<HTMLInputElement>('input')!
    type(v, 'not a site')
    next!.requestSubmit()
    await sleep(60)
    check('a bad address shows its error', v.getAttribute('aria-invalid') === 'true')
    type(v, 'https://www.rival-co.example/pricing')
    await sleep(30)
    next!.requestSubmit()
    await until(() => card()!.querySelector('.s-signup__next-step.is-done'))
    check('a good one is saved', card()!.querySelector('.s-signup__next-step.is-done .s-signup__next-h')?.textContent === 'Saved. It’s in your plan.')
    await sleep(800)
  } catch (err) {
    check('no crash', false, String(err))
  }
  sessionStorage.removeItem('obs-e2e')
  await fetch(`${STUB}/__report`, { method: 'POST', body: JSON.stringify({ page: location.pathname, results }) })
}

const titleText = () => card()?.querySelector('.ob-confirm-title > span:last-child')?.textContent ?? ''
const lineText = () => card()?.querySelector('.s-signup__line')?.textContent ?? ''
const legendText = () => currentStep()?.querySelector('.s-signup__q')?.textContent?.replace(/^Question \d+ of \d+\.\s*/, '') ?? ''
const stepIds = () => $$('.s-signup__step', card()!).map((x) => x.dataset.step)

/* One page's flow: sign up from its hero, then check what the card knew from the page. */
async function flow(name: string) {
  const results: Result[] = []
  const check = (n: string, pass: boolean, detail = '') => results.push({ name: n, pass, detail })
  const done = async () => {
    while (currentId() !== 'thanks') await answer('founder')
  }
  try {
    if (name === 'agencies') {
      await signUp('maya@northwind-labs.co.uk', 'client-store.example')
      check('the card says the page’s own words', titleText() === 'Got it. We’ll start with client-store.example.', titleText())
      check('the reader is known: For agencies, no reader step', card()!.querySelector('.s-signup__for')?.textContent?.startsWith('For agencies.') === true && !stepIds().includes('reader'), stepIds().join(','))
      check('the format question stands in for the first job', stepIds().join(',') === 'name,page,A2,A3,A4,note', stepIds().join(','))
      await answer()
      check('it asks the format, with its 6 options', legendText() === 'Which format should we send the audits in?' && $$('.ob-chip-input', currentStep()!).length === 6, legendText())
      await done()
      check('the thank you is the page’s own', titleText() === 'Got it. We’ll start with client-store.example.', titleText())
      check('its line says what happens next', lineText() === 'We’ll email maya@northwind-labs.co.uk to confirm it’s a client’s store with their OK, and to ask for the other 4.', lineText())
      card()!.querySelector<HTMLButtonElement>('.s-signup__disclose')!.click()
      await sleep(50)
      check('the answers list names the format', $$('.s-signup__row dt', card()!).some((d) => d.textContent === 'Format'), $$('.s-signup__row dt', card()!).map((d) => d.textContent).join(','))
      check('next: See a real report', card()!.querySelector('.s-signup__next-h')?.textContent === 'See a real report.', card()!.querySelector('.s-signup__next-h')?.textContent ?? '')
    } else if (name === 'agenciesblank') {
      await signUp('maya@northwind-labs.co.uk', null)
      check('a blank store is a waitlist sign up', titleText() === 'You’re on the list.', titleText())
      check('the reader is still known', card()!.querySelector('.s-signup__for')?.textContent?.startsWith('For agencies.') === true && !stepIds().includes('reader'))
      check('the format is still asked, in place of the first job', stepIds().join(',') === 'name,page,A2,A3,A4,note', stepIds().join(','))
      await done()
      check('the thank you is the shared one', /^Thanks, ?\S*/.test(titleText()) || titleText() === 'Thanks. That’s everything.', titleText())
      check('next: the free report, inline', card()!.querySelector('.s-signup__next-h')?.textContent === 'Pick a client. See what their customers get.', card()!.querySelector('.s-signup__next-h')?.textContent ?? '')
    } else if (name === 'verify' || name === 'verifyblank') {
      await signUp('maya@northwind-labs.co.uk', name === 'verify' ? 'help.client-store.example/chat' : null)
      if (name === 'verify') {
        check('the card says the shared check words', titleText() === 'Got it. We’ll check help.client-store.example.', titleText())
        check('the page does not name a reader: asked first', stepIds().join(',').startsWith('name,reader,verify'), stepIds().join(','))
        await answer('founder')
        await answer('founder')
        check('whose AI agent it is stands in for the first job', legendText() === 'Whose AI agent is it?', legendText())
        await done()
        check('the thank you is the shared report one', lineText().startsWith('Your report comes to maya@northwind-labs.co.uk.'), lineText())
      } else {
        check('a blank AI agent is a waitlist sign up', titleText() === 'You’re on the list.', titleText())
        check('the reader is asked, and there is no ownership step', stepIds().includes('reader') && !stepIds().includes('verify'), stepIds().join(','))
      }
    } else if (name === 'recipe') {
      await signUp('maya@northwind-labs.co.uk')
      check('a waitlist sign up', titleText() === 'You’re on the list.', titleText())
      await answer()
      await answer('sales')
      check('the recipe’s own question stands in for the first job', legendText() === 'Who are your prospects?', legendText())
      check('its square is named for the recipe', !!card()!.querySelector('[data-step="page"]'))
    }
  } catch (err) {
    check('no crash', false, String(err))
  }
  await sleep(500)
  await fetch(`${STUB}/__report`, { method: 'POST', body: JSON.stringify({ page: `${location.pathname} (${name})`, results }) })
}

export function run() {
  const spec = new URLSearchParams(location.search).get('sd')
  if (!spec) return
  /* The page's forms are real forms until it has hydrated, and submitting one before then leaves the page: wait for it. */
  void until(() => !hydrating(), 30000)
    .then(() => sleep(300))
    .then(() => (spec === 'e2e' ? e2e() : spec.startsWith('flow.') ? flow(spec.slice(5)) : demo(spec)))
}
