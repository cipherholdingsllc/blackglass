import CommandDeck from "./CommandDeck";

export default function Hero() {
  return (
    <header className="hero">
      <div className="hero-copy">
        <p className="eyebrow">Public visual lab</p>
        <h1>Blackglass</h1>
        <p className="hero-line">
          Premium dark interface patterns for complex, signal-heavy software.
        </p>
        <p className="hero-thesis">AI can generate screens. Taste still has to be designed.</p>
        <div className="hero-actions" aria-label="Primary navigation">
          <a href="#exhibits" className="glass-button primary">
            Explore Exhibits
          </a>
          <a href="#thesis" className="glass-button secondary">
            Read the Thesis
          </a>
        </div>
      </div>
      <CommandDeck compact />
    </header>
  );
}
