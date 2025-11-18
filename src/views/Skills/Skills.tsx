import { useEffect } from 'react';
import { useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer';
import { SkillsProps } from './types';
import HeroSection from '@/components/organisms/HeroSection';
import SectionHeader from '@/components/molecules/SectionHeader';
import InfoSection from '@/components/molecules/InfoSection';
import TechIconsRotator from '@/components/molecules/TechIconsRotator';
import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaDocker,
  FaAws,
  FaJs,
  FaVuejs,
} from "react-icons/fa"
import {
  SiTypescript,
  SiExpress,
  SiNextdotjs,
  SiSpringboot,
  SiMysql,
  SiTailwindcss,
  SiSolidity,
  SiClaude,
  SiDotnet,
  SiAmazon,
  SiAuth0,
} from "react-icons/si"

// Define a mapping function for skill icons
const getSkillIcon = (skillName: string) => {
  const iconProps = { className: "mr-2 text-xl" }

  switch (skillName.toLowerCase().replace(/\s+/g, "")) {
    case "react&reactnative":
      return (
        <FaReact
          {...iconProps}
          className={`${iconProps.className} text-[#61DAFB]`}
        />
      )
    case "typescript":
      return (
        <SiTypescript
          {...iconProps}
          className={`${iconProps.className} text-[#3178C6]`}
        />
      )
    case "javascript":
      return (
        <FaJs
          {...iconProps}
          className={`${iconProps.className} text-[#F7DF1E]`}
        />
      )
    case "next.js":
      return <SiNextdotjs {...iconProps} />
    case "vue&nuxt.js":
      return (
        <FaVuejs
          {...iconProps}
          className={`${iconProps.className} text-[#4FC08D]`}
        />
      )
    case "solidity":
      return <SiSolidity {...iconProps} />
    case "claude":
      return <SiClaude {...iconProps} />
    case "tailwindcss":
      return (
        <SiTailwindcss
          {...iconProps}
          className={`${iconProps.className} text-[#38B2AC]`}
        />
      )
    case "java":
      return (
        <FaJava
          {...iconProps}
          className={`${iconProps.className} text-[#007396]`}
        />
      )
    case "springboot":
      return (
        <SiSpringboot
          {...iconProps}
          className={`${iconProps.className} text-[#6DB33F]`}
        />
      )
    case ".net":
      return (
        <SiDotnet
          {...iconProps}
          className={`${iconProps.className} text-[#512BD4]`}
        />
      )
    case "node/express":
      return (
        <FaNodeJs
          {...iconProps}
          className={`${iconProps.className} text-[#8CC84B]`}
        />
      )
    case "apachecamel":
      return (
        <FaJava
          {...iconProps}
          className={`${iconProps.className} text-[#007396]`}
        />
      )
    case "awsdynamodb":
      return (
        <FaAws
          {...iconProps}
          className={`${iconProps.className} text-[#FF9900]`}
        />
      )
    case "awss3":
      return (
        <FaAws
          {...iconProps}
          className={`${iconProps.className} text-[#FF9900]`}
        />
      )
    case "awsamplify":
      return (
        <SiAmazon
          {...iconProps}
          className={`${iconProps.className} text-[#FF9900]`}
        />
      )
    case "docker":
      return (
        <FaDocker
          {...iconProps}
          className={`${iconProps.className} text-[#2496ED]`}
        />
      )
    case "auth0":
      return <SiAuth0 {...iconProps} />
    default:
      return null
  }
}

const Skills: React.FC<SkillsProps> = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  // Array of tech icons for the rotator
  const techIconsList = [
    FaReact,
    SiTypescript,
    FaNodeJs,
    SiExpress,
    SiNextdotjs,
    FaJava,
    SiSpringboot,
    SiDotnet,
    SiSolidity,
    SiClaude,
    SiMysql,
    FaAws,
    FaDocker,
    SiTailwindcss,
    SiAuth0,
  ]

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { duration: 0 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { duration: 0 },
    },
  }

  const skillCategories = [
    {
      name: "Cloud Architecture",
      skills: [
        { name: "AWS ECS & EC2", level: 95 },
        { name: "AWS Lambda", level: 95 },
        { name: "AWS Cognito", level: 95 },
        { name: "AWS DynamoDB", level: 95 },
        { name: "AWS S3", level: 90 },
        { name: "Docker", level: 85 },
      ],
    },
    {
      name: "AI & Enterprise Connections",
      skills: [
        { name: "MCP Server Development", level: 85 },
        { name: "Claude Integration", level: 80 },
        { name: "API Integration", level: 90 },
        { name: "Apache Camel", level: 85 },
        { name: "Workflow Automation", level: 85 },
        { name: "Auth0", level: 85 },
      ],
    },
    {
      name: "Full-Stack Foundation",
      skills: [
        { name: "React & React Native", level: 90 },
        { name: "TypeScript", level: 90 },
        { name: "Java", level: 85 },
        { name: ".NET", level: 80 },
        { name: "Node/Express", level: 80 },
        { name: "Spring Boot", level: 80 },
      ],
    },
  ]

  return (
    <>
      <HeroSection
        title={
          <>
            <span className="block">MY</span>
            <span className="block">AWS CLOUD</span>
            <span className="block">SKILLS &</span>
            <span className="block">EXPERIENCE</span>
          </>
        }
        pageType="skills"
        description={
          <div className="mt-4 bg-black/70 backdrop-blur-sm p-4 rounded-lg">
            <p className="text-white/90">
              I specialize in AWS cloud infrastructure with 4+ years of experience in software development.
              My core focus is designing robust AWS environments that optimize for performance, 
              security, and cost-efficiency. At Viking Sasquatch, I've built systems that reduced 
              operational costs significantly while improving scalability. I've also gained 
              practical experience implementing AI connections through MCP servers, 
              resulting in more efficient workflows. My technical skills are built on a 
              solid foundation of full-stack development, allowing me to create 
              end-to-end solutions.
            </p>
          </div>
        }
        contactForm={
          <div className="hidden md:block">
            <TechIconsRotator
              icons={techIconsList}
              size="medium"
              shadow={true}
              transitionInterval={2000}
            />
          </div>
        }
      />

      <section className="bg-black py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <InfoSection>
              Throughout my career at Viking Sasquatch, I've focused on developing expertise
              in cloud infrastructure while maintaining a practical approach to new technologies
              like AI integration. My work centers on designing efficient AWS environments
              that balance performance needs with cost considerations. I've worked extensively
              with various AWS services and have practical experience connecting AI systems
              with enterprise tools. Below you'll find details about my technical capabilities,
              with emphasis on my cloud infrastructure work and other technical skills.
            </InfoSection>
          </div>

          <div className="flex flex-col md:flex-row items-start justify-between mb-8">
            <SectionHeader title="TECHNICAL" color="cyan" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-dark-light p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-2xl font-bold mb-6 text-white">
                  {category.name}
                </h3>

                <div className="space-y-5">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-1">
                        <span className="text-white flex items-center">
                          {getSkillIcon(skill.name)}
                          {skill.name}
                        </span>
                        <span className="text-white/60 text-sm">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full h-2 bg-dark rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-[#653490] to-[#00E9C5]"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-dark-light py-20">
        <div className="container mx-auto px-4">
          <SectionHeader title="TRAINING" color="purple" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-dark p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-white">Education</h3>

              <div className="space-y-6">
                <div className="border-l-4 border-[#653490] pl-4">
                  <h4 className="text-lg font-semibold text-white mb-1">
                    AWS Cloud Architecture
                  </h4>
                  <p className="text-white/70">AWS Training & Certification</p>
                </div>

                <div className="border-l-4 border-[#653490] pl-4">
                  <h4 className="text-lg font-semibold text-white mb-1">
                    Web Development Bootcamp
                  </h4>
                  <p className="text-white/70">Alkemy Tech</p>
                </div>

                <div className="border-l-4 border-[#653490] pl-4">
                  <h4 className="text-lg font-semibold text-white mb-1">
                    Java & POO
                  </h4>
                  <p className="text-white/70">FreeCodeCamp</p>
                </div>
              </div>
            </div>

            <div className="bg-dark p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-white">
                Achievements
              </h3>

              <div className="space-y-6">
                <div className="border-l-4 border-[#00E9C5] pl-4">
                  <h4 className="text-lg font-semibold text-white mb-1">
                    AWS Cloud Infrastructure Design
                  </h4>
                  <p className="text-white/70">ECS, Lambda, Cognito, DynamoDB, S3, CloudFormation</p>
                </div>

                <div className="border-l-4 border-[#00E9C5] pl-4">
                  <h4 className="text-lg font-semibold text-white mb-1">
                    Expert in Agile methodology
                  </h4>
                  <p className="text-white/70">Scrum</p>
                </div>

                <div className="border-l-4 border-[#00E9C5] pl-4">
                  <h4 className="text-lg font-semibold text-white mb-1">
                    AI Integration Implementation
                  </h4>
                  <p className="text-white/70">MCP Servers, Claude, Enterprise Connections</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-[#653490] to-[#00E9C5] py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Work Together?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            I'm always interested in new challenges and opportunities to apply
            my skills. Whether you have a project in mind or just want to
            connect, reach out!
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-dark font-semibold px-8 py-3 rounded-md transition-all hover:bg-white/90 hover:scale-105"
          >
            Contact Me
          </a>
        </div>
      </section>
    </>
  )
}

export default Skills;
