import { useEffect } from 'react';
import { useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer';
import { SkillsProps } from './types';
import HeroSection from '@/components/organisms/HeroSection';
import SectionHeader from '@/components/molecules/SectionHeader';
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

  const skillCategories = [
    {
      name: "Cloud & Infrastructure",
      skills: [
        { name: "AWS ECS & EC2", level: 90 },
        { name: "AWS Lambda", level: 90 },
        { name: "AWS Cognito", level: 90 },
        { name: "AWS DynamoDB", level: 90 },
        { name: "AWS S3", level: 85 },
        { name: "Docker", level: 80 },
      ],
    },
    {
      name: "AI & Integration",
      skills: [
        { name: "Claude", level: 80 },
        { name: "MCP Servers", level: 80 },
        { name: "API Integration", level: 85 },
        { name: "Apache Camel", level: 80 },
        { name: "Auth0", level: 80 },
      ],
    },
    {
      name: "Frontend",
      skills: [
        { name: "React & React Native", level: 85 },
        { name: "TypeScript", level: 85 },
        { name: "JavaScript", level: 85 },
        { name: "Next.js", level: 75 },
        { name: "Vue & Nuxt.js", level: 70 },
        { name: "Tailwind CSS", level: 80 },
      ],
    },
    {
      name: "Backend",
      skills: [
        { name: "Java", level: 80 },
        { name: "Spring Boot", level: 80 },
        { name: ".NET", level: 75 },
        { name: "Node/Express", level: 75 },
      ],
    },
  ]

  return (
    <>
      <HeroSection
        title={
          <>
            <span className="block">TECH</span>
            <span className="block">STACK</span>
          </>
        }
        pageType="skills"
        description={
          <div className="mt-4 bg-black/70 backdrop-blur-sm p-4 rounded-lg">
            <p className="text-white/90">
              Technologies I work with, organized by category.
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
          <SectionHeader title="SKILLS BY CATEGORY" color="cyan" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
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
          <SectionHeader title="CERTIFICATIONS & EDUCATION" color="purple" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
            <div className="bg-dark p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-white">Certifications</h3>
              <div className="space-y-4">
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
              </div>
            </div>

            <div className="bg-dark p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-white">Education</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-[#00E9C5] pl-4">
                  <h4 className="text-lg font-semibold text-white mb-1">
                    Bachelor's in Economics & Administration
                  </h4>
                  <p className="text-white/70">San Jose Institute, 2015</p>
                </div>
                <div className="border-l-4 border-[#00E9C5] pl-4">
                  <h4 className="text-lg font-semibold text-white mb-1">
                    English Language Certification (C1)
                  </h4>
                  <p className="text-white/70">Cambridge University, 2014</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-[#653490] to-[#00E9C5] py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Need someone with these skills?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss your project.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-dark font-semibold px-8 py-3 rounded-md transition-all hover:bg-white/90 hover:scale-105"
          >
            Contact
          </a>
        </div>
      </section>
    </>
  )
}

export default Skills;
