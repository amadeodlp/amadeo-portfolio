import { useState } from "react";
import { ExperienceProps, WorkExperience } from "./types";
import HeroSection from "@/components/organisms/HeroSection";
import SectionHeader from "@/components/molecules/SectionHeader";
import { motion } from "framer-motion";

import vikingSasquatchImage from "@/assets/images/fees.png";
import firstCloseImage from "@/assets/images/firstclose.png";
import keenvilImage from "@/assets/images/keenvil.png";

import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaAws,
  FaApple,
  FaAndroid,
} from "react-icons/fa";
import {
  SiTypescript,
  SiSpringboot,
  SiTwilio,
  SiClaude,
} from "react-icons/si";

const getTechIcon = (tech: string) => {
  switch (tech.toLowerCase()) {
    case "twilio":
      return <SiTwilio className="text-[#F22F46]" />;
    case "aws cognito":
    case "aws":
      return <FaAws className="text-[#FF9900]" />;
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
    case "java":
      return <FaJava className="text-[#007396]" />;
    case "spring boot":
      return <SiSpringboot className="text-[#6DB33F]" />;
    case "xcode":
      return <FaApple className="text-[#147EFB]" />;
    case "android studio":
      return <FaAndroid className="text-[#3DDC84]" />;
    default:
      return <div className="text-[#00E9C5]">{tech.substring(0, 1)}</div>;
  }
};

const Experience: React.FC<ExperienceProps> = () => {
  const experiences: WorkExperience[] = [
    {
      id: "viking-sasquatch",
      company: "Viking Sasquatch",
      role: "Full-Stack Developer",
      period: "August 2023 - Present",
      description:
        "AWS infrastructure, AI integrations, cross-platform services. Auth migration from Auth0 to Cognito (70% cost reduction). MCP servers connecting Claude with GitHub and Jira (10x development speed). ETL systems for title company data.",
      image: vikingSasquatchImage,
      technologies: [
        "AWS",
        "AWS Cognito",
        "AWS DynamoDB",
        "AWS Lambda",
        "Claude",
        "Java",
        "Spring Boot",
        "TypeScript",
      ],
      responsibilities: [
        "Designed AWS infrastructure (ECS, Lambda, Cognito, DynamoDB, S3)",
        "Built MCP servers for Claude AI integration with GitHub and Jira",
        "Migrated authentication from Auth0 to AWS Cognito (70% cost savings)",
        "Created cross-platform interchange service with Java and Spring Boot",
        "Developed reusable component libraries and design systems",
      ],
    },
    {
      id: "firstclose",
      company: "FirstClose",
      role: "React Developer",
      period: "December 2022 - August 2023",
      description:
        "Maintained equity web application for title business. React, TypeScript, REST API integration.",
      image: firstCloseImage,
      technologies: ["React", "TypeScript", "Node.js"],
      responsibilities: [
        "Maintained equity web application for title business",
        "Implemented new features and UI improvements",
        "Integrated REST APIs with backend services",
        "Ensured responsive design across devices",
      ],
    },
    {
      id: "keenvil",
      company: "Keenvil",
      role: "React Developer",
      period: "March 2022 - December 2022",
      description:
        "Web and mobile applications with React and React Native. iOS and Android maintenance.",
      image: keenvilImage,
      technologies: [
        "React",
        "React Native",
        "Xcode",
        "Android Studio",
        "Twilio",
      ],
      responsibilities: [
        "Built responsive web and mobile applications",
        "Maintained iOS and Android apps via Xcode and Android Studio",
        "Integrated Twilio for communication features",
        "Focused on cross-platform compatibility",
      ],
    },
  ];

  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <>
      <HeroSection
        title={
          <>
            <span className="block">WORK</span>
            <span className="block">EXPERIENCE</span>
          </>
        }
        pageType="experience"
        description={
          <div className="mt-4 bg-black/70 backdrop-blur-sm p-4 rounded-lg">
            <p className="text-white/90">
              Professional timeline with key achievements and metrics.
            </p>
          </div>
        }
      />

      <section className="bg-black py-20">
        <div className="container mx-auto px-4">
          <SectionHeader title="TIMELINE" color="purple" />

          <div className="space-y-16 mt-12">
            {experiences.map((experience) => (
              <motion.div
                key={experience.id}
                className="bg-dark-light/30 rounded-lg overflow-hidden shadow-xl backdrop-blur-sm border border-white/5 hover:border-white/10 transition-all duration-300"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                  <div className="md:col-span-2 relative">
                    <div className="h-full min-h-[200px] bg-gradient-to-br from-[#653490] to-[#00E9C5] relative overflow-hidden">
                      <img
                        src={experience.image}
                        alt={experience.company}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  <div className="md:col-span-3 p-6">
                    <div className="flex flex-col md:flex-row justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white">
                          {experience.company}
                        </h3>
                        <p className="text-[#00E9C5] font-medium">{experience.role}</p>
                      </div>
                      <span className="text-white/60 mt-2 md:mt-0">{experience.period}</span>
                    </div>

                    <p className="text-white/80 mb-4">{experience.description}</p>

                    <div className="mb-4">
                      <p className="text-white/60 text-sm mb-2">Tech:</p>
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

                    <button
                      onClick={() => toggleExpand(experience.id)}
                      className="text-[#00E9C5] hover:underline flex items-center mt-2 focus:outline-none"
                    >
                      <span>
                        {expandedId === experience.id
                          ? "Hide details"
                          : "Show details"}
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

                    {expandedId === experience.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 border-t border-white/10 pt-4"
                      >
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

      <section className="bg-gradient-to-r from-[#653490] to-[#00E9C5] py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Looking for someone to join your team?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            I'm open to discussing opportunities.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-dark font-semibold px-8 py-3 rounded-md transition-all hover:bg-white/90 hover:scale-105 hover:shadow-lg"
          >
            Get in touch
          </a>
        </div>
      </section>
    </>
  );
};

export default Experience;
