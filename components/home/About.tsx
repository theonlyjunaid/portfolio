"use client"
import React from 'react'
import { motion, MotionValue } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { aboutData } from '@/lib/constants'

const About = ({
    aboutRef,
    aboutImageScale,
    aboutContentX,
    handleButtonEnter,
    handleButtonLeave,
}: {
    aboutRef: React.RefObject<null>;
    aboutImageScale: MotionValue<number>;
    aboutContentX: MotionValue<number>;
    handleButtonEnter: (text: string) => void;
    handleButtonLeave: () => void;
}) => {
    return (
        <div>   <section id="about" ref={aboutRef} className="py-20 bg-muted/30 relative">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, margin: "0px" }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold inline-block relative">
                        About Me
                        <motion.span
                            className="absolute -bottom-2 left-0 w-full h-1 bg-primary"
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                        />
                    </h2>
                </motion.div>

                <div className="max-w-4xl mx-auto  items-center text-center">
                    <motion.div
                        // style={{ x: aboutContentX }}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true, margin: "0px" }}
                        className="space-y-6"
                    >
                        <motion.h3
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            viewport={{ once: true }}
                            className="text-2xl font-bold"
                        >
                            {aboutData.title2}
                        </motion.h3>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.7 }}
                            viewport={{ once: true }}
                            className="text-muted-foreground"
                        >
                            {aboutData.description}
                        </motion.p>
                        {/* <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                            viewport={{ once: true }}
                            className="text-muted-foreground"
                        >
                            {aboutData.description2}
                        </motion.p> */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.9 }}
                            viewport={{ once: true }}
                            className="grid grid-cols-2 gap-4 pt-4"
                        >
                            {/* <div className="bg-background/50 backdrop-blur-sm p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                <p className="font-medium text-primary">Name:</p>
                                <p className="text-muted-foreground">John Doe</p>
                            </div>
                            <div className="bg-background/50 backdrop-blur-sm p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                <p className="font-medium text-primary">Email:</p>
                                <p className="text-muted-foreground">contact@example.com</p>
                            </div> */}
                            <div className="bg-background/50 backdrop-blur-sm p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                <p className="font-medium text-primary">Location:</p>
                                <p className="text-muted-foreground">{aboutData.location}</p>
                            </div>
                            <div className="bg-background/50 backdrop-blur-sm p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                <p className="font-medium text-primary">Availability:</p>
                                <p className="text-muted-foreground">{aboutData.availability}</p>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 1 }}
                            viewport={{ once: true }}
                        >
                            <Button
                                onClick={() => window.open("/junaid-resume.pdf", "_blank")}
                                className="group relative overflow-hidden"
                                onMouseEnter={() => handleButtonEnter("Resume")}
                                onMouseLeave={handleButtonLeave}
                            >
                                <span className="relative z-10 flex items-center">
                                    Download Resume
                                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </span>
                                <span className="absolute inset-0 bg-primary/80 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                            </Button>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section></div>
    )
}

export default About