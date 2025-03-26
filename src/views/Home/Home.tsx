import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HomeProps } from './types';
import AnimatedBackground from '@/components/molecules/AnimatedBackground';
import SectionHeader from '@/components/molecules/SectionHeader';
import InfoSection from '@/components/molecules/InfoSection';
import { pageBackgrounds } from '@/utils/imageUtils';
import cryptaraImage from '@/assets/images/cryptara.png';
import aioniosImage from "@/assets/images/aionios.png"
import wavecasterImage from "@/assets/images/wavecaster.png"
import vikingSasquatchImage from "@/assets/images/fees.png"
import firstCloseImage from "@/assets/images/firstclose.png"
import keenvilImage from "@/assets/images/keenvil.png"

// Use our image utility to get background images
const primaryBackgrounds = pageBackgrounds.home.primary
const secondaryBackgrounds = pageBackgrounds.home.secondary

const Home: React.FC<HomeProps> = () => {
  const [currentBgIndex, setCurrentBgIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [showScrollIndicator, setShowScrollIndicator] = useState(true)

  // Change background image every 10 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsTransitioning(true)

      setTimeout(() => {
        setCurrentBgIndex(
          prevIndex => (prevIndex + 1) % primaryBackgrounds.length
        )
      }, 1000) // Change image after starting transition

      // Reset transition state
      setTimeout(() => {
        setIsTransitioning(false)
      }, 2500) // Extended transition time for secondary image effect
    }, 10000) // Extended to 10 seconds for a slower pace

    return () => clearInterval(intervalId)
  }, [])

  // Handle scroll indicator
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
        {/* Animated Background with primary and secondary images */}
        <AnimatedBackground
          images={primaryBackgrounds}
          secondaryImages={secondaryBackgrounds}
          currentImageIndex={currentBgIndex}
          isTransitioning={isTransitioning}
        />

        {/* Hero Content */}
        <div className="container mx-auto px-4 relative z-10 text-right">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white py-20">
              <span className="block">IF YOU CAN THINK OF IT,</span>
              <span className="block">I CAN MAKE IT REAL</span>
            </h1>

            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto text-right">
              I'm Amadeo de la Peña, software developer based in Argentina.
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

        {/* Scroll indicator - hidden on mobile */}
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

      {/* About Section */}
      <section className="bg-dark py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <InfoSection>
              I'm a seasoned software developer, and I can say I have worked
              across almost everything. From designing robust backend systems to
              crafting intuitive front-end interfaces, I've built solutions that
              are both scalable and efficient. My technical expertise spans
              across multiple languages, frameworks, and platforms, enabling me
              to tackle any challenge with confidence. I focus on quality,
              performance, and user experience, delivering results that speak
              for themselves. When it comes to software development, I don't
              just follow industry standards—I set them.
            </InfoSection>
          </div>

          <SectionHeader title="ABOUT ME" color="cyan" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">Who am I?</h3>
              <p className="text-white/80 mb-4">
                I am a passionate software developer specializing in building
                modern web applications with a focus on clean code, performance,
                and user experience
              </p>
              <p className="text-white/80 mb-6">
                Ever since I wrote my first lines of code, I've been fascinated
                by the power of technology to bring ideas to life. What started
                as curiosity quickly turned into a passion for building modern
                web applications that are not only functional but also intuitive
                and enjoyable to use. Over the years, I've honed my skills in
                technologies like React, TypeScript, Node.js, and Spring Boot,
                always striving to write clean, efficient, and scalable code. I
                love exploring new frameworks and tools, constantly learning and
                refining my approach to software development. I also have
                experience working with AWS, leveraging cloud services to build
                scalable and reliable applications.{" "}
              </p>
              <Link
                to="/about"
                className="inline-flex items-center text-[#00E9C5] hover:underline group transition-all duration-300"
              >
                <span className="group-hover:mr-1 transition-all duration-300">
                  Know more
                </span>
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-1 group-hover:ml-2 transition-all duration-300"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  whileHover={{ x: 3 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </motion.svg>
              </Link>
            </div>

            <div>
              <div className="bg-dark-light/80 p-6 rounded-lg h-full shadow-lg backdrop-blur-sm border border-white/5 hover:border-white/10 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4 text-white">
                  Main coding languages I use
                </h3>

                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-white">TypeScript</span>
                      <span className="text-white/60">90%</span>
                    </div>
                    <div className="w-full h-2 bg-dark/80 rounded-full overflow-hidden shadow-inner">
                      <motion.div
                        className="h-full bg-gradient-to-r from-[#653490] to-[#00E9C5]"
                        initial={{ width: 0 }}
                        animate={{ width: "90%" }}
                        transition={{
                          duration: 1.5,
                          delay: 0.2,
                          ease: "easeOut",
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-white">Java</span>
                      <span className="text-white/60">85%</span>
                    </div>
                    <div className="w-full h-2 bg-dark/80 rounded-full overflow-hidden shadow-inner">
                      <motion.div
                        className="h-full bg-gradient-to-r from-[#653490] to-[#00E9C5]"
                        initial={{ width: 0 }}
                        animate={{ width: "85%" }}
                        transition={{
                          duration: 1.5,
                          delay: 0.4,
                          ease: "easeOut",
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-white">C#</span>
                      <span className="text-white/60">80%</span>
                    </div>
                    <div className="w-full h-2 bg-dark/80 rounded-full overflow-hidden shadow-inner">
                      <motion.div
                        className="h-full bg-gradient-to-r from-[#653490] to-[#00E9C5]"
                        initial={{ width: 0 }}
                        animate={{ width: "80%" }}
                        transition={{
                          duration: 1.5,
                          delay: 0.6,
                          ease: "easeOut",
                        }}
                      />
                    </div>
                  </div>

                  <Link
                    to="/skills"
                    className="inline-flex items-center text-[#00E9C5] hover:underline mt-4 block group transition-all duration-300"
                  >
                    <span className="group-hover:mr-1 transition-all duration-300">
                      See All My Tech Stack
                    </span>
                    <motion.svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-1 group-hover:ml-2 transition-all duration-300"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      whileHover={{ x: 3 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </motion.svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects & Experience Preview Section */}
      <section className="bg-dark-light py-20 relative z-10">
        <div className="container mx-auto px-4">
          <SectionHeader title="PROJECTS & EXPERIENCE" color="purple" />

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Cryptara Project */}
            <motion.div
              className="bg-dark/80 rounded-lg overflow-hidden shadow-lg group backdrop-blur-sm border border-white/5 hover:border-white/10 transition-all duration-300"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="aspect-video bg-gradient-to-tr relative overflow-hidden group-hover:from-[#7d42ab] group-hover:to-[#39ffda] transition-all duration-500">
                <img
                  src={cryptaraImage}
                  alt="Cryptara"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-[#00E9C5] transition-colors duration-300">
                  Cryptara
                </h3>
                <p className="text-white/70 text-sm mb-4">
                  Full-stack DeFi platform combining React/TypeScript frontend,
                  ASP.NET Core backend, and Solidity smart contracts for crypto
                  trading and management.
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex gap-2">
                    <span className="bg-black/30 text-xs px-2 py-1 rounded backdrop-blur-sm">
                      React
                    </span>
                    <span className="bg-black/30 text-xs px-2 py-1 rounded backdrop-blur-sm">
                      Solidity
                    </span>
                    <span className="bg-black/30 text-xs px-2 py-1 rounded backdrop-blur-sm">
                      .NET
                    </span>
                  </div>
                  <motion.a
                    href="https://github.com/amadeodlp/finance-simplified"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-white transition-colors"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
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
                  </motion.a>
                </div>
              </div>
            </motion.div>

            {/* AIONIOS Project */}
            <motion.div
              className="bg-dark/80 rounded-lg overflow-hidden shadow-lg group backdrop-blur-sm border border-white/5 hover:border-white/10 transition-all duration-300"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="aspect-video bg-gradient-to-bl relative overflow-hidden group-hover:from-[#39ffda] group-hover:to-[#7d42ab] transition-all duration-500">
                <img
                  src={aioniosImage}
                  alt="AIONIOS"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-[#00E9C5] transition-colors duration-300">
                  AIONIOS
                </h3>
                <p className="text-white/70 text-sm mb-4">
                  Time Capsule in the blockchain. Full-stack web app built with
                  Next.js, TypeScript, Spring Boot and Solidity smart contracts
                  for storing memories to be opened in the future.
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex gap-2">
                    <span className="bg-black/30 text-xs px-2 py-1 rounded backdrop-blur-sm">
                      Next.js
                    </span>
                    <span className="bg-black/30 text-xs px-2 py-1 rounded backdrop-blur-sm">
                      Solidity
                    </span>
                    <span className="bg-black/30 text-xs px-2 py-1 rounded backdrop-blur-sm">
                      Spring Boot
                    </span>
                  </div>
                  <motion.a
                    href="https://github.com/amadeodlp/amastore"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-white transition-colors"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
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
                  </motion.a>
                </div>
              </div>
            </motion.div>

            {/* Wavecaster Project */}
            <motion.div
              className="bg-dark/80 rounded-lg overflow-hidden shadow-lg group backdrop-blur-sm border border-white/5 hover:border-white/10 transition-all duration-300"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="aspect-video bg-gradient-to-br relative overflow-hidden group-hover:from-[#7d42ab] group-hover:to-[#39ffda] transition-all duration-500">
                <img
                  src={wavecasterImage}
                  alt="Wavecaster"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-[#00E9C5] transition-colors duration-300">
                  Wavecaster
                </h3>
                <p className="text-white/70 text-sm mb-4">
                  Full-stack radio station platform featuring a React frontend
                  with TypeScript and Spring Boot Java backend with MySQL
                  database.
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex gap-2">
                    <span className="bg-black/30 text-xs px-2 py-1 rounded backdrop-blur-sm">
                      React
                    </span>
                    <span className="bg-black/30 text-xs px-2 py-1 rounded backdrop-blur-sm">
                      Spring Boot
                    </span>
                  </div>
                  <motion.a
                    href="https://github.com/amadeodlp/wavecaster"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-white transition-colors"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
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
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Professional Experience Preview */}
          <div className="mt-16 mb-12">
            <div className="bg-dark/80 p-6 rounded-lg backdrop-blur-sm border border-white/5 hover:border-white/10 transition-all duration-300 shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-white">
                Professional Experience
              </h3>
              <p className="text-white/80 mb-6">
                Beyond personal projects, I've worked with companies like Viking
                Sasquatch, FirstClose, and Keenvil, where I've contributed to
                professional applications in the title business sector and
                developed cross-platform solutions.
              </p>

              <div className="flex flex-wrap gap-4 mb-6">
                <div className="bg-dark rounded-lg p-4 flex-1 min-w-[250px]">
                  <h4 className="font-semibold text-[#00E9C5] mb-2">
                    Viking Sasquatch
                  </h4>
                  <p className="text-white/70 text-sm">
                    Full-stack developer implementing cross-platform services
                    and AI integrations
                  </p>
                </div>

                <div className="bg-dark rounded-lg p-4 flex-1 min-w-[250px]">
                  <h4 className="font-semibold text-[#00E9C5] mb-2">
                    FirstClose
                  </h4>
                  <p className="text-white/70 text-sm">
                    React developer maintaining equity web application for title
                    business
                  </p>
                </div>

                <div className="bg-dark rounded-lg p-4 flex-1 min-w-[250px]">
                  <h4 className="font-semibold text-[#00E9C5] mb-2">Keenvil</h4>
                  <p className="text-white/70 text-sm">
                    React & React Native developer focused on responsive
                    applications
                  </p>
                </div>
              </div>

              <Link
                to="/experience"
                className="inline-flex items-center text-[#00E9C5] hover:underline group transition-all duration-300"
              >
                <span className="group-hover:mr-1 transition-all duration-300">
                  View Work Experience
                </span>
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-1 group-hover:ml-2 transition-all duration-300"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  whileHover={{ x: 3 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </motion.svg>
              </Link>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="text-center">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <Link
                  to="/projects"
                  className="inline-flex items-center bg-[#653490] text-white px-6 py-3 rounded-md hover:bg-[#7e4aaa] transition-all duration-300 shadow-lg shadow-[#653490]/20 hover:shadow-xl"
                >
                  See All Projects
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    initial={{ x: 0 }}
                    animate={{ x: [0, 4, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatType: "loop",
                      ease: "easeInOut",
                    }}
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
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <Link
                  to="/experience"
                  className="inline-flex items-center bg-transparent border border-white/30 text-white px-6 py-3 rounded-md hover:bg-white/10 transition-all duration-300 hover:border-white/70 backdrop-blur-sm"
                >
                  See Work Experience
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    initial={{ x: 0 }}
                    animate={{ x: [0, 4, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatType: "loop",
                      ease: "easeInOut",
                    }}
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#653490] to-[#00E9C5] py-20 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            AI made us all skilled. Hire your next developer based on his
            adaptability, intuition and good taste.
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            I'm always open to tech talks and project discussions. Feel free to
            reach me any time.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <Link
              to="/contact"
              className="inline-block bg-white text-dark font-semibold px-8 py-3 rounded-md transition-all duration-300 hover:bg-white/90 shadow-lg hover:shadow-xl"
            >
              Contact
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Home