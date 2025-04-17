"use client"
import { motion } from 'framer-motion'
import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { skillsData } from '@/lib/constants'
// Skills data

const Skills = ({
    skillsRef,

}: {
    skillsRef: React.RefObject<null>;

}) => {
    return (
        <div> <section id="skills" ref={skillsRef} className="py-20 relative">
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
                        My Skills
                        <motion.span
                            className="absolute -bottom-2 left-0 w-full h-1 bg-primary"
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                        />
                    </h2>
                    <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                        I've worked with a variety of technologies in the web development world. Here are my main areas of
                        expertise:
                    </p>
                </motion.div>



                <div className="space-y-12">
                    {Object.entries(skillsData).map(([category, skills], categoryIndex) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 * categoryIndex }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="space-y-4"
                        >
                            <h3 className="text-xl font-semibold capitalize">{category}</h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                                {skills.map((tech, index) => (
                                    <motion.div
                                        key={tech.name}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3, delay: 0.05 * index }}
                                        viewport={{ once: true }}
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <Card className="text-center h-full bg-background/60 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-colors">
                                            <CardContent className="p-4 flex flex-col items-center justify-center h-full">
                                                {/* <div className="text-2xl mb-2">{tech.icon}</div> */}
                                                <motion.div
                                                    whileHover={{ y: -2 }}
                                                    transition={{ type: "spring", stiffness: 300 }}
                                                    className="font-medium text-sm"
                                                >
                                                    {tech.name}
                                                </motion.div>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section></div>
    )
}

export default Skills