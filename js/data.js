/* ═══════════════════════════════════════
   PARAGON — Data Layer
   Edita aquí para actualizar todo el sitio
   ═══════════════════════════════════════ */

const DATA = {

  /* ── EMPRESA ── */
  company: {
    name: "PARAGON",
    tagline: "Plataforma de Conocimiento Industrial",
    industry: "Industria papelera · Forestal · Procesos continuos",
    version: "v1.0.0",
    year: 2025,
  },

  /* ── STATS HERO ── */
  stats: [
    { num: "6",  label: "Roles definidos" },
    { num: "4",  label: "Módulos clave" },
    { num: "2",  label: "Etapas evolutivas" },
    { num: "∞",  label: "Continuidad operacional" },
  ],

  /* ── PROBLEMA ── */
  problem: {
    metrics: [
      { num: "70%",  title: "Conocimiento tácito",   desc: "Del saber operacional existe solo en la mente de personas específicas, no en sistemas ni documentos.", color: "var(--blue)" },
      { num: "3–5",  title: "Años de experiencia",   desc: "Tarda un operador nuevo en alcanzar la competencia de un senior. Sin plataforma, el ciclo no mejora.", color: "var(--amber)" },
      { num: "Alto", title: "Riesgo operacional",    desc: "La dependencia de personas clave genera vulnerabilidad ante ausencias, rotación y jubilaciones.",       color: "var(--red)" },
      { num: "∅",    title: "Sin trazabilidad",      desc: "Procedimientos dispersos en PDFs, manuales físicos y memorias individuales sin versiones ni control.",   color: "var(--gray-500)" },
    ],
    symptoms: [
      { title: "Síntoma 1", desc: "Manuales desactualizados o sin versiones vigentes accesibles al operador." },
      { title: "Síntoma 2", desc: "Capacitaciones informales sin registro ni evaluación de competencias adquiridas." },
      { title: "Síntoma 3", desc: "Alta dependencia de individuos clave para resolver fallas y situaciones no estándar." },
    ],
  },

  /* ── MÓDULOS ── */
  modules: [
    {
      icon: "ti-gauge", color: "var(--purple)", bg: "var(--purple-light)", tag: "Core",
      name: "Dashboard", desc: "Centro de control en tiempo real con KPIs, alertas y estado de capacitación por área.",
      items: ["Dashboard ejecutivo", "Alertas y notificaciones", "Indicadores clave"],
      feats: [
        { icon: "ti-chart-bar",   title: "KPIs en tiempo real",      desc: "Cumplimiento, avance y certificaciones actualizadas al instante." },
        { icon: "ti-bell",        title: "Alertas automáticas",       desc: "Notificaciones de vencimientos, nuevas capacitaciones y eventos críticos." },
        { icon: "ti-layout-grid", title: "Vista por rol",             desc: "Cada usuario ve los indicadores relevantes a su cargo y área." },
      ],
    },
    {
      icon: "ti-users", color: "var(--blue)", bg: "var(--blue-light)", tag: "Core",
      name: "Usuarios y roles", desc: "Gestión completa de la estructura organizacional con perfiles, cargos, áreas y competencias técnicas.",
      items: ["Maestro de usuarios", "Asignación de roles", "Gestión de supervisores"],
      feats: [
        { icon: "ti-user-check",     title: "Perfiles por cargo y área",  desc: "Segmentación de contenido por planta y nivel de especialización." },
        { icon: "ti-certificate",    title: "Competencias técnicas",      desc: "Capacitaciones completadas, pendientes y vencidas por operador." },
        { icon: "ti-shield-lock",    title: "Control de acceso granular", desc: "6 roles con permisos diferenciados sobre cada módulo." },
        { icon: "ti-building-factory", title: "Multi-planta",            desc: "Soporte para múltiples plantas con equipos y áreas independientes." },
      ],
    },
    {
      icon: "ti-school", color: "var(--blue)", bg: "var(--blue-light)", tag: "Core",
      name: "Capacitaciones", desc: "Creación y gestión de entrenamientos industriales especializados con evaluaciones, multimedia y flujo de aprobación.",
      items: ["Maestro / Crear cursos", "Asignaciones", "Mis capacitaciones", "Evaluaciones", "Certificaciones", "Matriz de competencias"],
      feats: [
        { icon: "ti-video",           title: "Contenido multimedia",    desc: "Vídeos, presentaciones, instructivos y evaluaciones integradas." },
        { icon: "ti-git-pull-request", title: "Flujo de aprobación",   desc: "Validación técnica obligatoria antes de publicación oficial." },
        { icon: "ti-versions",        title: "Control de versiones",    desc: "Historial de cambios y trazabilidad completa de cada curso." },
        { icon: "ti-chart-line",      title: "Seguimiento de avance",   desc: "Estado por colaborador: completado, pendiente, vencido." },
      ],
    },
    {
      icon: "ti-library", color: "var(--blue)", bg: "var(--blue-light)", tag: "Core",
      name: "Biblioteca técnica", desc: "Repositorio centralizado de manuales, SOPs, checklists, P&ID y documentación crítica. Siempre la versión vigente.",
      items: ["Manuales", "Checklists", "P&ID", "Fallas frecuentes"],
      feats: [
        { icon: "ti-search",      title: "Búsqueda avanzada",    desc: "Indexación por área técnica, equipo, tipo y palabras clave." },
        { icon: "ti-file-check",  title: "Control documental",   desc: "Versiones vigentes, fechas de revisión y estado de aprobación." },
        { icon: "ti-category",    title: "Categorización técnica", desc: "Por plantas, líneas de proceso, sistemas y equipos." },
        { icon: "ti-download",    title: "Descarga controlada",  desc: "Acceso según rol y área. Registro de descargas por usuario." },
      ],
    },
    {
      icon: "ti-robot", color: "var(--purple)", bg: "var(--purple-light)", tag: "Etapa 2",
      name: "IA Industrial", desc: "Chatbot técnico industrial que responde en lenguaje natural usando documentación interna validada. RAG sobre base propia.",
      items: ["Chat técnico (IA)", "RAG documental", "Contexto por rol y área"],
      feats: [
        { icon: "ti-message-chatbot", title: "Chatbot en lenguaje natural", desc: "Preguntas sobre procedimientos y troubleshooting respondidas al instante." },
        { icon: "ti-database",        title: "RAG sobre base propia",       desc: "El modelo responde solo desde manuales y SOPs aprobados." },
        { icon: "ti-brain",           title: "Contexto operacional",        desc: "Respuestas personalizadas según cargo, planta y área del usuario." },
        { icon: "ti-shield-check",    title: "Sin alucinaciones",           desc: "Respuestas acotadas a la documentación interna validada." },
      ],
    },
    {
      icon: "ti-chart-bar", color: "var(--green)", bg: "var(--green-light)", tag: "Core",
      name: "Analytics", desc: "Dashboards ejecutivos, métricas de cumplimiento y reportes automáticos para supervisión estratégica.",
      items: ["KPIs capacitación", "Cumplimiento", "Métricas de uso", "Métricas IA", "Reportes"],
      feats: [
        { icon: "ti-report-analytics", title: "Reportes automáticos",     desc: "Exportables para dirección y organismos reguladores." },
        { icon: "ti-progress",         title: "Cumplimiento por área",    desc: "Vista global y por área del avance de capacitación." },
        { icon: "ti-trending-up",      title: "Tendencias históricas",    desc: "Evolución del conocimiento operacional en el tiempo." },
      ],
    },
    {
      icon: "ti-settings", color: "var(--amber)", bg: "var(--amber-light)", tag: "Core",
      name: "Administración", desc: "Configuración general de la plataforma, flujos de aprobación y auditoría completa de acciones.",
      items: ["Configuración general", "Flujos de aprobación", "Auditoría"],
      feats: [
        { icon: "ti-settings",    title: "Config. general",       desc: "Parámetros de la plataforma, notificaciones e integraciones." },
        { icon: "ti-git-branch",  title: "Flujos personalizables", desc: "Define quién revisa y aprueba cada tipo de contenido." },
        { icon: "ti-clipboard-data", title: "Auditoría completa", desc: "Log de todas las acciones con usuario, fecha y detalle." },
      ],
    },
    {
      icon: "ti-help", color: "var(--gray-700)", bg: "var(--gray-100)", tag: "Core",
      name: "Soporte", desc: "Centro de ayuda integrado, gestión de tickets y documentación de la plataforma.",
      items: ["Centro de ayuda", "Contacto soporte", "Tickets", "Documentación plataforma"],
      feats: [
        { icon: "ti-help",         title: "Centro de ayuda",   desc: "Artículos y guías de uso por módulo y rol." },
        { icon: "ti-ticket",       title: "Gestión de tickets", desc: "Seguimiento de incidencias con SLA según plan." },
        { icon: "ti-file-text",    title: "Documentación",     desc: "Manual técnico y de administración de la plataforma." },
      ],
    },
  ],

  /* ── ROLES ── */
  roles: [
    {
      name: "Administrador general", goal: "Administrar completamente la plataforma",
      level: "Sistema", levelBg: "var(--purple-light)", levelColor: "var(--purple-dark)",
      icon: "ti-shield-cog", iconBg: "var(--purple-light)", iconColor: "var(--purple)",
      perms: ["Crear y gestionar usuarios", "Asignar roles y permisos", "Configuración general", "Publicar capacitaciones", "Acceso total a todos los módulos"],
      permIcons: ["ti-users-plus", "ti-key", "ti-settings", "ti-rocket", "ti-lock-open"],
      modules: ["Usuarios", "Capacit.", "Biblioteca", "KPIs", "Config.", "IA"],
      access:  [1, 1, 1, 1, 1, 1],
    },
    {
      name: "Instructor / Autor técnico", goal: "Crear contenido técnico y capacitaciones",
      level: "Contenido", levelBg: "var(--blue-light)", levelColor: "var(--blue-dark)",
      icon: "ti-pencil-bolt", iconBg: "var(--blue-light)", iconColor: "var(--blue)",
      perms: ["Crear y editar cursos técnicos", "Diseñar evaluaciones", "Subir contenido multimedia", "Mantener versiones", "Enviar a revisión y aprobación"],
      permIcons: ["ti-book-2", "ti-puzzle", "ti-upload", "ti-versions", "ti-send"],
      modules: ["Usuarios", "Capacit.", "Biblioteca", "KPIs", "Config.", "IA"],
      access:  [0, 1, 1, 0, 0, 0],
    },
    {
      name: "Supervisor / Jefe de área", goal: "Gestionar cumplimiento del equipo",
      level: "Gestión", levelBg: "var(--green-light)", levelColor: "var(--green-dark)",
      icon: "ti-chart-dots-3", iconBg: "var(--green-light)", iconColor: "var(--green)",
      perms: ["Asignar capacitaciones", "Monitorear avance del equipo", "Revisar cumplimiento", "Visualizar KPIs del área", "Estado de certificaciones"],
      permIcons: ["ti-clipboard-check", "ti-progress", "ti-checklist", "ti-chart-bar", "ti-eye"],
      modules: ["Usuarios", "Capacit.", "Biblioteca", "KPIs", "Config.", "IA"],
      access:  [0, 1, 1, 1, 0, 0],
    },
    {
      name: "Gerencia", goal: "Supervisión estratégica y cumplimiento",
      level: "Estratégico", levelBg: "var(--amber-light)", levelColor: "var(--amber)",
      icon: "ti-building-skyscraper", iconBg: "var(--amber-light)", iconColor: "var(--amber)",
      perms: ["Dashboards ejecutivos", "Métricas y reportes globales", "Auditoría", "Estado global por planta", "Solo lectura"],
      permIcons: ["ti-dashboard", "ti-report-analytics", "ti-clipboard-data", "ti-world", "ti-lock"],
      modules: ["Usuarios", "Capacit.", "Biblioteca", "KPIs", "Config.", "IA"],
      access:  [0, 0, 0, 1, 1, 0],
    },
    {
      name: "Colaborador", goal: "Consumir contenido y capacitarse",
      level: "Operacional", levelBg: "var(--gray-100)", levelColor: "var(--gray-700)",
      icon: "ti-user-check", iconBg: "var(--gray-100)", iconColor: "var(--gray-700)",
      perms: ["Realizar capacitaciones asignadas", "Consultar manuales", "Descargar documentación", "Usar asistente IA (E2)", "Ver historial y certificaciones"],
      permIcons: ["ti-player-play", "ti-file-search", "ti-download", "ti-robot", "ti-certificate"],
      modules: ["Usuarios", "Capacit.", "Biblioteca", "KPIs", "Config.", "IA"],
      access:  [0, 1, 1, 0, 0, 1],
    },
    {
      name: "Admin. documental", goal: "Gestionar documentación técnica oficial",
      level: "Documental", levelBg: "#FAECE7", levelColor: "#712B13",
      icon: "ti-files", iconBg: "#FAECE7", iconColor: "#993C1D",
      perms: ["Subir manuales y documentos", "Controlar versiones", "Clasificar documentos", "Administrar vigencia", "Aprobar y publicar documentación"],
      permIcons: ["ti-upload", "ti-versions", "ti-category-2", "ti-calendar-check", "ti-file-check"],
      modules: ["Usuarios", "Capacit.", "Biblioteca", "KPIs", "Config.", "IA"],
      access:  [0, 0, 1, 0, 0, 0],
    },
  ],

  /* ── FLUJO DE APROBACIÓN ── */
  flow: {
    steps: [
      { num: "01", title: "Borrador",    desc: "El Instructor crea el contenido técnico, sube material y configura evaluaciones.", who: "Instructor",         whoBg: "var(--blue-light)",   whoColor: "var(--blue-dark)",   numColor: "#B5D4F4" },
      { num: "02", title: "En revisión", desc: "El contenido es enviado a revisión técnica. No puede modificarse durante este estado.", who: "Instructor → Revisor", whoBg: "var(--amber-light)", whoColor: "var(--amber)",       numColor: "#FAC775" },
      { num: "03", title: "Aprobado",    desc: "El revisor valida el contenido. Puede solicitar correcciones o aprobar para publicación.", who: "Supervisor / Admin", whoBg: "var(--green-light)", whoColor: "var(--green-dark)",  numColor: "#9FE1CB" },
      { num: "04", title: "Publicado",   desc: "La capacitación queda disponible para los colaboradores según su rol y área.", who: "Admin general",   whoBg: "var(--purple-light)", whoColor: "var(--purple-dark)", numColor: "#CECBF6" },
    ],
    rules: [
      { icon: "ti-git-branch",    title: "Control de versiones",    desc: "Cada modificación genera una nueva versión. El historial completo es trazable." },
      { icon: "ti-lock",          title: "Sin publicación directa",  desc: "Ningún Instructor puede publicar sin pasar por revisión y aprobación técnica." },
      { icon: "ti-history",       title: "Historial de cambios",     desc: "Cada transición queda registrada con usuario, fecha y comentario." },
      { icon: "ti-alert-circle",  title: "Notificaciones de estado", desc: "Los responsables reciben alertas al cambiar el estado de una capacitación." },
      { icon: "ti-rotate",        title: "Ciclo de corrección",      desc: "Si se rechazan cambios, vuelve a Borrador con comentarios del revisor." },
      { icon: "ti-archive",       title: "Versiones archivadas",     desc: "Al publicar nueva versión, la anterior queda archivada y accesible." },
    ],
  },

  /* ── GANTT ── */
  gantt: {
    weeks: 10,
    phases: [
      { label: "Maqueta", color: "#85B7EB", rows: [
        { name: "Diseño UI/UX", sub: "Wireframes y prototipos", start: 0, dur: 2 },
      ]},
      { label: "Desarrollo", color: "var(--blue)", rows: [
        { name: "Mantenedores y roles",   sub: "Usuarios, permisos, estructura",  start: 2, dur: 2, color: "var(--blue)" },
        { name: "Módulo capacitaciones",  sub: "Creación de cursos y evaluaciones", start: 4, dur: 1, color: "var(--blue)" },
        { name: "Módulo ejecución",       sub: "Asignaciones y seguimiento",      start: 5, dur: 1, color: "var(--blue)" },
        { name: "Biblioteca técnica",     sub: "Manuales, checklists, P&ID",      start: 6, dur: 1, color: "var(--blue)" },
        { name: "Módulo IA + Chatbot",    sub: "RAG sobre base documental",       start: 7, dur: 1, color: "var(--purple)" },
      ]},
      { label: "Pruebas", color: "var(--green)", rows: [
        { name: "QA y validación", sub: "Testing funcional y de carga", start: 8, dur: 2, color: "var(--green)" },
      ]},
    ],
  },

  /* ── ROADMAP ── */
  roadmap: [
    { label: "Etapa 1 — Base sólida", title: "Gestión del conocimiento", labelColor: "var(--blue)",
      milestones: [
        { text: "Módulo de usuarios, roles y permisos", tag: "Sprint 1-2" },
        { text: "Módulo de capacitaciones técnicas",    tag: "Sprint 3-4" },
        { text: "Flujo de revisión y aprobación",       tag: "Sprint 4-5" },
        { text: "Biblioteca documental centralizada",   tag: "Sprint 5-6" },
        { text: "KPIs y reportes de cumplimiento",      tag: "Sprint 7"   },
      ],
      tagBg: "var(--blue-light)", tagColor: "var(--blue-dark)",
      dots: ["#B5D4F4", "#85B7EB", "#378ADD", "#185FA5", "#0C447C"],
    },
    { label: "Etapa 2 — Evolución inteligente", title: "Inteligencia artificial", labelColor: "var(--purple)",
      milestones: [
        { text: "Pipeline RAG sobre documentación interna",  tag: "Sprint 1-2" },
        { text: "Chatbot industrial con contexto de rol",    tag: "Sprint 3-4" },
        { text: "Integración con Biblioteca documental",     tag: "Sprint 4"   },
        { text: "Respuestas con citas a documentos fuente",  tag: "Sprint 5"   },
        { text: "Panel de trazabilidad de consultas IA",     tag: "Sprint 6"   },
      ],
      tagBg: "var(--purple-light)", tagColor: "var(--purple-dark)",
      dots: ["#AFA9EC", "#8F87E0", "#7F77DD", "#534AB7", "#3C3489"],
    },
  ],

  /* ── PRICING ── */
  pricing: {
    plans: [
      {
        name: "Starter", target: "1 planta · piloto", price: 1000, users: "Hasta 50 usuarios",
        color: "var(--blue)", featured: false,
        includes: ["Usuarios y roles completos", "Módulo de capacitaciones", "Biblioteca documental", "Dashboard y KPIs básicos", "Flujos de aprobación"],
        excludes: ["IA / Chatbot técnico", "Multi-planta"],
        margin: "~USD 640/mes",  marginBg: "var(--green-light)",  marginColor: "var(--green-dark)",
        note: "Costo empresa: ~USD 20/usuario/mes",
      },
      {
        name: "Professional", target: "Empresa mediana · con IA", price: 3000, users: "Hasta 150 usuarios",
        color: "var(--blue)", featured: true,
        includes: ["Todo lo de Starter", "Chat técnico IA (RAG)", "Analytics avanzado", "Hasta 3 plantas", "Reportes ejecutivos"],
        excludes: ["Plantas ilimitadas"],
        margin: "~USD 2.640/mes", marginBg: "var(--blue-light)", marginColor: "var(--blue-dark)",
        note: "Costo empresa: ~USD 20/usuario/mes",
      },
      {
        name: "Enterprise", target: "Corporativo · toda la operación", price: 5000, users: "Usuarios ilimitados",
        color: "var(--purple)", featured: false,
        includes: ["Todo lo de Professional", "Plantas ilimitadas", "SLA y soporte prioritario", "Onboarding dedicado", "Integraciones a medida", "Descuento contrato anual"],
        excludes: [],
        margin: "~USD 4.640/mes", marginBg: "var(--purple-light)", marginColor: "var(--purple-dark)",
        note: "Arauco, CMPC, Masisa, Celco…",
      },
    ],
    scenarios: [
      { label: "Año 1 — Conservador", s: 2, p: 1, e: 0 },
      { label: "Año 1 — Base",        s: 2, p: 2, e: 1 },
      { label: "Año 2 — Crecimiento", s: 3, p: 4, e: 2 },
      { label: "Año 3 — Escala",      s: 4, p: 6, e: 3 },
    ],
    baseCost: 360,
  },

};
