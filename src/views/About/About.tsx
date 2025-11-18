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
      position: "Cloud Architecture & AI Integration Specialist",
      period: "Dec 2022 - Present",
      description:
        "Specialized in AWS cloud architecture and AI integration. Designed scalable cloud infrastructure using ECS, Lambda, Cognito, and DynamoDB, achieving 30% cost reduction in authentication services. Architected cross-platform interchange service that processes high-volume data across multiple databases. Developed MCP servers to integrate Claude AI with enterprise tools, reducing manual workflows by 35%. Led complex system migrations while maintaining core functionality. Established cloud architecture best practices across the organization.",
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
              I'm Amadeo de la Peña, a Cloud Architecture and AI Integration Specialist from Argentina.
              Currently working at Viking Sasquatch, I design and implement enterprise-grade AWS 
              infrastructure and AI solutions. With 4+ years of experience in SaaS development, 
              I specialize in creating cloud-native architectures that deliver measurable business 
              impact through cost optimization and workflow automation. My unique combination of 
              cloud expertise and AI integration capabilities is built upon a solid foundation in 
              full-stack development with React, Next.js, Java, and .NET.
            </InfoSection>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-white">About Me</h2>
              <div className="space-y-4 text-white/80">
                <p>
                  As a Cloud Architecture and AI Integration Specialist, I design
                  and implement scalable AWS solutions that deliver measurable business
                  impact. My journey began in software development over 5 years ago, but
                  I've deliberately evolved my career to focus on the transformative
                  potential of cloud architecture and AI systems.
                </p>
                <p>
                  I've developed deep expertise in AWS services (ECS, Lambda, EC2, Cognito,
                  DynamoDB, S3, CloudFormation) and AI integration through Model-Context-Protocol
                  servers. This specialized focus allows me to create systems that both
                  reduce costs and enhance productivity through intelligent automation.
                </p>
                <p>
                  My foundation in full-stack development gives me the complete context
                  needed to architect truly comprehensive cloud solutions that align with
                  business objectives while maintaining technical excellence.
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
