import type { Exhibit } from "../data/exhibits";

type ExhibitCardProps = {
  exhibit: Exhibit;
  index: number;
};

export default function ExhibitCard({ exhibit, index }: ExhibitCardProps) {
  return (
    <a className={`exhibit-card accent-${exhibit.accent}`} href={`#${exhibit.id}`}>
      <span className="card-index">{String(index + 1).padStart(2, "0")}</span>
      <h3>{exhibit.title}</h3>
      <p>{exhibit.purpose}</p>
      <span className="card-state">{exhibit.state}</span>
    </a>
  );
}
