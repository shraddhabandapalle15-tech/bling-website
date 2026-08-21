/* ─── WAVE DIVIDER ───────────────────────────────────────────────────────── */
export function Wave({ from, to, flip = false }: { from: string; to: string; flip?: boolean }) {
  return (
    <div style={{ background: from, lineHeight: 0, margin: "0 -24px" }}>
      <svg viewBox="0 0 1440 72" preserveAspectRatio="none"
        style={{ display: "block", width: "100%", height: 72, transform: flip ? "scaleX(-1)" : "none" }}>
        <path d="M0,36 C240,72 480,0 720,36 C960,72 1200,0 1440,36 L1440,72 L0,72 Z" fill={to} />
      </svg>
    </div>
  );
}
