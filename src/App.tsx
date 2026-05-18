import './App.css'

const eventHighlights = [
  {
    label: 'Data',
    value: '22 de dezembro de 2026',
  },
  {
    label: 'Local',
    value: 'Sagres Campo Pequeno, Lisboa',
  },
  {
    label: 'Formato',
    value: 'Gala especial de Mixed Martial Arts',
  },
]

const featureCards = [
  {
    title: 'Combates de alto nível',
    text: 'Atletas da Margem Sul e de todo o país disputam vitórias, cinturões e um lugar na história do MMA português.',
  },
  {
    title: 'Produção cuidada',
    text: 'Uma experiência de gala preparada para elevar a energia do octógono a um dos palcos mais emblemáticos de Portugal.',
  },
  {
    title: 'Espírito Margem Sul',
    text: 'A MSC chega a Lisboa com ambição, identidade e a força de uma comunidade que quer ver o MMA nacional crescer.',
  },
]

function App() {
  return (
    <main className="site-shell">
      <header className="topbar" aria-label="Navegação principal">
        <a className="brand" href="#inicio" aria-label="MSC Championship 2026">
          <span className="brand-mark">MSC</span>
          <span className="brand-copy">Championship</span>
        </a>
        <nav className="nav-links">
          <a href="#evento">Evento</a>
          <a href="#local">Local</a>
          <a href="#novidades">Novidades</a>
        </nav>
      </header>

      <section className="hero-section" id="inicio">
        <div className="hero-bg" aria-hidden="true">
          <span className="arena-light arena-light-left" />
          <span className="arena-light arena-light-right" />
          <span className="cage-line cage-line-one" />
          <span className="cage-line cage-line-two" />
          <span className="cage-line cage-line-three" />
          <span className="campo-arc campo-arc-one" />
          <span className="campo-arc campo-arc-two" />
        </div>

        <div className="hero-content">
          <p className="hero-date">22 de Dezembro | Sagres Campo Pequeno, Lisboa</p>
          <h1>
            <span>MSC</span>
            <span>Championship</span>
            <span>2026</span>
          </h1>
          <p className="hero-copy">
            A Margem Sul Championship regressa com uma gala de MMA de alto nível no coração de Lisboa.
            Uma noite de combates intensos, talento nacional e o espírito da Margem Sul num dos palcos
            mais icónicos de Portugal.
          </p>
          <div className="hero-actions" aria-label="Ações principais">
            <a className="button button-primary" href="#novidades">
              Bilhetes em breve
            </a>
            <a className="button button-secondary" href="https://www.instagram.com/msc_championship/" target="_blank" rel="noreferrer">
              Seguir @msc_championship
            </a>
          </div>
        </div>

        <aside className="fight-poster" aria-label="Resumo do evento">
          <div className="poster-ring" aria-hidden="true" />
          <p className="poster-title">Campo Pequeno</p>
          <p className="poster-number">22.12</p>
          <p className="poster-caption">MMA nacional em palco grande</p>
        </aside>
      </section>

      <section className="detail-strip" aria-label="Detalhes rápidos do evento">
        {eventHighlights.map((item) => (
          <article className="detail-item" key={item.label}>
            <span>{item.label}</span>
            <strong>{item.value}</strong>
          </article>
        ))}
      </section>

      <section className="editorial-section" id="evento">
        <div className="section-kicker">Margem Sul Championship</div>
        <div className="editorial-grid">
          <div>
            <h2>O MMA da Margem Sul chega ao Campo Pequeno.</h2>
          </div>
          <div className="editorial-copy">
            <p>
              A MSC regressa em grande estilo com uma edição especial de Mixed Martial Arts no icónico
              Sagres Campo Pequeno, em Lisboa. Depois de edições marcantes em Seixal, esta é a
              oportunidade de viver uma noite explosiva de combates de alto nível.
            </p>
            <p>
              Espere por uma produção cuidada, lutas eletrizantes e um ambiente único num dos recintos
              mais tradicionais de Lisboa. A MSC chega ao Campo Pequeno para mostrar que o MMA da Margem
              Sul tem qualidade e ambição para grandes palcos.
            </p>
          </div>
        </div>
      </section>

      <section className="feature-section" id="local">
        {featureCards.map((card) => (
          <article className="feature-card" key={card.title}>
            <span className="feature-line" aria-hidden="true" />
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </article>
        ))}
      </section>

      <section className="reveal-section" id="novidades">
        <div>
          <h2>Bilhetes e card completo serão revelados em breve.</h2>
          <p>
            Fique atento às redes sociais oficiais para todas as novidades sobre atletas, combates,
            cinturões e abertura de bilheteira.
          </p>
        </div>
        <a className="button button-primary" href="https://www.instagram.com/msc_championship/" target="_blank" rel="noreferrer">
          Seguir @msc_championship
        </a>
      </section>
    </main>
  )
}

export default App
