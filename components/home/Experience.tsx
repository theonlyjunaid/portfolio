"use client"
import { motion, MotionValue } from 'framer-motion'
import React from 'react'
import Image from 'next/image'
import { experienceData } from '@/lib/constants'
// Experience data

const Experience = ({
    experienceRef,
    handleButtonEnter,
    handleButtonLeave,
}: {
    experienceRef: React.RefObject<null>;
    handleButtonEnter: (text: string) => void;
    handleButtonLeave: () => void;
}) => {
    return (
        <div>      <section id="experience" ref={experienceRef} className="py-20 relative">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
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
                        Work Experience
                        <motion.span
                            className="absolute -bottom-2 left-0 w-full h-1 bg-primary"
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                        />
                    </h2>
                    <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                        My professional journey and the companies I've had the pleasure to work with.
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-muted/50 hidden md:block" />

                    {experienceData.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className={`flex flex-col md:flex-row items-center md:items-start gap-8 mb-16 last:mb-0 relative ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                }`}
                        >
                            {/* Timeline dot */}
                            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-5 h-5 rounded-full bg-primary hidden md:block" />

                            {/* Content */}
                            <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-16" : "md:pl-16"}`}>
                                <motion.div
                                    whileHover={{ y: -5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                    className="bg-background/60 backdrop-blur-sm p-6 rounded-lg shadow-md border border-primary/10 hover:border-primary/30 transition-all duration-300"
                                    onMouseEnter={() => handleButtonEnter(exp.company)}
                                    onMouseLeave={handleButtonLeave}
                                >
                                    <a href={exp.link} target="_blank" rel="noopener noreferrer">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="relative w-12 h-12 rounded-full overflow-hidden bg-muted/30 flex items-center justify-center">
                                                <Image
                                                    src={exp.logo || "/placeholder.svg"}
                                                    alt={exp.company}
                                                    width={48}
                                                    height={48}
                                                    className="object-contain"
                                                />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-primary">{exp.position}</h3>
                                                <p className="text-muted-foreground">{exp.company}</p>
                                            </div>
                                        </div>
                                    </a>
                                    <div className="mb-4">
                                        <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                                            {exp.duration}
                                        </span>
                                    </div>
                                    <p className="text-muted-foreground">{exp.description}</p>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section></div>
    )
}

export default Experience