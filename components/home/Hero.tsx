"use client"
import { motion, MotionValue } from 'framer-motion'
import React from 'react'
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react"
import Image from "next/image"
import AnimatedText from '../animated-text'
import Link from 'next/link'
import { heroData } from '@/lib/constants'


const Hero = ({
    homeRef,
    heroContentY,
    handleButtonEnter,
    handleButtonLeave,
    handleLinkEnter,
    handleLinkLeave,
    scrollToSection,
    heroImageY,
}: {
    homeRef: React.RefObject<null>;
    heroContentY: MotionValue<number>;
    handleButtonEnter: (text: string) => void;
    handleButtonLeave: () => void;
    handleLinkEnter: (text: string) => void;
    handleLinkLeave: () => void;
    scrollToSection: (section: string) => void;
    heroImageY: MotionValue<number>;
}) => {
    return (
        <div>    <section id="home" ref={homeRef} className="min-h-[calc(100vh-5rem)] flex items-center relative">
            <div className="container mx-auto px-4 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div style={{ y: heroContentY }} className="space-y-6">
                        <div className="space-y-2">
                            <motion.h2
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="text-xl text-primary font-medium"
                            >
                                Hello, I'm
                            </motion.h2>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                            >
                                <AnimatedText text={heroData.name} className="text-4xl md:text-5xl lg:text-6xl font-bold" />
                            </motion.div>
                            <motion.h2
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                                className="text-2xl md:text-3xl text-muted-foreground"
                            >
                                {heroData.title}
                            </motion.h2>
                        </div>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.7 }}
                            className="text-lg text-muted-foreground max-w-lg"
                        >
                            {heroData.description}
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.9 }}
                            className="flex flex-wrap gap-4"
                        >
                            <Button
                                onClick={() => scrollToSection("contact")}
                                className="group relative overflow-hidden"
                                onMouseEnter={() => handleButtonEnter("Contact")}
                                onMouseLeave={handleButtonLeave}
                            >
                                <span className="relative z-10">Contact Me</span>
                                <span className="absolute inset-0 bg-primary/80 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                            </Button>
                            <Button
                                variant="outline"
                                onClick={() => scrollToSection("projects")}
                                className="group relative overflow-hidden"
                                onMouseEnter={() => handleButtonEnter("Projects")}
                                onMouseLeave={handleButtonLeave}
                            >
                                <span className="relative z-10 group-hover:text-primary-foreground transition-colors duration-300">
                                    View My Work
                                </span>
                                <span className="absolute inset-0 bg-primary translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                            </Button>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 1.1 }}
                            className="flex gap-4 pt-4"
                        >
                            <Button
                                variant="ghost"
                                size="icon"
                                asChild
                                className="rounded-full hover:scale-110 transition-transform"
                                onMouseEnter={() => handleLinkEnter("GitHub")}
                                onMouseLeave={handleLinkLeave}
                            >
                                <Link href="https://github.com" target="_blank" aria-label="GitHub">
                                    <Github className="h-5 w-5" />
                                </Link>
                            </Button>
                            <Button
                                variant="ghost"
                                size="icon"
                                asChild
                                className="rounded-full hover:scale-110 transition-transform"
                                onMouseEnter={() => handleLinkEnter("LinkedIn")}
                                onMouseLeave={handleLinkLeave}
                            >
                                <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
                                    <Linkedin className="h-5 w-5" />
                                </Link>
                            </Button>
                            <Button
                                variant="ghost"
                                size="icon"
                                asChild
                                className="rounded-full hover:scale-110 transition-transform"
                                onMouseEnter={() => handleLinkEnter("Email")}
                                onMouseLeave={handleLinkLeave}
                            >
                                <Link href="mailto:contact@example.com" aria-label="Email">
                                    <Mail className="h-5 w-5" />
                                </Link>
                            </Button>
                        </motion.div>
                    </motion.div>
                    <motion.div
                        style={{ y: heroImageY }}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="relative h-[400px] w-full max-w-[400px] mx-auto lg:ml-auto"
                    >
                        <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-primary/20 ">
                            <Image
                                src="/junaid avatar.png?height=400&width=400"
                                alt="John Doe"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                        <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-primary to-purple-500 opacity-10" />
                    </motion.div>
                </div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block"
                >
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => scrollToSection("about")}
                        className="animate-bounce rounded-full border border-primary/50 backdrop-blur-sm"
                        aria-label="Scroll down"
                        onMouseEnter={() => handleButtonEnter("Scroll")}
                        onMouseLeave={handleButtonLeave}
                    >
                        <ChevronDown className="h-6 w-6" />
                    </Button>
                </motion.div>
            </div>
        </section>
        </div>
    )
}

export default Hero