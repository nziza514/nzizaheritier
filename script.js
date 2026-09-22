* { box-sizing: border-box; }

:root {
  --bg: #0b0c0f;
  --bg-alt: #121417;
  --panel: rgba(19, 22, 27, 0.82);
  --panel-soft: rgba(255, 255, 255, 0.02);
  --white: #f5f1ea;
  --ivory: #e5dcc8;
  --gold: #d7ba7a;
  --gold-soft: #b8945d;
  --line: rgba(255, 255, 255, 0.09);
  --muted: rgba(245, 241, 234, 0.72);
  --shadow: rgba(0, 0, 0, 0.48);
  --radius: 28px;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: 'Manrope', sans-serif;
  background:
    radial-gradient(circle at top, rgba(215, 186, 122, 0.12), transparent 28%),
    linear-gradient(135deg, #0b0c0f, #111318 45%, #0b0c0f 100%);
  color: var(--white);
  min-height: 100vh;
  overflow-x: hidden;
}

img {
  max-width: 100%;
  display: block;
}

a {
  color: inherit;
  text-decoration: none;
}

button {
  font: inherit;
}

.page-noise {
  position: fixed;
  inset: 0;
  pointer-events: none;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.018) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.012) 1px, transparent 1px);
  background-size: 22px 22px;
  mask-image: radial-gradient(circle at center, black, transparent 80%);
  opacity: 0.65;
}

.background-glow {
  position: fixed;
  width: 38rem;
  height: 38rem;
  border-radius: 50%;
  pointer-events: none;
  filter: blur(100px);
  opacity: 0.22;
  z-index: 0;
}

.glow-one {
  top: -10rem;
  left: -10rem;
  background: rgba(185, 141, 79, 0.7);
}

.glow-two {
  bottom: -12rem;
  right: -10rem;
  background: rgba(80, 100, 130, 0.63);
}

.site-header,
main,
.site-footer {
  position: relative;
  z-index: 1;
}

.site-header {
  width: min(1200px, calc(100% - 40px));
  margin: 22px auto 0;
  padding: 18px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: rgba(11, 12, 15, 0.58);
  backdrop-filter: blur(18px);
  box-shadow: 0 22px 60px rgba(0, 0, 0, 0.28);
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  min-width: 0;
}

.brand-mark {
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(215, 186, 122, 0.22), rgba(255, 255, 255, 0.05));
  border: 1px solid rgba(215, 186, 122, 0.3);
  color: var(--gold);
  font-family: 'Syne', sans-serif;
  font-weight: 800;
}

.brand-text {
  display: flex;
  flex-direction: column;
  line-height: 1.05;
}

.brand-text small {
  font-size: 10px;
  letter-spacing: 0.24em;
  color: var(--muted);
}

.brand-text strong {
  font-size: 0.78rem;
  letter-spacing: 0.12em;
}

.site-nav {
  display: flex;
  align-items: center;
  gap: 28px;
}

.site-nav a {
  position: relative;
  color: var(--muted);
  font-size: 0.82rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  transition: color 0.3s ease;
}

.site-nav a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -9px;
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--gold), transparent);
  transform: scaleX(0);
  transform-origin: center;
  transition: transform 0.35s ease;
}

.site-nav a:hover,
.site-nav a.active {
  color: var(--white);
}

.site-nav a:hover::after,
.site-nav a.active::after {
  transform: scaleX(1);
}

.nav-cta,
.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.9rem 1.45rem;
  border-radius: 999px;
  border: 1px solid rgba(215, 186, 122, 0.5);
  background: linear-gradient(135deg, rgba(215, 186, 122, 0.18), rgba(255, 255, 255, 0.04));
  color: var(--white);
  font-size: 0.78rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
}

.nav-cta:hover,
.button:hover {
  transform: translateY(-2px);
  box-shadow: 0 16px 35px rgba(215, 186, 122, 0.18);
  border-color: rgba(215, 186, 122, 0.8);
}

.menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 46px;
  height: 46px;
  background: transparent;
  border: 1px solid var(--line);
  border-radius: 50%;
  cursor: pointer;
}

.menu-toggle span {
  display: block;
  width: 18px;
  height: 1.5px;
  background: var(--white);
  margin: 0 auto;
}

main {
  width: min(1200px, calc(100% - 40px));
  margin: 36px auto 0;
}

.hero {
  display: grid;
  grid-template-columns: 1.2fr 0.9fr;
  align-items: center;
  gap: 40px;
  min-height: 73vh;
  padding: 34px 0 42px;
}

.eyebrow,
.section-label {
  display: inline-block;
  margin-bottom: 18px;
  color: var(--gold);
  letter-spacing: 0.22em;
  text-transform: uppercase;
  font-size: 0.72rem;
}

.hero h1,
.page-copy h1,
.section h3,
.intro-grid h2 {
  margin: 0;
  font-family: 'Cormorant Garamond', serif;
  font-weight: 600;
  letter-spacing: -0.04em;
  line-height: 0.96;
}

.hero h1 {
  font-size: clamp(4.3rem, 6vw, 7.2rem);
  max-width: 700px;
}

.hero h1 span,
.page-copy h1 span {
  color: var(--gold);
  font-style: italic;
}

.lead {
  margin-top: 22px;
  max-width: 620px;
  font-size: 1.04rem;
  line-height: 1.85;
  color: var(--muted);
}

.cta-row {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 28px;
}

.button-primary {
  background: linear-gradient(135deg, rgba(215, 186, 122, 0.9), rgba(184, 148, 93, 0.8));
  color: #090b0d;
  border-color: transparent;
  font-weight: 800;
}

.button-secondary {
  background: rgba(255, 255, 255, 0.015);
}

.tag-list {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 26px;
  padding: 0;
}

.tag-list li {
  border: 1px solid var(--line);
  border-radius: 999px;
  padding: 0.7rem 1rem;
  color: var(--muted);
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.hero-visual {
  display: flex;
  justify-content: center;
}

.portrait-card {
  position: relative;
  width: min(540px, 100%);
  padding: 16px;
  border-radius: calc(var(--radius) + 12px);
  border: 1px solid rgba(215, 186, 122, 0.2);
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0.015));
  box-shadow: 0 25px 80px rgba(0, 0, 0, 0.42);
  transform: perspective(1000px) rotateY(-8deg) rotateX(6deg);
}

.portrait-photo {
  position: relative;
  min-height: 680px;
  border-radius: var(--radius);
  background-image:
    linear-gradient(180deg, rgba(4, 5, 7, 0.1), rgba(4, 5, 7, 0.45)),
    url('https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=80');
  background-size: cover;
  background-position: center;
  overflow: hidden;
}

.portrait-photo::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(215, 186, 122, 0.22), transparent 35%, rgba(0, 0, 0, 0.42));
}

.portrait-meta {
  position: absolute;
  right: 30px;
  bottom: 24px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 0.9rem 1rem;
  border-radius: 18px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(7, 10, 13, 0.46);
  backdrop-filter: blur(10px);
  max-width: 240px;
}

.portrait-meta span {
  color: var(--muted);
  font-size: 0.74rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.portrait-meta strong {
  font-size: 0.82rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.section {
  padding: 90px 0 0;
}

.section-head {
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 24px;
  margin-bottom: 28px;
}

.section h3 {
  font-size: clamp(2.4rem, 4vw, 4rem);
}

.intro-grid {
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: 36px;
  align-items: end;
  padding-top: 14px;
}

.intro-grid h2 {
  font-size: clamp(2.8rem, 4vw, 4.6rem);
}

.intro-grid h2 span {
  color: var(--gold);
  font-style: italic;
}

.intro-grid p {
  font-size: 1.02rem;
  line-height: 1.9;
  color: var(--muted);
}

.service-grid,
.values-grid,
.contact-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 20px;
}

.service-card,
.value-card,
.contact-card {
  padding: 22px 20px 18px;
  border: 1px solid var(--line);
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.015);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.03);
  transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
}

.service-card:hover,
.value-card:hover,
.contact-card:hover {
  transform: translateY(-6px);
  border-color: rgba(215, 186, 122, 0.4);
  box-shadow: 0 18px 35px rgba(0, 0, 0, 0.18);
}

.service-index,
.value-card span {
  display: inline-block;
  margin-bottom: 20px;
  color: var(--gold);
  font-size: 0.72rem;
  letter-spacing: 0.18em;
}

.service-card h4,
.value-card h4,
.contact-card h3 {
  margin: 0 0 12px;
  font-size: 1.4rem;
}

.service-card p,
.value-card p,
.contact-card span,
.showcase-copy p,
.statement p,
.company-copy p,
.quote-block p {
  color: var(--muted);
  line-height: 1.8;
  font-size: 0.98rem;
}

.showcase {
  display: grid;
  grid-template-columns: 1fr 0.9fr;
  gap: 28px;
  align-items: center;
}

.showcase-panel,
.quote-block {
  position: relative;
  padding: 28px 26px;
  border-radius: 28px;
  border: 1px solid var(--line);
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.025), rgba(215, 186, 122, 0.04));
}

.quote {
  margin: 0;
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(2rem, 3vw, 3.3rem);
  line-height: 1.05;
  color: var(--white);
}

.statement {
  padding-bottom: 80px;
}

.statement h3 {
  max-width: 820px;
}

.statement p {
  max-width: 860px;
  margin-top: 18px;
}

.site-footer {
  width: min(1200px, calc(100% - 40px));
  margin: 10px auto 40px;
  padding: 30px 10px 0;
  border-top: 1px solid var(--line);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}

.footer-brand {
  display: flex;
  flex-direction: column;
  font-family: 'Syne', sans-serif;
  font-size: clamp(1.1rem, 2vw, 1.8rem);
  line-height: 0.9;
  letter-spacing: 0.08em;
}

.footer-copy,
.footer-links {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.footer-copy .label {
  font-size: 0.68rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--gold);
}

.footer-copy p,
.footer-links a {
  font-size: 0.9rem;
  color: var(--muted);
}

.page-main {
  padding-bottom: 30px;
}

.page-hero {
  display: grid;
  grid-template-columns: 1fr 420px;
  gap: 32px;
  align-items: center;
  min-height: 360px;
  padding: 36px 0 28px;
}

.page-copy h1 {
  font-size: clamp(3.4rem, 5vw, 6rem);
}

.profile-frame {
  justify-self: end;
  width: min(420px, 100%);
  padding: 14px;
  border-radius: 30px;
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0.02));
  border: 1px solid rgba(215, 186, 122, 0.32);
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
}

.profile-image {
  min-height: 500px;
  border-radius: 24px;
  background-image:
    linear-gradient(135deg, rgba(215, 186, 122, 0.18), rgba(0, 0, 0, 0.28)),
    url('https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1200&q=80');
  background-size: cover;
  background-position: center;
}

.story-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-top: 18px;
}

.story-layout p {
  color: var(--muted);
  font-size: 1.08rem;
  line-height: 1.9;
}

.narrow {
  justify-content: start;
}

.values-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.company-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 24px;
  align-items: stretch;
}

.company-copy,
.quote-block {
  padding: 28px 24px;
}

.quote-block {
  display: grid;
  place-items: center;
}

.quote-block p {
  margin: 0;
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(2rem, 3vw, 2.9rem);
  line-height: 1.08;
  color: var(--white);
}

.work-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;
}

.work-card {
  border: 1px solid var(--line);
  border-radius: 28px;
  background: rgba(255, 255, 255, 0.015);
  overflow: hidden;
  transition: transform 0.3s ease, border-color 0.3s ease;
}

.work-card:hover {
  transform: translateY(-5px);
  border-color: rgba(215, 186, 122, 0.35);
}

.work-card-large {
  grid-column: span 2;
}

.work-card-wide {
  grid-column: span 2;
}

.work-media {
  height: 340px;
  background-size: cover;
  background-position: center;
}

.media-one {
  background-image: linear-gradient(180deg, rgba(0,0,0,0.08), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=80');
}

.media-two {
  background-image: linear-gradient(180deg, rgba(0,0,0,0.12), rgba(0,0,0,0.42)), url('https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1000&q=80');
}

.media-three {
  background-image: linear-gradient(180deg, rgba(0,0,0,0.12), rgba(0,0,0,0.42)), url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80');
}

.media-four {
  background-image: linear-gradient(180deg, rgba(0,0,0,0.12), rgba(0,0,0,0.42)), url('https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1400&q=80');
}

.work-meta {
  padding: 20px 20px 22px;
}

.work-meta span {
  display: inline-block;
  margin-bottom: 8px;
  color: var(--gold);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-size: 0.68rem;
}

.work-meta h3 {
  margin: 0;
  font-size: clamp(1.4rem, 2.3vw, 2.3rem);
  font-family: 'Cormorant Garamond', serif;
}

.contact-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.contact-card {
  min-height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.contact-card span {
  display: inline-block;
  color: var(--gold);
  font-size: 0.7rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.contact-card h3 {
  font-size: clamp(1.5rem, 2vw, 2.2rem);
  line-height: 1.25;
}

.contact-card h3 a {
  text-decoration: underline;
  text-decoration-color: rgba(215, 186, 122, 0.5);
  text-underline-offset: 6px;
}

.final-contact {
  text-align: center;
  padding-bottom: 80px;
}

.final-contact h3 {
  max-width: 760px;
  margin: 0 auto 26px;
  font-size: clamp(2.2rem, 4vw, 4rem);
}

.reveal {
  opacity: 0;
  transform: translateY(28px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

@media (max-width: 980px) {
  .site-header {
    border-radius: 24px;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .site-nav {
    display: none;
    width: 100%;
    padding-top: 8px;
    flex-direction: column;
    align-items: flex-start;
    gap: 14px;
  }

  .site-nav.open {
    display: flex;
  }

  .menu-toggle {
    display: flex;
  }

  .hero,
  .page-hero,
  .showcase,
  .company-grid,
  .intro-grid,
  .story-layout,
  .contact-grid,
  .service-grid,
  .values-grid,
  .work-grid {
    grid-template-columns: 1fr;
  }

  .hero {
    padding-top: 20px;
  }

  .portrait-card {
    transform: none;
  }

  .page-hero {
    min-height: auto;
  }

  .profile-frame {
    justify-self: start;
    width: min(100%, 420px);
  }

  .service-grid,
  .values-grid,
  .contact-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .site-footer {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (max-width: 640px) {
  .site-header,
  main,
  .site-footer {
    width: min(100% - 24px, 1200px);
  }

  .site-header {
    padding: 15px 16px;
  }

  .brand-text strong {
    letter-spacing: 0.08em;
    font-size: 0.7rem;
  }

  .nav-cta {
    display: none;
  }

  .hero h1 {
    font-size: 3.3rem;
  }

  .hero {
    gap: 20px;
  }

  .portrait-photo {
    min-height: 500px;
  }

  .service-grid,
  .values-grid,
  .contact-grid {
    grid-template-columns: 1fr;
  }

  .tag-list {
    gap: 8px;
  }

  .tag-list li {
    padding: 0.55rem 0.8rem;
    font-size: 0.68rem;
  }

  .contact-card h3,
  .service-card h4,
  .value-card h4 {
    font-size: 1.2rem;
  }
}
