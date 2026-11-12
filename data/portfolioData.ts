export interface PrincipleItem {
  id: string;
  number: string;
  label: string;
  title: string;
  description: string;
}

export interface ProjectItem {
  id: string;
  number: string;
  name: string;
  domain: string;
  category: string;
  summary: string;
  features: string[];
  tags: string[];
  liveUrl: string;
  logoPath: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  institution: string;
  date: string;
  detail: string;
  tags: string[];
  certificateImage: string;
}

export interface NextStepItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface VisionItem {
  id: string;
  horizon: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  url?: string;
  pillars: string[];
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Samuel Bustos Puntis",
    firstName: "Samuel",
    lastName: "Bustos Puntis",
    role: "Ingeniero en Sistemas de Información",
    focus: "Datos, Producto Digital & IA Aplicada",
    location: "Córdoba, Argentina",
    phone: "3584286325",
    phoneFormatted: "+54 9 358 428-6325",
    email: "samuelbustospuntis@gmail.com",
    avatarPath: "/retrato-avatar.png",
    bio: "Más que de una sola rama, me defino como ingeniero. Necesito resolver desafíos complejos y diseñar soluciones propias todo el tiempo: primero entiendo a fondo el contexto y después planifico cuidando los detalles que hacen la diferencia.",
    stats: [
      { label: "Título de grado", value: "Ingeniero en Sistemas" },
      { label: "Universidad", value: "UTN FRVM" },
      { label: "Especialización", value: "Data, Producto & IA" },
    ],
    socials: {
      linkedin: "https://www.linkedin.com/in/samuelbustospuntis",
      github: "https://github.com/samuelbustosp",
      email: "mailto:samuelbustospuntis@gmail.com",
      whatsapp: "https://wa.me/5493584286325",
    },
  },

  principles: [
    {
      id: "problems",
      number: "01",
      label: "Motor",
      title: "Los problemas como motivación",
      description:
        "Disfruto destrabar escenarios nuevos y pensar soluciones propias en lugar de aplicar recetas genéricas.",
    },
    {
      id: "context",
      number: "02",
      label: "Método",
      title: "Contexto antes de planificar",
      description:
        "Para construir desde cero primero entiendo el entorno real; recién ahí diseño cuidando cada detalle.",
    },
    {
      id: "data",
      number: "03",
      label: "Dirección",
      title: "Los datos son el timón",
      description:
        "Son la conducción real de cualquier organización. Sin lectura clara se navega a ciegas; con datos hay rumbo.",
    },
    {
      id: "ai",
      number: "04",
      label: "Criterio",
      title: "IA con propósito real",
      description:
        "La inteligencia artificial multiplica valor cuando resuelve una necesidad concreta, nunca como decoración.",
    },
  ] as PrincipleItem[],

  projects: [
    {
      id: "takeo",
      number: "01",
      name: "TAKEO",
      domain: "takeo-nu.vercel.app",
      category: "Gastronomía · Pedidos & KDS",
      summary:
        "Plataforma de pedidos web directos y monitor de cocina en vivo para que los locales vendan sin comisiones.",
      features: [
        "Pedidos desde el celular en 3 toques vía QR o link directo",
        "Tablero Kanban de cocina en tiempo real con aviso al cliente",
        "100% del margen para el comercio, sin intermediarios",
      ],
      tags: ["Next.js", "Tiempo Real", "KDS", "Producto Propio"],
      liveUrl: "https://takeo-nu.vercel.app/",
      logoPath: "/projects/logo-takeo.svg",
    },
    {
      id: "pointis",
      number: "02",
      name: "Pointis",
      domain: "pointis.vercel.app",
      category: "Retail · Punto de Venta & Gestión",
      summary:
        "Sistema POS ágil para comercios minoristas con control de stock crítico, arqueos de caja y margen neto real.",
      features: [
        "Carrito híbrido para productos por unidad y pesables ($ ↔ kg)",
        "Cierres de caja por turno, roles de empleados y alertas de stock",
        "Cálculo exacto de rentabilidad sobre costo y proveedores",
      ],
      tags: ["POS Web", "Modo Balanza", "Rentabilidad", "Gestión"],
      liveUrl: "https://pointis.vercel.app/",
      logoPath: "/projects/pointis-isologo.svg",
    },
    {
      id: "sofiabustos-nails",
      number: "03",
      name: "Sofía Bustos Studio",
      domain: "sofiabustosnails.vercel.app",
      category: "Servicios · Reservas & Backoffice",
      summary:
        "Experiencia digital, catálogo transparente y sistema de turnos online con panel de administración privado.",
      features: [
        "Agenda online automatizada según duración de cada servicio",
        "Catálogo claro con tiempos, valores y criterios de atención",
        "Panel administrativo privado para gestión diaria de turnos",
      ],
      tags: ["Reservas Online", "Panel Admin", "UX Editorial"],
      liveUrl: "https://sofiabustosnails.vercel.app/",
      logoPath: "/projects/LOGO-SB-1.jpg",
    },
  ] as ProjectItem[],

  education: {
    degree: "Ingeniería en Sistemas de Información",
    institution: "Universidad Tecnológica Nacional · Facultad Regional Villa María",
    period: "2020 – 2026",
    status: "Graduado",
    average: "8,44",
    summary:
      "Formación de grado en arquitectura de software, análisis de sistemas, ingeniería de datos y gestión de proyectos tecnológicos.",
  },

  certifications: [
    {
      id: "cert-ml",
      title: "Data Science II: Machine Learning",
      institution: "Coderhouse",
      date: "Oct 2026",
      detail: "Modelos predictivos supervisados y no supervisados · Avalado por Google",
      tags: ["Machine Learning", "Scikit-Learn", "Python"],
      certificateImage:
        "/certification/Certificado__Data_Science_II__Machine_Learning_para_la_Ciencia_de_Datos_2026-10-15_page-0001.jpg",
    },
    {
      id: "cert-de",
      title: "Data Engineering",
      institution: "Coderhouse",
      date: "Sep 2026",
      detail: "Arquitectura de datos en AWS e infraestructura como código con Terraform",
      tags: ["AWS", "Terraform", "Pipelines"],
      certificateImage:
        "/certification/Certificado__Data_Engineering_2026-09-21_page-0001.jpg",
    },
    {
      id: "cert-da",
      title: "Data Analytics",
      institution: "Coderhouse",
      date: "Abr 2026",
      detail: "Modelado de datos, diseño de KPIs y tableros ejecutivos · Avalado por Ualá",
      tags: ["Power BI", "SQL", "KPIs"],
      certificateImage: "/certification/data-analytics.png",
    },
    {
      id: "cert-react",
      title: "React JS",
      institution: "Coderhouse",
      date: "Sep 2023",
      detail: "Desarrollo frontend moderno · Top 10 camada · Avalado por Geopagos",
      tags: ["React", "Frontend", "APIs"],
      certificateImage: "/certification/react-js.png",
    },
  ] as CertificationItem[],

  nextSteps: [
    {
      id: "english",
      title: "Inglés Profesional",
      subtitle: "Próximo objetivo",
      description:
        "Profundizar fluidez oral y técnica para liderar proyectos y equipos internacionales.",
    },
    {
      id: "ai-engineering",
      title: "Ingeniería en IA",
      subtitle: "Próximo objetivo",
      description:
        "Especialización en arquitecturas de IA, agentes y automatización en entornos productivos.",
    },
  ] as NextStepItem[],

  visions: [
    {
      id: "factory",
      horizon: "Corto & Mediano Plazo",
      title: "Founder / CEO de BPS",
      description:
        "Crear y liderar BPS, una compañía tecnológica que acompañe a las empresas de punta a punta: desde el diagnóstico estratégico de qué necesitan hasta la ejecución técnica.",
      image: "/projects/logo-bps-factory.jpg",
      imageAlt: "Logo de BPS Factory",
      url: "https://bps-tech.vercel.app/",
      pillars: [
        "Consultoría estratégica de negocio",
        "Ingeniería, Analytics y Ciencia de Datos",
        "Automatización e IA aplicada",
        "Desarrollo de software a medida",
      ],
    },
    {
      id: "speaker",
      horizon: "Proyección a Futuro",
      title: "Comunicador & Conferencista",
      description:
        "Compartir mi recorrido laboral real, los desafíos que atravesé y cómo pienso la ingeniería. Dar charlas y conferencias que acerquen la tecnología con honestidad y criterio.",
      image: "/profile.jpg",
      imageAlt: "Samuel Bustos Puntis en conferencia con micrófono",
      pillars: [
        "Conferencias y charlas abiertas",
        "Relato honesto de experiencia real",
        "Divulgación de datos e ingeniería",
        "Mentoría y comunidad tecnológica",
      ],
    },
  ] as VisionItem[],
};
