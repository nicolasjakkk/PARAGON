/* ═══════════════════════════════════════
   PARAGON — Data Layer
   Edita aquí para actualizar todo el sitio
   ═══════════════════════════════════════ */

const DATA = {

  company: {
    name: "PARAGON",
    tagline: "Plataforma de Conocimiento Industrial",
    industry: "Industria papelera · Forestal · Procesos continuos",
    version: "v1.0.0",
    year: 2025,
  },

  stats: [
    { num: "5",  label: "Roles definidos" },
    { num: "8",  label: "Módulos clave" },
    { num: "2",  label: "Etapas evolutivas" },
    { num: "∞",  label: "Continuidad operacional" },
  ],

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

  modules: [
    {
      icon: "ti-gauge", color: "var(--purple)", bg: "var(--purple-light)", tag: "Core",
      name: "Dashboard", desc: "Centro de control en tiempo real con KPIs, alertas y estado de capacitación por área.",
      items: ["Dashboard ejecutivo", "Alertas y notificaciones", "Indicadores clave"],
      feats: [
        { icon: "ti-chart-bar",   title: "KPIs en tiempo real",  desc: "Cumplimiento, avance y certificaciones actualizadas al instante." },
        { icon: "ti-bell",        title: "Alertas automáticas",  desc: "Notificaciones de vencimientos, nuevas capacitaciones y eventos críticos." },
        { icon: "ti-layout-grid", title: "Vista por rol",        desc: "Cada usuario ve los indicadores relevantes a su cargo y área." },
      ],
    },
    {
      icon: "ti-school", color: "var(--blue)", bg: "var(--blue-light)", tag: "Core",
      name: "Capacitaciones", desc: "Creación y gestión de entrenamientos industriales especializados con evaluaciones, multimedia y flujo de aprobación.",
      items: ["Maestro / Crear cursos", "Asignaciones", "Mis capacitaciones", "Evaluaciones", "Certificaciones", "Matriz de competencias"],
      feats: [
        { icon: "ti-video",            title: "Contenido multimedia",  desc: "Vídeos, presentaciones, instructivos y evaluaciones integradas." },
        { icon: "ti-git-pull-request", title: "Flujo de aprobación",   desc: "Validación técnica obligatoria antes de publicación oficial." },
        { icon: "ti-versions",         title: "Control de versiones",  desc: "Historial de cambios y trazabilidad completa de cada curso." },
        { icon: "ti-chart-line",       title: "Seguimiento de avance", desc: "Estado por colaborador: completado, pendiente, vencido." },
      ],
    },
    {
      icon: "ti-library", color: "var(--blue)", bg: "var(--blue-light)", tag: "Core",
      name: "Biblioteca técnica", desc: "Repositorio centralizado de manuales, SOPs, checklists, P&ID y documentación crítica. Siempre la versión vigente.",
      items: ["Manuales", "Checklists", "P&ID", "Fallas frecuentes"],
      feats: [
        { icon: "ti-search",     title: "Búsqueda avanzada",     desc: "Indexación por área técnica, equipo, tipo y palabras clave." },
        { icon: "ti-file-check", title: "Control documental",    desc: "Versiones vigentes, fechas de revisión y estado de aprobación." },
        { icon: "ti-category",   title: "Categorización técnica",desc: "Por plantas, líneas de proceso, sistemas y equipos." },
        { icon: "ti-download",   title: "Descarga controlada",   desc: "Acceso según rol y área. Registro de descargas por usuario." },
      ],
    },
    {
      icon: "ti-robot", color: "var(--purple)", bg: "var(--purple-light)", tag: "Etapa 2",
      name: "IA Industrial", desc: "Chatbot técnico industrial que responde en lenguaje natural usando documentación interna validada. RAG sobre base propia.",
      items: ["Chat técnico (IA)", "RAG documental", "Contexto por rol y área"],
      feats: [
        { icon: "ti-message-chatbot", title: "Chatbot en lenguaje natural", desc: "Preguntas sobre procedimientos y troubleshooting al instante." },
        { icon: "ti-database",        title: "RAG sobre base propia",       desc: "El modelo responde solo desde manuales y SOPs aprobados." },
        { icon: "ti-brain",           title: "Contexto operacional",        desc: "Respuestas personalizadas según cargo, planta y área." },
        { icon: "ti-shield-check",    title: "Sin alucinaciones",           desc: "Respuestas acotadas a la documentación interna validada." },
      ],
    },
    {
      icon: "ti-chart-bar", color: "var(--green)", bg: "var(--green-light)", tag: "Core",
      name: "Analytics", desc: "Dashboards ejecutivos, métricas de cumplimiento y reportes automáticos para supervisión estratégica.",
      items: ["KPIs capacitación", "Cumplimiento", "Métricas de uso", "Métricas IA", "Reportes"],
      feats: [
        { icon: "ti-report-analytics", title: "Reportes automáticos",  desc: "Exportables para dirección y organismos reguladores." },
        { icon: "ti-progress",         title: "Cumplimiento por área", desc: "Vista global y por área del avance de capacitación." },
        { icon: "ti-trending-up",      title: "Tendencias históricas", desc: "Evolución del conocimiento operacional en el tiempo." },
      ],
    },
    {
      icon: "ti-settings", color: "var(--amber)", bg: "var(--amber-light)", tag: "Core",
      name: "Administración", desc: "Configuración general de la plataforma, flujos de aprobación y auditoría completa de acciones.",
      items: ["Configuración general", "Flujos de aprobación", "Auditoría"],
      feats: [
        { icon: "ti-settings",       title: "Config. general",        desc: "Parámetros de la plataforma, notificaciones e integraciones." },
        { icon: "ti-git-branch",     title: "Flujos personalizables", desc: "Define quién revisa y aprueba cada tipo de contenido." },
        { icon: "ti-clipboard-data", title: "Auditoría completa",     desc: "Log de todas las acciones con usuario, fecha y detalle." },
      ],
    },
    {
      icon: "ti-git-merge", color: "var(--green)", bg: "var(--green-light)", tag: "Core",
      name: "Matriz de competencias", desc: "Mapa visual de habilidades técnicas requeridas y adquiridas por cargo, área y planta.",
      items: ["Competencias por cargo", "Brechas de habilidad", "Plan de desarrollo"],
      feats: [
        { icon: "ti-map",          title: "Mapa de habilidades",  desc: "Visibilidad completa de competencias requeridas vs adquiridas." },
        { icon: "ti-alert-circle", title: "Detección de brechas", desc: "Identifica automáticamente gaps de conocimiento por área." },
        { icon: "ti-road",         title: "Plan de desarrollo",   desc: "Sugerencias de capacitaciones para cerrar brechas detectadas." },
      ],
    },
    {
      icon: "ti-help", color: "var(--gray-700)", bg: "var(--gray-100)", tag: "Core",
      name: "Soporte", desc: "Centro de ayuda integrado, gestión de tickets y documentación de la plataforma.",
      items: ["Centro de ayuda", "Contacto soporte", "Tickets", "Documentación plataforma"],
      feats: [
        { icon: "ti-help",      title: "Centro de ayuda",    desc: "Artículos y guías de uso por módulo y rol." },
        { icon: "ti-ticket",    title: "Gestión de tickets", desc: "Seguimiento de incidencias con SLA según plan." },
        { icon: "ti-file-text", title: "Documentación",      desc: "Manual técnico y de administración de la plataforma." },
      ],
    },
  ],

  roles: [
    {
      name: "Administrador general",
      goal: "Administrar completamente la plataforma",
      level: "Sistema", levelBg: "var(--purple-light)", levelColor: "var(--purple-dark)",
      icon: "ti-shield-cog", iconBg: "var(--purple-light)", iconColor: "var(--purple)",
      perms: [
        "Gestionar usuarios y asignar roles",
        "Administrar permisos especiales",
        "Configurar el sistema y parámetros",
        "Auditoría completa de la plataforma",
        "Gestionar integraciones externas",
        "Acceder a analytics globales",
        "Administrar capacitaciones y contenido",
      ],
      permIcons: ["ti-users-plus","ti-key","ti-settings","ti-clipboard-data","ti-plug","ti-chart-bar","ti-school"],
      modules: ["Dashboard","Capacit.","Biblioteca","IA","Analytics","Admin.","Matriz","Soporte"],
      access:  [1, 1, 1, 1, 1, 1, 1, 1],
    },
    {
      name: "Gestor de capacitación",
      goal: "Ciclo completo de capacitación y desarrollo",
      level: "Contenido", levelBg: "var(--blue-light)", levelColor: "var(--blue-dark)",
      icon: "ti-school", iconBg: "var(--blue-light)", iconColor: "var(--blue)",
      perms: [
        "Crear, editar y versionar capacitaciones",
        "Asignar cursos a colaboradores",
        "Gestionar evaluaciones y resultados",
        "Administrar certificaciones",
        "Gestionar competencias técnicas",
        "Subir y mantener documentación técnica",
      ],
      permIcons: ["ti-book-2","ti-clipboard-check","ti-puzzle","ti-certificate","ti-git-merge","ti-upload"],
      modules: ["Dashboard","Capacit.","Biblioteca","IA","Analytics","Admin.","Matriz","Soporte"],
      access:  [0, 1, 1, 0, 0, 0, 1, 0],
    },
    {
      name: "Jefe de área / Supervisor",
      goal: "Desarrollo y cumplimiento del equipo",
      level: "Gestión", levelBg: "var(--green-light)", levelColor: "var(--green-dark)",
      icon: "ti-chart-dots-3", iconBg: "var(--green-light)", iconColor: "var(--green)",
      perms: [
        "Asignar capacitaciones a su equipo",
        "Monitorear avance y cumplimiento",
        "Revisar habilidades e identificar brechas",
        "Solicitar nuevas capacitaciones",
        "Visualizar indicadores de su área",
      ],
      permIcons: ["ti-clipboard-check","ti-progress","ti-eye","ti-send","ti-chart-bar"],
      modules: ["Dashboard","Capacit.","Biblioteca","IA","Analytics","Admin.","Matriz","Soporte"],
      access:  [1, 1, 0, 0, 1, 0, 1, 0],
    },
    {
      name: "Colaborador",
      goal: "Consumir conocimiento y desarrollar competencias",
      level: "Operacional", levelBg: "var(--gray-100)", levelColor: "var(--gray-700)",
      icon: "ti-user-check", iconBg: "var(--gray-100)", iconColor: "var(--gray-700)",
      perms: [
        "Realizar capacitaciones asignadas",
        "Rendir evaluaciones",
        "Consultar manuales y documentación",
        "Utilizar el asistente IA",
        "Descargar documentación autorizada",
        "Participar en foros y aportes",
      ],
      permIcons: ["ti-player-play","ti-clipboard","ti-file-search","ti-robot","ti-download","ti-messages"],
      modules: ["Dashboard","Capacit.","Biblioteca","IA","Analytics","Admin.","Matriz","Soporte"],
      access:  [0, 1, 1, 1, 0, 0, 0, 1],
    },
    {
      name: "Gerencia",
      goal: "Supervisión del desempeño organizacional",
      level: "Estratégico", levelBg: "var(--amber-light)", levelColor: "var(--amber)",
      icon: "ti-building-skyscraper", iconBg: "var(--amber-light)", iconColor: "var(--amber)",
      perms: [
        "Visualizar KPIs y cumplimiento global",
        "Ver indicadores y métricas IA",
        "Revisar certificaciones por área",
        "Acceder a reportes ejecutivos",
        "Solo lectura — sin edición de contenido",
      ],
      permIcons: ["ti-chart-bar","ti-brain","ti-certificate","ti-file-analytics","ti-lock"],
      modules: ["Dashboard","Capacit.","Biblioteca","IA","Analytics","Admin.","Matriz","Soporte"],
      access:  [1, 0, 0, 0, 1, 0, 0, 0],
    },
  ],

  flow: {
    steps: [
      { num: "01", title: "Borrador",    desc: "El Gestor crea el contenido técnico, sube material y configura evaluaciones.", who: "Gestor capacitación", whoBg: "var(--blue-light)",   whoColor: "var(--blue-dark)",   numColor: "#B5D4F4" },
      { num: "02", title: "En revisión", desc: "El contenido es enviado a revisión técnica. No puede modificarse durante este estado.", who: "Gestor → Revisor",    whoBg: "var(--amber-light)", whoColor: "var(--amber)",       numColor: "#FAC775" },
      { num: "03", title: "Aprobado",    desc: "El revisor valida el contenido. Puede solicitar correcciones o aprobar para publicación.", who: "Jefe de área / Admin", whoBg: "var(--green-light)", whoColor: "var(--green-dark)",  numColor: "#9FE1CB" },
      { num: "04", title: "Publicado",   desc: "La capacitación queda disponible para los colaboradores según su rol y área.", who: "Administrador",      whoBg: "var(--purple-light)", whoColor: "var(--purple-dark)", numColor: "#CECBF6" },
    ],
    rules: [
      { icon: "ti-git-branch",   title: "Control de versiones",    desc: "Cada modificación genera una nueva versión. El historial completo es trazable." },
      { icon: "ti-lock",         title: "Sin publicación directa",  desc: "Ningún Gestor puede publicar sin pasar por revisión y aprobación." },
      { icon: "ti-history",      title: "Historial de cambios",     desc: "Cada transición queda registrada con usuario, fecha y comentario." },
      { icon: "ti-alert-circle", title: "Notificaciones de estado", desc: "Los responsables reciben alertas al cambiar el estado de una capacitación." },
      { icon: "ti-rotate",       title: "Ciclo de corrección",      desc: "Si se rechazan cambios, vuelve a Borrador con comentarios del revisor." },
      { icon: "ti-archive",      title: "Versiones archivadas",     desc: "Al publicar nueva versión, la anterior queda archivada y accesible." },
    ],
  },

  gantt: {
    weeks: 10,
    phases: [
      { label: "Maqueta", color: "#85B7EB", rows: [
        { name: "Diseño UI/UX", sub: "Wireframes y prototipos", start: 0, dur: 2 },
      ]},
      { label: "Desarrollo", color: "var(--blue)", rows: [
        { name: "Mantenedores y roles",  sub: "Usuarios, permisos, estructura",   start: 2, dur: 2, color: "var(--blue)" },
        { name: "Módulo capacitaciones", sub: "Creación de cursos y evaluaciones", start: 4, dur: 1, color: "var(--blue)" },
        { name: "Módulo ejecución",      sub: "Asignaciones y seguimiento",        start: 5, dur: 1, color: "var(--blue)" },
        { name: "Biblioteca técnica",    sub: "Manuales, checklists, P&ID",        start: 6, dur: 1, color: "var(--blue)" },
        { name: "Módulo IA + Chatbot",   sub: "RAG sobre base documental",         start: 7, dur: 1, color: "var(--purple)" },
      ]},
      { label: "Pruebas", color: "var(--green)", rows: [
        { name: "QA y validación", sub: "Testing funcional y de carga", start: 8, dur: 2, color: "var(--green)" },
      ]},
    ],
  },

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
      dots: ["#B5D4F4","#85B7EB","#378ADD","#185FA5","#0C447C"],
    },
    { label: "Etapa 2 — Evolución inteligente", title: "Inteligencia artificial", labelColor: "var(--purple)",
      milestones: [
        { text: "Pipeline RAG sobre documentación interna", tag: "Sprint 1-2" },
        { text: "Chatbot industrial con contexto de rol",   tag: "Sprint 3-4" },
        { text: "Integración con Biblioteca documental",    tag: "Sprint 4"   },
        { text: "Respuestas con citas a documentos fuente", tag: "Sprint 5"   },
        { text: "Panel de trazabilidad de consultas IA",    tag: "Sprint 6"   },
      ],
      tagBg: "var(--purple-light)", tagColor: "var(--purple-dark)",
      dots: ["#AFA9EC","#8F87E0","#7F77DD","#534AB7","#3C3489"],
    },
  ],

  pricing: {
    plans: [
      {
        name: "Starter", target: "1 planta · piloto", price: 1000, users: "Hasta 50 usuarios",
        color: "var(--blue)", featured: false,
        includes: ["Usuarios y roles completos","Módulo de capacitaciones","Biblioteca documental","Dashboard y KPIs básicos","Flujos de aprobación"],
        excludes: ["IA / Chatbot técnico","Multi-planta"],
        margin: "~USD 640/mes", marginBg: "var(--green-light)", marginColor: "var(--green-dark)",
        note: "Costo empresa: ~USD 20/usuario/mes",
      },
      {
        name: "Professional", target: "Empresa mediana · con IA", price: 3000, users: "Hasta 150 usuarios",
        color: "var(--blue)", featured: true,
        includes: ["Todo lo de Starter","Chat técnico IA (RAG)","Analytics avanzado","Hasta 3 plantas","Reportes ejecutivos"],
        excludes: ["Plantas ilimitadas"],
        margin: "~USD 2.640/mes", marginBg: "var(--blue-light)", marginColor: "var(--blue-dark)",
        note: "Costo empresa: ~USD 20/usuario/mes",
      },
      {
        name: "Enterprise", target: "Corporativo · toda la operación", price: 5000, users: "Usuarios ilimitados",
        color: "var(--purple)", featured: false,
        includes: ["Todo lo de Professional","Plantas ilimitadas","SLA y soporte prioritario","Onboarding dedicado","Integraciones a medida","Descuento contrato anual"],
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
