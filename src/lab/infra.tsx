import { entries } from '../content/meta'

/* The infrastructure lab: every share image the build made (scripts/og.mjs), at half size, to look them over in 1 view. */
export default function InfraLab() {
  return (
    <section className="s-section">
      <div className="s-wrap s-wrap--wide" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(420px, 1fr))', gap: 24 }}>
        {entries.map((e) => (
          <figure key={e.meta.path} style={{ margin: 0, display: 'grid', gap: 8 }}>
            <img src={e.meta.ogImage} width={1200} height={630} alt={e.headline} style={{ width: '100%', height: 'auto', borderRadius: 14 }} />
            <figcaption style={{ font: 'var(--ob-type-caption)', color: 'var(--ob-text-3)' }}>
              {e.meta.path} · {e.meta.title}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
