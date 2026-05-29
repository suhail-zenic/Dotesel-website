/** Subtle animated mesh — fixed behind all pages */
export function AmbientBackground() {
  return (
    <div className="ambient-root pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      <div className="ambient-orb ambient-orb-a" />
      <div className="ambient-orb ambient-orb-b" />
      <div className="ambient-orb ambient-orb-c" />
      <div className="ambient-grid absolute inset-0" />
      <div className="ambient-noise absolute inset-0 opacity-[0.035]" />
    </div>
  )
}
