const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    },
    { threshold: 0.12 }
  );

  revealElements.forEach((element) => observer.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("is-visible"));
}

const parallaxRoot = document.querySelector("[data-parallax-root]");

if (parallaxRoot && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const parallaxItems = Array.from(parallaxRoot.querySelectorAll("[data-depth]"));
  let rafId = 0;

  const updateParallax = (clientX, clientY) => {
    const bounds = parallaxRoot.getBoundingClientRect();
    const px = (clientX - bounds.left) / bounds.width - 0.5;
    const py = (clientY - bounds.top) / bounds.height - 0.5;

    parallaxItems.forEach((item) => {
      const depth = Number(item.getAttribute("data-depth") || 0);
      const moveX = px * depth * 90;
      const moveY = py * depth * 70;
      item.style.translate = `${moveX}px ${moveY}px`;
    });
  };

  parallaxRoot.addEventListener("pointermove", (event) => {
    if (rafId) {
      cancelAnimationFrame(rafId);
    }

    rafId = requestAnimationFrame(() => updateParallax(event.clientX, event.clientY));
  });

  parallaxRoot.addEventListener("pointerleave", () => {
    parallaxItems.forEach((item) => {
      item.style.translate = "0 0";
    });
  });
}

const translations = {
  es: {
    "brand.badge": "SOLUCIONES DIGITALES LISTAS PARA ESCALAR",
    "language.label": "Idioma",
    "nav.home": "Inicio",
    "nav.services": "Servicios",
    "nav.about": "Sobre nosotros",
    "nav.partners": "Socios",
    "nav.support": "Soporte",
    "nav.process": "Proceso",
    "nav.faq": "FAQ",
    "nav.contact": "Contacto",
    "topbar.pill": "Soluciones web y soporte",
    "hero.eyebrow": "Soluciones digitales listas para escalar",
    "hero.title": "Desarrollo web, APIs y soporte de software con foco comercial.",
    "hero.lead": "Construimos páginas y plataformas para vender, automatizar procesos y asistir a tus clientes con una experiencia técnica clara, rápida y confiable.",
    "hero.sublead": "Base editable para sumar luego teléfonos, imágenes reales de la empresa, casos de éxito y nuevos servicios.",
    "hero.primaryCta": "Solicitar propuesta",
    "hero.secondaryCta": "Ver servicios",
    "hero.point1": "Arquitectura preparada para seguir agregando secciones y páginas.",
    "hero.point2": "Diseño responsive para escritorio, tablet y celular.",
    "hero.point3": "Contenido centralizado para editar marca, números e imágenes rápido.",
    "hero.deviceText": "Diseño, desarrollo, soporte y escalabilidad para servicios digitales.",
    "hero.deviceButton": "Crear experiencia",
    "services.eyebrow": "Servicios",
    "services.title": "Soluciones pensadas para captar clientes y sostener el crecimiento.",
    "services.description": "La página ya prioriza los servicios que mencionaste y deja abierta la puerta para agregar más productos, verticales o casos de éxito.",
    "services.featured": "Servicio destacado",
    "services.card1.title": "Venta de aplicaciones web",
    "services.card1.description": "Presentamos soluciones listas para comercializar, con enfoque en conversión, demostración de valor y llamada a la acción.",
    "services.card2.title": "Desarrollo web",
    "services.card2.description": "Creamos sitios institucionales, plataformas internas y experiencias a medida con una base técnica ordenada para crecer en equipo.",
    "services.card3.title": "APIs e integraciones",
    "services.card3.description": "Conectamos sistemas, automatizamos tareas y dejamos preparada la operación para integrarse con CRM, formularios o herramientas propias.",
    "services.card4.title": "Reparación en línea y mesa de ayuda",
    "services.card4.description": "Sumamos soporte de software remoto, seguimiento de incidentes y asistencia continua para que tus clientes sientan respaldo real.",
    "about.eyebrow": "Sobre nosotros",
    "about.title": "Socios trabajando a la par para construir soluciones con impacto real.",
    "about.description1": "Somos un grupo de socios trabajando a la par en un proyecto nuevo, con una visión compartida: construir soluciones digitales sólidas, útiles y escalables. Combinamos experiencia operativa, conocimiento empresarial, criterio técnico y capacidad de gestión para acompañar a organizaciones que buscan ordenar procesos, mejorar su presencia digital y generar relaciones estratégicas de largo plazo.",
    "about.description2": "Nos define la sabiduría práctica adquirida en distintas áreas, la polivalencia para adaptarnos a nuevos desafíos y la convicción de que cada proyecto debe tener impacto real en la operación, la comunicación y el crecimiento del negocio.",
    "about.point1": "Sabiduría práctica aplicada al negocio.",
    "about.point2": "Polivalencia para integrar operación, tecnología y gestión.",
    "about.point3": "Relaciones estratégicas orientadas al largo plazo.",
    "about.point4": "Conocimiento empresarial aplicado a soluciones digitales.",
    "about.point5": "Mirada colaborativa entre socios.",
    "partners.eyebrow": "Socios",
    "partners.title": "Socios",
    "partners.leonel.role": "Analista Sr | Compras, Datos, Procesos y Mejora Continua",
    "partners.leonel.description": "Leonel Rebolledo aporta una mirada transversal del negocio, integrando experiencia en compras, operaciones, análisis de datos, gestión de riesgos y mejora continua. Su recorrido combina abastecimiento técnico, compras indirectas y MRO, desarrollo y homologación de proveedores, planificación operativa, gestión logística, soporte IT, administración de activos tecnológicos y participación en evolución de sistemas ERP. Su enfoque está orientado a generar trazabilidad, eficiencia, previsibilidad y toma de decisiones basada en información confiable.",
    "partners.alfredo.role": "Backend Developer | Computer Engineering Student",
    "partners.alfredo.description": "Alfredo Nahuel Silva Balbin aporta el perfil técnico del equipo, con experiencia en desarrollo backend, diseño de microservicios, construcción de REST APIs e implementación de soluciones escalables. Su recorrido incluye trabajo con Node.js, Spring Boot, SQL, Docker, Git, pipelines CI/CD, testing unitario y metodologías ágiles Scrum. También cuenta con experiencia en desarrollo web freelance, soporte técnico, ReactJS, JavaScript y Python, fortaleciendo la capacidad del equipo para construir productos digitales sólidos, mantenibles y orientados al rendimiento.",
    "partners.alfredo.point1": "Más de 3 años de experiencia en desarrollo backend.",
    "partners.alfredo.point2": "Diseño e implementación de microservicios y REST APIs.",
    "partners.alfredo.point3": "Optimización de performance con reducción de tiempos de carga del 30%.",
    "partners.alfredo.point4": "Experiencia en equipos multidisciplinarios y metodologías Scrum.",
    "partners.alfredo.english": "Inglés avanzado C1",
    "partners.alfredo.lang1": "Español nativo",
    "partners.alfredo.lang2": "Portugués nativo",
    "diff.eyebrow": "Diferenciales",
    "diff.title": "Una presencia digital lista para colaborar y escalar.",
    "support.eyebrow": "Soporte de software",
    "support.title": "Reparación en línea y mesa de ayuda con protagonismo propio.",
    "support.description": "No queda escondido como servicio secundario: lo mostramos como una línea fuerte para transmitir confianza, continuidad operativa y acompañamiento.",
    "support.card1.title": "Atención remota",
    "support.card1.description": "Espacio pensado para ofrecer reparación en línea, asistencia guiada y resolución de fallas sin fricción.",
    "support.card2.title": "Seguimiento claro",
    "support.card2.description": "Podemos sumar luego tickets, SLAs, estados de casos y canales de contacto según crezca la operación.",
    "support.card3.title": "Cobertura evolutiva",
    "support.card3.description": "La página ya contempla mantenimiento, mejoras continuas y nuevas líneas de servicio sin rehacer la base visual.",
    "process.eyebrow": "Proceso",
    "process.title": "Un recorrido simple para explicar cómo trabajan ustedes y sus colaboradores.",
    "process.step1.title": "Descubrimiento",
    "process.step1.description": "Relevamos objetivos, público, canales de venta y necesidades técnicas del negocio.",
    "process.step2.title": "Propuesta",
    "process.step2.description": "Ordenamos servicios, alcance y prioridades para construir una presencia digital coherente.",
    "process.step3.title": "Implementación",
    "process.step3.description": "Desarrollamos la solución, conectamos formularios o APIs y ajustamos la experiencia responsive.",
    "process.step4.title": "Soporte continuo",
    "process.step4.description": "Mantenemos, ampliamos y acompañamos el crecimiento con nuevos módulos y mejoras operativas.",
    "faq.eyebrow": "Preguntas frecuentes",
    "faq.title": "La base ya contempla las consultas típicas de una empresa de tecnología.",
    "faq.q1": "¿Se puede reemplazar luego el logo y la imagen principal?",
    "faq.a1": "Sí. Ambos recursos quedaron como placeholders para que luego se cambien por la identidad visual final de la empresa.",
    "faq.q2": "¿Los números de celular se pueden actualizar fácil?",
    "faq.a2": "Sí. Los teléfonos están centralizados en un archivo de contenido para cambiarlos una sola vez y reflejarlos en toda la página.",
    "faq.q3": "¿Esta base sirve para seguir agregando páginas?",
    "faq.a3": "Sí. La estructura permite sumar nuevas secciones, páginas de servicios, portfolio, blog o área de clientes sin rehacer el proyecto.",
    "faq.q4": "¿Se puede integrar WhatsApp, formularios o un CRM?",
    "faq.a4": "Sí. La sección de contacto y la capa de scripts quedaron preparadas para conectar botones, formularios y futuras integraciones.",
    "cta.eyebrow": "Siguiente paso",
    "cta.title": "Una base profesional para vender tecnología y dar soporte real.",
    "cta.description": "Este primer armado ya destaca desarrollo web, APIs, aplicaciones web y mesa de ayuda. El siguiente paso es cargar identidad real, celulares y material comercial.",
    "cta.button": "Contactar por WhatsApp",
    "footer.description": "Base comercial e institucional para una empresa de desarrollo, aplicaciones web, APIs y mesa de ayuda.",
    "footer.contactTitle": "Canales de contacto",
    "footer.whatsappButton": "Contactar por WhatsApp",
    "footer.nextTitle": "Qué sigue",
    "footer.nextDescription": "Reemplazar placeholders, sumar celulares reales, logo definitivo, imagen de empresa y formularios conectados.",
    "footer.backTop": "Volver arriba",
  },
  en: {
    "brand.badge": "DIGITAL SOLUTIONS READY TO SCALE",
    "language.label": "Language",
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.about": "About us",
    "nav.partners": "Partners",
    "nav.support": "Support",
    "nav.process": "Process",
    "nav.faq": "FAQ",
    "nav.contact": "Contact",
    "topbar.pill": "Web solutions and support",
    "hero.eyebrow": "Digital solutions ready to scale",
    "hero.title": "Web development, APIs and software support with a commercial focus.",
    "hero.lead": "We build websites and platforms to sell, automate processes and support your clients with a clear, fast and reliable technical experience.",
    "hero.sublead": "An editable base to later add phone numbers, real company images, success stories and new services.",
    "hero.primaryCta": "Request proposal",
    "hero.secondaryCta": "View services",
    "hero.point1": "Architecture prepared to keep adding sections and pages.",
    "hero.point2": "Responsive design for desktop, tablet and mobile.",
    "hero.point3": "Centralized content to edit brand, numbers and images quickly.",
    "hero.deviceText": "Design, development, support and scalability for digital services.",
    "hero.deviceButton": "Create experience",
    "services.eyebrow": "Services",
    "services.title": "Solutions designed to attract clients and sustain growth.",
    "services.description": "This page already prioritizes the services you mentioned and leaves room to add more products, verticals or success stories.",
    "services.featured": "Featured service",
    "services.card1.title": "Web application sales",
    "services.card1.description": "We present ready-to-sell solutions with a focus on conversion, value demonstration and effective calls to action.",
    "services.card2.title": "Web development",
    "services.card2.description": "We create institutional sites, internal platforms and custom experiences with a solid technical base for team growth.",
    "services.card3.title": "APIs and integrations",
    "services.card3.description": "We connect systems, automate tasks and prepare operations to integrate with CRMs, forms or proprietary tools.",
    "services.card4.title": "Online repair and help desk",
    "services.card4.description": "We add remote software support, incident follow-up and ongoing assistance so your clients feel real backing.",
    "about.eyebrow": "About us",
    "about.title": "Partners working side by side to build solutions with real impact.",
    "about.description1": "We are a group of partners working side by side on a new project, with a shared vision: to build solid, useful and scalable digital solutions. We combine operational experience, business knowledge, technical judgment and management capacity to support organizations seeking to organize processes, improve their digital presence and generate long-term strategic relationships.",
    "about.description2": "We are defined by practical wisdom gained across different areas, the versatility to adapt to new challenges and the conviction that every project must have a real impact on operations, communication and business growth.",
    "about.point1": "Practical business wisdom applied to real needs.",
    "about.point2": "Versatility to integrate operations, technology and management.",
    "about.point3": "Strategic relationships focused on the long term.",
    "about.point4": "Business knowledge applied to digital solutions.",
    "about.point5": "A collaborative partner mindset.",
    "partners.eyebrow": "Partners",
    "partners.title": "Partners",
    "partners.leonel.role": "Senior Analyst | Purchasing, Data, Processes and Continuous Improvement",
    "partners.leonel.description": "Leonel Rebolledo brings a cross-functional business view, integrating experience in purchasing, operations, data analysis, risk management and continuous improvement. His path combines technical sourcing, indirect purchasing and MRO, supplier development and approval, operational planning, logistics management, IT support, technology asset administration and participation in ERP system evolution. His approach is focused on traceability, efficiency, predictability and decision-making based on reliable information.",
    "partners.alfredo.role": "Backend Developer | Computer Engineering Student",
    "partners.alfredo.description": "Alfredo Nahuel Silva Balbin brings the technical profile of the team, with experience in backend development, microservice design, REST API construction and scalable solution implementation. His background includes work with Node.js, Spring Boot, SQL, Docker, Git, CI/CD pipelines, unit testing and agile Scrum methodologies. He also has experience in freelance web development, technical support, ReactJS, JavaScript and Python, strengthening the team's ability to build solid, maintainable and performance-oriented digital products.",
    "partners.alfredo.point1": "More than 3 years of backend development experience.",
    "partners.alfredo.point2": "Design and implementation of microservices and REST APIs.",
    "partners.alfredo.point3": "Performance optimization with a 30% reduction in load times.",
    "partners.alfredo.point4": "Experience in multidisciplinary teams and Scrum methodologies.",
    "partners.alfredo.english": "Advanced English C1",
    "partners.alfredo.lang1": "Native Spanish",
    "partners.alfredo.lang2": "Native Portuguese",
    "diff.eyebrow": "Strengths",
    "diff.title": "A digital presence ready to collaborate and scale.",
    "support.eyebrow": "Software support",
    "support.title": "Online repair and help desk with a leading role.",
    "support.description": "It does not stay hidden as a secondary service: we show it as a strong line to convey trust, operational continuity and support.",
    "support.card1.title": "Remote assistance",
    "support.card1.description": "A space designed to offer online repair, guided assistance and frictionless issue resolution.",
    "support.card2.title": "Clear follow-up",
    "support.card2.description": "We can later add tickets, SLAs, case states and contact channels as the operation grows.",
    "support.card3.title": "Evolving coverage",
    "support.card3.description": "The site already contemplates maintenance, continuous improvement and new service lines without redoing the visual base.",
    "process.eyebrow": "Process",
    "process.title": "A simple path to explain how you and your collaborators work.",
    "process.step1.title": "Discovery",
    "process.step1.description": "We assess goals, audience, sales channels and technical business needs.",
    "process.step2.title": "Proposal",
    "process.step2.description": "We organize services, scope and priorities to build a coherent digital presence.",
    "process.step3.title": "Implementation",
    "process.step3.description": "We develop the solution, connect forms or APIs and fine-tune the responsive experience.",
    "process.step4.title": "Ongoing support",
    "process.step4.description": "We maintain, expand and support growth with new modules and operational improvements.",
    "faq.eyebrow": "Frequently asked questions",
    "faq.title": "The base already addresses the typical questions of a technology company.",
    "faq.q1": "Can the logo and main image be replaced later?",
    "faq.a1": "Yes. Both resources remain placeholders so they can later be replaced with the company's final visual identity.",
    "faq.q2": "Can phone numbers be updated easily?",
    "faq.a2": "Yes. Phone numbers are centralized in one content file so you update them once and reflect them across the entire page.",
    "faq.q3": "Can this base keep growing with more pages?",
    "faq.a3": "Yes. The structure allows adding new sections, service pages, portfolio, blog or client area without rebuilding the project.",
    "faq.q4": "Can WhatsApp, forms or a CRM be integrated?",
    "faq.a4": "Yes. The contact section and script layer are ready to connect buttons, forms and future integrations.",
    "cta.eyebrow": "Next step",
    "cta.title": "A professional base to sell technology and provide real support.",
    "cta.description": "This first build already highlights web development, APIs, web applications and help desk services. The next step is to load the real identity, phone numbers and commercial material.",
    "cta.button": "Contact on WhatsApp",
    "footer.description": "Commercial and institutional base for a company focused on development, web applications, APIs and help desk services.",
    "footer.contactTitle": "Contact channels",
    "footer.whatsappButton": "Contact on WhatsApp",
    "footer.nextTitle": "What's next",
    "footer.nextDescription": "Replace placeholders, add real phone numbers, final logo, company imagery and connected forms.",
    "footer.backTop": "Back to top",
  },
  zh: {
    "brand.badge": "可扩展的数字化解决方案",
    "language.label": "语言",
    "nav.home": "首页",
    "nav.services": "服务",
    "nav.about": "关于我们",
    "nav.partners": "合伙人",
    "nav.support": "支持",
    "nav.process": "流程",
    "nav.faq": "常见问题",
    "nav.contact": "联系",
    "topbar.pill": "网站解决方案与支持",
    "hero.eyebrow": "可扩展的数字化解决方案",
    "hero.title": "专注商业价值的网站开发、API 与软件支持。",
    "hero.lead": "我们打造可销售、可自动化、可持续支持客户的平台与网站，提供清晰、快速且可靠的技术体验。",
    "hero.sublead": "该基础版本可继续加入电话、企业真实图片、成功案例和更多服务。",
    "hero.primaryCta": "申请方案",
    "hero.secondaryCta": "查看服务",
    "hero.point1": "架构已准备好继续扩展更多版块与页面。",
    "hero.point2": "适配桌面、平板与手机的响应式设计。",
    "hero.point3": "品牌、号码和图片内容集中管理，便于快速更新。",
    "hero.deviceText": "面向数字服务的设计、开发、支持与扩展能力。",
    "hero.deviceButton": "创建体验",
    "services.eyebrow": "服务",
    "services.title": "为获客与持续增长而设计的解决方案。",
    "services.description": "当前页面已突出你提到的服务，并保留未来加入更多产品、垂直领域和案例的空间。",
    "services.featured": "重点服务",
    "services.card1.title": "Web 应用销售",
    "services.card1.description": "我们提供可直接商业化的解决方案，重点放在转化、价值展示与行动引导。",
    "services.card2.title": "网站开发",
    "services.card2.description": "我们创建企业官网、内部平台和定制体验，并为团队扩展保留稳固的技术基础。",
    "services.card3.title": "API 与集成",
    "services.card3.description": "我们连接系统、自动化任务，并为 CRM、表单和自有工具集成做好准备。",
    "services.card4.title": "在线维修与服务台",
    "services.card4.description": "我们提供远程软件支持、事件跟进和持续协助，让客户感受到真正的保障。",
    "about.eyebrow": "关于我们",
    "about.title": "合伙人并肩合作，打造真正有影响力的解决方案。",
    "about.description1": "我们是一组并肩协作的新项目合伙人，拥有共同愿景：构建稳固、实用且可扩展的数字化解决方案。我们结合运营经验、商业知识、技术判断和管理能力，帮助希望梳理流程、提升数字形象并建立长期战略关系的组织。",
    "about.description2": "我们以跨领域积累的实践智慧、适应新挑战的多面能力，以及每个项目都必须对运营、沟通和业务增长产生真实影响的信念为核心。",
    "about.point1": "将实战智慧应用于业务。",
    "about.point2": "整合运营、技术与管理的多面能力。",
    "about.point3": "面向长期的战略合作关系。",
    "about.point4": "把商业知识应用到数字化解决方案中。",
    "about.point5": "合伙人协作视角。",
    "partners.eyebrow": "合伙人",
    "partners.title": "合伙人",
    "partners.leonel.role": "高级分析师 | 采购、数据、流程与持续改进",
    "partners.leonel.description": "Leonel Rebolledo 带来横向业务视角，整合采购、运营、数据分析、风险管理和持续改进经验。他的经历涵盖技术采购、间接采购与 MRO、供应商开发与认证、运营规划、物流管理、IT 支持、技术资产管理以及 ERP 系统演进参与。他的工作重点是提升可追溯性、效率、可预测性以及基于可靠信息的决策能力。",
    "partners.alfredo.role": "后端开发工程师 | 计算机工程学生",
    "partners.alfredo.description": "Alfredo Nahuel Silva Balbin 为团队带来技术侧能力，具备后端开发、微服务设计、REST API 构建与可扩展解决方案实施经验。他的经历包括 Node.js、Spring Boot、SQL、Docker、Git、CI/CD 流水线、单元测试以及 Scrum 敏捷方法。同时他也拥有自由职业 Web 开发、技术支持、ReactJS、JavaScript 和 Python 经验，强化了团队打造稳健、易维护且高性能数字产品的能力。",
    "partners.alfredo.point1": "3 年以上后端开发经验。",
    "partners.alfredo.point2": "微服务与 REST API 的设计与实现。",
    "partners.alfredo.point3": "通过性能优化使加载时间降低 30%。",
    "partners.alfredo.point4": "具备多学科团队与 Scrum 方法经验。",
    "partners.alfredo.english": "英语 C1 高级",
    "partners.alfredo.lang1": "西班牙语母语",
    "partners.alfredo.lang2": "葡萄牙语母语",
    "diff.eyebrow": "优势",
    "diff.title": "适合协作并持续扩展的数字化呈现。",
    "support.eyebrow": "软件支持",
    "support.title": "具备核心地位的在线维修与服务台。",
    "support.description": "它不会被隐藏为次要服务，而是作为重要业务线来传递信任、运营连续性与陪伴感。",
    "support.card1.title": "远程支持",
    "support.card1.description": "用于提供在线维修、引导式协助与无摩擦问题处理的服务空间。",
    "support.card2.title": "清晰跟进",
    "support.card2.description": "随着业务增长，可继续加入工单、SLA、案件状态与联系渠道。",
    "support.card3.title": "持续扩展",
    "support.card3.description": "该网站基础已考虑维护、持续优化与新增服务线，无需重做视觉基础。",
    "process.eyebrow": "流程",
    "process.title": "用简单路径解释你们与协作伙伴如何工作。",
    "process.step1.title": "调研",
    "process.step1.description": "我们评估目标、受众、销售渠道与业务技术需求。",
    "process.step2.title": "方案",
    "process.step2.description": "我们梳理服务、范围与优先级，打造连贯的数字化呈现。",
    "process.step3.title": "实施",
    "process.step3.description": "我们开发解决方案，连接表单或 API，并优化响应式体验。",
    "process.step4.title": "持续支持",
    "process.step4.description": "我们通过新模块与运营改进来维护、扩展并支持增长。",
    "faq.eyebrow": "常见问题",
    "faq.title": "这一基础版本已覆盖科技公司常见咨询。",
    "faq.q1": "之后可以更换 logo 和主图吗？",
    "faq.a1": "可以。这些资源目前为占位内容，后续可替换为公司的最终视觉形象。",
    "faq.q2": "手机号可以方便更新吗？",
    "faq.a2": "可以。电话号码集中在同一个内容文件中，只需更新一次即可同步到整站。",
    "faq.q3": "这个基础版本可以继续扩展更多页面吗？",
    "faq.a3": "可以。该结构支持加入更多版块、服务页、作品集、博客或客户专区，而无需重建项目。",
    "faq.q4": "可以集成 WhatsApp、表单或 CRM 吗？",
    "faq.a4": "可以。联系版块和脚本层已经为按钮、表单和未来集成做好准备。",
    "cta.eyebrow": "下一步",
    "cta.title": "一个用于销售技术服务与提供真实支持的专业基础。",
    "cta.description": "当前版本已经突出网站开发、API、Web 应用与服务台。下一步就是加入真实品牌、电话号码与商业素材。",
    "cta.button": "通过 WhatsApp 联系",
    "footer.description": "适用于开发、Web 应用、API 与服务台业务的商业与机构化展示基础。",
    "footer.contactTitle": "联系方式",
    "footer.whatsappButton": "通过 WhatsApp 联系",
    "footer.nextTitle": "下一步",
    "footer.nextDescription": "替换占位内容，加入真实电话号码、最终 logo、企业图片和已连接的表单。",
    "footer.backTop": "返回顶部",
  },
};

const setLanguage = (lang) => {
  const locale = translations[lang] ? lang : "es";
  document.documentElement.lang = locale;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    const value = translations[locale]?.[key];

    if (value) {
      element.textContent = value;
    }
  });

  document.querySelectorAll(".lang-button").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === locale);
  });

  localStorage.setItem("acto-digital-lang", locale);
};

const savedLanguage = localStorage.getItem("acto-digital-lang") || "es";
setLanguage(savedLanguage);

document.querySelectorAll(".lang-button").forEach((button) => {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.lang);
  });
});
