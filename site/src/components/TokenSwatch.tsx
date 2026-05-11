type TokenSwatchProps = {
  name: string;
  value: string;
  role: string;
  usage: string;
};

export default function TokenSwatch({ name, value, role, usage }: TokenSwatchProps) {
  return (
    <div className="token-swatch">
      <span className="swatch" style={{ background: value }} aria-hidden="true" />
      <div>
        <strong>{name}</strong>
        <p>{role}</p>
      </div>
      <em>{usage}</em>
    </div>
  );
}
