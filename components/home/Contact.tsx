import { motion } from 'framer-motion'
import React from 'react'
import { Button } from '../ui/button'
import { Mail, Linkedin, Github, ArrowRight } from 'lucide-react'

const Contact = ({
    contactRef,
    handleButtonEnter,
    handleButtonLeave,
}: {
    contactRef: React.RefObject<null>;
    handleButtonEnter: (text: string) => void;
    handleButtonLeave: () => void;
}) => {
    return (
        <div>   <section id="contact" ref={contactRef} className="py-20 relative">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
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
                        Get In Touch
                        <motion.span
                            className="absolute -bottom-2 left-0 w-full h-1 bg-primary"
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                        />
                    </h2>
                    <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                        I'm currently open to new opportunities. Whether you have a question or just want to say hi, I'll do
                        my best to get back to you!
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="space-y-6"
                    >
                        <h3 className="text-2xl font-bold">Contact Information</h3>
                        <p className="text-muted-foreground">
                            Feel free to reach out through any of the following methods. I'm always interested in hearing about
                            new projects and opportunities.
                        </p>
                        <div className="space-y-6">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: 0.3 }}
                                viewport={{ once: true }}
                                className="flex items-center gap-4 group"
                            >
                                <div className="relative">
                                    <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-primary to-purple-500 opacity-70 blur group-hover:opacity-100 transition-opacity" />
                                    <Button variant="outline" size="icon" className="rounded-full relative bg-background">
                                        <Mail className="h-5 w-5 group-hover:text-primary transition-colors" />
                                    </Button>
                                </div>
                                <div>
                                    <p className="font-medium">Email</p>
                                    <p className="text-muted-foreground group-hover:text-primary transition-colors">
                                        junaid@theonlyjunaid.com
                                    </p>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: 0.4 }}
                                viewport={{ once: true }}
                                className="flex items-center gap-4 group"
                            >
                                <div className="relative">
                                    <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-primary to-purple-500 opacity-70 blur group-hover:opacity-100 transition-opacity" />
                                    <Button variant="outline" size="icon" className="rounded-full relative bg-background">
                                        <Linkedin className="h-5 w-5 group-hover:text-primary transition-colors" />
                                    </Button>
                                </div>
                                <div>
                                    <p className="font-medium">LinkedIn</p>
                                    <p className="text-muted-foreground group-hover:text-primary transition-colors">
                                        linkedin.com/in/theonlyjunaid
                                    </p>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: 0.5 }}
                                viewport={{ once: true }}
                                className="flex items-center gap-4 group"
                            >
                                <div className="relative">
                                    <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-primary to-purple-500 opacity-70 blur group-hover:opacity-100 transition-opacity" />
                                    <Button variant="outline" size="icon" className="rounded-full relative bg-background">
                                        <Github className="h-5 w-5 group-hover:text-primary transition-colors" />
                                    </Button>
                                </div>
                                <div>
                                    <p className="font-medium">GitHub</p>
                                    <p className="text-muted-foreground group-hover:text-primary transition-colors">
                                        github.com/theonlyjunaid
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="space-y-6"
                    >
                        <h3 className="text-2xl font-bold">Send Me a Message</h3>
                        <form className="space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: 0.5 }}
                                    viewport={{ once: true }}
                                    className="space-y-2"
                                >
                                    <label htmlFor="name" className="text-sm font-medium">
                                        Name
                                    </label>
                                    <input
                                        id="name"
                                        type="text"
                                        className="w-full px-4 py-2 rounded-md border bg-background/50 backdrop-blur-sm focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                                        placeholder="Your name"
                                        required
                                    />
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: 0.6 }}
                                    viewport={{ once: true }}
                                    className="space-y-2"
                                >
                                    <label htmlFor="email" className="text-sm font-medium">
                                        Email
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        className="w-full px-4 py-2 rounded-md border bg-background/50 backdrop-blur-sm focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                                        placeholder="Your email"
                                        required
                                    />
                                </motion.div>
                            </div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: 0.7 }}
                                viewport={{ once: true }}
                                className="space-y-2"
                            >
                                <label htmlFor="subject" className="text-sm font-medium">
                                    Subject
                                </label>
                                <input
                                    id="subject"
                                    type="text"
                                    className="w-full px-4 py-2 rounded-md border bg-background/50 backdrop-blur-sm focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                                    placeholder="Subject"
                                    required
                                />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: 0.8 }}
                                viewport={{ once: true }}
                                className="space-y-2"
                            >
                                <label htmlFor="message" className="text-sm font-medium">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    className="w-full px-4 py-2 rounded-md border bg-background/50 backdrop-blur-sm min-h-[150px] focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                                    placeholder="Your message"
                                    required
                                ></textarea>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: 0.9 }}
                                viewport={{ once: true }}
                            >
                                <Button
                                    type="submit"
                                    className="w-full sm:w-auto group relative overflow-hidden"
                                    onMouseEnter={() => handleButtonEnter("Send")}
                                    onMouseLeave={handleButtonLeave}
                                >
                                    <span className="relative z-10 flex items-center">
                                        Send Message
                                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                    <span className="absolute inset-0 bg-primary/80 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                                </Button>
                            </motion.div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>                  </div>
    )
}

export default Contact