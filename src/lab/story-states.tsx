import { How } from '../components/sections/How'
import { Kinds } from '../components/sections/Kinds'
import { page } from '../content/pages/agencies'

/* Interaction states for a screenshot: after load, a script picks step 2 with a click, moves to step 3 with the down
   arrow (focus ring, chips open, toggle reads Play), and picks the last kind (a kind with no recipes). */
const drive = `setTimeout(function(){
  var tabs=document.querySelectorAll('.s-how-tab'); tabs[1].click();
  setTimeout(function(){ tabs[1].focus(); tabs[1].dispatchEvent(new KeyboardEvent('keydown',{key:'ArrowDown',bubbles:true})); },300);
  var chips=document.querySelectorAll('.s-kinds .ob-chip-input'); chips[chips.length-1].click();
},1500)`

export default function StoryStatesLab() {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: drive }} />
      <How how={page.how} />
      {page.kinds && <Kinds kinds={page.kinds} />}
    </>
  )
}
