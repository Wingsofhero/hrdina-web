import marianPortrait from './assets/marian-portrait-preview-v2.jpg';
import sunflowerPreview from './assets/work-sunflower.jpg';
import bocamsPreview from './assets/work-odtahovkaliptov.jpg';
import vanRentPreview from './assets/work-vanrent.jpg';
import richardCistiPreview from './assets/work-richardcisti.jpg';
import bkProfilakPreview from './assets/work-bkprofilak.jpg';
import azCarsPreview from './assets/work-az-cars.jpg';
import adisTattooPreview from './assets/work-adis-tattoo.jpg';
import aladivaPreview from './assets/work-aladiva.jpg';
import autodankoPreview from './assets/work-autodanko.jpg';
import krmivaJokiPreview from './assets/work-krmiva-joki.jpg';
import masazeUBeiPreview from './assets/work-masaze-u-bei.jpg';
import metodHudakPreview from './assets/work-metod-hudak.jpg';
import originalCarsPreview from './assets/work-original-cars.jpg';
import pitTerapyPreview from './assets/work-pit-terapy.jpg';
import plechodesignLakovnaPreview from './assets/work-plechodesign-lakovna.jpg';
import plechotruckPreview from './assets/work-plechotruck.jpg';
import pneulobPreview from './assets/work-pneulob.jpg';
import studioLuciaPreview from './assets/work-studio-lucia.jpg';
import stahovanieGalantaPreview from './assets/work-stahovanie-galanta.jpg';
import therapyCenterAlennPreview from './assets/work-therapy-center-alenn.jpg';
import velmaatPreview from './assets/work-velmaat.jpg';
import wandaGalanPreview from './assets/work-wanda-galan.jpg';
import zumpyPodpolaniePreview from './assets/work-zumpy-podpolanie.jpg';

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

const hrdinaWebUrl = 'https://www.hrdinaweb.sk/';

const realWorks = [
  {
    title: 'Bocams servis Liptov',
    label: 'Odťah a služby na Liptove',
    text: 'Web firmy z Nižnej Boce spája odťah vozidiel, prepravu materiálu, stavebné práce aj prenájom mobilnej sauny.',
    url: 'https://www.odtahovkaliptov.eu/',
    image: bocamsPreview,
  },
  {
    title: 'VanRent.sk',
    label: 'Prenájom dodávok',
    text: 'Na webe požičovne v Prievidzi si zákazník porovná dodávky IVECO Daily podľa veľkosti nákladného priestoru, výbavy a ceny.',
    url: 'https://www.vanrent.sk/',
    image: vanRentPreview,
  },
  {
    title: 'Richard Čistí',
    label: 'Čistenie exteriérov',
    text: 'Fotografie realizácií ukazujú výsledky čistenia fasád, dlažby, plotov a náhrobných kameňov. Zákazník môže požiadať o cenovú ponuku.',
    url: 'https://www.richardcisti.sk/',
    image: richardCistiPreview,
  },
  {
    title: 'Slnečnica',
    label: 'Štúdio tvorivosti a zelene',
    text: 'Web bratislavského štúdia s pozvánkami na tvorivé stretnutia a ponukou starostlivosti o firemnú zeleň.',
    url: 'https://www.sunflower.sk/',
    image: sunflowerPreview,
  },
  {
    title: 'BK Profilak',
    label: 'Autolakovňa a autoservis',
    text: 'Prezentačný web pre autolakovňu a autoservis v Prakovciach s ponukou služieb, ukážkami prác a kontaktom.',
    url: 'https://www.bkprofilak.sk/',
    image: bkProfilakPreview,
  },
  {
    title: 'AZ Cars Electronic',
    label: 'Autoelektrika a chiptuning',
    text: 'Web pre autoelektriku a chiptuning v Banskej Bystrici s prehľadom služieb, realizáciami a dohodnutím termínu.',
    url: 'https://www.az-cars.sk/',
    image: azCarsPreview,
  },
  {
    title: 'Aladiva',
    label: 'Beauty, health, travel',
    text: 'Prezentačný web pre značku zameranú na krásu, zdravie a zážitky.',
    url: 'https://www.aladiva.sk',
    image: aladivaPreview,
  },
  {
    title: 'Studio Lucia Modra',
    label: 'Kozmetický salón',
    text: 'Elegantný web pre lokálne štúdio krásy so službami, cenníkom a rezerváciou termínu.',
    url: 'https://www.studioluciamodra.sk',
    image: studioLuciaPreview,
  },
  {
    title: 'Sťahovanie Galanta',
    label: 'Sťahovanie a preprava',
    text: 'Prehľadný web pre lokálnu sťahovaciu službu s jasnou ponukou, galériou a rýchlym kontaktom.',
    url: 'https://www.stahovaniegalanta.sk/',
    image: stahovanieGalantaPreview,
  },
  {
    title: 'PiT-Terapy',
    label: 'Terapia a cvičenie',
    text: 'Moderná prezentačná stránka pre terapiu a regeneráciu s výrazným vizuálom a rezerváciou.',
    url: 'https://www.pit-terapy.sk/',
    image: pitTerapyPreview,
  },
  {
    title: 'Plecho Truck',
    label: 'Odvoz odpadu',
    text: 'Dynamický web pre odvoz odpadu a kontajnerové služby s jasnou ponukou, cenou a objednávkou.',
    url: 'https://www.plechotruck.sk/',
    image: plechotruckPreview,
  },
  {
    title: 'PlechoDesign lakovňa',
    label: 'Autolakovňa',
    text: 'Prezentačný web pre autolakovňu s výrazným vizuálom, službami, realizáciami a rýchlym kontaktom.',
    url: 'https://www.plechodesign-lakovna.sk/',
    image: plechodesignLakovnaPreview,
  },
  {
    title: 'Velmaat',
    label: 'Účtovníctvo',
    text: 'Profesionálny web pre účtovnícke služby s dôrazom na dôveru, služby a nezáväznú konzultáciu.',
    url: 'https://www.velmaat.sk/',
    image: velmaatPreview,
  },
  {
    title: 'Krmivá Joki',
    label: 'Chovateľské potreby',
    text: 'Prívetivý web pre lokálnu predajňu krmív a chovateľských potrieb s ponukou, kontaktom a hodnoteniami.',
    url: 'https://www.krmivajoki.sk/',
    image: krmivaJokiPreview,
  },
  {
    title: 'Adis Tattoo Art',
    label: 'Tattoo & piercing',
    text: 'Výrazná stránka pre tattoo štúdio s galériou, službami a jednoduchou cestou k dohodnutiu termínu.',
    url: 'https://www.adistattoo.sk/',
    image: adisTattooPreview,
  },
  {
    title: 'Wanda Galan',
    label: 'Permanentný make-up',
    text: 'Elegantný web pre štúdio permanentného make-upu s prémiovým vizuálom, službami a rezerváciou termínu.',
    url: 'https://www.wandagalan.sk/',
    image: wandaGalanPreview,
  },
  {
    title: 'Masáže u Bei',
    label: 'Masáže a terapie',
    text: 'Pokojný web pre masérske služby v Senci s ponukou terapií, cenníkom, recenziami a jednoduchým kontaktom.',
    url: 'https://www.masazeubei.sk/',
    image: masazeUBeiPreview,
  },
  {
    title: 'Žumpy Podpoľanie',
    label: 'Vývoz odpadových vôd',
    text: 'Výrazná stránka pre vývoz žúmp a septikov v regióne Podpoľania s cenníkom, galériou a rýchlym telefonátom.',
    url: 'https://www.zumpypodpolanie.sk/',
    image: zumpyPodpolaniePreview,
  },
  {
    title: 'Original Cars',
    label: 'Autoservis',
    text: 'Moderný web pre autoservis v Partizánskom so službami, kontaktom, adresou a rýchlym telefonátom.',
    url: 'https://www.originalcars.sk/',
    image: originalCarsPreview,
  },
  {
    title: 'Pneulob',
    label: 'Pneuservis',
    text: 'Prehľadná stránka pre pneuservis a predaj pneumatík s jasnou ponukou, kontaktom a lokálnymi informáciami.',
    url: 'https://www.pneulob.sk/',
    image: pneulobPreview,
  },
  {
    title: 'Therapy Center Alenn',
    label: 'Terapie a regenerácia',
    text: 'Pokojná prezentačná stránka pre terapeutické centrum so službami, kontaktom a jemnou atmosférou.',
    url: 'https://www.therapycenteralenn.sk/',
    image: therapyCenterAlennPreview,
  },
  {
    title: 'AUTODANKO',
    label: 'Autoservis, lakovňa a karosáreň',
    text: 'Web pre autoservis v Šuranoch s riešením poistných udalostí, prehľadom služieb a galériou opráv.',
    url: 'https://www.autodanko.sk/',
    image: autodankoPreview,
  },
  {
    title: 'Metod Hudák',
    label: 'Autoservis a pneuservis',
    text: 'Prehľadný web pre autoservis a pneuservis v Novej Ľubovni so službami, galériou a rýchlym kontaktom.',
    url: 'https://www.metodhudak.sk/',
    image: metodHudakPreview,
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
              <a className="button button-secondary" href="tel:0948070444">
                Zavolať: 0948 070 444
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
          <div className="works-showcase" aria-labelledby="realizovane-weby-title">
            <div className="section-heading works-heading">
              <div className="section-kicker">Realizované weby</div>
              <h2 id="realizovane-weby-title">Ukážky mojich prác</h2>
              <p>
                Toto sú reálne weby, ktoré si môžete otvoriť a pozrieť ako živé
                referencie.
              </p>
            </div>
            <div className="work-grid">
              {realWorks.map((work) => (
                <article className="work-card" key={work.title}>
                  <a
                    className="work-preview"
                    href={work.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Otvoriť web ${work.title}`}
                  >
                    <img src={work.image} alt={`Náhľad webu ${work.title}`} />
                  </a>
                  <div className="work-content">
                    <span>{work.label}</span>
                    <h3>{work.title}</h3>
                    <p>{work.text}</p>
                    <a
                      className="text-link"
                      href={work.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Otvoriť web
                    </a>
                    <a
                      className="work-credit"
                      href={hrdinaWebUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Otvoriť stránku Hrdina Web v novej karte"
                    >
                      Vytvorené pomocou Hrdina Web
                    </a>
                  </div>
                </article>
              ))}
            </div>
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
            <div className="section-kicker">Cenník</div>
            <h2>Koľko stojí web?</h2>
            <p>Každý web riešim individuálne. Presnú cenu si dohodneme podľa rozsahu vašej stránky.</p>
          </div>
          <div className="card pricing-offer">
            <div>
              <h3>Bežný prezentačný web</h3>
              <p className="offer-price">349 € <small>s DPH</small></p>
              <p>Cena platí pre stránku bez zložitých funkcií.</p>
            </div>
            <div>
              <h3>Čo máte v cene</h3>
              <ul className="offer-includes">
                <li>Akékoľvek grafické úpravy návrhu</li>
                <li>Práca na ukážke, kým s ňou nebudete spokojní</li>
                <li>Odkazy na Bookio a Notino</li>
                <li>Fotogaléria</li>
                <li>Klikateľný e-mail a telefónne číslo</li>
              </ul>
            </div>
            <div className="offer-terms">
              <h3>Zľava 75 € pri dokončení do 7 dní<a href="#podmienky-zlavy" aria-label="Podmienky zľavy">*</a></h3>
              <p>Po zľave zaplatíte <strong>274 € s DPH.</strong></p>
              <h3>Úpravy po spustení</h3>
              <p>Prvé dva týždne po dokončení webu máte úpravy zdarma. Aj potom sú drobné úpravy bezplatné. Väčšie úpravy účtujem sadzbou 20 € za hodinu.</p>
            </div>
            <p className="offer-note" id="podmienky-zlavy">* Lehota 7 dní začína plynúť v momente, keď mi potvrdíte, že si web objednávate. Nárok na zľavu máte, ak je do konca tejto lehoty doména pripojená k hostingu, web je na nej verejne dostupný a faktúra je uhradená.</p>
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
            <a href="tel:0948070444">
              <span>Telefón</span>
              0948 070 444
            </a>
            <a href="mailto:infoherowings@gmail.com">
              <span>E-mail</span>
              infoherowings@gmail.com
            </a>
            <div className="contact-actions">
              <a className="button button-primary" href="tel:0948070444">
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
