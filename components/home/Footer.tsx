"use client"
import { motion } from 'framer-motion'
import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { Github, Linkedin, Mail } from 'lucide-react'

const Footer = ({
    handleLinkEnter,
    handleLinkLeave,
}: {
    handleLinkEnter: (text: string) => void;
    handleLinkLeave: () => void;
}) => {
    return (
        <div>   <footer className="py-8 border-t relative z-10">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row justify-between items-center"
                >
                    <div className="mb-4 md:mb-0">
                        <p className="text-sm text-muted-foreground">
                            © {new Date().getFullYear()} John Doe. All rights reserved.
                        </p>
                    </div>
                    <div className="flex gap-4">
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
                    </div>
                </motion.div>
            </div>
        </footer></div>
    )
}

export default Footer