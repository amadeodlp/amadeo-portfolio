import { ProjectsProps, Project } from "./types"
import HeroSection from "@/components/organisms/HeroSection"
import SectionHeader from "@/components/molecules/SectionHeader"
import aioniosImage from "@/assets/images/aionios.png"
import addieImage from "@/assets/images/addie.png"
import cryptaraImage from "@/assets/images/cryptara.png"
import sovngardeImage from "@/assets/images/sovngarde.png"
import wavecasterImage from "@/assets/images/wavecaster.png"
import migrationToolImage from "@/assets/images/migration-tool.png"
import mcpImage from "@/assets/images/mcp.png"
import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaDocker,
  FaGitAlt,
  FaAws,
  FaDatabase,
  FaVuejs,
} from "react-icons/fa"
import {
  SiTypescript,
  SiExpress,
  SiNextdotjs,
  SiSpringboot,
  SiMongodb,
  SiMysql,
  SiTailwindcss,
  SiStyledcomponents,
  SiBootstrap,
  SiMui,
  SiStripe,
  SiDotnet,
  SiSolidity,
  SiClaude,
  SiPython,
  SiJira,
  SiConfluence,
} from "react-icons/si"

const getTechIcon = (tech: string) => {
  switch (tech.toLowerCase()) {
    case ".net":
      return <SiDotnet className="text-[#512BD4]" />
    case "solidity":
      return <SiSolidity className="text-[#65AFFF]" />
    case "claude":
      return <SiClaude className="text-[#7D64FF]" />
    case "react":
      return <FaReact className="text-[#61DAFB]" />
    case "typescript":
      return <SiTypescript className="text-[#3178C6]" />
    case "node.js":
      return <FaNodeJs className="text-[#8CC84B]" />
    case "express":
      return <SiExpress className="text-white" />
    case "next.js":
      return <SiNextdotjs className="text-white" />
    case "java":
      return <FaJava className="text-[#007396]" />
    case "spring boot":
      return <SiSpringboot className="text-[#6DB33F]" />
    case "mongodb":
      return <SiMongodb className="text-[#47A248]" />
    case "mysql":
      return <SiMysql className="text-[#4479A1]" />
    case "aws":
      return <FaAws className="text-[#FF9900]" />
    case "docker":
      return <FaDocker className="text-[#2496ED]" />
    case "vue":
      return <FaVuejs className="text-[#F05032]" />
    case "tailwind css":
      return <SiTailwindcss className="text-[#38B2AC]" />
    case "styled components":
      return <SiStyledcomponents className="text-[#DB7093]" />
    case "bootstrap":
      return <SiBootstrap className="text-[#7952B3]" />
    case "material ui":
      return <SiMui className="text-[#0081CB]" />
    case "stripe":
      return <SiStripe className="text-[#008CDD]" />
    case "nasa api":
      return <FaDatabase className="text-[#E03C31]" />
    case "aws dynamodb":
      return <FaAws className="text-[#FF9900]" />
    case "aws s3":
      return <FaAws className="text-[#FF9900]" />
    case "aws rds":
      return <FaDatabase className="text-[#527FFF]" />
    case "aws lambda":
      return <FaAws className="text-[#FF9900]" />
    case "sql server":
      return <FaDatabase className="text-[#CC2927]" />
    case "bcp":
      return <FaDatabase className="text-[#00E9C5]" />
    case "bash":
      return <FaGitAlt className="text-[#4EAA25]" />
    case "python":
      return <SiPython className="text-[#3776AB]" />
    case "mcp":
      return <SiClaude className="text-[#7D64FF]" />
    case "jira":
      return <SiJira className="text-[#0052CC]" />
    case "github":
      return <FaGitAlt className="text-white" />
    case "confluence":
      return <SiConfluence className="text-[#172B4D]" />
    default:
      return <div className="text-[#00E9C5]">{tech.substring(0, 1)}</div>
  }
}

const Projects: React.FC<ProjectsProps> = () => {
  const demoDisclaimer =
    "Production-like demo environment. Some content is synthetic to illustrate user flows."

  const shippedOpenSource: Project[] = [
    {
      id: "addie",
      title: "Addie",
      description:
        "AI co-producer for Ableton Live. Local-first desktop app that can read your session, diagnose mix issues, and execute actions in the DAW via a Python control surface + Node backend + Electron UI.",
      image: addieImage,
      technologies: ["Electron", "Node.js", "Python", "RAG", "WebSocket"],
      featured: true,
      category: "ai",
      github: "https://github.com/amadeodlp/addie",
      liveDemo: "https://addie.digital",
      architecture:
        "Electron shell + Node.js backend (HTTP/WebSocket) + Python MIDI Remote Script bridge over local HTTP; RAG for audio-engineering references",
      challenges:
        "Real-time DAW integration, cross-platform Ableton install paths, safe action execution, keeping all session data local by default",
    },
  ]

  const professionalCaseStudies: Project[] = [
    {
      id: "mcp-servers",
      title: "Model Context Protocol Servers",
      description:
        "Built Python MCP servers for Jira, Confluence, and GitHub from scratch against the MCP spec in December 2024 — before commercial alternatives existed. Connected Claude Desktop directly to enterprise tooling, enabling full API action execution with success/error reporting in the LLM interface. Used in production to bootstrap entire Jira project structures and author client-facing Confluence documentation through Claude — replacing manual project management overhead with LLM-driven workflows.",
      image: mcpImage,
      technologies: ["Python", "Claude", "MCP", "Jira", "GitHub", "Confluence"],
      featured: true,
      category: "ai",
      architecture:
        "Python servers implementing MCP protocol, WebSocket connections, REST API integrations",
      challenges:
        "Real-time bidirectional communication, state management across tools, error handling",
      metrics: "Used in production across live client projects including a 100+ TB enterprise data migration",
    },
    {
      id: "titlescout-etl",
      title: "Migration Tool",
      description:
        "Sole-owned ETL pipeline migrating 30+ on-prem SQL Server clients (10–100 TB per client) to unified AWS infrastructure. Architected around S3 presigned URLs to eliminate VPN requirements across client machines — data transformed on-prem (3 legacy schemas → 1 unified) before upload. EC2 within the same VPC as RDS handled bulk insertion over the private network, with Lambda and SSM orchestrating the handoff. IAM least privilege, CloudWatch logging, and staged inserts via stored-procedure merge applied throughout.",
      image: migrationToolImage,
      technologies: [
        ".NET",
        "AWS",
        "AWS S3",
        "AWS Lambda",
        "AWS RDS",
        "SQL Server",
        "BCP",
        "Bash",
      ],
      featured: true,
      category: "aws",
      architecture:
        "WPF desktop app, SQL Server stored procedures, Lambda functions, S3 staging, RDS targets",
      challenges:
        "Terabyte-scale data migration, schema transformation, constraint handling, performance optimization",
      metrics:
        "Billions of records processed, 70% faster than previous solution",
    },
  ]

  const deployedDemos: Project[] = [
    {
      id: "sovngarde",
      title: "SovnGarde",
      description:
        `Gaming community prototype for indie games: discovery, profiles, and community interaction. ${demoDisclaimer}`,
      image: sovngardeImage,
      technologies: ["Nuxt.js", "TypeScript", "Vue", "Tailwind CSS"],
      github: "https://github.com/amadeodlp/sovngarde-ui",
      liveDemo: "https://sovngarde.social",
      featured: true,
      category: "frontend",
      architecture:
        "Nuxt 3 with Vue Composition API, Pinia state management, Tailwind CSS",
      challenges:
        "Modern Vue 3 patterns, SSR optimization, responsive gaming aesthetics",
    },
    {
      id: "cryptara",
      title: "Cryptara",
      description:
        `Deployed crypto trading prototype with wallet-first UX and Web3 integrations. ${demoDisclaimer}`,
      image: cryptaraImage,
      technologies: ["React", "Solidity", "C#", ".NET"],
      liveDemo: "https://cryptara.lat",
      github: "https://github.com/amadeodlp/cryptara",
      category: "fullstack",
      featured: true,
      architecture:
        "React SPA, ASP.NET Core REST API, Ethereum smart contracts, Web3 integration",
      challenges:
        "Blockchain integration, wallet connectivity, transaction management, real-time price updates",
    },
    {
      id: "wavecaster",
      title: "Wavecaster",
      description:
        `Deployed streaming community prototype (shows, episodes, discovery, and live UI surfaces). ${demoDisclaimer}`,
      image: wavecasterImage,
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase"],
      github: "https://github.com/amadeodlp/canalradionov-ui",
      liveDemo: "https://wavecaster.lat",
      category: "fullstack",
      featured: true,
      architecture:
        "Next.js app with show/episode browsing, live surfaces, and an audio player; Supabase for auth and content",
      challenges:
        "Real-time audio streaming, playlist management, user authentication",
    },
    {
      id: "aionios",
      title: "AIONIOS",
      description:
        `Time capsule dApp prototype anchored to blockchain primitives with a modern web UI. ${demoDisclaimer}`,
      image: aioniosImage,
      technologies: ["Java", "Solidity", "React"],
      github: "https://github.com/amadeodlp/aionios-ui",
      liveDemo: "https://aionios.bio",
      category: "fullstack",
      architecture:
        "Next.js frontend, Spring Boot backend, Solidity smart contracts, IPFS storage",
      challenges:
        "Blockchain time-locking, secure storage, future-proof data retrieval",
    },
  ]

  const renderProject = (project: Project) => {
    return (
      <div
        key={project.id}
        className="bg-dark-light/90 rounded-lg overflow-hidden shadow-lg backdrop-blur-sm"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="aspect-video lg:aspect-auto bg-gradient-to-br from-[#653490] to-[#00E9C5] relative overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          <div className="p-8">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-2xl font-bold text-white">{project.title}</h3>
              {project.featured && (
                <span className="bg-[#653490]/20 text-[#653490] text-xs px-3 py-1 rounded-full">
                  Featured
                </span>
              )}
            </div>

            <p className="text-white/80 mb-6">{project.description}</p>

            {project.architecture && (
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-[#00E9C5] mb-2">
                  Architecture
                </h4>
                <p className="text-white/70 text-sm">{project.architecture}</p>
              </div>
            )}

            {project.challenges && (
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-[#00E9C5] mb-2">
                  Key Challenges
                </h4>
                <p className="text-white/70 text-sm">{project.challenges}</p>
              </div>
            )}

            {project.metrics && (
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-[#00E9C5] mb-2">
                  Impact
                </h4>
                <p className="text-white/70 text-sm">{project.metrics}</p>
              </div>
            )}

            <div className="mb-6">
              <h4 className="text-sm font-semibold text-white/60 mb-2">
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-dark text-xs px-3 py-1 rounded flex items-center gap-1"
                  >
                    <span className="text-base">{getTechIcon(tech)}</span>
                    <span>{tech}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-dark px-4 py-2 rounded text-white/80 hover:text-white transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  View Code
                </a>
              )}

              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#653490] px-4 py-2 rounded text-white hover:bg-[#7e4aaa] transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <HeroSection
        title={
          <>
            <span className="block">PROJECT</span>
            <span className="block">CATALOG</span>
          </>
        }
        pageType="projects"
        description={
          <div className="mt-4 bg-black/70 backdrop-blur-sm p-4 rounded-lg">
            <p className="text-white/90">
              Technical deep-dives into architecture decisions, implementation
              details, and lessons learned.
            </p>
          </div>
        }
      />

      <section className="bg-black py-20">
        <div className="container mx-auto px-4">
          <SectionHeader title="SHIPPED / OPEN SOURCE" color="cyan" />
          <div className="space-y-16 mt-12">
            {shippedOpenSource.map(renderProject)}
          </div>

          <div className="mt-20">
            <SectionHeader title="PROFESSIONAL CASE STUDIES" color="purple" />
            <div className="space-y-16 mt-12">
              {professionalCaseStudies.map(renderProject)}
            </div>
          </div>

          <div className="mt-20">
            <SectionHeader title="DEPLOYED DEMOS" color="blue" />
            <div className="space-y-16 mt-12">{deployedDemos.map(renderProject)}</div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-[#653490] to-[#00E9C5] py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Want to discuss a project?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            I'm open to new opportunities and interesting technical challenges.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-dark font-semibold px-8 py-3 rounded-md transition-all hover:bg-white/90 hover:scale-105 hover:shadow-lg"
          >
            Get in touch
          </a>
        </div>
      </section>
    </>
  )
}

export default Projects
