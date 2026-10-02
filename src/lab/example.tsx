import { AppScreen } from '../components/AppScreen'

/* An example lab page: copy it, render your sections with the real content, build with VITE_LAB=1, open /lab/NAME. */
export default function ExampleLab() {
  return (
    <section className="s-section">
      <div className="s-wrap" style={{ maxWidth: 900 }}>
        <AppScreen name="board" />
      </div>
    </section>
  )
}
