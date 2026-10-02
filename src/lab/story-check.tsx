import { How } from '../components/sections/How'
import { Gap } from '../components/sections/Gap'
import { Jobs } from '../components/sections/Jobs'
import { Outcomes } from '../components/sections/Outcomes'
import { Kinds } from '../components/sections/Kinds'
import { page as home } from '../content/pages/home'
import { page as agencies } from '../content/pages/agencies'

/* Hydration check: an inline script, run before React hydrates, prints every console error and warning in a fixed
   bar at the top of the page, so a screenshot shows whether the prerendered sections hydrate cleanly. */
const hook = `(function(){var out=[];function show(){var b=document.getElementById('lab-errs');if(!b){b=document.createElement('pre');b.id='lab-errs';b.style.cssText='position:fixed;top:0;left:0;right:0;z-index:9999;margin:0;padding:8px;max-height:50vh;overflow:auto;font:12px/1.4 monospace;white-space:pre-wrap;background:#300;color:#fbb';document.body.appendChild(b)}b.textContent=out.join('\\n\\n')}
['error','warn'].forEach(function(k){var o=console[k];console[k]=function(){out.push(k+': '+[].map.call(arguments,function(a){return a&&a.stack?a.stack.split('\\n').slice(0,3).join(' '):String(a)}).join(' ').slice(0,600));show();o.apply(console,arguments)}});
window.addEventListener('error',function(e){out.push('onerror: '+e.message);show()});
setTimeout(function(){out.push('checked: '+out.length+' issues');show()},3000)})()`

export default function StoryCheckLab() {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: hook }} />
      <How how={home.how} />
      <Gap gap={home.gap} />
      {home.jobs && <Jobs jobs={home.jobs} />}
      {agencies.outcomes && <Outcomes outcomes={agencies.outcomes} />}
      {agencies.kinds && <Kinds kinds={agencies.kinds} />}
    </>
  )
}
