import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProjectsProps, Project } from './types';
import HeroSection from '@/components/organisms/HeroSection';
import SectionHeader from '@/components/molecules/SectionHeader';
import InfoSection from '@/components/molecules/InfoSection';
import { pageBackgrounds } from '@/utils/imageUtils';
import { 
  FaReact, FaNodeJs, FaJava, FaDocker, FaGitAlt, FaAws,
  FaNpm, FaDatabase 
} from 'react-icons/fa';
import { 
  SiTypescript, SiExpress, SiNextdotjs, SiSpringboot,
  SiMongodb, SiMysql, SiTailwindcss, SiStyledcomponents,
  SiBootstrap, SiMui, SiStripe
} from 'react-icons/si';

// Technology icon mapping function
const getTechIcon = (tech: string) => {
  switch (tech.toLowerCase()) {
    case 'react':
      return <FaReact className="text-[#61DAFB]" />;
    case 'typescript':
      return <SiTypescript className="text-[#3178C6]" />;
    case 'node.js':
      return <FaNodeJs className="text-[#8CC84B]" />;
    case 'express':
      return <SiExpress className="text-white" />;
    case 'next.js':
      return <SiNextdotjs className="text-white" />;
    case 'java':
      return <FaJava className="text-[#007396]" />;
    case 'spring boot':
      return <SiSpringboot className="text-[#6DB33F]" />;
    case 'mongodb':
      return <SiMongodb className="text-[#47A248]" />;
    case 'mysql':
      return <SiMysql className="text-[#4479A1]" />;
    case 'aws':
      return <FaAws className="text-[#FF9900]" />;
    case 'docker':
      return <FaDocker className="text-[#2496ED]" />;
    case 'git':
      return <FaGitAlt className="text-[#F05032]" />;
    case 'tailwind css':
      return <SiTailwindcss className="text-[#38B2AC]" />;
    case 'styled components':
      return <SiStyledcomponents className="text-[#DB7093]" />;
    case 'bootstrap':
      return <SiBootstrap className="text-[#7952B3]" />;
    case 'material ui':
      return <SiMui className="text-[#0081CB]" />;
    case 'stripe':
      return <SiStripe className="text-[#008CDD]" />;
    case 'nasa api':
      return <FaDatabase className="text-[#E03C31]" />;
    case 'aws dynamodb':
      return <FaAws className="text-[#FF9900]" />;
    case 'aws s3':
      return <FaAws className="text-[#FF9900]" />;
    default:
      return <div className="text-[#00E9C5]">{tech.substring(0, 1)}</div>;
  }
};

const Projects: React.FC<ProjectsProps> = () => {
  // Filter state
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [animate, setAnimate] = useState(false);

  // Sample projects data
  const projects: Project[] = [
    {
      id: "amastore",
      title: "Amadeo Store",
      description:
        "E-commerce application built with TypeScript and Next.js with Stripe integration for payments.",
      image: "/images/projects/amastore.jpg",
      technologies: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
      github: "https://github.com/amadeodlp/amastore",
      liveDemo: "https://amastore-sepia.vercel.app",
      featured: true,
      category: "frontend",
    },
    {
      id: "canalradionov-ui",
      title: "Canal Radionov",
      description:
        "User interface for a radio station built with TypeScript and React.",
      image: "/images/projects/canalradionov.jpg",
      technologies: ["React", "TypeScript", "Styled Components"],
      github: "https://github.com/amadeodlp/canalradionov-ui",
      category: "frontend",
    },
    {
      id: "canalradionov-service",
      title: "Canal Radionov API",
      description:
        "Backend service for a radio station built with Java and Spring Boot.",
      image: "/images/projects/canalradionov-api.jpg",
      technologies: ["Java", "Spring Boot", "MySQL"],
      github: "https://github.com/amadeodlp/canalradionov-service",
      category: "backend",
    },
    {
      id: "finance-simplified",
      title: "Finance Simplified",
      description:
        " full-stack DeFi platform combining React/TypeScript frontend, ASP.NET Core backend, and Solidity smart contracts in a unified monorepo architecture.",
      image: "/images/projects/finance-simplified.jpg",
      technologies: ["React", "Solidity", "C#"],
      github: "https://github.com/amadeodlp/finance-simplified",
      category: "fullstack",
    },
    {
      id: "foodprocessor",
      title: "Food Processor",
      description:
        "Webhook listener processed through Camel routes. Saves data into DynamoDB and S3.",
      image: "/images/projects/foodprocessor.jpg",
      technologies: ["Java", "Apache Camel", "AWS DynamoDB", "AWS S3"],
      github: "https://github.com/amadeodlp/foodprocessor",
      category: "backend",
    },
    {
      id: "nasa-react",
      title: "NASA Explorer",
      description:
        "NASA page created with Material UI and Express that consumes NASA APIs.",
      image: "/images/projects/nasa-explorer.jpg",
      technologies: ["React", "Material UI", "Express", "NASA API"],
      github: "https://github.com/amadeodlp/nasa-react-mui-express",
      category: "fullstack",
    },
  ]

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'backend', label: 'Backend' },
    { key: 'fullstack', label: 'Full Stack' },
    { key: 'mobile', label: 'Mobile' },
  ];

  // Filter projects based on active filter
  useEffect(() => {
    setAnimate(false);
    
    setTimeout(() => {
      if (activeFilter === 'all') {
        setFilteredProjects(projects);
      } else {
        setFilteredProjects(
          projects.filter((project) => project.category === activeFilter)
        );
      }
      setAnimate(true);
    }, 200);
  }, [activeFilter]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { duration: 0 }
    },
  };

  return (
    <>
      <HeroSection
        title={
          <>
            <span className="block">PROJECTS</span>
          </>
        }
        pageType="projects"
        description={
          <div className="mt-4 bg-black/70 backdrop-blur-sm p-4 rounded-lg">
            <p className="text-white/90">
              Here you'll see some of my public projects. I also work in private companies, if you have doubts about my experience in some area, challenge me ;)
            </p>
          </div>
        }
      />

      <section className="bg-black py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <InfoSection>
              Discover all my featured projects, showcasing some of my most interesting work
              across different technologies and frameworks. My portfolio demonstrates my
              experience with frontend, backend, and full-stack development. Each project reflects
              my problem-solving approach, attention to detail, and commitment to creating
              efficient, user-friendly solutions. From e-commerce platforms to custom APIs and
              data visualization tools, these projects highlight my versatility as a developer.
            </InfoSection>
          </div>

          <SectionHeader title="PROJECTS" color="blue" />

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeFilter === filter.key
                    ? 'bg-[#653490] text-white shadow-md shadow-[#653490]/30 scale-105'
                    : 'bg-dark-light/70 text-white/80 hover:text-white hover:bg-dark-light backdrop-blur-sm hover:shadow-sm'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div>
              <div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredProjects.map((project) => (
                  <div
                  key={project.id}
                  className="bg-dark-light/90 rounded-lg overflow-hidden shadow-lg group backdrop-blur-sm"
                  >
                    {/* Project Image */}
                    <div className="aspect-video bg-gradient-to-br from-[#653490] to-[#00E9C5] relative overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold">
                        {project.title.substring(0, 2).toUpperCase()}
                      </div>
                    </div>
                    
                    {/* Project Info */}
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-xl font-bold group-hover:text-[#00E9C5] transition-colors">
                          {project.title}
                        </h3>
                        
                        {project.featured && (
                          <span className="bg-[#653490]/20 text-[#653490] text-xs px-2 py-1 rounded-full">
                            Featured
                          </span>
                        )}
                      </div>
                      
                      <p className="text-white/70 text-sm mb-4">
                        {project.description}
                      </p>
                      
                      <div className="flex justify-between items-center">
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.slice(0, 2).map((tech, index) => (
                            <span key={index} className="bg-dark text-xs px-2 py-1 rounded flex items-center gap-1">
                              <span className="text-base">{getTechIcon(tech)}</span>
                              <span>{tech}</span>
                            </span>
                          ))}
                          {project.technologies.length > 2 && (
                            <span className="bg-dark text-xs px-2 py-1 rounded">
                              +{project.technologies.length - 2}
                            </span>
                          )}
                        </div>
                        
                        <div className="flex space-x-3">
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-white/70 hover:text-white transition-colors"
                              aria-label={`GitHub repository for ${project.title}`}
                            >
                              <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                width="20" height="20" 
                                viewBox="0 0 24 24" 
                                fill="currentColor"
                              >
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                              </svg>
                            </a>
                          )}
                          
                          {project.liveDemo && (
                            <a
                              href={project.liveDemo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-white/70 hover:text-white transition-colors"
                              aria-label={`Live demo for ${project.title}`}
                            >
                              <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                width="20" height="20" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke="currentColor" 
                                strokeWidth="2" 
                                strokeLinecap="round" 
                                strokeLinejoin="round"
                              >
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                <polyline points="15 3 21 3 21 9"></polyline>
                                <line x1="10" y1="14" x2="21" y2="3"></line>
                              </svg>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
          </div>
        </div>
      </section>

      <section className="bg-dark-light py-20">
        <div className="container mx-auto px-4">
          <SectionHeader title="TECHNOLOGIES" color="purple" />
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 text-center">
            {[
              'React', 'TypeScript', 'Node.js', 'Express', 'Next.js', 'Java',
              'Spring Boot', 'MongoDB', 'MySQL', 'AWS', 'Docker', 'Git'
            ].map((tech, index) => (
              <div
                key={index}
                className="bg-dark/80 p-4 rounded-lg shadow-lg backdrop-blur-sm cursor-pointer transition-all hover:shadow-xl hover:shadow-[#00E9C5]/10 border border-transparent hover:border-[#00E9C5]/20"
              >
                <div className="mb-2 flex justify-center">
                  <span className="text-4xl">{getTechIcon(tech)}</span>
                </div>
                <div className="text-white font-medium">{tech}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-[#653490] to-[#00E9C5] py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Looking to hire a developer?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            I'm available for freelance projects and job opportunities.
            If you have a project in mind or want to chat, contact me!
          </p>
          <a 
            href="/contact"
            className="inline-block bg-white text-dark font-semibold px-8 py-3 rounded-md transition-all hover:bg-white/90 hover:scale-105 hover:shadow-lg active:translate-y-0.5"
          >
            Contact Me
          </a>
        </div>
      </section>
    </>
  );
};

export default Projects;
