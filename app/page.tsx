"use client"

import { useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ChevronDown,
  Menu,
  X,
  Trophy,
  Medal,
  Sun,
  Moon,
  Code,
  Database,
  Brain,
  Cpu,
  Globe,
  Smartphone,
} from "lucide-react"
import { useTheme } from "next-themes"

const skillIcons = {
  Python: Code,
  Java: Code,
  C: Cpu,
  "C++": Cpu,
  JavaScript: Globe,
  TypeScript: Globe,
  React: Globe,
  SQL: Database,
  "AI/ML": Brain,
  "Mobile Dev": Smartphone,
}

const skills = [
  { name: "Python", level: "Expert", icon: "Python" },
  { name: "Java", level: "Expert", icon: "Java" },
  { name: "C", level: "Proficient", icon: "C" },
  { name: "C++", level: "Proficient", icon: "C++" },
  { name: "JavaScript", level: "Expert", icon: "JavaScript" },
  { name: "TypeScript", level: "Expert", icon: "TypeScript" },
  { name: "React", level: "Expert", icon: "React" },
  { name: "SQL", level: "Proficient", icon: "SQL" },
  { name: "AI/ML", level: "Expert", icon: "AI/ML" },
  { name: "Mobile Dev", level: "Proficient", icon: "Mobile Dev" },
]

const experiences = [
  {
    company: "Sopra Steria",
    role: "RAG and AI agent Newsletter – Externship Project",
    period: "June – July 2024",
    points: [
      "Developed multi-agent newsletter system with CrewAI, fully automating the retrieval and summarization of latest news",
      "Automated company-wide email delivery of newsletters leveraging Python SMTP library, scheduled cron job for Monday morning",
      "Designed and deployed end-to-end RAG model using OpenAI embeddings and FAISS vector DB for querying employee data",
      "Scaled with Pinecone DB, and implemented GPT-4 API to generate natural language responses from similarity search results",
    ],
  },
  {
    company: "BytEdge, Inc",
    role: "Prompt Engineer, ADAS Testing team",
    period: "June – July 2023",
    points: [
      "Fine-tuned and optimized GPT-3 model through OpenAI's API, making a database of more than 10,000 prompts for SQL training",
      "Integrated the custom-trained model as a search bar on company's flagship software platform, enabling precise data extraction",
      "Engineered a GAN for high-fidelity vehicular data synthesis, enhancing ADAS training with feature diversity and generalization",
    ],
  },
  {
    company: "Equinox Solutions LLP",
    role: "App developer",
    period: "May – July 2022",
    points: [
      'Developed the company\'s USP mobile app "SeedTrace" using JS with React Native for iOS and Android to enhance accessibility',
      "Implemented QR code scanning on food products with ZXing library for real-time supply chain transparency for the consumers",
      "Integrated RESTful APIs for data on harvesting, processing, and storage, and used SQLite for efficient local storage on devices",
      "Employed Agile development practices for iterative updates and feature refinement via regular sprints and user feedback integration",
    ],
  },
  {
    company: "Edugain Education",
    role: "Front-end web developer",
    period: "Summer 2021",
    points: [
      "Revamped and optimized the company's website using JavaScript, React, and NodeJS to enhance user interactivity and engagement",
      "Developed the front end for a dynamic quiz portal utilizing React, integrating with their ML-driven adaptive questioning algorithm",
      "Served as content reviewer for company worksheets, developing comprehensive solution documents for each assignment",
    ],
  },
]

const projects = [
  {
    name: "Shell Project – Advanced Custom Bash Shell",
    period: "January - March 2024",
    description:
      "Developed a custom bash shell from scratch with subshells, wildcards, using Lex, Yacc, C, and C++ for enhanced scripting",
    tech: ["C", "C++", "Lex", "Yacc"],
    github: "#",
  },
  {
    name: "Autonomous Motorsports Purdue",
    period: "September 2022 – March 2023",
    description:
      "Employed MobileSAM AI to delineate track boundaries from captured images for autonomous navigation of a self-driving kart",
    tech: ["Python", "AI/ML", "Computer Vision"],
    github: "#",
  },
  {
    name: "Vigyaan Prakash – YouTube Channel",
    period: "April 2021 – August 2022",
    description:
      "Designed and animated digital artworks using Adobe Creative Suite to simplify complex scientific concepts",
    tech: ["Adobe Creative Suite", "Research", "Animation"],
    github: "#",
  },
]

const coursework = [
  "Data Structures and Algorithms",
  "Computer Architecture",
  "Systems Programming",
  "Human Computer Interaction",
  "Analysis of Algorithms",
  "Artificial Intelligence",
  "Linear Algebra",
  "Data Mining and ML",
]

export default function ResumePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [expandedExperience, setExpandedExperience] = useState<number | null>(null)
  const { theme, setTheme } = useTheme()
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 300], [0, 50])
  const y2 = useTransform(scrollY, [0, 300], [0, -50])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

  const navItems = [
    { label: "Intro", id: "intro" },
    { label: "Skills", id: "skills" },
    { label: "Education", id: "education" },
    { label: "Experience", id: "experience" },
    { label: "Projects", id: "projects" },
    { label: "Leadership", id: "leadership" },
    { label: "Contact", id: "contact" },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl font-bold font-['Poppins']"
            >
              Devesh Maheshwari
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-sm font-medium hover:text-blue-500 transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <Button variant="ghost" size="sm" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden flex items-center space-x-2">
              <Button variant="ghost" size="sm" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
              <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-background border-b"
          >
            <div className="px-4 py-2 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-3 py-2 text-sm font-medium hover:bg-accent rounded-md"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="intro" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <motion.div style={{ y: y1 }} className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-purple-500 rounded-full blur-3xl" />
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-5xl lg:text-7xl font-bold font-['Poppins'] mb-6">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Devesh Maheshwari
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed">
                Passionate Computer Science & Engineering student at Purdue University, specializing in AI, Full-Stack,
                and Core Systems.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <motion.a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-accent rounded-full hover:bg-accent/80 transition-colors"
                >
                  <Github className="h-6 w-6" />
                </motion.a>
                <motion.a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-accent rounded-full hover:bg-accent/80 transition-colors"
                >
                  <Linkedin className="h-6 w-6" />
                </motion.a>
                <motion.a
                  href="mailto:deveshm95764@gmail.com"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-accent rounded-full hover:bg-accent/80 transition-colors"
                >
                  <Mail className="h-6 w-6" />
                </motion.a>
                <motion.a
                  href="tel:765-624-2520"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-accent rounded-full hover:bg-accent/80 transition-colors"
                >
                  <Phone className="h-6 w-6" />
                </motion.a>
                <motion.div whileHover={{ scale: 1.1 }} className="p-3 bg-accent rounded-full flex items-center gap-2">
                  <MapPin className="h-6 w-6" />
                  <span className="text-sm">West Lafayette, IN</span>
                </motion.div>
              </div>

              <motion.button
                onClick={() => scrollToSection("skills")}
                whileHover={{ y: -2 }}
                className="flex items-center gap-2 text-blue-500 hover:text-blue-600 transition-colors"
              >
                <span>Explore my work</span>
                <ChevronDown className="h-5 w-5 animate-bounce" />
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="w-80 h-80 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <div className="w-72 h-72 bg-background rounded-full flex items-center justify-center">
                  <span className="text-6xl font-bold text-muted-foreground">DM</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold font-['Poppins'] mb-4">Technical Skills</h2>
            <p className="text-xl text-muted-foreground">Technologies I work with</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {skills.map((skill, index) => {
              const IconComponent = skillIcons[skill.icon as keyof typeof skillIcons]
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group"
                >
                  <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 cursor-pointer">
                    <CardContent className="p-0">
                      <div className="mb-4 flex justify-center">
                        <div className="p-3 bg-blue-500/10 rounded-full group-hover:bg-blue-500/20 transition-colors">
                          <IconComponent className="h-8 w-8 text-blue-500" />
                        </div>
                      </div>
                      <h3 className="font-semibold mb-2">{skill.name}</h3>
                      <Badge variant="secondary" className="text-xs">
                        {skill.level}
                      </Badge>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 relative overflow-hidden">
        <motion.div style={{ y: y2 }} className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <defs>
              <pattern id="neural-network" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="1" fill="currentColor" />
                <line x1="10" y1="10" x2="30" y2="10" stroke="currentColor" strokeWidth="0.5" />
                <line x1="10" y1="10" x2="10" y2="30" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#neural-network)" />
          </svg>
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold font-['Poppins'] mb-4">Education</h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold font-['Poppins'] mb-2">Purdue University - West Lafayette</h3>
                    <p className="text-lg text-muted-foreground mb-2">Bachelor of Science in Computer Science</p>
                    <p className="text-lg text-muted-foreground mb-4">Bachelor of Science in Electrical Engineering</p>
                    <div className="flex items-center gap-4">
                      <Badge variant="outline" className="text-lg px-3 py-1">
                        Class of 2026
                      </Badge>
                      <Badge className="text-lg px-3 py-1 bg-green-500">GPA: 3.97/4.00</Badge>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-4">Relevant Coursework</h4>
                    <div className="flex flex-wrap gap-2">
                      {coursework.map((course, index) => (
                        <motion.div
                          key={course}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.05 }}
                        >
                          <Badge
                            variant="secondary"
                            className="cursor-pointer hover:bg-blue-500 hover:text-white transition-colors"
                          >
                            {course}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-blue-200 dark:border-blue-800">
                <CardContent className="p-0">
                  <div className="flex items-center gap-3 mb-4">
                    <Brain className="h-8 w-8 text-blue-500" />
                    <h3 className="text-2xl font-bold font-['Poppins']">AI Passion</h3>
                  </div>
                  <p className="text-lg text-muted-foreground mb-6">
                    Passionate about AI—member of AI Club, completed RAG & transformer projects.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full" />
                      <span>Active member of Purdue AI Club</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full" />
                      <span>Completed RAG implementation projects</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full" />
                      <span>Transformer architecture research</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold font-['Poppins'] mb-4">Experience</h2>
            <p className="text-xl text-muted-foreground">My professional journey</p>
          </motion.div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-0">
                    <div
                      className="p-6 cursor-pointer"
                      onClick={() => setExpandedExperience(expandedExperience === index ? null : index)}
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-bold font-['Poppins'] mb-1">{exp.company}</h3>
                          <p className="text-lg text-muted-foreground mb-2">{exp.role}</p>
                          <Badge variant="outline">{exp.period}</Badge>
                        </div>
                        <motion.div
                          animate={{ rotate: expandedExperience === index ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown className="h-5 w-5 text-muted-foreground" />
                        </motion.div>
                      </div>

                      {expandedExperience === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="border-t pt-4"
                        >
                          <ul className="space-y-3">
                            {exp.points.map((point, pointIndex) => (
                              <motion.li
                                key={pointIndex}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: pointIndex * 0.1 }}
                                className="flex items-start gap-3"
                              >
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                                <span className="text-muted-foreground">{point}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold font-['Poppins'] mb-4">Projects</h2>
            <p className="text-xl text-muted-foreground">Things I've built</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 relative overflow-hidden">
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Code className="h-16 w-16 text-white/80" />
                      </div>
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        className="absolute inset-0 bg-black/50 flex items-center justify-center"
                      >
                        <div className="flex flex-wrap gap-2 p-4">
                          {project.tech.map((tech) => (
                            <Badge key={tech} variant="secondary" className="bg-white/20 text-white">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </motion.div>
                    </div>

                    <div className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-lg font-bold font-['Poppins'] leading-tight">{project.name}</h3>
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="p-2 hover:bg-accent rounded-full transition-colors"
                        >
                          <Github className="h-4 w-4" />
                        </motion.a>
                      </div>
                      <Badge variant="outline" className="mb-3">
                        {project.period}
                      </Badge>
                      <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership & Honors Section */}
      <section id="leadership" className="py-20 bg-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold font-['Poppins'] mb-4">Leadership & Honors</h2>
            <p className="text-xl text-muted-foreground">Recognition and achievements</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="flex items-center gap-3 mb-6">
                    <Trophy className="h-8 w-8 text-yellow-500" />
                    <h3 className="text-2xl font-bold font-['Poppins']">Leadership</h3>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-semibold mb-2">DPS Mathura Road Student Council - Sports Captain</h4>
                      <Badge variant="outline" className="mb-3">
                        September 2020 – May 2021
                      </Badge>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                          <span>
                            Served as captain across all school sports teams, leading diverse groups and fostering
                            teamwork
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                          <span>
                            Led a 20+ member football team as captain, representing and coordinating the squad in all
                            competitions
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="flex items-center gap-3 mb-6">
                    <Medal className="h-8 w-8 text-blue-500" />
                    <h3 className="text-2xl font-bold font-['Poppins']">Academic Honors</h3>
                  </div>
                  <div className="space-y-6">
                    <div className="text-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.8, type: "spring" }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold text-blue-500 mb-2"
                      >
                        1st
                      </motion.div>
                      <p className="text-lg font-semibold">in Computer Science</p>
                      <p className="text-muted-foreground">for two consecutive years</p>
                      <Badge className="mt-2">700+ students</Badge>
                    </div>

                    <div className="text-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.8, type: "spring", delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold text-green-500 mb-2"
                      >
                        9
                      </motion.div>
                      <p className="text-lg font-semibold">Years</p>
                      <p className="text-muted-foreground">Academic excellence certificate</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold font-['Poppins'] mb-4">Get in Touch</h2>
            <p className="text-xl text-muted-foreground">Let's work together on something amazing</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="p-8">
                <CardContent className="p-0">
                  <form className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name
                      </label>
                      <Input id="name" placeholder="Your name" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email
                      </label>
                      <Input id="email" type="email" placeholder="your.email@example.com" />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message
                      </label>
                      <Textarea id="message" placeholder="Tell me about your project..." rows={5} />
                    </div>
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button className="w-full" size="lg">
                        Send Message
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold font-['Poppins'] mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <motion.a
                    href="mailto:deveshm95764@gmail.com"
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 p-4 bg-accent/50 rounded-lg hover:bg-accent transition-colors"
                  >
                    <Mail className="h-6 w-6 text-blue-500" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-muted-foreground">deveshm95764@gmail.com</p>
                    </div>
                  </motion.a>

                  <motion.a
                    href="tel:765-624-2520"
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 p-4 bg-accent/50 rounded-lg hover:bg-accent transition-colors"
                  >
                    <Phone className="h-6 w-6 text-green-500" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-muted-foreground">765-624-2520</p>
                    </div>
                  </motion.a>

                  <motion.div whileHover={{ x: 5 }} className="flex items-center gap-4 p-4 bg-accent/50 rounded-lg">
                    <MapPin className="h-6 w-6 text-red-500" />
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-muted-foreground">111 S Salisbury St, West Lafayette, IN</p>
                    </div>
                  </motion.div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Connect with me</h4>
                <div className="flex gap-4">
                  <motion.a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 bg-accent rounded-full hover:bg-accent/80 transition-colors"
                  >
                    <Github className="h-6 w-6" />
                  </motion.a>
                  <motion.a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 bg-accent rounded-full hover:bg-accent/80 transition-colors"
                  >
                    <Linkedin className="h-6 w-6" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t bg-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-muted-foreground">© 2024 Devesh Maheshwari. Built with Next.js and Tailwind CSS.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
