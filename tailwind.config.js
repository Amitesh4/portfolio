/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.25rem", sm: "2rem" },
    },
    extend: {
      colors: {
        background: "hsl(var(--background) / <alpha-value>)",
        foreground: "hsl(var(--foreground) / <alpha-value>)",
        card: "hsl(var(--card) / <alpha-value>)",
        secondary: "hsl(var(--secondary) / <alpha-value>)",
        muted: "hsl(var(--muted) / <alpha-value>)",
        accent: "hsl(var(--accent) / <alpha-value>)",
        border: "hsl(var(--border) / <alpha-value>)",
        input: "hsl(var(--input) / <alpha-value>)",
        primary: "hsl(var(--primary) / <alpha-value>)",
        signal: "hsl(var(--signal) / <alpha-value>)",
        amber: "hsl(var(--amber) / <alpha-value>)",
        danger: "hsl(var(--danger) / <alpha-value>)",
        mutedForeground: "hsl(var(--muted-foreground) / <alpha-value>)",
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', "Inter", "system-ui", "sans-serif"],
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "SFMono-Regular", "monospace"],
        hand: ["Caveat", '"Segoe Script"', "cursive"],
      },
      maxWidth: {
        content: "76rem",
      },
      borderRadius: {
        lg: "0.75rem",
        xl: "1rem",
        "2xl": "1.25rem",
      },
      boxShadow: {
        card: "0 1px 2px rgba(16,18,40,.04), 0 14px 34px -18px rgba(16,18,40,.22)",
        dock: "0 1px 2px rgba(10,12,30,.06), 0 18px 44px -16px rgba(10,12,30,.30)",
        pop: "0 24px 60px -20px rgba(10,12,30,.45)",
        note: "0 1px 1px rgba(0,0,0,.08), 0 14px 22px -12px rgba(0,0,0,.35)",
      },
      letterSpacing: {
        label: "0.16em",
        wider2: "0.18em",
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "mark-in": {
          from: { backgroundSize: "0% 38%" },
          to: { backgroundSize: "100% 38%" },
        },
        caret: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        "pulse-dot": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: ".45", transform: "scale(.82)" },
        },
        "scan": {
          from: { transform: "translateX(-12%)" },
          to: { transform: "translateX(112%)" },
        },
        dash: {
          to: { strokeDashoffset: "0" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        "fade-up": "fade-up .7s cubic-bezier(.16,1,.3,1) both",
        "fade-in": "fade-in .8s ease both",
        "mark-in": "mark-in .9s cubic-bezier(.16,1,.3,1) .35s both",
        caret: "caret 1.05s steps(1) infinite",
        "pulse-dot": "pulse-dot 2.4s ease-in-out infinite",
        scan: "scan 4.5s linear infinite",
        dash: "dash 2.4s ease forwards",
        "float-slow": "float-slow 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
