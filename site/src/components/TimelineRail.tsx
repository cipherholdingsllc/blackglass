const events = [
  { date: "01", title: "Pattern framed", copy: "Job before polish.", tone: "slate" },
  { date: "02", title: "Token pass", copy: "State gets a semantic rail.", tone: "green" },
  { date: "03", title: "Gallery review", copy: "Artifacts become inspectable.", tone: "cyan" },
  { date: "Now", title: "Capture gate", copy: "Screenshot-ready surface.", tone: "amber" },
];

export default function TimelineRail() {
  return (
    <ol className="timeline-rail" aria-label="Timeline Event Rail exhibit">
      {events.map((event) => (
        <li className={`timeline-event tone-${event.tone}`} key={event.date}>
          <span className="timeline-date">{event.date}</span>
          <strong>{event.title}</strong>
          <p>{event.copy}</p>
        </li>
      ))}
    </ol>
  );
}
