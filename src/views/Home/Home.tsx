import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HomeProps } from './types'
import {
  FaReact, FaNodeJs, FaJava, FaAws, FaGitAlt,
} from 'react-icons/fa'
import {
  SiTypescript, SiPython, SiDotnet, SiSpringboot,
  SiTailwindcss, SiClaude, SiJira, SiConfluence,
} from 'react-icons/si'
import TechIconsRotator from '@/components/molecules/TechIconsRotator'

import amadeo1 from '@/assets/images/amadeo1.jpg'
import timoImg from '@/assets/images/timo.JPEG'
import addieImg from '@/assets/images/addie.png'
import migrationImg from '@/assets/images/migration-tool.png'
import mcpImg from '@/assets/images/mcp.png'
import aioniosImg from '@/assets/images/aionios.png'
import cryptaraImg from '@/assets/images/cryptara.png'
import sovngardeImg from '@/assets/images/sovngarde.png'
import wavecasterImg from '@/assets/images/wavecaster.png'

// ─── DRAWER CONTENT ──────────────────────────────────────────────────────────

interface DrawerContent {
  title: string
  subtitle: string
  body: { heading: string; text: string }[]
  stack: string[]
  links?: { label: string; url: string }[]
}

const drawerData: Record<string, DrawerContent> = {
  addie: {
    title: 'Addie',
    subtitle: 'AI Producer Assistant for Ableton Live',
    body: [
      {
        heading: 'What it is',
        text: 'A fully local LLM-native desktop application that gives any LLM real-time read/write access to an Ableton Live session — seeing tracks, devices, parameters, clips, and mixer state, and executing actions directly in the DAW. Everything runs locally. Session data never leaves the machine unless the user configures a remote LLM.',
      },
      {
        heading: 'Architecture',
        text: 'Three separate processes communicating over local HTTP and WebSocket: an Electron shell that manages app lifecycle and forks the Node backend, a Node.js backend (Express + WebSocket) that orchestrates the chat pipeline, action execution, and LLM calls, and a Python Ableton MIDI Remote Script that runs inside Ableton itself. A _Future-based sync protocol bridges Python\'s Ableton main thread with the HTTP server\'s background thread — the only way to safely interact with the Live API without deadlocking.',
      },
      {
        heading: 'Action system',
        text: 'The LLM proposes actions, the user confirms, then they execute — no writes without user intent. Before any device action, the target track is always re-read from Live. No assumptions about cached state. This eliminates an entire class of bugs where stale parameter data causes wrong actions. Structural failures (browser_insert, delete_device, group_tracks) halt the batch — non-structural failures are isolated. 50+ bridge commands covering device control, mixer, routing, clips, MIDI notes, warp markers, and automation.',
      },
      {
        heading: 'LLM integration',
        text: 'Bring-your-own-API-key from day one — supports OpenAI, Anthropic, DeepSeek, Mistral, Groq, OpenRouter, and local models via Ollama and LM Studio. Provider auto-detected from key prefix. No Addie server ever touches user data. Knowledge base built from well-known mix engineering reference books — 2,129 chunks embedded with all-MiniLM-L6-v2, retrieved via cosine similarity in ~2ms per message. Python subprocess stays alive with the model in RAM.',
      },
      {
        heading: 'Cross-platform',
        text: 'Full compatibility across Ableton Live 11 and 12 on Windows and macOS. All version-specific API differences isolated in compat.py. Electron layer handles platform path detection including OneDrive and iCloud Drive variants for User Library auto-discovery. Onboarding wizard auto-detects Ableton install path and copies the control surface automatically.',
      },
      {
        heading: 'Privacy-first design',
        text: 'The bring-your-own-key model was a deliberate architectural decision from the start — not an afterthought. The user decides which LLM provider handles their data. No telemetry, no Addie backend, no session data in transit unless explicitly configured.',
      },
    ],
    stack: ['Electron', 'Node.js', 'Python', 'TypeScript', 'WebSocket', 'LLM', 'RAG', 'sentence-transformers', 'Ableton MIDI Remote Script API'],
    links: [
      { label: 'addie.digital', url: 'https://addie.digital' },
      { label: 'github.com/amadeodlp/addie', url: 'https://github.com/amadeodlp/addie' },
    ],
  },
  migration: {
    title: 'Migration Tool',
    subtitle: 'Sole-owned ETL pipeline — 30+ clients, 10–100 TB each',
    body: [
      {
        heading: 'The problem',
        text: '30+ on-prem SQL Server clients running legacy title company software needed migrating to a unified AWS RDS instance. Each client had between 10 and 100 TB of data across 3 incompatible legacy schemas. AWS DMS didn\'t support the schema complexity. No existing tool fit.',
      },
      {
        heading: 'Why S3 presigned URLs',
        text: 'Direct RDS access from client machines would have required setting up a VPN on each of 30+ machines — operationally impossible and a security liability. S3 presigned URLs gave a secure, authenticated upload path requiring zero network configuration on the client side. Clients just ran the tool.',
      },
      {
        heading: 'Why EC2 instead of Lambda',
        text: 'Lambda has a hard 15-minute execution limit. Bulk-inserting 10–100 TB of data per client would take hours, not minutes. EC2 inside the same VPC as RDS handled the long-running insertion over the private network — low latency, no data transfer costs, no security group gymnastics for external access.',
      },
      {
        heading: 'The pipeline',
        text: 'Data was transformed on-prem before upload — 3 legacy schemas unified into 1 with ID offset to prevent collisions across clients. Chunked BCP export → S3 upload with user-configurable concurrency, pause/resume, and session persistence. S3 event notification triggered Lambda, which fired an SSM command on EC2, which downloaded the chunks, bulk-inserted to staging tables, validated, then merged to production via stored procedure. Never a direct prod insert.',
      },
      {
        heading: 'IAM and observability',
        text: 'Every role followed least privilege — Lambda, EC2, and the client tool each had scoped permissions for exactly what they needed. CloudWatch logging across the full pipeline. S3 access policies locked to the specific bucket prefixes per client.',
      },
      {
        heading: 'Ownership',
        text: 'Sole owner from requirements to production. Designed the architecture, built the WPF desktop tool in .NET 6, wrote the Lambda functions, configured the EC2 environment, set up the RDS schema unification, and coordinated remote deployments with each client. No handoffs.',
      },
    ],
    stack: ['C#', '.NET 6', 'WPF', 'AWS S3', 'AWS Lambda', 'AWS EC2', 'AWS RDS', 'AWS SSM', 'IAM', 'CloudWatch', 'SQL Server', 'BCP', 'Bash'],
  },
  cognito: {
    title: 'Auth0 → Cognito Migration',
    subtitle: '16 microservices, zero downtime, fully reversible',
    body: [
      {
        heading: 'The challenge',
        text: 'Migrate authentication across 16 microservices and a React frontend from Auth0 to AWS Cognito, including enterprise Okta SAML SSO for a major client, without disrupting any existing users during a migration that would take months.',
      },
      {
        heading: 'Months of silent preparation',
        text: 'Before any user was migrated, dual-token validation was centralized in a single authorization service that could handle both Auth0 and Cognito tokens simultaneously. Every backend deploy during this period was validated to ensure current Auth0 users kept working as always. 15 microservices never touched the migration — they called the authorization service and got back a validated session regardless of which system issued the token.',
      },
      {
        heading: 'The forced-reset trick',
        text: 'Instead of bridging Auth0 to Cognito (which would have required keeping Auth0 active for months until every user logged in at least once), users were migrated into Cognito in a forced-reset state. On their first post-migration login, instead of seeing "wrong password", they received a reset code and were prompted to set a new one. If they were a legitimate user, they got the code in their email and completed the transition in seconds. An autogenerated temporary password — never known to anyone — lasted until that first login.',
      },
      {
        heading: 'Per-org cutover',
        text: 'A separate Amplify branch (cognito-main) ran the Cognito auth layer. Migrating an organization meant pointing them at that branch. The backend had been ready for months. Rollback was instant — point the org back at the main branch. Cognito users were pre-created with database ID replacement, making the switch fully reversible at any point.',
      },
      {
        heading: 'Okta SAML SSO',
        text: 'Configured a SAML app client in Cognito accepting both IdP and SP-initiated flows for a major enterprise client already using Okta. Coordinated the client ID, secret, and redirect configuration with the client\'s Okta team, validated with direct testing end to end.',
      },
    ],
    stack: ['AWS Cognito', 'Auth0', 'Okta SSO', 'SAML', 'OAuth 2.0', 'OIDC', 'AWS Amplify', 'React', 'Node.js', 'Java', 'Spring Boot', '16 microservices'],
  },
  componentLibrary: {
    title: 'Component Library',
    subtitle: 'TypeScript · TailwindCSS · Storybook — 3 products, 1 source of truth',
    body: [
      {
        heading: 'The problem',
        text: '3 separate React apps (24|7 Fees, Payoff, Recon) each had their own ad-hoc component implementations — divergent styles, duplicated logic, inconsistent QA processes. Bugs fixed in one app would resurface in another. Visual consistency was maintained manually and poorly.',
      },
      {
        heading: 'The solution',
        text: 'A single versioned npm package published to the internal registry, installed as a dependency across all three products. TypeScript enforced throughout — every component had typed props, no implicit any. TailwindCSS was already the shared styling foundation across the ecosystem, so the library extended it rather than fighting it.',
      },
      {
        heading: 'Storybook as the contract',
        text: 'Every component was documented in Storybook with all allowed states, variants, and edge cases visible. This served a dual purpose: developers had a living reference for what was available and how to use it, and QA had a dedicated environment to test component behavior in isolation without needing to navigate the full app. Both teams worked faster.',
      },
      {
        heading: 'Impact',
        text: 'Replaced 3 separate ad-hoc libraries. Bugs fixed once at the library level, resolved across all products on the next version bump. Visual consistency became automatic rather than a review concern. SonarQube debt reduced as duplicated component code was eliminated. Owned versioning and breaking change management — coordinated deprecation cycles across all three consuming apps.',
      },
    ],
    stack: ['TypeScript', 'React', 'TailwindCSS', 'Storybook', 'npm'],
  },
  twilio: {
    title: 'Twilio WebSocket Integration',
    subtitle: 'Real-time resident approval flow — Keenvil access control system',
    body: [
      {
        heading: 'The problem',
        text: 'When a visitor arrived at a private residential community gate, the guard needed a way to notify the resident and get an approval decision in real time — without leaving the access flow or picking up a phone manually. The system served 10 communities with up to 10,000 residents each.',
      },
      {
        heading: 'The flow',
        text: "Guard scans the visitor's document and checks the blacklist API. If the visitor is cleared and not on the blacklist, the guard app fires a WebSocket event that triggers a Twilio call to the resident automatically — in the background, while the guard continues completing the access form. The resident receives the call on their device.",
      },
      {
        heading: 'The resident experience',
        text: "The resident's app surfaces a real-time prompt with three options: approve entry, reject entry, or escalate to the guard for a direct conversation. The WebSocket connection holds the state open — when the resident responds, the guard app updates instantly without polling. The entire flow happens while the visitor is still at the gate.",
      },
      {
        heading: 'Blacklist gate',
        text: "Before the Twilio call fires, the guard app calls the blacklist API with the visitor's details. If the visitor is flagged as unauthorized, the flow terminates immediately — no call is made, no resident is disturbed, and the guard sees a clear rejection reason. This was a deliberate decision to protect residents from being contacted about blacklisted individuals.",
      },
      {
        heading: 'Ownership',
        text: 'Built the entire WebSocket flow end to end in React Native — the event emission, the state management waiting for resident response, the three-way branch on the response, and the guard UI surfaces that updated in real time. Twilio call triggering was handled server-side; the React Native layer owned the real-time communication contract between guard and resident.',
      },
    ],
    stack: ['React Native', 'WebSocket', 'Twilio', 'Xcode', 'Android Studio', 'iOS', 'Android'],
  },
  mcp: {
    title: 'MCP Servers',
    subtitle: 'Claude in the dev workflow — December 2024, before the commercial ones',
    body: [
      {
        heading: 'What and when',
        text: 'In December 2024, built Python MCP servers for Jira, Confluence, and GitHub from scratch against the Model Context Protocol spec — before Atlassian, GitHub, or any major vendor had shipped commercial MCP integrations. Bound to Claude Desktop, enabling full API action execution with success and error reporting directly in the LLM interface.',
      },
      {
        heading: 'Production usage',
        text: 'Used in production to manage live client projects. Bootstrapped entire Jira project structures — epics, user stories, tasks — through Claude. Authored Confluence pages for weekly client reviews through the LLM interface. The 100+ TB migration project was managed this way. This wasn\'t a demo or a prototype.',
      },
      {
        heading: 'What MCP actually means',
        text: 'MCP servers expose tools that Claude can call — each server is a bridge between Claude\'s reasoning and a real external API. The Jira server could create issues, update tickets, query sprints, and report status. The Confluence server could read and write pages. The GitHub server could read repos, open PRs, and check CI status. All of this from a single Claude Desktop conversation.',
      },
      {
        heading: 'Why it matters',
        text: 'Building these before commercial alternatives existed meant writing against the raw spec, handling authentication flows, error cases, and rate limits manually. It also meant being one of the earliest production users of this integration pattern — understanding its constraints and possibilities before most of the industry knew the protocol existed.',
      },
    ],
    stack: ['Python', 'LLM', 'Claude Desktop', 'MCP Protocol', 'Jira API', 'Confluence API', 'GitHub API', 'REST'],
  },
  aionios: {
    title: 'AIONIOS',
    subtitle: 'Time capsule on blockchain',
    body: [
      {
        heading: 'Concept',
        text: 'A decentralized time capsule — users lock messages, files, or media to a future date on-chain. Content is inaccessible until the block timestamp passes. Built as a full-stack dApp with a Next.js frontend, Spring Boot backend, and Solidity smart contracts.',
      },
      {
        heading: 'Tech',
        text: 'Solidity contracts handle the time-locking logic and IPFS content addressing. Spring Boot manages off-chain metadata and user accounts. Next.js frontend with wallet-first UX — no account needed beyond a connected wallet.',
      },
    ],
    stack: ['Next.js', 'Spring Boot', 'Solidity', 'IPFS', 'React', 'Java'],
    links: [
      { label: 'aionios.bio', url: 'https://aionios.bio' },
      { label: 'github.com/amadeodlp/aionios-ui', url: 'https://github.com/amadeodlp/aionios-ui' },
    ],
  },
  cryptara: {
    title: 'Cryptara',
    subtitle: 'DeFi trading platform',
    body: [
      {
        heading: 'Overview',
        text: 'A crypto trading prototype with wallet-first UX and Web3 integrations. React SPA, ASP.NET Core REST API, Ethereum smart contracts. Handles wallet connectivity, real-time price display, and on-chain transaction management.',
      },
    ],
    stack: ['React', 'C#', 'ASP.NET Core', 'Solidity', 'Web3.js'],
    links: [
      { label: 'cryptara.lat', url: 'https://cryptara.lat' },
      { label: 'github.com/amadeodlp/cryptara', url: 'https://github.com/amadeodlp/cryptara' },
    ],
  },
  sovngarde: {
    title: 'SovnGarde',
    subtitle: 'Gaming community platform',
    body: [
      {
        heading: 'Overview',
        text: 'Gaming community prototype for indie games — discovery, profiles, and community interaction. Built with Nuxt 3, Vue Composition API, Pinia state management, and Tailwind CSS. SSR-optimized with a focus on responsive gaming aesthetics.',
      },
    ],
    stack: ['Nuxt 3', 'Vue 3', 'TypeScript', 'Tailwind CSS', 'Pinia'],
    links: [
      { label: 'sovngarde.social', url: 'https://sovngarde.social' },
      { label: 'github.com/amadeodlp/sovngarde-ui', url: 'https://github.com/amadeodlp/sovngarde-ui' },
    ],
  },
  wavecaster: {
    title: 'Wavecaster',
    subtitle: 'Streaming community platform',
    body: [
      {
        heading: 'Overview',
        text: 'Radio and streaming community prototype — shows, episodes, discovery, and live UI surfaces. Next.js app with Supabase for auth and content. Includes an in-app audio player, show browsing, and episode management.',
      },
    ],
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Supabase'],
    links: [
      { label: 'wavecaster.lat', url: 'https://wavecaster.lat' },
      { label: 'github.com/amadeodlp/canalradionov-ui', url: 'https://github.com/amadeodlp/canalradionov-ui' },
    ],
  },
}

// ─── SECTION BACKGROUNDS ─────────────────────────────────────────────────────

const sectionBgs: Record<string, string> = {
  hero: amadeo1,
  addie: addieImg,
  migration: migrationImg,
  cognito: mcpImg,
  projects: aioniosImg,
}

// ─── TECH ICONS ──────────────────────────────────────────────────────────────

const techIcons = [
  FaReact, FaNodeJs, FaJava, FaAws, FaGitAlt,
  SiTypescript, SiPython, SiDotnet, SiSpringboot,
  SiTailwindcss, SiClaude, SiJira, SiConfluence,
]

// ─── COMPONENTS ──────────────────────────────────────────────────────────────

interface ProjectCardProps {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
  link?: string
  github?: string
  onMore: (id: string) => void
}

const ProjectCard: React.FC<ProjectCardProps> = ({ id, title, description, image, tags, link, github, onMore }) => (
  <motion.div
    className="bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-[#00E9C5]/40 transition-all duration-300 flex flex-col"
    whileHover={{ y: -4 }}
  >
    <div className="aspect-video relative overflow-hidden">
      <img src={image} alt={title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
    </div>
    <div className="p-5 flex flex-col flex-1">
      <h3 className="text-white font-bold text-lg mb-1">{title}</h3>
      <p className="text-white/60 text-sm mb-4 flex-1">{description}</p>
      <div className="flex flex-wrap gap-1 mb-4">
        {tags.map(t => (
          <span key={t} className="text-xs px-2 py-0.5 rounded-full bg-white/10 text-white/70">{t}</span>
        ))}
      </div>
      <div className="flex items-center gap-3">
        <button
          onClick={() => onMore(id)}
          className="text-sm text-[#00E9C5] hover:underline"
        >
          More →
        </button>
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer"
            className="text-sm text-white/50 hover:text-white transition-colors">Live</a>
        )}
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer"
            className="text-sm text-white/50 hover:text-white transition-colors">GitHub</a>
        )}
      </div>
    </div>
  </motion.div>
)

// ─── DRAWER ───────────────────────────────────────────────────────────────────

interface DrawerProps {
  id: string | null
  onClose: () => void
}

const Drawer: React.FC<DrawerProps> = ({ id, onClose }) => {
  const data = id ? drawerData[id] : null

  return (
    <AnimatePresence>
      {id && data && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          {/* Drawer */}
          <motion.div
            className="fixed top-0 right-0 h-full w-full max-w-2xl bg-[#0a0a0a] border-l border-white/10 z-50 overflow-y-auto"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
          >
            {/* Close */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors text-2xl z-10"
            >
              ✕
            </button>

            <div className="p-8 pt-16">
              {/* Header */}
              <div className="mb-8">
                <p className="text-[#00E9C5] text-sm font-mono mb-2 uppercase tracking-widest">{data.subtitle}</p>
                <h2 className="text-4xl font-bold text-white">{data.title}</h2>
              </div>

              {/* Body sections */}
              <div className="space-y-8">
                {data.body.map((section, i) => (
                  <div key={i}>
                    <h3 className="text-[#00E9C5] text-xs font-mono uppercase tracking-widest mb-2">{section.heading}</h3>
                    <p className="text-white/75 leading-relaxed text-sm">{section.text}</p>
                  </div>
                ))}
              </div>

              {/* Stack */}
              <div className="mt-10">
                <h3 className="text-white/40 text-xs font-mono uppercase tracking-widest mb-3">Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {data.stack.map(t => (
                    <span key={t} className="text-xs px-3 py-1 rounded-full border border-white/20 text-white/70">{t}</span>
                  ))}
                </div>
              </div>

              {/* Links */}
              {data.links && (
                <div className="mt-8 flex flex-wrap gap-4">
                  {data.links.map(l => (
                    <a
                      key={l.url}
                      href={l.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[#00E9C5] border border-[#00E9C5]/30 px-4 py-2 rounded-lg hover:bg-[#00E9C5]/10 transition-colors"
                    >
                      {l.label} ↗
                    </a>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

// ─── SCROLL SECTION ──────────────────────────────────────────────────────────

interface SectionProps {
  id: string
  bgImage: string
  children: React.ReactNode
  grayscale?: boolean
  dimOverlay?: number
}

const ScrollSection: React.FC<SectionProps> = ({ id, bgImage, children, grayscale = false, dimOverlay = 0.7 }) => (
  <section
    id={id}
    className="relative min-h-screen flex items-center py-24"
  >
    {/* Sticky background */}
    <div
      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${bgImage})`,
        filter: grayscale ? 'grayscale(100%)' : 'none',
      }}
    />
    <div
      className="absolute inset-0"
      style={{ background: `rgba(0,0,0,${dimOverlay})` }}
    />
    <div className="relative z-10 container mx-auto px-6">
      {children}
    </div>
  </section>
)

// ─── NAV DOTS ────────────────────────────────────────────────────────────────

const sections = ['hero', 'addie', 'migration', 'cognito', 'projects', 'contact']
const sectionLabels: Record<string, string> = {
  hero: 'Top',
  addie: 'Addie',
  migration: 'Migration',
  cognito: 'Auth',
  projects: 'Projects',
  contact: 'Contact',
}

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────

const Home: React.FC<HomeProps> = () => {
  const [activeSection, setActiveSection] = useState('hero')
  const [drawerOpen, setDrawerOpen] = useState<string | null>(null)
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { threshold: 0.4 }
    )
    sections.forEach(id => {
      const el = document.getElementById(id)
      if (el) observerRef.current?.observe(el)
    })
    return () => observerRef.current?.disconnect()
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="relative">

      {/* ── NAV DOTS ── */}
      <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-3">
        {sections.map(id => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            title={sectionLabels[id]}
            className="group flex items-center justify-end gap-2"
          >
            <span className="text-xs text-white/0 group-hover:text-white/60 transition-all duration-200 font-mono">
              {sectionLabels[id]}
            </span>
            <span
              className={`block rounded-full transition-all duration-300 ${
                activeSection === id
                  ? 'w-3 h-3 bg-[#00E9C5]'
                  : 'w-2 h-2 bg-white/30 group-hover:bg-white/60'
              }`}
            />
          </button>
        ))}
      </nav>

      {/* ── DRAWER ── */}
      <Drawer id={drawerOpen} onClose={() => setDrawerOpen(null)} />

      {/* ═══════════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════════ */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center py-24 bg-black overflow-hidden"
      >
        {/* Photo — right side, 25% width, grayscale */}
        <div
          className="absolute top-0 right-0 h-full w-1/4 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${amadeo1})`,
            filter: 'grayscale(100%)',
            maskImage: 'linear-gradient(to right, transparent 0%, black 30%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 30%)',
          }}
        />
        {/* Fade edge between photo and black */}
        <div className="absolute top-0 right-0 h-full w-1/3 bg-gradient-to-r from-black via-black/60 to-transparent pointer-events-none" />

        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-3xl">
            <motion.p
              className="text-[#00E9C5] font-mono text-sm uppercase tracking-widest mb-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Amadeo de la Peña — Buenos Aires
            </motion.p>
            <motion.h1
              className="text-6xl md:text-8xl font-bold text-white leading-none mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              THE RIGHT TECH<br />
              FOR THE<br />
              <span className="text-[#00E9C5]">RIGHT REASON</span>
            </motion.h1>
            <motion.p
              className="text-white/60 text-lg mb-10 max-w-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Full-stack engineer. AWS infrastructure. LLM tooling.<br />
              Sole owner of complex systems from architecture to production.
            </motion.p>
            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <button
                onClick={() => scrollTo('addie')}
                className="bg-[#653490] text-white px-8 py-3 rounded-lg hover:bg-[#7e4aaa] transition-colors"
              >
                See the work
              </button>
              <button
                onClick={() => scrollTo('contact')}
                className="border border-white/30 text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-colors"
              >
                Contact
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          ADDIE
      ═══════════════════════════════════════════════════ */}
      <ScrollSection id="addie" bgImage={addieImg} dimOverlay={0.82}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#00E9C5] font-mono text-xs uppercase tracking-widest mb-3">Open source · addie.digital</p>
            <h2 className="text-5xl font-bold text-white mb-6">Addie</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              A fully local LLM-native desktop application that gives any LLM
              real-time read/write access to an Ableton Live session. Three-process
              architecture: Electron shell, Node.js backend, and a Python Ableton
              MIDI Remote Script communicating over local HTTP.
            </p>
            <p className="text-white/70 leading-relaxed mb-8">
              Bring-your-own-API-key from day one. No Addie server touches your data.
              50+ DAW commands. Full cross-platform compatibility on Live 11 and 12.
            </p>
            <div className="flex gap-4">
              <button
                onClick={() => setDrawerOpen('addie')}
                className="bg-[#00E9C5] text-black font-semibold px-6 py-2.5 rounded-lg hover:bg-[#00c9a8] transition-colors"
              >
                Technical depth →
              </button>
              <a
                href="https://addie.digital"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/20 text-white px-6 py-2.5 rounded-lg hover:bg-white/10 transition-colors"
              >
                Visit site ↗
              </a>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img src={addieImg} alt="Addie" className="w-full" />
            </div>
          </div>
        </div>
      </ScrollSection>

      {/* ═══════════════════════════════════════════════════
          MIGRATION TOOL
      ═══════════════════════════════════════════════════ */}
      <ScrollSection id="migration" bgImage={migrationImg} dimOverlay={0.85}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="hidden lg:block order-1">
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img src={migrationImg} alt="Migration Tool" className="w-full" />
            </div>
          </div>
          <div className="order-2">
            <p className="text-[#00E9C5] font-mono text-xs uppercase tracking-widest mb-3">Viking Sasquatch · Sole owner</p>
            <h2 className="text-5xl font-bold text-white mb-6">100+ TB<br />Migrated</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              End-to-end ETL pipeline migrating 30+ on-prem SQL Server clients
              to AWS. 10 to 100 TB per client. Presigned S3 URLs eliminated VPN
              requirements. EC2 in the same VPC as RDS handled bulk insertion.
              Lambda + SSM orchestrated the handoff.
            </p>
            <p className="text-white/70 leading-relaxed mb-8">
              Every architectural decision — S3 over direct connection, EC2 over Lambda,
              staging tables over direct prod inserts — was reasoned and owned.
            </p>
            <button
              onClick={() => setDrawerOpen('migration')}
              className="bg-[#00E9C5] text-black font-semibold px-6 py-2.5 rounded-lg hover:bg-[#00c9a8] transition-colors"
            >
              Why each decision was made →
            </button>
          </div>
        </div>
      </ScrollSection>

      {/* ═══════════════════════════════════════════════════
          AUTH / COGNITO / MCP
      ═══════════════════════════════════════════════════ */}
      <ScrollSection id="cognito" bgImage={mcpImg} dimOverlay={0.88}>
        <div className="max-w-5xl mx-auto">
          <p className="text-[#00E9C5] font-mono text-xs uppercase tracking-widest mb-3 text-center">Viking Sasquatch · 2023–present</p>
          <h2 className="text-5xl font-bold text-white mb-16 text-center">More work</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {/* Cognito */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-[#00E9C5]/30 transition-colors flex flex-col">
              <h3 className="text-lg font-bold text-white mb-2">Auth0 → Cognito</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-4 flex-1">
                16 microservices. Zero downtime. Months of silent dual-token prep.
                Forced-reset trick instead of bridging. Okta SAML SSO.
              </p>
              <button onClick={() => setDrawerOpen('cognito')} className="text-[#00E9C5] text-sm hover:underline text-left">Full story →</button>
            </div>

            {/* MCP */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-[#00E9C5]/30 transition-colors flex flex-col">
              <h3 className="text-lg font-bold text-white mb-2">MCP Servers</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-4 flex-1">
                Python MCP servers for Jira, Confluence, and GitHub — December 2024,
                before commercial alternatives existed. Production usage.
              </p>
              <button onClick={() => setDrawerOpen('mcp')} className="text-[#00E9C5] text-sm hover:underline text-left">Full story →</button>
            </div>

            {/* Component Library */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-[#00E9C5]/30 transition-colors flex flex-col">
              <h3 className="text-lg font-bold text-white mb-2">Component Library</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-4 flex-1">
                TypeScript + TailwindCSS + Storybook. Replaced 3 ad-hoc libraries
                across 3 products. One fix, resolved everywhere.
              </p>
              <button onClick={() => setDrawerOpen('componentLibrary')} className="text-[#00E9C5] text-sm hover:underline text-left">Full story →</button>
            </div>

            {/* Twilio WebSocket */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-[#00E9C5]/30 transition-colors flex flex-col">
              <h3 className="text-lg font-bold text-white mb-2">Twilio WebSocket</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-4 flex-1">
                Real-time resident approval flow for 50,000+ users. Guard scans visitor,
                WebSocket holds state, Twilio calls resident, response updates instantly.
              </p>
              <button onClick={() => setDrawerOpen('twilio')} className="text-[#00E9C5] text-sm hover:underline text-left">Full story →</button>
            </div>
          </div>

          {/* Tech carousel */}
          <div className="flex flex-col items-center gap-6">
            <p className="text-white/30 font-mono text-xs uppercase tracking-widest">Stack</p>
            <TechIconsRotator
              icons={techIcons}
              size="medium"
              shadow={true}
              transitionInterval={1800}
            />
          </div>
        </div>
      </ScrollSection>

      {/* ═══════════════════════════════════════════════════
          PERSONAL PROJECTS
      ═══════════════════════════════════════════════════ */}
      <ScrollSection id="projects" bgImage={aioniosImg} dimOverlay={0.87}>
        <div className="max-w-6xl mx-auto">
          <p className="text-[#00E9C5] font-mono text-xs uppercase tracking-widest mb-3">Personal work</p>
          <h2 className="text-5xl font-bold text-white mb-12">Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ProjectCard
              id="aionios"
              title="AIONIOS"
              description="Time capsule on blockchain. Lock messages to a future date on-chain."
              image={aioniosImg}
              tags={['Next.js', 'Solidity', 'Spring Boot']}
              link="https://aionios.bio"
              github="https://github.com/amadeodlp/aionios-ui"
              onMore={setDrawerOpen}
            />
            <ProjectCard
              id="cryptara"
              title="Cryptara"
              description="DeFi trading platform with wallet-first UX and smart contract integration."
              image={cryptaraImg}
              tags={['React', 'C#', 'Solidity']}
              link="https://cryptara.lat"
              github="https://github.com/amadeodlp/cryptara"
              onMore={setDrawerOpen}
            />
            <ProjectCard
              id="sovngarde"
              title="SovnGarde"
              description="Gaming community platform for indie game discovery and social interaction."
              image={sovngardeImg}
              tags={['Nuxt 3', 'Vue', 'TypeScript']}
              link="https://sovngarde.social"
              github="https://github.com/amadeodlp/sovngarde-ui"
              onMore={setDrawerOpen}
            />
            <ProjectCard
              id="wavecaster"
              title="Wavecaster"
              description="Radio streaming community with live surfaces and in-app audio player."
              image={wavecasterImg}
              tags={['Next.js', 'Supabase', 'TypeScript']}
              link="https://wavecaster.lat"
              github="https://github.com/amadeodlp/canalradionov-ui"
              onMore={setDrawerOpen}
            />
          </div>
        </div>
      </ScrollSection>

      {/* ═══════════════════════════════════════════════════
          CONTACT
      ═══════════════════════════════════════════════════ */}
      <section
        id="contact"
        className="relative min-h-screen flex items-center py-24 bg-gradient-to-br from-[#0a0a0a] via-[#1a0a2e] to-[#0a0a0a]"
      >
        <div className="container mx-auto px-6 max-w-2xl">
          <p className="text-[#00E9C5] font-mono text-xs uppercase tracking-widest mb-3">Get in touch</p>
          <h2 className="text-5xl font-bold text-white mb-6">Let's talk</h2>
          <p className="text-white/60 text-lg mb-12">
            Open to interesting projects, cloud architecture challenges,
            and LLM tooling work.
          </p>

          <div className="space-y-4 mb-12">
            <a
              href="mailto:amadeodlp@hotmail.com"
              className="flex items-center gap-4 text-white/70 hover:text-white transition-colors group"
            >
              <span className="text-[#00E9C5] font-mono text-xs w-20">EMAIL</span>
              <span className="group-hover:underline">amadeodlp@hotmail.com</span>
            </a>
            <a
              href="https://linkedin.com/in/amadeodlp"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-white/70 hover:text-white transition-colors group"
            >
              <span className="text-[#00E9C5] font-mono text-xs w-20">LINKEDIN</span>
              <span className="group-hover:underline">linkedin.com/in/amadeodlp</span>
            </a>
            <a
              href="https://github.com/amadeodlp"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-white/70 hover:text-white transition-colors group"
            >
              <span className="text-[#00E9C5] font-mono text-xs w-20">GITHUB</span>
              <span className="group-hover:underline">github.com/amadeodlp</span>
            </a>
          </div>

          <div className="border-t border-white/10 pt-8 text-white/30 text-sm font-mono">
            Buenos Aires, Argentina · Available for remote work
          </div>
        </div>
      </section>

    </div>
  )
}

export default Home
