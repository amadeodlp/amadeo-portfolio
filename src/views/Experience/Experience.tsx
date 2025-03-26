import { useState } from "react";
import { ExperienceProps, WorkExperience } from "./types";
import HeroSection from "@/components/organisms/HeroSection";
import SectionHeader from "@/components/molecules/SectionHeader";
import InfoSection from "@/components/molecules/InfoSection";
import { motion } from "framer-motion";

// Import company images
import vikingSasquatchImage from "@/assets/images/fees.png";
import firstCloseImage from "@/assets/images/firstclose.png";
import keenvilImage from "@/assets/images/keenvil.png";

// Import technology icons
import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaDocker,
  FaAws,
  FaApple,
  FaAndroid,
} from "react-icons/fa";
import {
  SiTypescript,
  SiExpress,
  SiNextdotjs,
  SiSpringboot,
  SiVuedotjs,
  SiStyledcomponents,
  SiTailwindcss,
  SiAuth0,
  SiDotnet,
  SiApache,
  SiTwilio,
  SiClaude,
} from "react-icons/si";

// Technology icon mapping function
const getTechIcon = (tech: string) => {
  switch (tech.toLowerCase()) {
    case "vue.js":
      return <SiVuedotjs className="text-[#4FC08D]" />;
    case "apachecamel":
    case "apache camel":
      return <SiApache className="text-[#D22128]" />;
    case "twilio":
      return <SiTwilio className="text-[#F22F46]" />;
    case "aws cognito":
    case "aws":
      return <FaAws className="text-[#FF9900]" />;
    case "auth0":
      return <SiAuth0 className="text-[#EB5424]" />;
    case ".net":
      return <SiDotnet className="text-[#512BD4]" />;
    case "claude":
      return <SiClaude className="text-[#7D64FF]" />;
    case "react":
      return <FaReact className="text-[#61DAFB]" />;
    case "react native":
      return <FaReact className="text-[#61DAFB]" />;
    case "typescript":
      return <SiTypescript className="text-[#3178C6]" />;
    case "node.js":
      return <FaNodeJs className="text-[#8CC84B]" />;
    case "express":
      return <SiExpress className="text-white" />;
    case "next.js":
      return <SiNextdotjs className="text-white" />;
    case "java":
      return <FaJava className="text-[#007396]" />;
    case "spring boot":
      return <SiSpringboot className="text-[#6DB33F]" />;
    case "docker":
      return <FaDocker className="text-[#2496ED]" />;
    case "tailwind css":
      return <SiTailwindcss className="text-[#38B2AC]" />;
    case "styled components":
      return <SiStyledcomponents className="text-[#DB7093]" />;
    case "xcode":
      return <FaApple className="text-[#147EFB]" />;
    case "android studio":
      return <FaAndroid className="text-[#3DDC84]" />;
    default:
      return <div className="text-[#00E9C5]">{tech.substring(0, 1)}</div>;
  }
};

const Experience: React.FC<ExperienceProps> = () => {
  // Sample work experience data
  const experiences: WorkExperience[] = [
    {
      id: "viking-sasquatch",
      company: "Viking Sasquatch",
      role: "Full-Stack Developer",
      period: "August 2023 - Present",
      description:
        "Working with a specialized team focused on title business solutions, developing and maintaining complex cross-platform interchange services and implementing AI integrations.",
      image: vikingSasquatchImage,
      technologies: [
        "Java",
        "Spring Boot",
        "Apache Camel",
        "Vue.js",
        "TypeScript",
        "AWS Cognito",
        "AWS DynamoDB",
        "Claude",
      ],
      responsibilities: [
        "Implemented a cross-platform interchange service using Java, Spring Boot, and Apache Camel connecting DynamoDB and SQL databases",
        "Successfully migrated a legacy ASP.NET application to Vue.js while maintaining core functionality",
        "Developed a TailwindCSS custom component library in TypeScript using Storybook",
        "Led migration from Auth0 to AWS Cognito, refactoring front-end, back-end, and database layers",
        "Designed and implemented Claude AI integrations for Github and Jira through MCP servers",
      ],
    },
    {
      id: "firstclose",
      company: "FirstClose",
      role: "React Developer",
      period: "December 2022 - August 2023",
      description:
        "Maintained and enhanced the equity web application for the title business sector, focusing on responsive design and modern frontend architecture.",
      image: firstCloseImage,
      technologies: ["React", "TypeScript", "Node.js", "REST APIs"],
      responsibilities: [
        "Maintained equity web application oriented to the title business",
        "Implemented new features and functionality to enhance user experience",
        "Collaborated with backend developers to integrate REST APIs",
        "Ensured responsive design across different screen sizes and browsers",
      ],
    },
    {
      id: "keenvil",
      company: "Keenvil",
      role: "React Developer",
      period: "March 2022 - December 2022",
      description:
        "Developed responsive web and mobile applications using React and React Native with a strong focus on device compatibility and seamless user experience.",
      image: keenvilImage,
      technologies: [
        "React",
        "React Native",
        "Xcode",
        "Android Studio",
        "Twilio",
      ],
      responsibilities: [
        "Developed responsive web and mobile applications using React and React Native",
        "Maintained iOS and Android applications through Xcode and Android Studio",
        "Integrated Twilio across several apps for communication features",
        "Focused on responsive design and device compatibility",
        "Ensured consistent performance across multiple platforms",
      ],
    },
  ];

  // State for expanded company details
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <>
      <HeroSection
        title={
          <>
            <span className="block">WORK EXPERIENCE</span>
          </>
        }
        pageType="experience"
        description={
          <div className="mt-4 bg-black/70 backdrop-blur-sm p-4 rounded-lg">
            <p className="text-white/90">
              My professional journey across different companies, showcasing real-world
              projects and responsibilities in the software development industry.
            </p>
          </div>
        }
      />

      <section className="bg-black py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <InfoSection>
              Throughout my career, I've collaborated with diverse teams to build
              innovative solutions for complex business needs. From migrating legacy
              systems to implementing cutting-edge AI integrations, my experience spans
              across various technologies and domains. Each role has strengthened my
              technical skills and deepened my understanding of how software can solve
              real-world problems. I take pride in delivering high-quality, scalable
              applications that meet both technical requirements and business objectives.
            </InfoSection>
          </div>

          <SectionHeader title="PROFESSIONAL WORK" color="purple" />

          {/* Work Experience Timeline */}
          <div className="space-y-16 mt-12">
            {experiences.map((experience) => (
              <motion.div
                key={experience.id}
                className="bg-dark-light/30 rounded-lg overflow-hidden shadow-xl backdrop-blur-sm border border-white/5 hover:border-white/10 transition-all duration-300"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                  {/* Image Section - 2 columns on md screens */}
                  <div className="md:col-span-2 relative">
                    <div className="h-full min-h-[200px] bg-gradient-to-br from-[#653490] to-[#00E9C5] relative overflow-hidden">
                      <img
                        src={experience.image}
                        alt={experience.company}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Content Section - 3 columns on md screens */}
                  <div className="md:col-span-3 p-6">
                    <div className="flex flex-col md:flex-row justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-[#00E9C5] transition-colors">
                          {experience.company}
                        </h3>
                        <p className="text-[#00E9C5] font-medium">{experience.role}</p>
                      </div>
                      <span className="text-white/60 mt-2 md:mt-0">{experience.period}</span>
                    </div>

                    <p className="text-white/80 mb-4">{experience.description}</p>

                    {/* Technologies */}
                    <div className="mb-4">
                      <p className="text-white/60 text-sm mb-2">Technologies:</p>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="bg-dark text-xs px-2 py-1 rounded flex items-center gap-1"
                          >
                            <span className="text-base">{getTechIcon(tech)}</span>
                            <span>{tech}</span>
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Show/Hide Details Button */}
                    <button
                      onClick={() => toggleExpand(experience.id)}
                      className="text-[#00E9C5] hover:underline flex items-center mt-2 focus:outline-none"
                    >
                      <span>
                        {expandedId === experience.id
                          ? "Hide Details"
                          : "Show Details"}
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-4 w-4 ml-1 transition-transform duration-300 ${
                          expandedId === experience.id ? "rotate-180" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    {/* Responsibilities */}
                    {expandedId === experience.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 border-t border-white/10 pt-4"
                      >
                        <p className="text-white/60 text-sm mb-2">
                          Key Responsibilities:
                        </p>
                        <ul className="list-disc list-inside text-white/80 space-y-2">
                          {experience.responsibilities.map((resp, index) => (
                            <li key={index}>{resp}</li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to action section */}
      <section className="bg-gradient-to-r from-[#653490] to-[#00E9C5] py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Interested in working together?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-dark font-semibold px-8 py-3 rounded-md transition-all hover:bg-white/90 hover:scale-105 hover:shadow-lg active:translate-y-0.5"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </>
  );
};

export default Experience;
