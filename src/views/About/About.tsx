import React from "react"
import { Link } from "react-router-dom"
import { AboutProps } from "./types"
import HeroSection from "@/components/organisms/HeroSection"
import timoImage from "@/assets/images/timo.JPEG"

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
              Last 5 years I went on a path of discovery and learning of
              software development that led me to integrate the last dev squad
              senioring before the rise of LLMs. When it happened, I was already
              deploying to prod to 50K users on Keenvil, a local startup
              committed to simplifying everyone's lives with access security
              automation.
            </p>
            <p className="mt-6">
              The new digital revolution had me as a protagonist early on: in
              Viking Sasquatch we were one of the first companies to implement
              model context protocol servers uniting LLMs to Windows filesystem
              and enterprise services such as Github, Jira and Figma. I also
              here became a full blown full stack engineer, mastering the build
              of ETL systems via AWS pipelines, migrating identity systems, and
              even creating a custom component library that unified design of
              our three signature 24|7 Fees apps.
            </p>
            <p className="mt-6">
              Beyond the technical work, I value simplicity in solutions and
              directness in communication. I believe the best technology choices
              come from understanding the actual problem, not from chasing
              trends. When I'm not coding, you'll find me playing drums or
              spending time with my dog.
            </p>
          </div>

          <div className="mt-16 bg-dark-light p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-white mb-6">Contact</h2>

            {/* Timo Image Box */}
            <div className="mb-6 bg-dark/50 p-4 rounded-lg border border-[#00E9C5]/20">
              <div className="flex flex-col md:flex-row items-center gap-4">
                <div className="w-32 h-32 rounded-lg overflow-hidden flex-shrink-0">
                  <img
                    src={timoImage}
                    alt="Timo"
                    className="w-full h-full object-cover"
                  />
                </div>
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
