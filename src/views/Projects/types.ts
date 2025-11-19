export interface ProjectsProps {}

export interface Project {
  id: string
  title: string
  description: string
  image: string
  technologies: string[]
  github?: string
  liveDemo?: string
  featured?: boolean
  category: "frontend" | "backend" | "fullstack" | "mobile" | "ai" | "aws"
}
