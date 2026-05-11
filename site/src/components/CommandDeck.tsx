type CommandDeckProps = {
  compact?: boolean;
};

const deckItems = [
  { label: "Focus", value: "Signal Map", state: "Active", tone: "cyan" },
  { label: "Gate", value: "Review Surface", state: "Waiting", tone: "amber" },
  { label: "Trust", value: "Source Check", state: "Verified", tone: "green" },
];

export default function CommandDeck({ compact = false }: CommandDeckProps) {
  return (
    <section className={`command-deck ${compact ? "compact" : ""}`} aria-label="Command Deck exhibit">
      <div className="deck-topline">
        <span>Command Deck</span>
        <span className="mono">synthetic state</span>
      </div>
      <div className="deck-orbit" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div className="deck-grid">
        {deckItems.map((item) => (
          <div className={`deck-tile tone-${item.tone}`} key={item.label}>
            <span>{item.label}</span>
            <strong>{item.value}</strong>
            <em>{item.state}</em>
          </div>
        ))}
      </div>
      <div className="deck-console">
        <span className="mono">next checkpoint</span>
        <strong>Review the active signal before expanding scope.</strong>
      </div>
    </section>
  );
}
