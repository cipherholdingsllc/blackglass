type TokenSwatchProps = {
  name: string;
  value: string;
  role: string;
};

export default function TokenSwatch({ name, value, role }: TokenSwatchProps) {
  return (
    <div className="token-swatch">
      <span className="swatch" style={{ background: value }} aria-hidden="true" />
      <strong>{name}</strong>
      <p>{role}</p>
    </div>
  );
}
