export default function BlackglassButton() {
  return (
    <div className="button-demo">
      <button type="button" className="blackglass-control">
        <span className="button-sheen" aria-hidden="true" />
        Commit focus
      </button>
      <p>Functional glass with visible focus, press depth, and restrained edge bloom.</p>
    </div>
  );
}
