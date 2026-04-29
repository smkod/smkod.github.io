export const translations = {
  en: {
    nav: {
      about: "About",
      experience: "Experience",
      projects: "Projects",
      articles: "Articles",
      contact: "Contact"
    },
    hero: {
      greeting: "Hi, my name is",
      name: "Samuel Casco.",
      subtitle: "I engineer scalable distributed systems.",
      description: "Senior Software Engineer with 4+ years of experience specializing in <span class=\"text-text-main font-semibold\">TypeScript, Go, and Cloud Architectures</span>. I lead engineering teams, design high-concurrency microservices, and build robust digital infrastructures from the database to the UI.",
      cta: "Check out my work!",
      resume: "Download Resume"
    },
    skills: {
      title: "About & Skills",
      p1: "I'm a strategic <span class=\"text-accent font-semibold\">Senior Software Engineer</span> with over 4 years of experience delivering high-scale, end-to-end web applications and distributed systems.",
      p2: "I bridge modern front-end architectures like <span class=\"text-text-main\">Angular and Next.js</span> with robust distributed back-end systems using <span class=\"text-text-main\">NestJS, Go, and Kafka</span>. I have a deep passion for architectural modernization, Platform Engineering, and CI/CD excellence.",
      p3: "Beyond writing code, my strength lies in <strong>technical leadership and scalable architecture</strong>. I am deeply passionate about teaching others and continuously learning from my peers. I excel at taking ownership of complex problems, mentoring developers, and negotiating technical debt to ensure sustainable delivery.",
      p4: "Currently, I lead engineering teams at <span class=\"text-accent font-semibold\">Banco Cuscatlán</span>, architecting the next generation of regional digital banking infrastructure. Previously, I engineered massive event-driven provisioning microservices at TIGO.",
      categories: {
        frontend: "Frontend",
        backend: "Backend",
        database: "Database & Cloud",
        tools: "Tools & DevOps"
      }
    },
    experience: {
      title: "Where I've Worked",
      jobs: [
        {
          company: "Banco Cuscatlán",
          roles: [
            {
              title: "Front-End Team Lead",
              date: "May 2025 - Jan 2026",
              description: [
                "Directing a team of 4 engineers for the local web application and 1 developer for the 'Matrix' core platform.",
                "Capacitating and mentoring developers, QA analysts, and interns on unit testing, Git, and automation workflows.",
                "Overseeing architectural decisions, code reviews, and cross-team knowledge sharing with the El Salvador division."
              ]
            },
            {
              title: "Senior Software Engineer",
              date: "Aug 2024 - April 2025",
              description: [
                "Architected the 'Matrix' core platform, modernizing regional digital infrastructure from scratch.",
                "Orchestrated the migration to Angular 18, implementing Signals and Deferrable Views to maximize rendering performance.",
                "Established CI/CD quality standards using Husky and SonarQube, enforcing strict PR validation and 70%+ test coverage.",
                "Built critical UI modules: start widgets, service payments, credit cards, and complex account recovery flows."
              ]
            }
          ],
          tech: ["Angular 18", "TypeScript", "Signals", "Nx", "SonarQube", "Tailwind CSS"]
        },
        {
          company: "TIGO Honduras",
          roles: [
            {
              title: "Backend & Microservices Developer",
              date: "Jan 2023 - Aug 2024",
              description: [
                "Designed and developed highly concurrent microservices using NestJS and Kafka for massive mobile plan provisioning.",
                "Implemented CassandraDB to support immense read/write volumes without bottlenecks, paired with PostgreSQL.",
                "Introduced proactive code inspection via SonarQube and established a robust unit testing culture with Jest.",
                "Containerized microservices using Docker and orchestrated deployments across secure internal networks."
              ]
            },
            {
              title: "Full-Stack Software Engineer (Outsourcing)",
              date: "Mar 2022 - Jan 2023",
              description: [
                "Rebuilt and modernized a complete legacy system using Angular and Bootstrap, drastically improving UI/UX.",
                "Developed and maintained enterprise data flows using Java and Oracle DB (queues and agents)."
              ]
            }
          ],
          tech: ["NestJS", "Angular", "Kafka", "CassandraDB", "Docker", "Java", "Oracle"]
        }
      ]
    },
    projects: {
      title: "Projects I've worked on",
      badgeCareer: "career",
      badgePersonal: "personal",
      badgeProject: "Project",
      items: [
        {
          title: "Local Digital Banking Web App",
          description: "Led the front-end development of the local web application for Banco Cuscatlán. Built critical modules including service payments, credit card management, user registration, and complex account recovery flows.",
          tech: ["Angular 18", "TypeScript", "Tailwind CSS", "RxJS", "Jest"],
          type: "career"
        },
        {
          title: "Cloud-Native Learning Platform",
          description: "Hybrid distributed system with Go microservices communicating via gRPC. Features AI-powered dynamic resource generation using Google Gemini and scalable storage on AWS S3.",
          tech: ["Go", "gRPC", "Next.js", "AWS", "Nx", "LLM / RAG", "Vitest"],
          type: "personal"
        },
        {
          title: "Matrix Core Platform",
          description: "Architected the regional digital infrastructure and configuration engine for Banco Cuscatlán. Modernized legacy systems using Angular 18 and a high-performance rendering strategy.",
          tech: ["Angular 18", "Signals", "Nx", "TypeScript", "SCSS"],
          github: "https://github.com/smkod",
          type: "career"
        },
        {
          title: "Massive Provisioning Microservices",
          description: "High-concurrency event-driven architecture using NestJS and Kafka. Processed massive mobile plan provisioning with CassandraDB for ultra-low latency data operations.",
          tech: ["NestJS", "Kafka", "Microservices", "CassandraDB", "Docker", "PostgreSQL"],
          github: "https://github.com/smkod",
          type: "career"
        },
        {
          title: "Enterprise File Orchestrator",
          description: "Distributed file orchestration service for TIGO Honduras. Handles complex asynchronous data flows and massive file processing across containerized environments.",
          tech: ["Node.js", "Microservices", "Docker", "Jest"],
          github: "https://github.com/smkod",
          type: "career"
        },
        {
          title: "UNOCELL Management System",
          description: "Full-stack inventory and repair tracking system. Features role-based access control and integrated basic accounting for small-to-medium retail businesses.",
          tech: ["Node.js", "MySQL", "Bootstrap", "Hostinger"],
          github: "https://github.com/smkod",
          type: "career"
        }
      ]
    },
    footer: {
      title: "Get In Touch",
      description: "I'm currently looking for new opportunities and my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!",
      cta: "Say Hello",
      designed: "Designed & Built by Samuel Casco"
    }
  },
  es: {
    nav: {
      about: "Sobre mí",
      experience: "Experiencia",
      projects: "Proyectos",
      articles: "Artículos",
      contact: "Contacto"
    },
    hero: {
      greeting: "Hola, mi nombre es",
      name: "Samuel Casco.",
      subtitle: "Diseño sistemas distribuidos escalables.",
      description: "Ingeniero de Software Senior con más de 4 años de experiencia especializado en <span class=\"text-text-main font-semibold\">TypeScript, Go y Arquitecturas Cloud</span>. Lidero equipos de ingeniería, diseño microservicios de alta concurrencia y construyo infraestructuras digitales robustas desde la base de datos hasta la UI.",
      cta: "¡Mira mi trabajo!",
      resume: "Descargar CV"
    },
    skills: {
      title: "Sobre Mí y Habilidades",
      p1: "Soy un <span class=\"text-accent font-semibold\">Ingeniero de Software Senior</span> estratégico con más de 4 años de experiencia entregando aplicaciones web y sistemas distribuidos a gran escala de extremo a extremo.",
      p2: "Conecto arquitecturas front-end modernas como <span class=\"text-text-main\">Angular y Next.js</span> con sistemas back-end distribuidos robustos usando <span class=\"text-text-main\">NestJS, Go y Kafka</span>. Me apasiona la modernización arquitectónica, el Platform Engineering y la excelencia en CI/CD.",
      p3: "Más allá de escribir código, mi fortaleza radica en <strong>el liderazgo técnico y la arquitectura escalable</strong>. Me apasiona profundamente enseñar a otros y aprender continuamente de mis compañeros. Destaco por asumir la propiedad de problemas complejos, guiar a otros desarrolladores y negociar deuda técnica para asegurar entregas sostenibles.",
      p4: "Actualmente, lidero equipos de ingeniería en <span class=\"text-accent font-semibold\">Banco Cuscatlán</span>, diseñando la próxima generación de la infraestructura de banca digital regional. Anteriormente, desarrollé microservicios masivos de aprovisionamiento impulsados por eventos en TIGO.",
      categories: {
        frontend: "Frontend",
        backend: "Backend",
        database: "Base de Datos & Cloud",
        tools: "Herramientas & DevOps"
      }
    },
    experience: {
      title: "Dónde he trabajado",
      jobs: [
        {
          company: "Banco Cuscatlán",
          roles: [
            {
              title: "Front-End Team Lead",
              date: "Mayo 2025 - Ene 2026",
              description: [
                "Dirigiendo un equipo de 4 ingenieros para la aplicación web local y 1 desarrollador para la plataforma core 'Matrix'.",
                "Capacitando y siendo mentor de desarrolladores, analistas QA y pasantes en pruebas unitarias, Git y flujos de automatización.",
                "Supervisando decisiones arquitectónicas, revisión de código e intercambio de conocimientos con la división de El Salvador."
              ]
            },
            {
              title: "Senior Software Engineer",
              date: "Ago 2024 - Abril 2025",
              description: [
                "Diseñé la arquitectura de la plataforma core 'Matrix', modernizando la infraestructura digital regional desde cero.",
                "Orquesté la migración a Angular 18, implementando Signals y Deferrable Views para maximizar el rendimiento.",
                "Establecí estándares de calidad CI/CD utilizando Husky y SonarQube, aplicando validación estricta de PRs y 70%+ de cobertura de pruebas.",
                "Construí módulos críticos de interfaz de usuario: widgets de inicio, pago de servicios, tarjetas de crédito y flujos complejos de recuperación de cuentas."
              ]
            }
          ],
          tech: ["Angular 18", "TypeScript", "Signals", "Nx", "SonarQube", "Tailwind CSS"]
        },
        {
          company: "TIGO Honduras",
          roles: [
            {
              title: "Desarrollador Backend & Microservicios",
              date: "Ene 2023 - Ago 2024",
              description: [
                "Diseñé y desarrollé microservicios altamente concurrentes usando NestJS y Kafka para el aprovisionamiento masivo de planes móviles.",
                "Implementé CassandraDB para soportar inmensos volúmenes de lectura/escritura sin cuellos de botella, en conjunto con PostgreSQL.",
                "Introduje la inspección proactiva de código vía SonarQube y establecí una sólida cultura de pruebas unitarias con Jest.",
                "Containericé microservicios usando Docker y orquesté despliegues a través de redes internas seguras."
              ]
            },
            {
              title: "Ingeniero de Software Full-Stack (Outsourcing)",
              date: "Mar 2022 - Ene 2023",
              description: [
                "Reconstruí y modernicé un sistema heredado completo utilizando Angular y Bootstrap, mejorando drásticamente la UI/UX.",
                "Desarrollé y mantuve flujos de datos empresariales utilizando Java y Oracle DB (colas y agentes)."
              ]
            }
          ],
          tech: ["NestJS", "Angular", "Kafka", "CassandraDB", "Docker", "Java", "Oracle"]
        }
      ]
    },
    projects: {
      title: "Proyectos en los que he trabajado",
      badgeCareer: "carrera",
      badgePersonal: "personal",
      badgeProject: "Proyecto",
      items: [
        {
          title: "App Web Local de Banca Digital",
          description: "Lideré el desarrollo front-end de la aplicación web local para Banco Cuscatlán. Construcción de módulos críticos: pago de servicios, tarjetas de crédito, registro de usuarios y flujos complejos de recuperación de cuentas.",
          tech: ["Angular 18", "TypeScript", "Tailwind CSS", "RxJS"],
          type: "career"
        },
        {
          title: "Plataforma de Estudio de Idiomas Cloud-Native",
          description: "Sistema híbrido distribuido con microservicios Go comunicados vía gRPC. Cuenta con generación dinámica de recursos potenciada por Google Gemini y almacenamiento escalable en AWS S3.",
          tech: ["Go", "gRPC", "Next.js", "AWS", "Nx", "Gemini AI"],
          type: "personal"
        },
        {
          title: "Plataforma Core Matrix",
          description: "Diseñé la arquitectura y el motor de configuración para Banco Cuscatlán. Modernización de sistemas legacy usando Angular 18 y una estrategia de renderizado de alto rendimiento.",
          tech: ["Angular 18", "Signals", "Nx", "TypeScript", "SCSS"],
          github: "https://github.com/smkod",
          type: "career"
        },
        {
          title: "Microservicios de Aprovisionamiento Masivo",
          description: "Arquitectura orientada a eventos de alta concurrencia con NestJS y Kafka. Procesamiento masivo de aprovisionamiento de planes móviles con CassandraDB para operaciones de ultra baja latencia.",
          tech: ["NestJS", "Kafka", "CassandraDB", "Docker", "PostgreSQL"],
          github: "https://github.com/smkod",
          type: "career"
        },
        {
          title: "Orquestador de Archivos Empresarial",
          description: "Servicio de orquestación de archivos distribuido para TIGO Honduras. Maneja flujos de datos asíncronos complejos y procesamiento masivo a través de entornos dockerizados.",
          tech: ["Node.js", "Microservices", "Docker", "Jest"],
          github: "https://github.com/smkod",
          type: "career"
        },
        {
          title: "Sistema de Gestión UNOCELL",
          description: "Sistema full-stack para control de inventario y reparaciones. Incluye roles de acceso y contabilidad básica integrada para comercios medianos.",
          tech: ["Node.js", "MySQL", "Bootstrap", "Hostinger"],
          github: "https://github.com/smkod",
          type: "career"
        }
      ]
    },
    footer: {
      title: "Ponte en Contacto",
      description: "Actualmente estoy buscando nuevas oportunidades y mi bandeja de entrada siempre está abierta. Ya sea que tengas una pregunta o simplemente quieras saludar, ¡haré lo posible por responderte!",
      cta: "Saludar",
      designed: "Diseñado y Construido por Samuel Casco"
    }
  },
  pt: {
    nav: {
      about: "Sobre mim",
      experience: "Experiência",
      projects: "Projetos",
      articles: "Artigos",
      contact: "Contato"
    },
    hero: {
      greeting: "Olá, meu nome é",
      name: "Samuel Casco.",
      subtitle: "Eu projeto sistemas distribuídos escaláveis.",
      description: "Engenheiro de Software Sênior com mais de 4 anos de experiência especializado em <span class=\"text-text-main font-semibold\">TypeScript, Go e Arquiteturas Cloud</span>. Lidero equipes de engenharia, projeto microsserviços de alta concorrência e construo infraestruturas digitais robustas do banco de dados à interface do usuário.",
      cta: "Veja meu trabalho!",
      resume: "Baixar Currículo"
    },
    skills: {
      title: "Sobre Mim & Habilidades",
      p1: "Sou um <span class=\"text-accent font-semibold\">Engenheiro de Software Sênior</span> estratégico com mais de 4 anos de experiência entregando aplicações web de ponta a ponta e sistemas distribuídos em larga escala.",
      p2: "Conecto arquiteturas front-end modernas como <span class=\"text-text-main\">Angular e Next.js</span> com sistemas back-end distribuídos robustos usando <span class=\"text-text-main\">NestJS, Go e Kafka</span>. Tenho profunda paixão por modernização arquitetônica, Platform Engineering e excelência em CI/CD.",
      p3: "Além de escrever código, minha força está na <strong>liderança técnica e arquitetura escalável</strong>. Sou profundamente apaixonado por ensinar aos outros e aprender continuamente com meus colegas. Destaco-me por assumir a responsabilidade por problemas complexos, orientar desenvolvedores e negociar dívida técnica para garantir entregas sustentáveis.",
      p4: "Atualmente, lidero equipes de engenharia no <span class=\"text-accent font-semibold\">Banco Cuscatlán</span>, projetando a próxima geração da infraestrutura bancária digital regional. Anteriormente, desenvolvi microsserviços massivos de provisionamento baseados em eventos na TIGO.",
      categories: {
        frontend: "Frontend",
        backend: "Backend",
        database: "Banco de Dados & Cloud",
        tools: "Ferramentas & DevOps"
      }
    },
    experience: {
      title: "Onde Trabalhei",
      jobs: [
        {
          company: "Banco Cuscatlán",
          roles: [
            {
              title: "Líder da Equipe Front-End",
              date: "Maio 2025 - Jan 2026",
              description: [
                "Dirigindo uma equipe de 4 engenheiros para a aplicação web local e 1 desenvolvedor para a plataforma central 'Matrix'.",
                "Capacitando e orientando desenvolvedores, analistas de QA e estagiários em testes unitários, Git e fluxos de automação.",
                "Supervisionando decisões arquitetônicas, revisões de código e compartilhamento de conhecimento com a divisão de El Salvador."
              ]
            },
            {
              title: "Engenheiro de Software Sênior",
              date: "Ago 2024 - Abril 2025",
              description: [
                "Projetei a plataforma central 'Matrix', modernizando a infraestrutura digital regional do zero.",
                "Orquestrei a migração para o Angular 18, implementando Signals e Deferrable Views para maximizar o desempenho.",
                "Estabeleci padrões de qualidade de CI/CD usando Husky e SonarQube, aplicando validação estrita de PRs e cobertura de testes de 70%+.",
                "Construí módulos críticos de IU: widgets iniciais, pagamentos de serviços, cartões de crédito e fluxos complexos de recuperação de contas."
              ]
            }
          ],
          tech: ["Angular 18", "TypeScript", "Signals", "Nx", "SonarQube", "Tailwind CSS"]
        },
        {
          company: "TIGO Honduras",
          roles: [
            {
              title: "Desenvolvedor Backend & Microsserviços",
              date: "Jan 2023 - Ago 2024",
              description: [
                "Projetei e desenvolvi microsserviços altamente concorrentes usando NestJS e Kafka para provisionamento massivo de planos móveis.",
                "Implementei CassandraDB para suportar imensos volumes de leitura/gravação sem gargalos, em conjunto com PostgreSQL.",
                "Introduzi inspeção proativa de código via SonarQube e estabeleci uma forte cultura de testes unitários com Jest.",
                "Containerizei microsserviços usando Docker e orquestrei implantações em redes internas seguras."
              ]
            },
            {
              title: "Engenheiro de Software Full-Stack (Outsourcing)",
              date: "Mar 2022 - Jan 2023",
              description: [
                "Reconstruí e modernizei um sistema legado completo usando Angular e Bootstrap, melhorando drasticamente a IU/UX.",
                "Desenvolvi e mantive fluxos de dados corporativos usando Java e Oracle DB (filas e agentes)."
              ]
            }
          ],
          tech: ["NestJS", "Angular", "Kafka", "CassandraDB", "Docker", "Java", "Oracle"]
        }
      ]
    },
    projects: {
      title: "Projetos nos quais trabalhei",
      badgeCareer: "carreira",
      badgePersonal: "pessoal",
      badgeProject: "Projeto",
      items: [
        {
          title: "App Web Local de Banco Digital",
          description: "Liderei o desenvolvimento front-end do aplicativo web local para o Banco Cuscatlán. Construí módulos críticos, incluindo pagamentos de serviços, cartões de crédito, registro de usuários e fluxos complexos de recuperação de contas.",
          tech: ["Angular 18", "TypeScript", "Tailwind CSS", "RxJS"],
          type: "career"
        },
        {
          title: "Plataforma Cloud-Native de Ensino de Idiomas",
          description: "Sistema híbrido distribuído com microsserviços Go via gRPC. Apresenta geração dinâmica de recursos com tecnologia Google Gemini e armazenamento escalonável na AWS S3.",
          tech: ["Go", "gRPC", "Next.js", "AWS", "Nx", "Gemini AI"],
          type: "personal"
        },
        {
          title: "Plataforma Central Matrix",
          description: "Projetei a infraestrutura digital regional e o mecanismo de configuração para o Banco Cuscatlán. Modernização de sistemas legados usando Angular 18 e renderização de alto desempenho.",
          tech: ["Angular 18", "Signals", "Nx", "TypeScript", "SCSS"],
          github: "https://github.com/smkod",
          type: "career"
        },
        {
          title: "Microsserviços de Provisionamento Massivo",
          description: "Arquitetura orientada a eventos de alta concorrência usando NestJS e Kafka. Processamento de provisionamento de planos com CassandraDB para operações de dados de latência ultrabaixa.",
          tech: ["NestJS", "Kafka", "CassandraDB", "Docker", "PostgreSQL"],
          github: "https://github.com/smkod",
          type: "career"
        },
        {
          title: "Orquestrador de Arquivos Corporativo",
          description: "Serviço de orquestração de arquivos distribuído para a TIGO. Lida com fluxos de dados assíncronos complexos e processamento massivo de arquivos em ambientes de contêineres.",
          tech: ["Node.js", "Microservices", "Docker", "Jest"],
          github: "https://github.com/smkod",
          type: "career"
        },
        {
          title: "Sistema de Gestão UNOCELL",
          description: "Sistema full-stack para controle de estoque e reparos. Apresenta controle de acesso baseado em funções e contabilidade básica para empresas de varejo.",
          tech: ["Node.js", "MySQL", "Bootstrap", "Hostinger"],
          github: "https://github.com/smkod",
          type: "career"
        }
      ]
    },
    footer: {
      title: "Entre em Contato",
      description: "No momento, estou em busca de novas oportunidades e minha caixa de entrada está sempre aberta. Quer você tenha uma pergunta ou apenas queira dizer olá, farei o possível para responder!",
      cta: "Dizer Olá",
      designed: "Desenhado e Construído por Samuel Casco"
    }
  }
};