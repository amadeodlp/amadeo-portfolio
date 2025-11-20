import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HomeProps } from './types';
import AnimatedBackground from "@/components/molecules/AnimatedBackground"
import { pageBackgrounds } from '@/utils/imageUtils';
import cryptaraImage from '@/assets/images/cryptara.png';
import aioniosImage from "@/assets/images/aionios.png"
import sovngardeImage from "@/assets/images/sovngarde.png"
import migrationToolImage from "@/assets/images/migration-tool.png"
import mcpImage from "@/assets/images/mcp.png"
import wavecasterImage from "@/assets/images/wavecaster.png"

const primaryBackgrounds = pageBackgrounds.home.primary
const secondaryBackgrounds = pageBackgrounds.home.secondary

const Home: React.FC<HomeProps> = () => {
  const [currentBgIndex, setCurrentBgIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [showScrollIndicator, setShowScrollIndicator] = useState(true)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentBgIndex(
          prevIndex => (prevIndex + 1) % primaryBackgrounds.length
        )
      }, 1000)
      setTimeout(() => {
        setIsTransitioning(false)
      }, 2500)
    }, 10000)
    return () => clearInterval(intervalId)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollIndicator(false)
      } else {
        setShowScrollIndicator(true)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden z-5">
        <AnimatedBackground
          images={primaryBackgrounds}
          secondaryImages={secondaryBackgrounds}
          currentImageIndex={currentBgIndex}
          isTransitioning={isTransitioning}
        />

        <div className="container mx-auto px-4 relative z-10 text-right">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white py-20">
              <span className="block">THE RIGHT TECH</span>
              <span className="block">FOR THE RIGHT REASON</span>
            </h1>

            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto text-right">
              AWS infrastructure, AI integrations, full-stack development
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/projects"
                  className="bg-[#653490] text-white px-8 py-3 rounded-md hover:bg-[#7e4aaa] transition-all duration-300 inline-block shadow-lg shadow-[#653490]/30 hover:shadow-xl"
                >
                  See projects
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact"
                  className="bg-transparent border border-white/30 text-white px-8 py-3 rounded-md hover:bg-white/10 transition-all duration-300 inline-block hover:border-white/70 backdrop-blur-sm"
                >
                  Contact
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {showScrollIndicator && (
          <motion.div
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-20 hidden md:flex"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <span className="text-white/80 text-sm mb-2 drop-shadow-md font-light tracking-wider">
              Scroll Down
            </span>
            <motion.div
              animate={{
                y: [0, 8, 0],
                opacity: [0.6, 1, 0.6],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="bg-white/10 backdrop-blur-sm p-2 rounded-full shadow-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white drop-shadow-md"
              >
                <path d="M12 5v14M19 12l-7 7-7-7" />
              </svg>
            </motion.div>
          </motion.div>
        )}
      </section>

      {/* MCP Integration Project */}
      <section className="bg-dark py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="aspect-video bg-gradient-to-tr from-[#7d42ab] to-[#39ffda] rounded-lg overflow-hidden shadow-2xl">
                <img
                  src={mcpImage}
                  alt="Model Context Protocol Servers"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                AI meets enterprise tooling
              </h2>
              <p className="text-white/70 mb-6">
                Custom MCP servers connecting Claude Desktop with filesystem,
                Jira, GitHub, and Confluence. Autonomous ticket management,
                documentation sync, and file operations. 10x faster workflows.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-dark-light/80 text-xs px-3 py-1 rounded-full text-white/90">
                  Python
                </span>
                <span className="bg-dark-light/80 text-xs px-3 py-1 rounded-full text-white/90">
                  Claude API
                </span>
                <span className="bg-dark-light/80 text-xs px-3 py-1 rounded-full text-white/90">
                  MCP Protocol
                </span>
              </div>
              <Link
                to="/projects"
                className="inline-flex items-center text-[#00E9C5] hover:underline group"
              >
                <span className="group-hover:mr-1 transition-all">
                  View all projects
                </span>
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-1 group-hover:ml-2 transition-all"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  whileHover={{ x: 3 }}
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </motion.svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Migration Tool */}
      <section className="bg-dark-light py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                ETL at scale
              </h2>
              <p className="text-white/70 mb-6">
                Enterprise data migration system handling terabytes from legacy
                title platforms. Schema transformation, billions of records,
                cursor pagination, BCP exports to S3, Lambda-triggered RDS
                imports with constraint management.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-dark/80 text-xs px-3 py-1 rounded-full text-white/90">
                  .NET 6
                </span>
                <span className="bg-dark/80 text-xs px-3 py-1 rounded-full text-white/90">
                  AWS S3
                </span>
                <span className="bg-dark/80 text-xs px-3 py-1 rounded-full text-white/90">
                  AWS Lambda
                </span>
                <span className="bg-dark/80 text-xs px-3 py-1 rounded-full text-white/90">
                  AWS RDS
                </span>
              </div>
              <Link
                to="/projects"
                className="inline-flex items-center text-[#00E9C5] hover:underline group"
              >
                <span className="group-hover:mr-1 transition-all">
                  Explore more
                </span>
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-1 group-hover:ml-2 transition-all"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  whileHover={{ x: 3 }}
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </motion.svg>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <div className="aspect-video bg-gradient-to-bl from-[#39ffda] to-[#7d42ab] rounded-lg overflow-hidden shadow-2xl">
                <img
                  src={migrationToolImage}
                  alt="Migration Tool"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Grid Section */}
      <section className="bg-dark py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              More projects
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Cryptara */}
            <motion.div
              className="bg-dark-light/80 rounded-lg overflow-hidden shadow-lg group backdrop-blur-sm border border-white/5 hover:border-white/10 transition-all duration-300"
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="aspect-video bg-gradient-to-tr from-[#7d42ab] to-[#39ffda] relative overflow-hidden">
                <img
                  src={cryptaraImage}
                  alt="Cryptara"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-[#00E9C5] transition-colors">
                  Cryptara
                </h3>
                <p className="text-white/70 text-sm mb-4">
                  DeFi platform. React frontend, ASP.NET Core backend, Solidity
                  smart contracts.
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex gap-2">
                    <span className="bg-black/30 text-xs px-2 py-1 rounded">
                      React
                    </span>
                    <span className="bg-black/30 text-xs px-2 py-1 rounded">
                      Solidity
                    </span>
                  </div>
                  <a
                    href="https://github.com/amadeodlp/finance-simplified"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-white transition-colors"
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
                  </a>
                </div>
              </div>
            </motion.div>

            {/* AIONIOS */}
            <motion.div
              className="bg-dark-light/80 rounded-lg overflow-hidden shadow-lg group backdrop-blur-sm border border-white/5 hover:border-white/10 transition-all duration-300"
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="aspect-video bg-gradient-to-bl from-[#39ffda] to-[#7d42ab] relative overflow-hidden">
                <img
                  src={aioniosImage}
                  alt="AIONIOS"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-[#00E9C5] transition-colors">
                  AIONIOS
                </h3>
                <p className="text-white/70 text-sm mb-4">
                  Time capsule on blockchain. Next.js, Spring Boot, Solidity
                  contracts.
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex gap-2">
                    <span className="bg-black/30 text-xs px-2 py-1 rounded">
                      Next.js
                    </span>
                    <span className="bg-black/30 text-xs px-2 py-1 rounded">
                      Solidity
                    </span>
                  </div>
                  <a
                    href="https://github.com/amadeodlp/amastore"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-white transition-colors"
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
                  </a>
                </div>
              </div>
            </motion.div>

            {/* SovnGarde */}
            <motion.div
              className="bg-dark-light/80 rounded-lg overflow-hidden shadow-lg group backdrop-blur-sm border border-white/5 hover:border-white/10 transition-all duration-300"
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="aspect-video bg-gradient-to-br from-[#7d42ab] to-[#39ffda] relative overflow-hidden">
                <img
                  src={sovngardeImage}
                  alt="SovnGarde"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-[#00E9C5] transition-colors">
                  SovnGarde
                </h3>
                <p className="text-white/70 text-sm mb-4">
                  Gaming community platform. Nuxt 3, TypeScript, modern Vue
                  ecosystem.
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex gap-2">
                    <span className="bg-black/30 text-xs px-2 py-1 rounded">
                      Nuxt 3
                    </span>
                    <span className="bg-black/30 text-xs px-2 py-1 rounded">
                      Vue
                    </span>
                  </div>
                  <a
                    href="https://github.com/amadeodlp/sovngarde-ui"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-white transition-colors"
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
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Wavecaster */}
            <motion.div
              className="bg-dark-light/80 rounded-lg overflow-hidden shadow-lg group backdrop-blur-sm border border-white/5 hover:border-white/10 transition-all duration-300"
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="aspect-video bg-gradient-to-tr from-[#7d42ab] to-[#39ffda] relative overflow-hidden">
                <img
                  src={wavecasterImage}
                  alt="Wavecaster"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-[#00E9C5] transition-colors">
                  Wavecaster
                </h3>
                <p className="text-white/70 text-sm mb-4">
                  Radio station platform. React frontend, Spring Boot backend,
                  MySQL.
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex gap-2">
                    <span className="bg-black/30 text-xs px-2 py-1 rounded">
                      React
                    </span>
                    <span className="bg-black/30 text-xs px-2 py-1 rounded">
                      Spring Boot
                    </span>
                  </div>
                  <a
                    href="https://github.com/amadeodlp/wavecaster"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-white transition-colors"
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
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/projects"
              className="inline-flex items-center bg-[#653490] text-white px-8 py-3 rounded-md hover:bg-[#7e4aaa] transition-all duration-300 shadow-lg"
            >
              View all projects
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Work Experience Preview */}
      <section className="bg-dark-light py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Professional work
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              className="bg-dark/80 p-6 rounded-lg backdrop-blur-sm border border-white/5 hover:border-[#00E9C5]/30 transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-[#00E9C5] mb-2">
                Viking Sasquatch
              </h3>
              <p className="text-white/60 text-sm mb-3">Full-Stack Developer</p>
              <p className="text-white/70 text-sm">
                AWS infrastructure, AI integrations, cross-platform services
              </p>
            </motion.div>

            <motion.div
              className="bg-dark/80 p-6 rounded-lg backdrop-blur-sm border border-white/5 hover:border-[#00E9C5]/30 transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="text-xl font-bold text-[#00E9C5] mb-2">
                FirstClose
              </h3>
              <p className="text-white/60 text-sm mb-3">
                React & Vue Developer
              </p>
              <p className="text-white/70 text-sm">
                Title business web applications, equity management systems
              </p>
            </motion.div>

            <motion.div
              className="bg-dark/80 p-6 rounded-lg backdrop-blur-sm border border-white/5 hover:border-[#00E9C5]/30 transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-xl font-bold text-[#00E9C5] mb-2">Keenvil</h3>
              <p className="text-white/60 text-sm mb-3">Front-End & Mobile</p>
              <p className="text-white/70 text-sm">
                Responsive applications, cross-platform development
              </p>
            </motion.div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/experience"
              className="inline-flex items-center text-[#00E9C5] hover:underline text-lg group"
            >
              <span className="group-hover:mr-1 transition-all">
                Full work history
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-1 group-hover:ml-2 transition-all"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#653490] to-[#00E9C5] py-20 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Looking for AWS + AI expertise?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            I build cloud infrastructure and integrate AI systems with
            enterprise tools. Let's talk about your project.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-dark font-semibold px-8 py-3 rounded-md transition-all duration-300 hover:bg-white/90 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </>
  )
}

export default Home
