"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useScroll, useTransform, useSpring, useInView } from "framer-motion"
import { ChevronDown, Github, Linkedin, Mail, Menu, Moon, Sun, X, ArrowRight, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useTheme } from "next-themes"
import Link from "next/link"
import Image from "next/image"
import ParticlesContainer from "@/components/particles-container"
import AnimatedText from "@/components/animated-text"
import CustomCursor from "@/components/custom-cursor"
import PreLoader from "@/components/pre-loader"
import ScrollIndicator from "@/components/scroll-indicator"
import Header from "@/components/home/Header"
import Hero from "@/components/home/Hero"
import About from "@/components/home/About"
import Experience from "@/components/home/Experience"
import Skills from "@/components/home/Skills"
import Projects from "@/components/home/Projects"
import Contact from "@/components/home/Contact"
import Footer from "@/components/home/Footer"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  // const [loading, setLoading] = useState(true)
  const [cursorVariant, setCursorVariant] = useState("default")
  const [cursorText, setCursorText] = useState("")

  // Refs for sections
  const homeRef = useRef(null)
  const aboutRef = useRef(null)
  const experienceRef = useRef(null)
  const skillsRef = useRef(null)
  const projectsRef = useRef(null)
  const contactRef = useRef(null)

  // Check if sections are in view
  const homeInView = useInView(homeRef, { margin: "-100px 0px" })
  const aboutInView = useInView(aboutRef, { margin: "-100px 0px" })
  const experienceInView = useInView(experienceRef, { margin: "-100px 0px" })
  const skillsInView = useInView(skillsRef, { margin: "-100px 0px" })
  const projectsInView = useInView(projectsRef, { margin: "-100px 0px" })
  const contactInView = useInView(contactRef, { margin: "-100px 0px" })

  // Scroll progress for parallax effects
  const { scrollYProgress } = useScroll()
  const smoothScrollYProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  // Parallax transformations
  const heroImageY = useTransform(smoothScrollYProgress, [0, 0.2], [0, -50])
  const heroContentY = useTransform(smoothScrollYProgress, [0, 0.2], [0, -30])
  const aboutImageScale = useTransform(smoothScrollYProgress, [0.1, 0.3], [0.9, 1.05])
  const aboutContentX = useTransform(smoothScrollYProgress, [0.1, 0.3], [50, 0])






  // Handle cursor variants
  const handleLinkEnter = (text = "") => {
    setCursorVariant("link")
    setCursorText(text)
  }

  const handleLinkLeave = () => {
    setCursorVariant("default")
    setCursorText("")
  }

  const handleButtonEnter = (text = "") => {
    setCursorVariant("button")
    setCursorText(text)
  }

  const handleButtonLeave = () => {
    setCursorVariant("default")
    setCursorText("")
  }

  // Update active section based on scroll position
  useEffect(() => {
    if (homeInView) setActiveSection("home")
    else if (aboutInView) setActiveSection("about")
    else if (experienceInView) setActiveSection("experience")
    else if (skillsInView) setActiveSection("skills")
    else if (projectsInView) setActiveSection("projects")
    else if (contactInView) setActiveSection("contact")
  }, [homeInView, aboutInView, experienceInView, skillsInView, projectsInView, contactInView])

  // Handle initial loading
  useEffect(() => {
    setMounted(true)

    // Simulate loading time
    // const timer = setTimeout(() => {
    //   setLoading(false)
    // }, 2500)

    // return () => clearTimeout(timer)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      })
      setActiveSection(sectionId)
      setMobileMenuOpen(false)
    }
  }

  if (!mounted) return null
  // if (loading) return <PreLoader />

  return (
    <>
      <CustomCursor variant={cursorVariant as "default" | "button" | "link" | undefined} text={cursorText} />
      <ScrollIndicator />

      <div className="min-h-screen bg-background text-foreground overflow-hidden">
        <ParticlesContainer />

        {/* Header */}
        <Header
          handleLinkEnter={handleLinkEnter}
          handleLinkLeave={handleLinkLeave}
          handleButtonEnter={handleButtonEnter}
          handleButtonLeave={handleButtonLeave}
          scrollToSection={scrollToSection}
          activeSection={activeSection}
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
        />

        <main className="pt-20">
          {/* Hero Section */}
          <Hero homeRef={homeRef} heroContentY={heroContentY} handleButtonEnter={handleButtonEnter} handleButtonLeave={handleButtonLeave} handleLinkEnter={handleLinkEnter} handleLinkLeave={handleLinkLeave} scrollToSection={scrollToSection} heroImageY={heroImageY} />
          {/* About Section */}
          <About aboutRef={aboutRef} aboutImageScale={aboutImageScale} aboutContentX={aboutContentX} handleButtonEnter={handleButtonEnter} handleButtonLeave={handleButtonLeave} />

          {/* Experience Section */}
          <Experience experienceRef={experienceRef} handleButtonEnter={handleButtonEnter} handleButtonLeave={handleButtonLeave} />

          {/* Skills Section */}
          <Skills skillsRef={skillsRef} />

          {/* Projects Section */}
          <Projects projectsRef={projectsRef} handleButtonEnter={handleButtonEnter} handleButtonLeave={handleButtonLeave} />

          {/* Contact Section */}
          <Contact contactRef={contactRef} handleButtonEnter={handleButtonEnter} handleButtonLeave={handleButtonLeave} />
        </main>

        {/* Footer */}
        <Footer handleLinkEnter={handleLinkEnter} handleLinkLeave={handleLinkLeave} />
      </div>
    </>
  )
}
