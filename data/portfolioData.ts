export interface Project {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  category: "Data & Analytics" | "Full-Stack" | "Cloud & Architecture";
  description: string;
  highlights: string[];
  techStack: string[];
  metrics?: { label: string; value: string }[];
  featured?: boolean;
  githubUrl?: string;
  liveUrl?: string;
  badge: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  grade?: string;
  status: string;
  description?: string[];
  certificateImage?: string;
}

export interface CourseItem {
  id: string;
  title: string;
  institution: string;
  period: string;
  status?: "Completado" | "En curso";
  description: string;
  tags: string[];
  certificateImage?: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  description: string;
  skills: {
    name: string;
    level: "Avanzado" | "Intermedio" | "Especializado";
    highlight?: boolean;
  }[];
}

export interface PipelineStage {
  id: string;
  name: string;
  category: string;
  description: string;
  tools: string[];
  metric: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Samuel Bustos Puntis",
    role: "Ingeniero en Sistemas de Información",
    specialization: "Data Analyst & Data Scientist",
    location: "Córdoba, Argentina",
    phone: "3584286325",
    phoneFormatted: "+54 9 358 428-6325",
    email: "samuelbustospuntis@gmail.com",
    avatarPath: "/profile.jpg",
    status: "DISPONIBLE PARA PROYECTOS / CONTRATACIÓN",
    bio: "Ingeniero en Sistemas de Información graduado en la UTN con especialización integral en Data Analytics, Data Science e Ingeniería de Datos. Experto en diseñar arquitecturas de datos, pipelines ETL escalables, modelos predictivos de Machine Learning y dashboards analíticos de alto impacto para la toma de decisiones estratégicas.",
    socials: {
      linkedin: "https://www.linkedin.com/in/samuelbustospuntis",
      github: "https://github.com/samuelbustosp",
      email: "mailto:samuelbustospuntis@gmail.com",
      whatsapp: "https://wa.me/5493584286325",
    },
  },

  telemetry: [
    { label: "Promedio UTN", value: "8.44", unit: "PTS", highlight: true },
    { label: "Proyectos Clave", value: "3+", unit: "PROD", highlight: false },
    { label: "Stack Tech", value: "20+", unit: "TECHS", highlight: false },
    { label: "Estado Profesional", value: "Graduado", unit: "UTN FRVM", highlight: true },
  ],

  pipelineStages: [
    {
      id: "ingestion",
      name: "01. Ingesta & Fuentes",
      category: "Data Ingestion",
      description: "Recolección estructurada y no estructurada desde bases transaccionales, APIs REST y almacenamiento distribuido.",
      tools: ["PostgreSQL", "MySQL", "APIs REST", "AWS S3"],
      metric: "Multi-Source Feed",
    },
    {
      id: "etl",
      name: "02. ETL & Pipelines",
      category: "Data Processing",
      description: "Limpieza, estandarización y transformación analítica optimizada con Python y SQL avanzado.",
      tools: ["Python", "Pandas", "NumPy", "SQL Pipelines"],
      metric: "High Fidelity Data",
    },
    {
      id: "ml",
      name: "03. Machine Learning & IA",
      category: "Data Science",
      description: "Modelado predictivo supervisado y no supervisado, feature engineering y métricas de evaluación rigurosas.",
      tools: ["Scikit-learn", "Modelos Predictivos", "Preprocesamiento"],
      metric: "Predictive Insights",
    },
    {
      id: "infra",
      name: "04. Cloud & IaC",
      category: "Data Engineering",
      description: "Arquitecturas de datos en la nube provisionadas como código con Terraform para alta disponibilidad.",
      tools: ["AWS (S3, IAM, VPC)", "Terraform", "Git / GitHub"],
      metric: "Scalable Cloud IaC",
    },
    {
      id: "bi",
      name: "05. BI & Visualización",
      category: "Decision Intelligence",
      description: "Dashboards ejecutivos e interactivos con KPIs clave orientados a optimizar la toma de decisiones empresariales.",
      tools: ["Power BI", "React / Next.js", "Dashboards UI", "Excel Avanzado"],
      metric: "KPI Decision Tools",
    },
  ] as PipelineStage[],

  projects: [
    {
      id: "carpool",
      title: "CARPOOL",
      subtitle: "Plataforma de Movilidad Compartida & Analítica",
      period: "2025 – 2026",
      category: "Full-Stack",
      badge: "Proyecto Final de Carrera",
      featured: true,
      description:
        "Sistema integral de carpooling desarrollado y defendido como Proyecto Final de Ingeniería en Sistemas de Información (UTN FRVM), alcanzando una calificación de 9/10. Combina frontend reactivo con analítica de datos en tiempo real.",
      highlights: [
        "Aprobación y defensa de Proyecto Final con calificación destacada de 9 / 10.",
        "Relevamiento integral de requisitos y gestión de Product Backlog en Jira bajo metodología ágil Scrum.",
        "Desarrollo de interfaces reactivas con Next.js y diseño de dashboards con KPIs operativos en tiempo real.",
      ],
      techStack: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "KPIs & Dashboards", "Jira", "Scrum"],
      metrics: [
        { label: "Nota de Graduación", value: "9 / 10" },
        { label: "Metodología", value: "Scrum / Jira" },
      ],
    },
    {
      id: "data-analytics",
      title: "Data Analytics Suite",
      subtitle: "Pipeline de Limpieza, Transformación & BI",
      period: "2024 – 2025",
      category: "Data & Analytics",
      badge: "Proyecto Académico",
      featured: true,
      description:
        "Desarrollo de un flujo analítico de extremo a extremo: desde la ingesta cruda y limpieza exhaustiva de datos hasta la creación de dashboards interactivos con toma de decisiones basada en métricas.",
      highlights: [
        "Limpieza, transformación y estructuración avanzada de datasets con Python y SQL.",
        "Diseño de un dashboard interactivo de alto rendimiento para monitoreo de indicadores y tendencias.",
        "Definición y cálculo de KPIs estratégicos presentados a stakeholders para la optimización de procesos.",
      ],
      techStack: ["Python", "SQL", "Pandas", "Power BI", "Data Cleaning", "KPIs", "Data Visualization"],
      metrics: [
        { label: "Calidad de Datos", value: "100% Validado" },
        { label: "Visualización", value: "Power BI / Dashboard" },
      ],
    },
    {
      id: "turnero-digital",
      title: "Turnero Digital",
      subtitle: "Arquitectura Cloud & Sistema de Gestión de Turnos",
      period: "2026 – Actualidad",
      category: "Cloud & Architecture",
      badge: "Proyecto Personal Activo",
      featured: true,
      description:
        "Solución SaaS para la reserva, gestión y análisis de flujo de turnos. Construida desde cero con arquitectura modular, modelo relacional optimizado y UI moderna.",
      highlights: [
        "Relevamiento de requisitos, alcance y diseño de experiencia de usuario orientada a la agilidad.",
        "Diseño de la arquitectura, infraestructura en la nube y modelado de base de datos relacional.",
        "Desarrollo completo de la interfaz de usuario con arquitectura de componentes reutilizables.",
      ],
      techStack: ["Next.js", "React.js", "PostgreSQL", "Data Modeling", "Cloud Architecture", "Tailwind CSS"],
      metrics: [
        { label: "Arquitectura", value: "Cloud Native" },
        { label: "Estado", value: "En Desarrollo Activo" },
      ],
    },
  ] as Project[],

  skillCategories: [
    {
      title: "Datos & Analytics",
      iconName: "Database",
      description: "Especialización principal en manipulación, modelado y extracción de valor de datos.",
      skills: [
        { name: "Python", level: "Avanzado", highlight: true },
        { name: "SQL", level: "Avanzado", highlight: true },
        { name: "Pandas & NumPy", level: "Avanzado", highlight: true },
        { name: "Scikit-learn", level: "Intermedio", highlight: true },
        { name: "ETL & Pipelines", level: "Avanzado", highlight: true },
        { name: "Data Visualization", level: "Avanzado" },
        { name: "Power BI", level: "Avanzado", highlight: true },
        { name: "Modelos Predictivos", level: "Intermedio" },
        { name: "Excel Avanzado", level: "Avanzado" },
      ],
    },
    {
      title: "Cloud & Data Engineering",
      iconName: "Cloud",
      description: "Infraestructura como código y servicios de datos distribuidos en la nube.",
      skills: [
        { name: "AWS (S3, IAM, VPC)", level: "Intermedio", highlight: true },
        { name: "Terraform (IaC)", level: "Intermedio", highlight: true },
        { name: "PostgreSQL", level: "Avanzado", highlight: true },
        { name: "MySQL", level: "Avanzado" },
        { name: "SQL Server", level: "Intermedio" },
        { name: "Ingesta & Procesamiento", level: "Avanzado" },
      ],
    },
    {
      title: "Desarrollo de Software",
      iconName: "Code2",
      description: "Creación de aplicaciones web modernas, componentes reactivos y APIs.",
      skills: [
        { name: "React.js", level: "Avanzado", highlight: true },
        { name: "Next.js", level: "Avanzado", highlight: true },
        { name: "JavaScript / TypeScript", level: "Avanzado" },
        { name: "Java & Spring Boot", level: "Intermedio" },
        { name: "HTML5 & CSS3", level: "Avanzado" },
        { name: "Tailwind CSS", level: "Avanzado" },
      ],
    },
    {
      title: "Metodologías & Herramientas",
      iconName: "Cpu",
      description: "Prácticas de ingeniería de software, control de versiones y gestión ágil.",
      skills: [
        { name: "Git & GitHub", level: "Avanzado", highlight: true },
        { name: "Scrum & Kanban", level: "Avanzado" },
        { name: "Jira", level: "Avanzado" },
        { name: "Trabajo en Equipo", level: "Especializado" },
        { name: "Pensamiento Analítico", level: "Especializado" },
      ],
    },
  ] as SkillCategory[],

  education: [
    {
      id: "utn-degree",
      degree: "Ingeniería en Sistemas de Información",
      institution: "Universidad Tecnológica Nacional – Facultad Regional Villa María (UTN FRVM)",
      period: "2020 – 2026",
      grade: "8,44",
      status: "Graduado",
      description: [
        "Título universitario de grado en Ingeniería en Sistemas de Información.",
        "Promedio destacado de 8,44 / 10.",
        "Formación integral en arquitectura de software, bases de datos, redes, gestión ágil y ciencia de datos.",
      ],
    },
  ] as EducationItem[],

  courses: [
    {
      id: "c-data-eng",
      title: "Data Engineering",
      institution: "Coderhouse",
      period: "En curso (2026)",
      status: "En curso",
      description:
        "Desarrollo de arquitecturas de datos en AWS mediante Terraform, trabajando con infraestructura como código (IaC), S3, IAM, VPC y servicios de ingesta y procesamiento de datos.",
      tags: ["AWS", "Terraform", "IaC", "S3", "IAM", "VPC", "Data Pipelines"],
      certificateImage: undefined, // En curso: no preview
    },
    {
      id: "c-ml",
      title: "Machine Learning",
      institution: "Coderhouse",
      period: "En curso (2026)",
      status: "En curso",
      description:
        "Modelos supervisados y no supervisados, evaluación de métricas de precisión, feature engineering y preprocesamiento avanzado de datos.",
      tags: ["Machine Learning", "Scikit-Learn", "Modelos Predictivos", "Preprocesamiento"],
      certificateImage: undefined, // En curso: no preview
    },
    {
      id: "c-data-anal",
      title: "Data Analytics",
      institution: "Coderhouse",
      period: "2026",
      status: "Completado",
      description:
        "Análisis y visualización de datos de negocio, limpieza y modelado de datasets complejos, definición de KPIs estratégicos y dashboards ejecutivos en Power BI.",
      tags: ["Power BI", "Data Analytics", "KPIs", "Limpieza de Datos", "Business Intelligence"],
      certificateImage: "/certification/data-analytics.png",
    },
    {
      id: "c-react",
      title: "React JS",
      institution: "Coderhouse",
      period: "2023",
      status: "Completado",
      description:
        "Desarrollo de aplicaciones web SPA y SSR con React, Hooks avanzados, Context API, gestión de estado, enrutamiento dinámico y consumo eficiente de APIs.",
      tags: ["React.js", "Hooks", "Context API", "SPA", "REST APIs"],
      certificateImage: "/certification/react-js.png",
    },
  ] as CourseItem[],

  languages: [
    { language: "Español", level: "Nativo" },
    { language: "Inglés", level: "Intermedio (B1)" },
  ],
};
