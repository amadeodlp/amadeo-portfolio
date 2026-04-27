import React from "react"
import { Link } from "react-router-dom"
import { AboutProps } from "./types"
import HeroSection from "@/components/organisms/HeroSection"

const About: React.FC<AboutProps> = () => {
  return (
    <>
      <HeroSection
        title={
          <>
            <span className="block">ABOUT</span>
            <span className="block">ME</span>
          </>
        }
        pageType="about"
        description={
          <div className="mt-4 bg-black/70 backdrop-blur-sm p-4 rounded-lg">
            <p className="text-white/90 text-lg">
              Allow me to introduce myself. I'm Amadeo de la Peña, solutions
              architect from Buenos Aires.
            </p>
          </div>
        }
      />

      <section className="bg-black py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-white/80 text-lg leading-relaxed">
            <p>
              I'm Amadeo de la Peña, a full-stack engineer from Buenos Aires.
              I got serious about software in 2021 and moved fast — within two years
              I was shipping to 50,000 users in production at Keenvil, building
              real-time access control flows in React Native.
            </p>
            <p className="mt-6">
              At Viking Sasquatch I went deeper: sole owner of a 100+ TB cloud
              migration pipeline for 30+ enterprise clients, an Auth0-to-Cognito
              migration across 16 microservices, and Python MCP servers connecting
              Claude to Jira, Confluence, and GitHub before commercial alternatives
              existed. I own things end to end — from architecture decisions to
              production deployments.
            </p>
            <p className="mt-6">
              Outside of work I produce music and built Addie — an open-source
              AI assistant for Ableton Live that gives any LLM real-time control
              over your DAW session. It's the kind of project that sits at the
              intersection of everything I care about: clean architecture,
              local-first design, and tools that actually change how you work.
            </p>
            <p className="mt-6">
              I value simplicity in solutions and directness in communication.
              The best technical decisions come from understanding the actual
              problem — not from chasing trends.
            </p>
          </div>

          <div className="mt-16 bg-dark-light p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-white mb-6">Contact</h2>

            {/* Timo Image Box */}
            <div className="mb-6 bg-dark/50 p-4 rounded-lg border border-[#00E9C5]/20">
              <div className="flex flex-col md:flex-row items-center gap-4">
                <div className="text-center md:text-left">
                  <p className="text-white/90 font-medium mb-1">
                    Mention Timo for faster reply!
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4 text-white/80">
              <div>
                <span className="text-white/60">Location:</span> Buenos Aires,
                Argentina
              </div>
              <div>
                <span className="text-white/60">Email:</span>{" "}
                amadeodlp@hotmail.com
              </div>
              <div>
                <span className="text-white/60">GitHub:</span>{" "}
                <a
                  href="https://github.com/amadeodlp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00E9C5] hover:underline"
                >
                  github.com/amadeodlp
                </a>
              </div>
              <div>
                <span className="text-white/60">LinkedIn:</span>{" "}
                <a
                  href="https://www.linkedin.com/in/amadeodlp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00E9C5] hover:underline"
                >
                  linkedin.com/in/amadeodlp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-[#653490] to-[#00E9C5] py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Working on something interesting?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            I'm open to hearing about new projects or opportunities.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-dark font-semibold px-8 py-3 rounded-md transition-all hover:bg-white/90 hover:scale-105"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </>
  )
}

export default About
