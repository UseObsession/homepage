/* Describe your own job (23 Nov 2026, Seun: "they can type or build blueprint that works for them ... infuse in home page
   and in the team page and in the blueprint page intelligently"; plan in _research/home/own-blueprint-23nov/PLAN.md).
   One picture, reused on Home, /no-code and /blueprints (components/describe/DescribeJob): a plain sentence types itself,
   the pointer presses the button, and each phrase becomes a field of a blueprint, lit in the sentence as it fills in;
   then an agent spins up with its own pieces (Seun: "no matter their role or idea these agents are generalised ... the
   agents have personas, the pieces ... we just spin it up for them to run it"), the blueprint is ready and its first
   result lands.

   The promise is what the site already says ("Change any of it, or bring your own job." on every blueprint page) and
   what the sign-up does: we set the job up as a blueprint for you. Never "instant" or "AI builds it" until James
   confirms the product does that. Each example is a job the pieces do today; none pays, gets round a check or calls
   anyone who didn't give the business their number. Smallest reader last. */

export type DescribeField = { label: string; value: string; phrase: string }
export type DescribeExample = {
  tab: string
  sentence: string
  fields: DescribeField[]
  name: string
  /* The pieces its agent gets, lit in turn as it spins up. */
  pieces: string[]
  result: { where: string; at: string; text: string }
}

export const describe = {
  /* The closing section on /blueprints, and the button every blueprint page adds under "Change any of it, or bring your
     own job." */
  hub: {
    heading: 'Whatever the job, describe it. We spin up an agent to run it.',
    line: 'Whatever your role or idea, write the job in your own words. Every agent already has its own phone number, inbox and browser, so we spin one up and it runs the job for you, at one location or thousands, with no code to write.',
  },
  cta: { label: 'Describe your job', to: '#join' },
  /* Sell what you build (23 Nov 2026, Seun: "they can also sell their blueprints to others ... like Shopify did for
     ecommerce"). The section on /blueprints at #sell, which the guides link to. It names no share and no payout date
     until James confirms how builders are paid. */
  sell: {
    heading: 'Sell the blueprints you build.',
    line: 'A job that works for you can work for a thousand other teams. Publish it as a blueprint, and every team that runs it uses its own plan, its own agents and its own event log.',
    steps: [
      { k: 'Build', t: 'Describe the job in plain words, or build it on the API.' },
      { k: 'Publish', t: 'Other teams find it beside ours and run it on their own plan.' },
      { k: 'Get paid', t: 'You’re paid when they run it, and you can run it for your own clients under your brand.' },
    ],
    cta: { label: 'Start free', to: '#join' },
    brand: { label: 'Run blueprints under your brand', to: '/agencies' },
  },
  crumb: ['Blueprints', 'New blueprint'] as [string, string],
  prompt: 'Describe the job',
  button: 'Make it a blueprint',
  ready: 'ready to run',
  agent: 'An agent with its own',
  tabsLabel: 'For example',
  examples: [
    {
      tab: 'Operations',
      sentence: 'Every morning, check our 240 clinics’ booking pages still load the calendar, and text me if one breaks.',
      fields: [
        { label: 'When', value: 'Every morning', phrase: 'Every morning' },
        { label: 'Where', value: '240 clinic booking pages', phrase: 'our 240 clinics’ booking pages' },
        { label: 'Do', value: 'Open each page and check the calendar loads', phrase: 'still load the calendar' },
        { label: 'Results to', value: 'A text to you if one breaks', phrase: 'text me if one breaks' },
      ],
      name: 'Booking page check',
      pieces: ['Browser', 'Phone number'],
      result: { where: 'Text to you', at: '07:04', text: '240 booking pages checked, 2 didn’t load the calendar' },
    },
    {
      tab: 'Finance',
      sentence: 'Every Friday, download new invoices from our 120 supplier portals and add them to the finance sheet.',
      fields: [
        { label: 'When', value: 'Every Friday', phrase: 'Every Friday' },
        { label: 'Do', value: 'Download every new invoice', phrase: 'download new invoices' },
        { label: 'Where', value: '120 supplier portals', phrase: 'our 120 supplier portals' },
        { label: 'Results to', value: 'The finance sheet', phrase: 'the finance sheet' },
      ],
      name: 'Supplier invoice run',
      pieces: ['Browser', 'Inbox'],
      result: { where: 'Google Sheets · Finance', at: 'Fri 17:00', text: '1,460 invoices added, none missed' },
    },
    {
      tab: 'Freelancer',
      sentence: 'Each Monday, check my 20 client stores send their welcome email, and email me any that don’t.',
      fields: [
        { label: 'When', value: 'Each Monday', phrase: 'Each Monday' },
        { label: 'Where', value: '20 client stores', phrase: 'my 20 client stores' },
        { label: 'Do', value: 'Sign up as a new customer and wait for the welcome email', phrase: 'send their welcome email' },
        { label: 'Results to', value: 'An email to you, with each screenshot', phrase: 'email me any that don’t' },
      ],
      name: 'Client welcome check',
      pieces: ['Inbox', 'Browser'],
      result: { where: 'Email to you', at: 'Mon 09:00', text: 'Client 14 sent no welcome email, screenshot attached' },
    },
  ] as DescribeExample[],
}
