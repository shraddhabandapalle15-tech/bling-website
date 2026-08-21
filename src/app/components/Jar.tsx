import { useId } from "react";
import { PINK } from "../theme";

/* ─── GLITTER JAR ────────────────────────────────────────────────────────── */
export function Jar({ bg = PINK, lid = "#c890b8", size = 160 }: { bg?: string; lid?: string; size?: number }) {
  const id = useId();
  return (
    <svg viewBox="0 0 160 264" width={size} height={Math.round(size * 1.65)} fill="none">
      <defs><clipPath id={`c-${id}`}><rect x="20" y="88" width="120" height="160" rx="28" /></clipPath></defs>
      <ellipse cx="80" cy="258" rx="50" ry="9" fill="#00000016" />
      {/* body */}
      <rect x="20" y="88" width="120" height="160" rx="28" fill={bg} />
      <rect x="20" y="88" width="44"  height="160" rx="28" fill="white" fillOpacity=".22" clipPath={`url(#c-${id})`} />
      <rect x="20" y="88" width="120" height="44"  rx="28" fill="white" fillOpacity=".18" clipPath={`url(#c-${id})`} />
      <rect x="20" y="204" width="120" height="44" fill={lid} fillOpacity=".35" clipPath={`url(#c-${id})`} />
      {/* label */}
      <rect x="30" y="138" width="100" height="80" rx="18" fill="white" fillOpacity=".68" />
      <rect x="46" y="156" width="68" height="7"  rx="3.5" fill={bg} fillOpacity=".55" />
      <rect x="54" y="170" width="52" height="5"  rx="2.5" fill={bg} fillOpacity=".38" />
      <rect x="42" y="181" width="76" height="5"  rx="2.5" fill={bg} fillOpacity=".28" />
      <rect x="50" y="192" width="60" height="4"  rx="2"   fill={bg} fillOpacity=".20" />
      <circle cx="60"  cy="160" r="2.5" fill={lid} />
      <circle cx="80"  cy="156" r="2"   fill={lid} fillOpacity=".9" />
      <circle cx="100" cy="160" r="2.5" fill={lid} />
      {/* neck */}
      <rect x="36" y="70" width="88" height="22" rx="8" fill={lid} fillOpacity=".75" />
      {/* lid */}
      <rect x="24" y="30" width="112" height="44" rx="20" fill={lid} />
      <rect x="24" y="30" width="112" height="22" rx="11" fill="white" fillOpacity=".22" />
      {[48, 64, 80, 96, 112].map(x => <circle key={x} cx={x} cy="52" r="4.5" fill="white" fillOpacity=".46" />)}
      <rect x="38" y="18" width="84" height="16" rx="8"   fill={lid} fillOpacity=".68" />
      <rect x="60" y="8"  width="40" height="13" rx="6.5" fill={lid} fillOpacity=".50" />
    </svg>
  );
}
