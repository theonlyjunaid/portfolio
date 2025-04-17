"use client"
import { motion } from 'framer-motion'
import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import { projectsData } from '@/lib/constants'

const Projects = ({
    projectsRef,
    handleButtonEnter,
    handleButtonLeave,
}: {
    projectsRef: React.RefObject<null>;
    handleButtonEnter: (text: string) => void;
    handleButtonLeave: () => void;
}) => {
    return (
        <div>  <section id="projects" ref={projectsRef} className="py-20 bg-muted/30 relative">
            {/* Decorative background blobs */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
            </div>
            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold inline-block relative">
                        My Projects
                        <motion.span
                            className="absolute -bottom-2 left-0 w-full h-1 bg-primary"
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                        />
                    </h2>
                    <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                        Here are some of my recent projects. Each one was built to solve a specific problem and demonstrates
                        different aspects of my technical skills.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projectsData.slice(0, 3).map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true, margin: "-100px" }}
                            whileHover={{ y: -8, scale: 1.02 }}
                        >
                            <Card className="overflow-hidden h-full flex flex-col bg-background/70 backdrop-blur-md border-primary/10 hover:border-primary/40 transition-all duration-300 hover:shadow-2xl shadow-lg">
                                <div className="relative h-52 overflow-hidden">
                                    <Image
                                        src={project.image || "/placeholder.svg"}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-700 hover:scale-105"
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent pointer-events-none" />
                                </div>
                                <CardContent className="flex-grow flex flex-col p-6">
                                    <motion.h3
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
                                        viewport={{ once: true }}
                                        className="text-xl font-bold mb-2 text-primary"
                                    >
                                        {project.title}
                                    </motion.h3>
                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
                                        viewport={{ once: true }}
                                        className="text-muted-foreground mb-4 flex-grow"
                                    >
                                        {project.description}
                                    </motion.p>
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
                                        viewport={{ once: true }}
                                        className="flex flex-wrap gap-2 mb-6"
                                    >
                                        {project.tags.map((tag) => (
                                            <span key={tag} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">
                                                {tag}
                                            </span>
                                        ))}
                                    </motion.div>
                                    {/* Always visible action buttons */}
                                    <div className="flex gap-3 mt-auto">
                                        {project.link && <Button
                                            size="sm"
                                            variant="secondary"
                                            className="flex items-center gap-1 bg-primary/90 text-white hover:bg-primary"
                                            asChild
                                        >
                                            <Link href={project.link} target="_blank" rel="noopener noreferrer">
                                                <ExternalLink className="h-4 w-4" /> Live
                                            </Link>
                                        </Button>}
                                        {project.github && <Button
                                            size="sm"
                                            variant="outline"
                                            className="flex items-center gap-1 border-primary/40 text-primary hover:bg-primary/10"
                                            asChild
                                        >
                                            <Link href={project.github} target="_blank" rel="noopener noreferrer">
                                                <Github className="h-4 w-4" /> Code
                                            </Link>
                                        </Button>}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center mt-16"
                >
                    <Button
                        variant="outline"
                        asChild
                        className="group relative overflow-hidden"
                        onMouseEnter={() => handleButtonEnter("GitHub")}
                        onMouseLeave={handleButtonLeave}
                    >
                        <Link href="https://github.com/theonlyjunaid" target="_blank" rel="noopener noreferrer">
                            <span className="relative z-10 flex items-center font-semibold">
                                <Github className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                                View More on GitHub
                            </span>
                            <span className="absolute inset-0 bg-primary translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                        </Link>
                    </Button>
                </motion.div>
            </div>
        </section></div>
    )
}

export default Projects