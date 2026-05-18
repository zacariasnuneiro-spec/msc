import './App.css'
import arenaHero from './assets/msc-arena-hero.png'
import instagramAvatar from './assets/msc-instagram-avatar.jpg'
import posterArena from './assets/msc-poster-arena.jpg'
import merchAccessories from './assets/merch-acessorios-training.jpg'
import merchShorts from './assets/merch-calcoes-combate.jpg'
import merchJersey from './assets/merch-camisola-performance.jpg'
import merchHoodie from './assets/merch-hoodie-walkout.jpg'

const eventHighlights = [
  {
    label: 'Data',
    value: '22 de dezembro de 2026',
    short: '22.12.26',
  },
  {
    label: 'Local',
    value: 'Sagres Campo Pequeno, Lisboa',
    short: 'Lisboa',
  },
  {
    label: 'Formato',
    value: 'Gala especial de Mixed Martial Arts',
    short: 'MMA',
  },
]

const featureCards = [
  {
    number: '01',
    title: 'Combates de alto nível',
    text: 'Atletas da Margem Sul e de todo o país disputam vitórias, cinturões e um lugar na história do MMA português.',
  },
  {
    number: '02',
    title: 'Produção cuidada',
    text: 'Uma experiência de gala preparada para elevar a energia do octógono a um dos palcos mais emblemáticos de Portugal.',
  },
  {
    number: '03',
    title: 'Espírito Margem Sul',
    text: 'A MSC chega a Lisboa com ambição, identidade e a força de uma comunidade que quer ver o MMA nacional crescer.',
  },
]

const merchItems = [
  {
    category: 'Performance',
    title: 'Camisola técnica MSC',
    text: 'Malha preta de combate, painéis octogonais, detalhes dourados e acentos vermelhos para noite de evento.',
    image: merchJersey,
  },
  {
    category: 'Fightwear',
    title: 'Calções de combate',
    text: 'Corte atlético, cintura reforçada e grafismo premium pensado para treino, walkout e lifestyle.',
    image: merchShorts,
  },
  {
    category: 'Walkout',
    title: 'Hoodie arena',
    text: 'Peça pesada de entrada com interior vermelho, fecho dourado e textura tonal inspirada no octógono.',
    image: merchHoodie,
  },
  {
    category: 'Training pack',
    title: 'Acessórios oficiais',
    text: 'Pack visual com boné, ligaduras e luvas de treino para completar a linha MSC Championship 2026.',
    image: merchAccessories,
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
          <a href="#merch">Merch</a>
          <a href="#local">Local</a>
          <a href="#novidades">Novidades</a>
        </nav>
      </header>

      <section className="hero-section" id="inicio">
        <img className="hero-image" src={arenaHero} alt="" aria-hidden="true" />
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
          <div className="social-proof">
            <img src={instagramAvatar} alt="MARGEM SUL CAGE no Instagram" />
            <div>
              <span>@msc_championship</span>
              <strong>MARGEM SUL CAGE · 7.671 seguidores</strong>
            </div>
          </div>
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
              <span>Bilhetes em breve</span>
              <span className="button-icon" aria-hidden="true">→</span>
            </a>
            <a className="button button-secondary" href="https://www.instagram.com/msc_championship/" target="_blank" rel="noreferrer">
              <span>Seguir @msc_championship</span>
              <span className="button-icon" aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <aside className="fight-poster" aria-label="Resumo visual do evento">
          <img className="poster-photo" src={posterArena} alt="" aria-hidden="true" />
          <div className="poster-stage">
            <div className="poster-metric poster-metric-date">
              <span>Data</span>
              <strong>22 Dez</strong>
            </div>
            <div className="poster-metric poster-metric-place">
              <span>Local</span>
              <strong>Lisboa</strong>
            </div>
          </div>
          <div className="poster-glass">
            <p className="poster-eyebrow">Edição especial</p>
            <p className="poster-title">Campo Pequeno</p>
            <p className="poster-number">22.12</p>
            <p className="poster-caption">MMA nacional em palco grande</p>
          </div>
        </aside>
      </section>

      <section className="image-band" aria-label="Ambiente visual MSC Championship">
        <article className="image-feature">
          <img src={arenaHero} alt="Arena circular iluminada para uma gala premium de MMA" />
          <div>
            <span>Lisboa em modo fight night</span>
            <strong>Uma noite desenhada para luz, som, entrada de atletas e octógono em destaque.</strong>
          </div>
        </article>
        <article className="instagram-card">
          <img src={instagramAvatar} alt="Perfil oficial MSC Championship no Instagram" />
          <div>
            <span>Instagram oficial</span>
            <strong>@msc_championship</strong>
            <p>338 publicações · 7.671 seguidores · novidades, atletas e bilhetes em breve.</p>
          </div>
        </article>
      </section>

      <section className="detail-strip" aria-label="Detalhes rápidos do evento">
        {eventHighlights.map((item) => (
          <article className="detail-item" key={item.label}>
            <div>
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </div>
            <em>{item.short}</em>
          </article>
        ))}
      </section>

      <section className="merch-section" id="merch">
        <div className="merch-header">
          <div>
            <span className="section-kicker">Merchandising oficial</span>
            <h2>Linha MSC 2026 para arena, treino e rua.</h2>
          </div>
          <p>
            Uma coleção visual de edição especial para acompanhar o regresso da MSC ao Campo Pequeno.
            As peças e disponibilidade final serão anunciadas com a abertura de bilheteira.
          </p>
        </div>

        <div className="merch-grid">
          {merchItems.map((item) => (
            <article className="merch-card" key={item.title}>
              <div className="merch-visual">
                <img src={item.image} alt={item.title} />
                <span className="merch-status">Em breve</span>
              </div>
              <div className="merch-copy">
                <span>{item.category}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <a className="card-action" href="https://www.instagram.com/msc_championship/" target="_blank" rel="noreferrer">
                  <span>Ver novidades</span>
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
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
            <div className="feature-card-top">
              <span className="feature-line" aria-hidden="true" />
              <span className="feature-number">{card.number}</span>
            </div>
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
          <span>Seguir @msc_championship</span>
          <span className="button-icon" aria-hidden="true">↗</span>
        </a>
      </section>
    </main>
  )
}

export default App
