import type { ReactNode } from 'react'
import './james/styles/tokens.css'
import './james/styles/base.css'
import './james/styles/layout.css'
import './JamesPage.css'

/* The root of one of James's use case pages (src/legacy/james, his files as he built them). His global styles (his
   tokens, his base and layout, and the classes his components share: .wrap, .section, .btn, .hero ...) were written for a
   site of his own; scripts/scope-css.mjs scopes them under this class when the site is built, so they style what is
   inside this element and nothing else. His tokens follow the site's own light and dark switch (<html data-theme>), as
   they did on his. */
export function JamesPage({ children }: { children: ReactNode }) {
  return <div className="james">{children}</div>
}
