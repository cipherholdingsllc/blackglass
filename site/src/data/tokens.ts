export const colorTokens = [
  { name: "color.bg.blackglass", value: "#030507", role: "root black", usage: "page" },
  { name: "color.bg.obsidian", value: "#080b10", role: "primary depth", usage: "base" },
  { name: "color.surface.graphite", value: "#121821", role: "quiet panel", usage: "cards" },
  { name: "color.surface.glass", value: "rgba(26, 34, 46, 0.72)", role: "functional glass", usage: "focus" },
  { name: "color.text.primary", value: "#f4efe3", role: "ivory text", usage: "copy" },
  { name: "color.text.muted", value: "#9ca8b7", role: "subdued copy", usage: "support" },
  { name: "color.signal.cyan", value: "#4bd3ff", role: "active signal", usage: "focus" },
  { name: "color.signal.green", value: "#77e6a6", role: "verified", usage: "trust" },
  { name: "color.signal.amber", value: "#f4b95f", role: "decision", usage: "review" },
  { name: "color.signal.red", value: "#ff6b6b", role: "boundary", usage: "blocked" },
  { name: "color.signal.purple", value: "#b79cff", role: "abstract", usage: "system" },
  { name: "color.signal.slate", value: "#718096", role: "deferred", usage: "quiet" },
];

export const glassTiers = [
  {
    tier: "Whisper",
    purpose: "Quiet separation",
    use: "background depth, rails, secondary context",
    avoid: "primary decisions or dense reading surfaces",
  },
  {
    tier: "Present",
    purpose: "Primary exhibit surface",
    use: "cards, palettes, artifact panels",
    avoid: "every small metric or repeated list row",
  },
  {
    tier: "Prominent",
    purpose: "Active decision or focus",
    use: "gates, focused controls, boundary moments",
    avoid: "idle decoration or fake urgency",
  },
];
