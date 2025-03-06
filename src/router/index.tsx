import { Route, Routes } from "react-router-dom"
import Home from "@/views/Home"
import About from "@/views/About"
import Skills from "@/views/Skills"
import Projects from "@/views/Projects"
import Contact from "@/views/Contact"

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default AppRoutes
