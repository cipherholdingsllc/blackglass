const events = [
  { date: "T-03", title: "Pattern framed", tone: "slate" },
  { date: "T-02", title: "Token pass", tone: "green" },
  { date: "T-01", title: "Gallery review", tone: "cyan" },
  { date: "Now", title: "Screenshot gate", tone: "amber" },
];

export default function TimelineRail() {
  return (
    <ol className="timeline-rail" aria-label="Timeline Event Rail exhibit">
      {events.map((event) => (
        <li className={`timeline-event tone-${event.tone}`} key={event.date}>
          <span className="timeline-date">{event.date}</span>
          <strong>{event.title}</strong>
          <p>Context preserved without implying live telemetry.</p>
        </li>
      ))}
    </ol>
  );
}
