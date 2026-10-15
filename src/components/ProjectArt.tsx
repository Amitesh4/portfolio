import type { ProjectVisual } from "../data/projects";

const C = {
  ink: "#15161E",
  muted: "#5F616D",
  border: "#DEDED8",
  card: "#FFFFFF",
  bg: "#F9F9F7",
  secondary: "#EFEFEB",
  primary: "#2A3BF6",
  signal: "#2A8452",
  amber: "#B56C30",
  danger: "#C73030",
};

function Svg({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <svg
      viewBox="0 0 420 264"
      preserveAspectRatio="xMidYMid slice"
      className="h-full w-full"
      role="img"
      aria-label={label}
    >
      {children}
    </svg>
  );
}

function Frame({ tag, children }: { tag: string; children: React.ReactNode }) {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-xl border border-border bg-secondary/50">
      <div className="absolute inset-0 bg-grid-flat opacity-60" aria-hidden />
      <div className="absolute left-3 top-3 z-10 rounded-md border border-border bg-card/90 px-2 py-1 font-mono text-[9px] uppercase tracking-label text-mutedForeground backdrop-blur">
        {tag}
      </div>
      <div className="relative h-full w-full">{children}</div>
    </div>
  );
}

function GhostApArt() {
  return (
    <Frame tag="risk engine">
      <Svg label="Illustration of GhostAP comparing two access points advertising the same SSID with an explainable risk score">
        <g fontFamily="JetBrains Mono, monospace">
          {[
            { y: 54, ssid: "MVSR-WiFi", bssid: "A4:2B:9F:…:10", sec: "WPA2 · ch 6", tone: C.signal, note: "known" },
            { y: 140, ssid: "MVSR-WiFi", bssid: "8E:11:0C:…:C3", sec: "OPEN · ch 11", tone: C.amber, note: "suspect" },
          ].map((ap) => (
            <g key={ap.y}>
              <rect x="24" y={ap.y} width="196" height="72" rx="10" fill={C.card} stroke={C.border} />
              <circle cx="42" cy={ap.y + 22} r="4" fill={ap.tone} />
              <text x="54" y={ap.y + 26} fontSize="11" fontWeight="600" fill={C.ink}>
                {ap.ssid}
              </text>
              <text x="40" y={ap.y + 44} fontSize="8.5" fill={C.muted}>
                {ap.bssid}
              </text>
              <text x="40" y={ap.y + 58} fontSize="8.5" fill={ap.tone}>
                {ap.sec}
              </text>
              <text x="196" y={ap.y + 26} fontSize="7.5" textAnchor="end" fill={C.muted} letterSpacing="1">
                {ap.note.toUpperCase()}
              </text>
            </g>
          ))}
          <path
            d="M230 90 l10 -16 l10 16 z"
            fill="none"
            stroke={C.danger}
            strokeWidth="1.4"
            transform="translate(-6,0)"
          />
        </g>

        <g>
          <rect x="248" y="42" width="148" height="180" rx="12" fill={C.card} stroke={C.border} />
          <text x="264" y="66" fontFamily="JetBrains Mono, monospace" fontSize="8" fill={C.muted} letterSpacing="1.5">
            RISK SCORE
          </text>
          <text x="264" y="106" fontFamily="Bricolage Grotesque, sans-serif" fontSize="40" fontWeight="700" fill={C.danger}>
            74
          </text>
          <text x="312" y="106" fontFamily="JetBrains Mono, monospace" fontSize="10" fill={C.muted}>
            /100
          </text>
          <rect x="264" y="120" width="116" height="6" rx="3" fill={C.secondary} />
          <rect x="264" y="120" width="86" height="6" rx="3" fill={C.danger} />
          {[
            { k: "ssid", w: 34, v: "+34" },
            { k: "bssid", w: 22, v: "+22" },
            { k: "security", w: 40, v: "+40" },
            { k: "rssi", w: 14, v: "+14" },
          ].map((row, i) => (
            <g key={row.k} fontFamily="JetBrains Mono, monospace" fontSize="8">
              <text x="264" y={150 + i * 16} fill={C.muted}>
                {row.k}
              </text>
              <rect x="316" y={144 + i * 16} width={row.w} height="5" rx="2.5" fill={C.primary} opacity={0.85} />
              <text x="396" y={150 + i * 16} textAnchor="end" fill={C.ink}>
                {row.v}
              </text>
            </g>
          ))}
          <text x="264" y="212" fontFamily="JetBrains Mono, monospace" fontSize="7.5" fill={C.muted} letterSpacing="1">
            EXPLAINABLE ALERT
          </text>
        </g>
      </Svg>
    </Frame>
  );
}

function ZeroTrustArt() {
  return (
    <Frame tag="control plane">
      <Svg label="Illustration of an SDN topology where a failed link is detected and traffic is rerouted along a verified, trusted path">
        {/* edges */}
        <path d="M210 58 L120 122" stroke={C.border} strokeWidth="1.5" />
        <path d="M210 58 L300 122" stroke={C.border} strokeWidth="1.5" />
        <path d="M120 122 L90 196" stroke={C.border} strokeWidth="1.5" />
        <path d="M300 122 L330 196" stroke="#C73030" strokeWidth="1.5" strokeDasharray="4 4" />
        <path d="M120 122 Q210 150 300 122" fill="none" stroke={C.signal} strokeWidth="1.8" />
        <path d="M120 122 L210 196" fill="none" stroke={C.signal} strokeWidth="1.6" strokeDasharray="5 4" />

        {/* controller */}
        <rect x="150" y="34" width="120" height="30" rx="8" fill={C.ink} />
        <text x="210" y="53" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="9" fill={C.bg} letterSpacing="1">
          RYU CONTROLLER
        </text>
        <circle cx="210" cy="70" r="6" fill={C.primary} opacity="0.25" className="animate-pulse-dot" />

        {/* switches */}
        {[
          { x: 120, y: 122, label: "sw-1" },
          { x: 300, y: 122, label: "sw-2" },
        ].map((s) => (
          <g key={s.label}>
            <circle cx={s.x} cy={s.y} r="12" fill={C.card} stroke={C.primary} strokeWidth="1.5" />
            <text x={s.x} y={s.y + 24} textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="7.5" fill={C.muted}>
              {s.label}
            </text>
          </g>
        ))}

        {/* hosts */}
        <circle cx="90" cy="196" r="9" fill={C.primary} />
        <circle cx="210" cy="196" r="9" fill={C.primary} />
        <circle cx="330" cy="196" r="9" fill={C.card} stroke={C.danger} strokeWidth="1.5" />
        <text x="330" y="222" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="7.5" fill={C.danger}>
          isolated
        </text>
        <text x="90" y="222" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="7.5" fill={C.muted}>
          host-a
        </text>

        {/* trust badge */}
        <g transform="translate(24,30)">
          <rect x="0" y="0" width="92" height="24" rx="12" fill={C.signal} fillOpacity="0.12" />
          <text x="12" y="16" fontFamily="JetBrains Mono, monospace" fontSize="8" fill={C.signal} letterSpacing="1">
            ✓ TRUST OK
          </text>
        </g>
        <g fontFamily="JetBrains Mono, monospace" fontSize="7.5" fill={C.muted} letterSpacing="1">
          <text x="300" y="36">PREDICT</text>
          <text x="300" y="48">REROUTE</text>
        </g>
      </Svg>
    </Frame>
  );
}

function BloodArt() {
  return (
    <Frame tag="eligibility">
      <Svg label="Illustration of the blood donation system showing donor matching and an ML eligibility check">
        <g transform="translate(28,44)">
          <path d="M40 0 C40 0 12 34 12 52 A28 28 0 0 0 68 52 C68 34 40 0 40 0 Z" fill={C.danger} opacity="0.9" />
          <text x="40" y="58" textAnchor="middle" fontFamily="Bricolage Grotesque, sans-serif" fontSize="16" fontWeight="700" fill={C.bg}>
            O−
          </text>
        </g>
        <g fontFamily="JetBrains Mono, monospace" fontSize="8" fill={C.muted}>
          <text x="28" y="160">DONOR</text>
          <text x="28" y="174" fill={C.ink} fontSize="9">
            eligible · 92%
          </text>
        </g>

        {[
          { x: 148, y: 60, label: "Matching", tone: C.primary },
          { x: 148, y: 104, label: "Validation", tone: C.signal },
          { x: 148, y: 148, label: "History", tone: C.amber },
        ].map((row, i) => (
          <g key={row.label}>
            <rect x={row.x} y={row.y} width="236" height="34" rx="8" fill={C.card} stroke={C.border} />
            <circle cx={row.x + 18} cy={row.y + 17} r="4" fill={row.tone} />
            <text x={row.x + 34} y={row.y + 21} fontFamily="Inter, sans-serif" fontSize="10" fill={C.ink}>
              {row.label}
            </text>
            <rect x={row.x + 150} y={row.y + 13} width="70" height="6" rx="3" fill={C.secondary} />
            <rect x={row.x + 150} y={row.y + 13} width={30 + i * 16} height="6" rx="3" fill={row.tone} opacity="0.8" />
          </g>
        ))}

        <g fontFamily="JetBrains Mono, monospace" fontSize="7.5" fill={C.muted} letterSpacing="1">
          <text x="148" y="206">RULE-BASED MATCHING · ML ELIGIBILITY</text>
        </g>
      </Svg>
    </Frame>
  );
}

function BankingArt() {
  return (
    <Frame tag="rest api">
      <Svg label="Illustration of the banking system showing accounts and transactions over a REST API">
        <rect x="26" y="46" width="150" height="172" rx="12" fill={C.ink} />
        <rect x="42" y="66" width="26" height="18" rx="4" fill={C.amber} opacity="0.85" />
        <text x="42" y="112" fontFamily="JetBrains Mono, monospace" fontSize="11" fill={C.bg} letterSpacing="2">
          4021 •••• 7734
        </text>
        <text x="42" y="150" fontFamily="JetBrains Mono, monospace" fontSize="8" fill="#9CA3AF">
          BALANCE
        </text>
        <text x="42" y="176" fontFamily="Bricolage Grotesque, sans-serif" fontSize="24" fontWeight="700" fill={C.bg}>
          ₹ 84,200
        </text>
        <text x="42" y="202" fontFamily="JetBrains Mono, monospace" fontSize="7.5" fill="#9CA3AF" letterSpacing="1">
          SPRING BOOT 2.7
        </text>

        <g fontFamily="JetBrains Mono, monospace" fontSize="8.5">
          {[
            { y: 60, d: "DEPOSIT", a: "+2,500" },
            { y: 100, d: "TRANSFER", a: "-1,200" },
            { y: 140, d: "WITHDRAW", a: "-800" },
            { y: 180, d: "DEPOSIT", a: "+5,000" },
          ].map((r, i) => (
            <g key={r.y}>
              <rect x="200" y={r.y} width="188" height="30" rx="7" fill={C.card} stroke={C.border} />
              <circle cx="218" cy={r.y + 15} r="3.5" fill={i % 2 === 0 ? C.signal : C.danger} />
              <text x="230" y={r.y + 19} fill={C.muted}>
                {r.d}
              </text>
              <text
                x="374"
                y={r.y + 19}
                textAnchor="end"
                fill={i % 2 === 0 ? C.signal : C.ink}
              >
                {r.a}
              </text>
            </g>
          ))}
        </g>
        <text x="200" y="228" fontFamily="JetBrains Mono, monospace" fontSize="7.5" fill={C.muted} letterSpacing="1">
          MYSQL · REST ENDPOINTS
        </text>
      </Svg>
    </Frame>
  );
}

function GrievanceArt() {
  return (
    <Frame tag="agent flow">
      <Svg label="Illustration of an AI grievance pipeline routing complaints to departments">
        {[
          { y: 52, label: "pothole on main road…", tag: "roads", tone: C.amber },
          { y: 96, label: "street light not working…", tag: "power", tone: C.primary },
          { y: 140, label: "garbage not collected…", tag: "sanitation", tone: C.signal },
        ].map((row) => (
          <g key={row.y}>
            <rect x="26" y={row.y} width="200" height="34" rx="8" fill={C.card} stroke={C.border} />
            <text x="40" y={row.y + 21} fontFamily="Inter, sans-serif" fontSize="9.5" fill={C.ink}>
              {row.label}
            </text>
            <path
              d={`M226 ${row.y + 17} L268 ${row.y + 17}`}
              stroke={row.tone}
              strokeWidth="1.6"
              markerEnd="url(#gv-arrow)"
            />
            <rect x="276" y={row.y} width="118" height="34" rx="8" fill={row.tone} fillOpacity="0.1" stroke={row.tone} strokeOpacity="0.35" />
            <text x="292" y={row.y + 21} fontFamily="JetBrains Mono, monospace" fontSize="8.5" fill={row.tone} letterSpacing="1">
              {row.tag.toUpperCase()}
            </text>
          </g>
        ))}
        <defs>
          <marker id="gv-arrow" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
            <path d="M0 0 L6 3 L0 6 z" fill={C.muted} />
          </marker>
        </defs>
        <text x="276" y="196" fontFamily="JetBrains Mono, monospace" fontSize="7.5" fill={C.muted} letterSpacing="1">
          CLASSIFY · PRIORITISE · ROUTE
        </text>
      </Svg>
    </Frame>
  );
}

export function ProjectArt({ visual }: { visual: ProjectVisual }) {
  switch (visual) {
    case "ghostap":
      return <GhostApArt />;
    case "zerotrust":
      return <ZeroTrustArt />;
    case "blood":
      return <BloodArt />;
    case "banking":
      return <BankingArt />;
    case "grievance":
      return <GrievanceArt />;
    default:
      return null;
  }
}
