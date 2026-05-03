const renderNavigation = (navigation) =>
  navigation
    .map(
      (item) => `
        <a class="nav-link" href="${item.href}">${item.label}</a>
      `
    )
    .join("");

const renderStats = (stats) =>
  stats
    .map(
      (stat) => `
        <article class="stat-card">
          <strong>${stat.value}</strong>
          <span>${stat.label}</span>
        </article>
      `
    )
    .join("");

const renderTrustPoints = (points) =>
  points
    .map(
      (point) => `
        <li>${point}</li>
      `
    )
    .join("");

const renderServices = (services) =>
  services
    .map(
      (service) => `
        <article class="service-card reveal">
          <div class="service-eyebrow">Servicio destacado</div>
          <h3>${service.title}</h3>
          <p>${service.description}</p>
          <ul class="chip-list">
            ${service.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}
          </ul>
        </article>
      `
    )
    .join("");

const renderAbout = (about) => `
  <section class="section" id="sobre-nosotros">
    <div class="container about-layout">
      <div class="about-card reveal">
        <span class="eyebrow">${about.eyebrow}</span>
        <h2>${about.title}</h2>
        <p>${about.description}</p>
        <p>${about.secondaryDescription}</p>
        <ul class="about-highlights">
          ${about.highlights.map((highlight) => `<li>${highlight}</li>`).join("")}
        </ul>
      </div>
      <div class="about-visual reveal">
        <img src="${about.image}" alt="Representacion visual de trabajo colaborativo entre socios" />
      </div>
    </div>
  </section>
`;

const renderPartnerLanguages = (partner) => {
  const items = [];

  if (partner.englishLevel) {
    items.push(`<span class="english-level">${partner.englishLevel}</span>`);
  }

  if (partner.languages?.length) {
    items.push(`
      <div class="language-list">
        ${partner.languages.map((language) => `<span>${language}</span>`).join("")}
      </div>
    `);
  }

  return items.join("");
};

const renderPartnerAchievements = (partner) => {
  if (!partner.achievements?.length) {
    return "";
  }

  return `
    <ul class="about-highlights partner-highlights">
      ${partner.achievements.map((achievement) => `<li>${achievement}</li>`).join("")}
    </ul>
  `;
};

const renderPartners = (partners, section = { eyebrow: "Socios", title: "Socios" }) => `
  <section class="section section-soft" id="socios">
    <div class="container">
      <div class="section-heading reveal">
        <span class="eyebrow">${section.eyebrow}</span>
        <h2>${section.title}</h2>
      </div>
      <div class="partners-grid">
        ${partners
          .map(
            (partner) => `
              <article class="partner-card reveal">
                <div class="partner-avatar">
                  <img src="${partner.image}" alt="Foto de ${partner.name}" />
                </div>
                <div class="partner-content">
                  <span class="service-eyebrow">Perfil profesional</span>
                  <h3>${partner.name}</h3>
                  <p class="partner-role">${partner.role}</p>
                  <p>${partner.description}</p>
                  ${renderPartnerAchievements(partner)}
                  ${renderPartnerLanguages(partner)}
                  <div class="partner-tags">
                    ${partner.tags.map((tag) => `<span>${tag}</span>`).join("")}
                  </div>
                </div>
              </article>
            `
          )
          .join("")}
      </div>
    </div>
  </section>
`;

const renderDifferentiators = (items) =>
  items
    .map(
      (item) => `
        <article class="detail-card reveal">
          <h3>${item.title}</h3>
          <p>${item.description}</p>
        </article>
      `
    )
    .join("");

const renderSupportModel = (items) =>
  items
    .map(
      (item) => `
        <article class="support-card reveal">
          <h3>${item.title}</h3>
          <p>${item.text}</p>
        </article>
      `
    )
    .join("");

const renderProcess = (items) =>
  items
    .map(
      (item) => `
        <article class="timeline-item reveal">
          <span class="timeline-step">${item.step}</span>
          <div>
            <h3>${item.title}</h3>
            <p>${item.text}</p>
          </div>
        </article>
      `
    )
    .join("");

const renderFaq = (items) =>
  items
    .map(
      (item) => `
        <details class="faq-item reveal">
          <summary>${item.question}</summary>
          <p>${item.answer}</p>
        </details>
      `
    )
    .join("");

export const renderPage = (content) => `
  <div class="page-shell">
    <header class="site-header" id="inicio">
      <div class="container">
        <nav class="topbar">
          <a class="brand" href="#inicio">
            <img src="${content.company.logo}" alt="Logo de ${content.company.name}" />
            <div>
              <span>${content.company.name}</span>
              <small>${content.company.badge}</small>
            </div>
          </a>
          <div class="nav-group">
            ${renderNavigation(content.navigation)}
          </div>
          <a class="topbar-pill" href="#contacto">${content.company.topbarPill}</a>
        </nav>

        <section class="hero-grid">
          <div class="hero-copy reveal">
            <span class="eyebrow">${content.company.badge}</span>
            <h1>${content.company.headline}</h1>
            <p class="lead">${content.company.description}</p>
            <p class="sublead">${content.company.subheadline}</p>

            <div class="hero-actions">
              <a class="button button-primary" href="${content.company.primaryCta.href}">
                ${content.company.primaryCta.label}
              </a>
              <a class="button button-secondary" href="${content.company.secondaryCta.href}">
                ${content.company.secondaryCta.label}
              </a>
            </div>

            <ul class="trust-list">
              ${renderTrustPoints(content.trustPoints)}
            </ul>
          </div>

          <div class="hero-visual reveal">
            <div class="hero-stage" data-parallax-root>
              <div class="stage-glow glow-left" data-depth="0.18"></div>
              <div class="stage-glow glow-center" data-depth="0.3"></div>
              <div class="stage-wire wire-top" data-depth="0.12"></div>
              <div class="stage-wire wire-main" data-depth="0.08"></div>
              <div class="stage-wire wire-low" data-depth="0.14"></div>

              <div class="floating-frame frame-top" data-depth="0.28"></div>
              <div class="floating-frame frame-right" data-depth="0.22"></div>
              <div class="floating-frame frame-left" data-depth="0.18"></div>

              <article class="floating-card card-ux" data-depth="0.34">
                <span>UX</span>
                <small>Experiencia visual</small>
              </article>

              <article class="floating-card card-finance" data-depth="0.26">
                <span>API</span>
                <small>Integraciones</small>
              </article>

              <article class="floating-card card-commerce" data-depth="0.2">
                <span>WEB</span>
                <small>Soluciones comerciales</small>
              </article>

              <div class="device-mockup" data-depth="0.1">
                <div class="device-notch"></div>
                <div class="device-screen">
                  <strong>${content.company.name}</strong>
                  <p>Diseno, desarrollo, soporte y escalabilidad para servicios digitales.</p>
                  <div class="device-button">Crear experiencia</div>
                </div>
              </div>
            </div>
            <div class="stats-grid">
              ${renderStats(content.stats)}
            </div>
          </div>
        </section>
      </div>
    </header>

    <main>
      <section class="section section-soft" id="servicios">
        <div class="container">
          <div class="section-heading reveal">
            <span class="eyebrow">Servicios</span>
            <h2>Soluciones pensadas para captar clientes y sostener el crecimiento.</h2>
            <p>
              La pagina ya prioriza los servicios que mencionaste y deja abierta la puerta para agregar mas productos,
              verticales o casos de exito.
            </p>
          </div>
          <div class="services-grid">
            ${renderServices(content.services)}
          </div>
        </div>
      </section>

      ${renderAbout(content.about)}

      ${renderPartners(content.partners, content.partnersSection)}

      <section class="section">
        <div class="container">
          <div class="section-heading reveal">
            <span class="eyebrow">Diferenciales</span>
            <h2>Una presencia digital lista para colaborar y escalar.</h2>
          </div>
          <div class="details-grid">
            ${renderDifferentiators(content.differentiators)}
          </div>
        </div>
      </section>

      <section class="section section-highlight" id="soporte">
        <div class="container support-layout">
          <div class="section-heading reveal">
            <span class="eyebrow">Soporte de software</span>
            <h2>Reparacion en linea y mesa de ayuda con protagonismo propio.</h2>
            <p>
              No queda escondido como servicio secundario: lo mostramos como una linea fuerte para transmitir confianza,
              continuidad operativa y acompanamiento.
            </p>
          </div>
          <div class="support-grid">
            ${renderSupportModel(content.supportModel)}
          </div>
        </div>
      </section>

      <section class="section" id="proceso">
        <div class="container">
          <div class="section-heading reveal">
            <span class="eyebrow">Proceso</span>
            <h2>Un recorrido simple para explicar como trabajan ustedes y sus colaboradores.</h2>
          </div>
          <div class="timeline">
            ${renderProcess(content.process)}
          </div>
        </div>
      </section>

      <section class="section section-soft" id="faq">
        <div class="container faq-layout">
          <div class="section-heading reveal">
            <span class="eyebrow">Preguntas frecuentes</span>
            <h2>La base ya contempla las consultas tipicas de una empresa de tecnologia.</h2>
          </div>
          <div class="faq-list">
            ${renderFaq(content.faq)}
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="cta-banner reveal">
            <div>
              <span class="eyebrow">Siguiente paso</span>
              <h2>${content.finalCta.title}</h2>
              <p>${content.finalCta.description}</p>
            </div>
            <a class="button button-primary" href="${content.finalCta.action.href}" target="_blank" rel="noreferrer">
              ${content.finalCta.action.label}
            </a>
          </div>
        </div>
      </section>
    </main>

    <footer class="site-footer" id="contacto">
      <div class="container footer-grid">
        <div class="footer-brand">
          <img src="${content.company.logo}" alt="Logo de ${content.company.name}" />
          <h2>${content.company.legalName}</h2>
          <p>Base comercial e institucional para una empresa de desarrollo, aplicaciones web, APIs y mesa de ayuda.</p>
        </div>

        <div class="footer-card">
          <span class="footer-title">Canales de contacto</span>
          <a class="contact-link" href="${content.company.whatsapp.href}" target="_blank" rel="noreferrer">
            ${content.company.whatsapp.display}
          </a>
          <a class="button button-secondary contact-button" href="${content.company.whatsapp.href}" target="_blank" rel="noreferrer">
            ${content.company.whatsapp.label}
          </a>
          <a class="contact-link" href="mailto:${content.company.email}">${content.company.email}</a>
          <span class="footer-location">${content.company.location}</span>
        </div>

        <div class="footer-card">
          <span class="footer-title">Que sigue</span>
          <p>Reemplazar placeholders, sumar celulares reales, logo definitivo, imagen de empresa y formularios conectados.</p>
          <a class="button button-secondary" href="#inicio">Volver arriba</a>
        </div>
      </div>
    </footer>
  </div>
`;
