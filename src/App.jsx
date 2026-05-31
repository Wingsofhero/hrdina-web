import marianPortrait from './assets/marian-portrait-preview-v2.jpg';

const services = [
  {
    number: '01',
    title: 'Web pre lokálnu prevádzku',
    text: 'Jedna prehľadná stránka, na ktorej zákazník rýchlo nájde vaše služby, otváracie hodiny, telefón a cestu k vám.',
    example: 'Vhodné pre kaviareň, salón, autoservis alebo remeselníka.',
  },
  {
    number: '02',
    title: 'Obsah, fotky a kontakt',
    text: 'Pomôžem vám usporiadať informácie, vybrať fotografie a pripraviť texty tak, aby stránka pôsobila dôveryhodne a zrozumiteľne.',
    example: 'Klikateľný telefón, e-mail, mapa a odkazy na sociálne siete.',
  },
  {
    number: '03',
    title: 'Doména a spustenie',
    text: 'Web pripravím pre mobil aj počítač, nasadím ho na internet a pomôžem s pripojením vašej vlastnej domény.',
    example: 'Od návrhu až po stránku, ktorú môžete poslať zákazníkom.',
  },
];

const audience = [
  'reštaurácie a kaviarne',
  'salóny a wellness',
  'autoservisy',
  'remeselníci',
  'ubytovanie',
  'tréneri a služby',
  'rodinné firmy',
];

const packages = [
  {
    title: 'Jednoduchý štart',
    price: 'od 150 €',
    text: 'Pre prevádzku, ktorá potrebuje byť konečne dohľadateľná online.',
    items: [
      'jednostránkový web',
      'služby, kontakt a otváracie hodiny',
      'mobilná verzia',
      'klikateľný telefón a e-mail',
    ],
  },
  {
    title: 'Web pre prevádzku',
    price: 'od 200 €',
    text: 'Najčastejšia voľba pre lokálny podnik s fotkami a mapou.',
    featured: true,
    items: [
      'všetko zo základného balíka',
      'fotogaléria alebo ponuka služieb',
      'Google mapa a navigácia',
      'pomoc s doménou a spustením',
    ],
  },
  {
    title: 'Web na mieru',
    price: 'od 300 €',
    text: 'Keď potrebujete viac obsahu alebo špecifické riešenie.',
    items: [
      'viac sekcií podľa potreby',
      'individuálna štruktúra a úpravy',
      'rozšírená prezentácia služieb',
      'cena podľa rozsahu zadania',
    ],
  },
];

const process = [
  {
    number: '01',
    title: 'Krátko si zavoláme',
    text: 'Poviete mi, čomu sa venujete, čo už máte pripravené a čo má zákazník na webe nájsť.',
  },
  {
    number: '02',
    title: 'Pripravím návrh',
    text: 'Z vašich informácií, fotografií a kontaktov poskladám prehľadnú stránku pre mobil aj počítač.',
  },
  {
    number: '03',
    title: 'Web spustíme',
    text: 'Doladíme potrebné úpravy, pripojíme doménu a stránku môžete začať používať.',
  },
];

const examples = [
  {
    title: 'Reštaurácia alebo kaviareň',
    text: 'Menu, otváracie hodiny, galéria jedál, telefón a mapa s navigáciou do prevádzky.',
  },
  {
    title: 'Salón alebo wellness',
    text: 'Prehľad služieb, cenník, fotografie priestoru, kontakty a jednoduchá cesta k rezervácii.',
  },
  {
    title: 'Remeselník alebo servis',
    text: 'Ponuka prác, oblasti pôsobenia, ukážky realizácií a výrazné tlačidlo na zavolanie.',
  },
];

function App() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Hrdina Web domov">
          <span className="brand-mark">H</span>
          <span>Hrdina Web</span>
        </a>

        <nav className="site-nav" aria-label="Hlavná navigácia">
          <a href="#sluzby">Služby</a>
          <a href="#priklady">Príklady</a>
          <a href="#cennik">Cenník</a>
          <a href="#kontakt">Kontakt</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero section-shell">
          <div className="hero-content">
            <p className="eyebrow">Weby pre malé slovenské firmy</p>
            <h1>Webstránky pre malé podniky</h1>
            <p className="hero-text">
              Tvorím jednoduché a profesionálne weby pre lokálne prevádzky,
              živnostníkov a rodinné firmy. Také, na ktorých zákazník rýchlo
              nájde to dôležité a vie sa vám hneď ozvať.
            </p>
            <div className="hero-actions" aria-label="Hlavné akcie">
              <a className="button button-primary" href="#priklady">
                Pozrieť príklady
              </a>
              <a className="button button-secondary" href="tel:048070444">
                Zavolať: 048 070 444
              </a>
            </div>
            <dl className="hero-facts" aria-label="Čo získate">
              <div>
                <dt>Mobilná verzia</dt>
                <dd>Web funguje aj na telefóne</dd>
              </div>
              <div>
                <dt>Priamy kontakt</dt>
                <dd>Telefón, e-mail a mapa</dd>
              </div>
              <div>
                <dt>Spustenie</dt>
                <dd>Pomoc s doménou aj nasadením</dd>
              </div>
            </dl>
          </div>

          <figure className="portrait-wrap">
            <img
              className="portrait-photo"
              src={marianPortrait}
              alt="Marián Hrdina"
            />
            <figcaption>
              <strong>Marián Hrdina</strong>
              <span>Osobne, zrozumiteľne a bez zbytočných komplikácií.</span>
            </figcaption>
          </figure>
        </section>

        <section className="about section-shell" id="kto-som">
          <div className="section-kicker">Kto som</div>
          <div className="split">
            <h2>Za každým webom je normálna dohoda</h2>
            <div className="copy">
              <p>
                Som Marián Hrdina. Pomáham menším slovenským podnikateľom dostať
                ich služby na internet v podobe, ktorá je čistá, funkčná a
                pripravená na bežných zákazníkov.
              </p>
              <p>
                Ak nemáte čas riešiť technické detaily, je to v poriadku. Stačí
                mi povedať, čo robíte, poslať základné informácie a fotografie.
                Web pripravím, vysvetlím a pomôžem vám ho spustiť.
              </p>
            </div>
          </div>
        </section>

        <section className="services section-shell" id="sluzby">
          <div className="section-heading">
            <div className="section-kicker">Služby</div>
            <h2>Čo konkrétne dostanete</h2>
            <p>
              Praktický web, ktorý odpovedá na otázky vašich zákazníkov a
              uľahčuje im prvý kontakt.
            </p>
          </div>
          <div className="service-list">
            {services.map((service) => (
              <article className="service-row" key={service.title}>
                <span className="service-number">{service.number}</span>
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </div>
                <p className="service-example">{service.example}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="audience section-shell">
          <div className="audience-copy">
            <div className="section-kicker">Pre koho</div>
            <h2>Pre podniky, ktoré chcú pôsobiť dôveryhodne aj online</h2>
            <p>
              Najviac pomáham menším firmám a prevádzkam, ktoré potrebujú jasnú
              stránku bez komplikovaných systémov.
            </p>
          </div>
          <div className="tag-list" aria-label="Typy klientov">
            {audience.map((item) => (
              <span className="tag" key={item}>
                {item}
              </span>
            ))}
          </div>
        </section>

        <section className="examples section-shell" id="priklady">
          <div className="section-heading">
            <div className="section-kicker">Príklady</div>
            <h2>Čo môže obsahovať váš web</h2>
            <p>
              Každá prevádzka potrebuje trochu iné informácie. Web pripravím
              podľa toho, čo vaši zákazníci naozaj hľadajú.
            </p>
          </div>
          <div className="example-grid">
            {examples.map((example) => (
              <article className="example-item" key={example.title}>
                <h3>{example.title}</h3>
                <p>{example.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="process section-shell">
          <div className="section-heading">
            <div className="section-kicker">Spolupráca</div>
            <h2>Od prvého telefonátu po hotový web</h2>
          </div>
          <div className="process-grid">
            {process.map((step) => (
              <article className="process-step" key={step.number}>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="pricing section-shell" id="cennik">
          <div className="section-heading">
            <div className="section-kicker">Balíky</div>
            <h2>Jednoduchý rozsah a jasná cena</h2>
            <p>
              Konkrétnu cenu potvrdíme podľa obsahu, ktorý potrebujete.
            </p>
          </div>
          <div className="grid grid-three">
            {packages.map((plan) => (
              <article
                className={`card pricing-card ${plan.featured ? 'featured' : ''}`}
                key={plan.title}
              >
                {plan.featured && <span className="plan-badge">Najčastejšia voľba</span>}
                <h3>{plan.title}</h3>
                <p className="price">{plan.price}</p>
                <p className="plan-text">{plan.text}</p>
                <ul>
                  {plan.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="contact section-shell" id="kontakt">
          <div className="contact-copy">
            <div className="section-kicker">Kontakt</div>
            <h2>Porozprávajme sa o vašom webe</h2>
            <p>
              Zavolajte mi alebo napíšte. Stačí krátko opísať vašu prevádzku a
              pozrieme sa na najjednoduchšie riešenie.
            </p>
          </div>
          <div className="contact-details" aria-label="Kontaktné údaje">
            <p>
              <span>Meno</span>
              Marián Hrdina
            </p>
            <a href="tel:048070444">
              <span>Telefón</span>
              048 070 444
            </a>
            <a href="mailto:infoherowings@gmail.com">
              <span>E-mail</span>
              infoherowings@gmail.com
            </a>
            <div className="contact-actions">
              <a className="button button-primary" href="tel:048070444">
                Zavolať
              </a>
              <a className="button button-secondary" href="mailto:infoherowings@gmail.com">
                Napísať e-mail
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        © 2026 Hrdina Web. Webstránky pre malé slovenské podniky.
      </footer>
    </>
  );
}

export default App;
