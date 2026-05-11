export type Accent = "cyan" | "amber" | "green" | "red" | "purple" | "slate";

export type Exhibit = {
  id: string;
  title: string;
  purpose: string;
  why: string;
  state: string;
  accessibility: string;
  avoid: string;
  accent: Accent;
};

export const exhibits: Exhibit[] = [
  {
    id: "command-deck",
    title: "Command Deck",
    purpose: "A hero-level operational surface for synthetic system state.",
    why: "It gives complex work a calm cockpit instead of a scattered dashboard.",
    state: "Current focus, system rhythm, and next checkpoint.",
    accessibility: "Uses text labels, strong contrast, and stable layout regions.",
    avoid: "Do not use when a single list or short form would be clearer.",
    accent: "cyan",
  },
  {
    id: "glass-gate-card",
    title: "Glass Gate Card",
    purpose: "A focused card for the decision that matters now.",
    why: "It separates active judgment from passive context.",
    state: "Waiting for review with an amber boundary edge.",
    accessibility: "State is written in text and reinforced by border shape.",
    avoid: "Do not use for low-importance reminders or decorative callouts.",
    accent: "amber",
  },
  {
    id: "system-pulse-strip",
    title: "System Pulse Strip",
    purpose: "A compact rail for semantic status snapshots.",
    why: "It keeps state visible without turning the page into metrics noise.",
    state: "Active, verified, waiting, blocked, and deferred.",
    accessibility: "Every pulse includes a label and does not rely on color alone.",
    avoid: "Do not use for fake live activity or ornamental counters.",
    accent: "green",
  },
  {
    id: "decision-queue",
    title: "Decision Queue",
    purpose: "A grouped lane for required, next, and optional choices.",
    why: "It makes prioritization visible without creating panic.",
    state: "One required decision, two next choices, one optional note.",
    accessibility: "Priority appears in text, lane title, and position.",
    avoid: "Do not use when the user cannot act on the choices.",
    accent: "amber",
  },
  {
    id: "active-road-rail",
    title: "Active Road Rail",
    purpose: "A timeline rail for done, now, and next states.",
    why: "It makes progress and sequence readable at a glance.",
    state: "Three completed nodes, one active node, two next nodes.",
    accessibility: "Node state is exposed through labels and text, not just motion.",
    avoid: "Do not use when order does not matter.",
    accent: "cyan",
  },
  {
    id: "signal-node-map",
    title: "Signal Node Map",
    purpose: "An abstract map of connected signals and source relationships.",
    why: "It makes relationships feel structured without exposing private logic.",
    state: "One active node with quiet supporting nodes.",
    accessibility: "Includes a text summary and hover is not required for meaning.",
    avoid: "Do not use as a substitute for precise data tables.",
    accent: "purple",
  },
  {
    id: "blackglass-button",
    title: "Blackglass Button",
    purpose: "A functional glass control with tactile press feedback.",
    why: "It proves glass can support interaction instead of only decoration.",
    state: "Default, hover, focus, and pressed surface response.",
    accessibility: "Uses a real button element with visible focus state.",
    avoid: "Do not use when the action is destructive or unclear.",
    accent: "cyan",
  },
  {
    id: "trust-surface-card",
    title: "Trust Surface Card",
    purpose: "A surface for source, confidence, and explanation cues.",
    why: "It makes trust visible before action is requested.",
    state: "Verified synthetic source with calm confidence language.",
    accessibility: "Confidence is written plainly and paired with an explanation.",
    avoid: "Do not use to overstate certainty.",
    accent: "green",
  },
  {
    id: "timeline-event-rail",
    title: "Timeline Event Rail",
    purpose: "A longitudinal rail for clustered events and context bands.",
    why: "It shows what changed, when, and why it matters now.",
    state: "Past cluster, current focus, and next checkpoint.",
    accessibility: "Events include dates, labels, and static ordering.",
    avoid: "Do not use for unrelated items with no time relationship.",
    accent: "slate",
  },
  {
    id: "boundary-panel",
    title: "Boundary Panel",
    purpose: "A calm blocked-state panel for hard limits.",
    why: "It makes a stop condition feel clear without alarmist copy.",
    state: "Blocked with a red boundary edge and concise next step.",
    accessibility: "The blocked state appears in heading, copy, and border.",
    avoid: "Do not use for warnings that are only stylistic.",
    accent: "red",
  },
];

export const exhibitById = Object.fromEntries(
  exhibits.map((exhibit) => [exhibit.id, exhibit]),
) as Record<string, Exhibit>;
