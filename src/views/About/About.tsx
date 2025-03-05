import React from "react"
import { Link } from "react-router-dom"
import { AboutProps } from "./types"
import HeroSection from "@/components/organisms/HeroSection"
import SectionHeader from "@/components/molecules/SectionHeader"
import InfoSection from "@/components/molecules/InfoSection"

const About: React.FC<AboutProps> = () => {
  const experiences = [
    {
      company: "Viking Sasquatch",
      position: "Full-Stack Developer",
      period: "Dec 2022 - Present",
      description:
        "Started as a Front-End developer and transitioned into full-stack, learning Java, Spring Boot, Apache Camel and AWS. Created an interchange service connecting to DynamoDB and SQL. Migrated a legacy ASP.NET front-end to Vue while collaborating on the .NET backend update. Built a TailwindCSS component library in TypeScript using Storybook, now used in all of our signature apps. Led the migration from Auth0 to AWS Cognito. Integrated Claude AI with Jira, Slack, and Confluence via MCP servers.",
    },
    {
      company: "Keenvil",
      position: "React & Mobile Developer",
      period: "Mar 2022 - Dec 2022",
      description:
        "Built dynamic, responsive web & mobile applications using React and React Native. Maintained iOS and Android applications through Xcode and Android Studio usage.",
    },
    {
      company: "Alkemy Tech",
      position: "React Developer",
      period: "Oct 2021 - Feb 2022",
      description:
        "Developed full-stack solutions in React and Node, emphasizing responsive and atomic design principles.",
    },
  ]

  const educationItems = [
    {
      institution: "Cambridge University",
      degree: "English Language Certification (FCE) - C1 Level",
      period: "2014",
    },
    {
      institution: "Alkemy Tech",
      degree: "Front-End Development Certification",
      period: "2021",
    },
    {
      institution: "San Jose Institute",
      degree: "Bachelor's Degree in Economy & Administration",
      period: "2015",
    },
  ]

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
            <p className="text-white/90">
              I'm a full-stack dev with 3+ years of experience in SaaS
              development, but in reality... I’m more of a problem-solver, tech
              enthusiast, and project wizard. Right now, I'm at Viking
              Sasquatch, working with React, TypeScript, Java, Spring Boot,
              .NET, and AWS services. I’m bilingual, super creative, and have a
              knack for making the connection between engineering and business
              needs, all while keeping things fun and efficient. Let’s just say,
              if it involves code, I’m probably already on it!
            </p>
          </div>
        }
      />

      <section className="bg-black py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <InfoSection>
              I'm Amadeo de la Peña, a Full Stack Developer from Argentina.
              Currently working at Viking Sasquatch, collaborating mainly on
              private repositories on Github, Gitlab and Azure. With over 3
              years of experience in SaaS development, I'm skilled in bridging
              the gap between engineering and business needs through effective
              communication and creativity. My expertise spans across various
              technologies including React, Next.js, Spring Boot, .NET, and AWS.
            </InfoSection>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-white">About Me</h2>
              <div className="space-y-4 text-white/80">
                <p>
                  As a passionate Software Developer, I specialize in building
                  modern web applications with a focus on clean code,
                  performance, and user experience. My journey in software
                  development started over 5 years ago, and I've been
                  continuously learning and improving my skills ever since.
                </p>
                <p>
                  I enjoy working with technologies like React, TypeScript,
                  Node.js, and exploring new tools and frameworks. When I'm not
                  coding, I like to read about technology trends, contribute to
                  open-source projects, and share my knowledge with the
                  community.
                </p>
                <p>
                  I believe in the power of collaboration and continuous
                  learning. My goal is to create software that not only solves
                  problems but also provides a delightful experience for users.
                </p>
              </div>
            </div>

            <div className="bg-dark-light p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center text-white text-2xl font-bold">
                  AD
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-white">
                    Amadeo de la Peña
                  </h3>
                  <p className="text-white/60">Software Developer</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="text-white/80 mb-1">Location</div>
                  <div className="text-white">Buenos Aires, Argentina</div>
                </div>
                <div>
                  <div className="text-white/80 mb-1">Email</div>
                  <div className="text-white">amadeodlp@hotmail.com</div>
                </div>
                <div>
                  <div className="text-white/80 mb-1">GitHub</div>
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
                  <div className="text-white/80 mb-1">LinkedIn</div>
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
        </div>
      </section>

      <section className="bg-dark-light py-20">
        <div className="container mx-auto px-4">
          <SectionHeader title="EXPERIENCE" color="cyan" />

          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <div key={index} className="bg-dark p-6 rounded-lg shadow-lg">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {experience.position}
                    </h3>
                    <p className="text-[#00E9C5]">{experience.company}</p>
                  </div>
                  <div className="bg-[#181818] px-3 py-1 rounded-full text-white/70 text-sm mt-2 md:mt-0 w-max">
                    {experience.period}
                  </div>
                </div>
                <p className="text-white/80">{experience.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black py-20">
        <div className="container mx-auto px-4">
          <SectionHeader title="EDUCATION" color="purple" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {educationItems.map((item, index) => (
              <div
                key={index}
                className="bg-dark-light p-6 rounded-lg shadow-lg"
              >
                <div className="text-[#653490] font-bold mb-2">
                  {item.period}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {item.degree}
                </h3>
                <p className="text-white/70">{item.institution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-[#653490] to-[#00E9C5] py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Interested in working together?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            I'd love to be part of your next project or join your team. Contact
            me and let's talk about how I can help you!
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-dark font-semibold px-8 py-3 rounded-md transition-all hover:bg-white/90 hover:scale-105"
          >
            Contact Me
          </Link>
        </div>
      </section>
    </>
  )
}

export default About
