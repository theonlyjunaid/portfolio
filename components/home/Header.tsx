"use client"
import React from 'react'
import { motion, AnimatePresence, useScroll, useTransform, useSpring, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Sun, Moon, Menu, X } from "lucide-react"
import { useTheme } from "next-themes"

const Header = ({
    handleLinkEnter,
    handleLinkLeave,
    handleButtonEnter,
    handleButtonLeave,
    scrollToSection,
    activeSection,
    mobileMenuOpen,
    setMobileMenuOpen,
}: {
    handleLinkEnter: (text: string) => void;
    handleLinkLeave: () => void;
    handleButtonEnter: (text: string) => void;
    handleButtonLeave: () => void;
    scrollToSection: (section: string) => void;
    activeSection: string;
    mobileMenuOpen: boolean;
    setMobileMenuOpen: (open: boolean) => void;
}) => {
    const { theme, setTheme } = useTheme()

    return (
        <div>   <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b"
        >
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-xl font-bold"
                    onMouseEnter={() => handleLinkEnter("Home")}
                    onMouseLeave={handleLinkLeave}
                    onClick={() => scrollToSection("home")}
                >
                    <span className="text-primary">Junaid</span>Portfolio
                </motion.div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-8">
                    {["home", "about", "experience", "skills", "projects", "contact"].map((item) => (
                        <motion.button
                            key={item}
                            whileHover={{ y: -2, scale: 1.05 }}
                            whileTap={{ y: 0, scale: 0.95 }}
                            onClick={() => scrollToSection(item)}
                            className={`capitalize text-sm relative ${activeSection === item ? "text-primary font-medium" : "text-muted-foreground"
                                }`}
                            onMouseEnter={() => handleButtonEnter(item)}
                            onMouseLeave={handleButtonLeave}
                        >
                            {item}
                            {activeSection === item && (
                                <motion.span
                                    layoutId="activeSection"
                                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                />
                            )}
                        </motion.button>
                    ))}
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        aria-label="Toggle theme"
                        onMouseEnter={() => handleButtonEnter("Theme")}
                        onMouseLeave={handleButtonLeave}
                    >
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={theme}
                                initial={{ y: -20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: 20, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                            </motion.div>
                        </AnimatePresence>
                    </Button>
                </nav>

                {/* Mobile Menu Button */}
                <div className="flex items-center md:hidden">
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        className="mr-2"
                        aria-label="Toggle theme"
                    >
                        {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                    </Button>
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </Button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="md:hidden bg-background/95 backdrop-blur-md border-b"
                    >
                        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
                            {["home", "about", "experience", "skills", "projects", "contact"].map((item) => (
                                <motion.button
                                    key={item}
                                    whileTap={{ x: 10 }}
                                    onClick={() => scrollToSection(item)}
                                    className={`capitalize text-left py-2 flex items-center ${activeSection === item ? "text-primary font-medium" : "text-muted-foreground"
                                        }`}
                                >
                                    {activeSection === item && (
                                        <motion.span
                                            layoutId="activeMobileSection"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            className="w-1 h-5 bg-primary mr-2 rounded-full"
                                        />
                                    )}
                                    {item}
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
        </div>
    )
}

export default Header