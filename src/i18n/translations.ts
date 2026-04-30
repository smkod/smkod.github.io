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
      description: "Software Engineer with 4+ years of experience navigating complex environments. I build high-concurrency <span class=\"text-text-main font-semibold\">microservices (Node/Go)</span> and orchestrate robust, secure <span class=\"text-text-main font-semibold\">front-end architectures (Angular/Next.js)</span> for sectors where scalability and security are non-negotiable.",
      cta: "Check out my work!",
      resume: "Download Resume",
      resumeLink: "/resumes/Samuel Casco - Resume EN.pdf"
    },
    skills: {
      title: "About & Skills",
      p1: "I'm a strategic <span class=\"text-accent font-semibold\">Software Engineer</span> with over 4 years of experience delivering high-scale, end-to-end web applications and distributed systems in the FinTech and Telecom sectors.",
      p2: "I bridge the gap between complex business logic and robust technical execution. My focus is on <strong>software fundamentals</strong> over framework hype, ensuring systems are resilient, maintainable, and efficient through clean architecture and automated quality standards.",
      p3: "Beyond writing code, my strength lies in <strong>technical leadership and architectural evolution</strong>. I excel at taking ownership of complex migrations, mentoring teams through documentation and pair programming, and building systems that make other developers' work easier.",
      p4: "Currently, as an <span class=\"text-accent font-semibold\">Independent Software Consultant</span>, I focus on distributed systems, Go, and AWS. Previously, I led engineering teams at Banco Cuscatlán and built massive event-driven microservices at TIGO.",
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
          company: "Independent Consultant",
          roles: [
            {
              title: "Software Engineering Consultant",
              date: "Jan 2026 - Present",
              description: [
                "Driving technical initiatives focused on high-performance architectures and cloud-native solutions using Go and AWS.",
                "Architecting specialized microservices and designing gRPC contracts for low-latency communication.",
                "Implementing modern web delivery with Next.js and orchestrating complex monorepo workflows using Nx."
              ]
            }
          ],
          tech: ["Go (Golang)", "gRPC", "AWS", "Next.js", "Nx", "LLMs", "PostgreSQL"]
        },
        {
          company: "Banco Cuscatlán",
          roles: [
            {
              title: "Senior Front-End Lead",
              date: "May 2025 - Jan 2026",
              description: [
                "Directed a cross-functional team of 4 engineers, providing technical leadership and mentoring to over 10 staff members in GitFlow and unit testing.",
                "Orchestrated the core platform migration from Angular 16 to 18, implementing Signals and Deferrable Views to maximize performance.",
                "Established strict CI/CD quality standards by configuring Husky and SonarQube for automated Pull Request validation."
              ]
            },
            {
              title: "Senior Front-End Developer",
              date: "Aug 2024 - May 2025",
              description: [
                "Architected the 'Matrix' regional digital infrastructure modernization, moving legacy systems to a high-performance Angular architecture.",
                "Engineered high-complexity banking modules for credit card flows, service payments, and secure account recovery.",
                "Reduced technical debt via SOLID principles and established framework-agnostic architectural patterns."
              ]
            }
          ],
          tech: ["Angular 18", "TypeScript", "Signals", "Nx", "SonarQube", "Tailwind CSS"]
        },
        {
          company: "TIGO Honduras",
          roles: [
            {
              title: "Full-Stack Software Engineer",
              date: "Aug 2022 - Aug 2024",
              description: [
                "Architected event-driven microservices using NestJS and Kafka to handle massive mobile plan provisioning and thousands of concurrent events.",
                "Implemented CassandraDB and PostgreSQL to resolve read/write bottlenecks in high-volume asynchronous data flows.",
                "Collaborated on the rebuild of an enterprise legacy B2B system using Angular and Bootstrap, improving UI/UX and maintainability."
              ]
            }
          ],
          tech: ["NestJS", "Kafka", "CassandraDB", "Docker", "Angular", "PostgreSQL"]
        }
      ]
    },
    projects: {
      title: "Selected Projects & Key Work",
      badgeCareer: "career",
      badgePersonal: "personal",
      badgeProject: "Project",
      items: [
        {
          title: "Cloud-Native Learning Platform",
          description: "Hybrid distributed system with specialized Go microservices communicating via gRPC. Features AI-powered resource generation using LLMs and modern monorepo orchestration with Nx.",
          tech: ["Go", "gRPC", "Next.js", "AWS", "Nx", "LLMs", "Vitest"],
          type: "personal"
        },
        {
          title: "Massive Provisioning Microservices",
          description: "High-concurrency event-driven architecture using NestJS and Kafka. Processed massive mobile plan provisioning with CassandraDB for ultra-low latency data operations at TIGO.",
          tech: ["NestJS", "Kafka", "CassandraDB", "Docker", "PostgreSQL"],
          type: "career"
        },
        {
          title: "Matrix Core Platform",
          description: "Architected the regional digital infrastructure and configuration engine for Banco Cuscatlán. Modernized legacy systems using Angular 18, Signals, and a high-performance rendering strategy.",
          tech: ["Angular 18", "Signals", "Nx", "TypeScript", "Tailwind"],
          type: "career"
        },
        {
          title: "Local Digital Banking Web App",
          description: "Led the front-end development for Banco Cuscatlán's core web application. Built critical secure modules for payments, credit cards, and registration using modern Angular standards.",
          tech: ["Angular 18", "RxJS", "Tailwind CSS", "Jest"],
          type: "career"
        },
        {
          title: "Enterprise File Orchestrator",
          description: "Distributed file orchestration service for TIGO. Handles complex asynchronous data flows and massive file processing across containerized environments.",
          tech: ["Node.js", "Microservices", "Docker", "Jest"],
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
      description: "Ingeniero de Software con más de 4 años de experiencia navegando entornos complejos. Construyo <span class=\"text-text-main font-semibold\">microservicios de alta concurrencia (Node/Go)</span> y orquesto <span class=\"text-text-main font-semibold\">arquitecturas frontend robustas (Angular/Next.js)</span> para sectores donde la escalabilidad y la seguridad son innegociables.",
      cta: "¡Mira mi trabajo!",
      resume: "Descargar CV",
      resumeLink: "/resumes/Samuel Casco - Resume ES.pdf"
    },
    skills: {
      title: "Sobre Mí y Habilidades",
      p1: "Soy un <span class=\"text-accent font-semibold\">Ingeniero de Software</span> estratégico con más de 4 años de experiencia entregando aplicaciones web y sistemas distribuidos a gran escala en los sectores FinTech y Telecom.",
      p2: "Conecto la lógica de negocio compleja con una ejecución técnica robusta. Mi enfoque son los <strong>fundamentos del software</strong> por encima de los frameworks de moda, asegurando sistemas resilientes, mantenibles y eficientes mediante arquitectura limpia y estándares de calidad automatizados.",
      p3: "Más allá del código, mi fortaleza radica en el <strong>liderazgo técnico y la evolución arquitectónica</strong>. Destaco por asumir la propiedad de migraciones complejas, guiar equipos mediante documentación y pair programming, y construir sistemas que facilitan el trabajo de otros desarrolladores.",
      p4: "Actualmente, como <span class=\"text-accent font-semibold\">Consultor Independiente de Software</span>, me enfoco en sistemas distribuidos, Go y AWS. Anteriormente, lideré equipos en Banco Cuscatlán y construí microservicios masivos en TIGO.",
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
          company: "Consultor Independiente",
          roles: [
            {
              title: "Consultor de Ingeniería de Software",
              date: "Ene 2026 - Actualidad",
              description: [
                "Impulsando iniciativas técnicas enfocadas en arquitecturas de alto rendimiento y soluciones cloud-native usando Go y AWS.",
                "Diseñando microservicios especializados y contratos gRPC para comunicaciones de baja latencia.",
                "Implementando entregas web modernas con Next.js y orquestando flujos de monorepo complejos con Nx."
              ]
            }
          ],
          tech: ["Go (Golang)", "gRPC", "AWS", "Next.js", "Nx", "LLMs", "PostgreSQL"]
        },
        {
          company: "Banco Cuscatlán",
          roles: [
            {
              title: "Senior Front-End Lead",
              date: "Mayo 2025 - Ene 2026",
              description: [
                "Dirigiendo un equipo de 4 ingenieros, brindando liderazgo técnico y mentoría a más de 10 colaboradores en GitFlow y pruebas unitarias.",
                "Orquestando la migración de la plataforma core de Angular 16 a 18, implementando Signals y Deferrable Views para maximizar el rendimiento.",
                "Estableciendo estándares de calidad CI/CD mediante la configuración de Husky y SonarQube para la validación automatizada de Pull Requests."
              ]
            },
            {
              title: "Senior Front-End Developer",
              date: "Ago 2024 - Mayo 2025",
              description: [
                "Diseñando la modernización de la infraestructura digital regional 'Matrix', moviendo sistemas legacy a una arquitectura Angular de alto rendimiento.",
                "Construyendo módulos bancarios de alta complejidad para flujos de tarjetas de crédito, pago de servicios y recuperación segura de cuentas.",
                "Reduciendo la deuda técnica vía principios SOLID y estableciendo patrones arquitectónicos independientes del framework."
              ]
            }
          ],
          tech: ["Angular 18", "TypeScript", "Signals", "Nx", "SonarQube", "Tailwind CSS"]
        },
        {
          company: "TIGO Honduras",
          roles: [
            {
              title: "Ingeniero de Software Full-Stack",
              date: "Ago 2022 - Ago 2024",
              description: [
                "Diseñando microservicios orientados a eventos con NestJS y Kafka para el aprovisionamiento masivo de planes móviles y miles de eventos concurrentes.",
                "Implementando CassandraDB y PostgreSQL para resolver cuellos de botella de lectura/escritura en flujos de datos asíncronos de alto volumen.",
                "Colaborando en la reconstrucción de un sistema B2B empresarial usando Angular y Bootstrap, mejorando drásticamente la UI/UX y mantenibilidad."
              ]
            }
          ],
          tech: ["NestJS", "Kafka", "CassandraDB", "Docker", "Angular", "PostgreSQL"]
        }
      ]
    },
    projects: {
      title: "Proyectos Más Relevantes",
      badgeCareer: "carrera",
      badgePersonal: "personal",
      badgeProject: "Proyecto",
      items: [
        {
          title: "Plataforma de Idiomas Cloud-Native",
          description: "Sistema híbrido distribuido con microservicios Go comunicados vía gRPC. Incluye generación de recursos potenciada por IA (LLMs) y orquestación monorepo moderna con Nx.",
          tech: ["Go", "gRPC", "Next.js", "AWS", "Nx", "LLMs", "Vitest"],
          type: "personal"
        },
        {
          title: "Microservicios de Aprovisionamiento Masivo",
          description: "Arquitectura orientada a eventos de alta concurrencia con NestJS y Kafka. Procesamiento de aprovisionamiento masivo con CassandraDB para operaciones de ultra baja latencia en TIGO.",
          tech: ["NestJS", "Kafka", "CassandraDB", "Docker", "PostgreSQL"],
          type: "career"
        },
        {
          title: "Plataforma Core Matrix",
          description: "Diseñé la infraestructura digital regional y el motor de configuración para Banco Cuscatlán. Modernización de sistemas legacy usando Angular 18, Signals y Nx.",
          tech: ["Angular 18", "Signals", "Nx", "TypeScript", "Tailwind"],
          type: "career"
        },
        {
          title: "App Web de Banca Digital",
          description: "Lideré el desarrollo frontend de la aplicación web principal de Banco Cuscatlán. Módulos críticos de pago y registro bajo estándares modernos de Angular.",
          tech: ["Angular 18", "RxJS", "Tailwind CSS", "Jest"],
          type: "career"
        },
        {
          title: "Orquestador de Archivos Empresarial",
          description: "Servicio de orquestación de archivos distribuido para TIGO. Maneja flujos asíncronos complejos y procesamiento masivo en entornos dockerizados.",
          tech: ["Node.js", "Microservices", "Docker", "Jest"],
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
      description: "Engenheiro de Software com mais de 4 anos de experiência navegando em ambientes complexos. Construo <span class=\"text-text-main font-semibold\">microsserviços de alta concorrência (Node/Go)</span> e orquestro <span class=\"text-text-main font-semibold\">arquiteturas front-end robustas (Angular/Next.js)</span> para setores onde escalabilidade e segurança são inegociáveis.",
      cta: "Veja meu trabalho!",
      resume: "Baixar Currículo",
      resumeLink: "/resumes/Samuel Casco - Resume PT.pdf"
    },
    skills: {
      title: "Sobre Mim & Habilidades",
      p1: "Sou um <span class=\"text-accent font-semibold\">Engenheiro de Software</span> estratégico com mais de 4 anos de experiência entregando aplicações web e sistemas distribuídos em larga escala nos setores FinTech e Telecom.",
      p2: "Conecto a lógica de negócio complexa com uma execução técnica robusta. Meu foco são os <strong>fundamentos do software</strong> acima dos frameworks da moda, garantindo sistemas resilientes e eficientes por meio de arquitetura limpa e padrões de qualidade automatizados.",
      p3: "Além do código, minha força está na <strong>liderança técnica e evolução arquitetônica</strong>. Destaco-me por assumir a responsabilidade por migrações complexas, orientar equipes por meio de documentação e pair programming, e construir sistemas que facilitam o trabalho de outros desenvolvedores.",
      p4: "Atualmente, como <span class=\"text-accent font-semibold\">Consultor Independente de Software</span>, foco em sistemas distribuídos, Go e AWS. Anteriormente, liderei equipes no Banco Cuscatlán e construí microsserviços massivos na TIGO.",
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
          company: "Consultor Independente",
          roles: [
            {
              title: "Consultor de Engenharia de Software",
              date: "Jan 2026 - Atualidade",
              description: [
                "Impulsionando iniciativas técnicas focadas em arquiteturas de alto desempenho e soluções cloud-native usando Go e AWS.",
                "Projetando microsserviços especializados e contratos gRPC para comunicações de baixa latência.",
                "Implementando entregas web modernas com Next.js e orquestrando fluxos de monorepo complexos com Nx."
              ]
            }
          ],
          tech: ["Go (Golang)", "gRPC", "AWS", "Next.js", "Nx", "LLMs", "PostgreSQL"]
        },
        {
          company: "Banco Cuscatlán",
          roles: [
            {
              title: "Senior Front-End Lead",
              date: "Maio 2025 - Jan 2026",
              description: [
                "Dirigindo uma equipe de 4 engenheiros, fornecendo liderança técnica e mentoria para mais de 10 colaboradores em GitFlow e testes unitários.",
                "Orquestrando a migração da plataforma core do Angular 16 para 18, implementando Signals e Deferrable Views para maximizar o desempenho.",
                "Estabelecendo padrões de qualidade CI/CD configurando Husky e SonarQube para validação automatizada de Pull Requests."
              ]
            },
            {
              title: "Senior Front-End Developer",
              date: "Ago 2024 - Maio 2025",
              description: [
                "Projetando a modernização da infraestrutura digital regional 'Matrix', movendo sistemas legados para uma arquitetura Angular de alto desempenho.",
                "Construindo módulos bancários de alta complexidade para fluxos de cartões de crédito, pagamento de serviços e recuperação segura de contas.",
                "Reduzindo a dívida técnica via princípios SOLID e estabelecendo padrões arquitetônicos independentes de framework."
              ]
            }
          ],
          tech: ["Angular 18", "TypeScript", "Signals", "Nx", "SonarQube", "Tailwind CSS"]
        },
        {
          company: "TIGO Honduras",
          roles: [
            {
              title: "Engenheiro de Software Full-Stack",
              date: "Ago 2022 - Ago 2024",
              description: [
                "Projetando microsserviços orientados a eventos com NestJS e Kafka para o provisionamento massivo de planos móveis e milhares de eventos simultâneos.",
                "Implementando CassandraDB e PostgreSQL para resolver gargalos de leitura/gravação em fluxos de dados assíncronos de alto volume.",
                "Colaborando na reconstrução de um sistema B2B empresarial usando Angular e Bootstrap, melhorando drasticamente a UI/UX e manutenibilidade."
              ]
            }
          ],
          tech: ["NestJS", "Kafka", "CassandraDB", "Docker", "Angular", "PostgreSQL"]
        }
      ]
    },
    projects: {
      title: "Projetos Mais Relevantes",
      badgeCareer: "carreira",
      badgePersonal: "pessoal",
      badgeProject: "Projeto",
      items: [
        {
          title: "Plataforma de Idiomas Cloud-Native",
          description: "Sistema híbrido distribuído com microsserviços Go via gRPC. Apresenta geração de recursos baseada em IA (LLMs) e orquestração monorepo moderna com Nx.",
          tech: ["Go", "gRPC", "Next.js", "AWS", "Nx", "LLMs", "Vitest"],
          type: "personal"
        },
        {
          title: "Microsserviços de Provisionamento Massivo",
          description: "Arquitetura orientada a eventos de alta concorrência usando NestJS e Kafka. Processamento de provisionamento em massa com CassandraDB para operações de dados de latência ultrabaixa na TIGO.",
          tech: ["NestJS", "Kafka", "CassandraDB", "Docker", "PostgreSQL"],
          type: "career"
        },
        {
          title: "Plataforma Central Matrix",
          description: "Projetei a infraestrutura digital regional e o mecanismo de configuração para o Banco Cuscatlán. Modernização de sistemas legados usando Angular 18, Signals e Nx.",
          tech: ["Angular 18", "Signals", "Nx", "TypeScript", "Tailwind"],
          type: "career"
        },
        {
          title: "App Web de Banco Digital",
          description: "Liderei o desenvolvimento frontend da aplicação web principal do Banco Cuscatlán. Módulos críticos de pagamento e registro sob padrões modernos do Angular.",
          tech: ["Angular 18", "RxJS", "Tailwind CSS", "Jest"],
          type: "career"
        },
        {
          title: "Orquestrador de Arquivos Corporativo",
          description: "Serviço de orquestração de arquivos distribuído para a TIGO. Lida con fluxos assíncronos complexos e processamento massivo em ambientes conteinerizados.",
          tech: ["Node.js", "Microservices", "Docker", "Jest"],
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
