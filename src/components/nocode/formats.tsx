import type { NoCodeFormat } from '../../content/noCode'

/* The formats a blueprint's results arrive in, as the no-code page draws them: a short name and a 16px line icon each,
   on the site's icon grid (stroke in currentColor). */
export const formatName: Record<NoCodeFormat, string> = {
  slack: 'Slack',
  email: 'Email',
  crm: 'CRM',
  sheet: 'Sheet',
  pdf: 'PDF report',
  assistant: 'AI assistant',
  any: 'Any tool',
}

export function FormatIcon({ id }: { id: NoCodeFormat }) {
  return (
    <svg className="nc-fmt-ic" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
      {id === 'slack' && <path d="M6 2.5v11M10 2.5v11M2.5 6h11M2.5 10h11" />}
      {id === 'email' && (
        <>
          <rect x="2" y="3.5" width="12" height="9" rx="1.5" />
          <path d="m2.5 4.5 5.5 4 5.5-4" />
        </>
      )}
      {id === 'crm' && (
        <>
          <circle cx="8" cy="5.5" r="2.5" />
          <path d="M3 13.5c.8-2.4 2.7-3.6 5-3.6s4.2 1.2 5 3.6" />
        </>
      )}
      {id === 'sheet' && (
        <>
          <rect x="2.5" y="2.5" width="11" height="11" rx="1.5" />
          <path d="M2.5 6.5h11M2.5 10h11M6.5 6.5v7" />
        </>
      )}
      {id === 'pdf' && (
        <>
          <path d="M4 1.8h5.5L12.5 5v9.2H4Z" />
          <path d="M9.5 1.8V5h3M6 8.5h4.5M6 11h4.5" />
        </>
      )}
      {id === 'assistant' && (
        <>
          <path d="M3 4.5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H7.5L4.5 13v-2.6A2 2 0 0 1 3 8.5Z" />
          <path d="M6 6.5h.01M8 6.5h.01M10 6.5h.01" />
        </>
      )}
      {id === 'any' && <path d="M8 3v10M3 8h10" />}
    </svg>
  )
}
