export function Mark({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="6 6 88 88" aria-hidden="true">
      <path fill="currentColor" d="M88.458 39A40 40 0 1 1 61 11.542V26.442A26 26 0 1 0 73.558 39ZM66 14h20v20H66Z" />
    </svg>
  )
}

export function Logo() {
  return (
    <span className="logo">
      <Mark />
      <span className="logo-word">obsession</span>
    </span>
  )
}
