import { motion } from 'framer-motion'
import React from 'react'
import { Button } from '../ui/button'
import { Mail, Linkedin, Github, ArrowRight, CheckCircle, Loader2 } from 'lucide-react'
import { useForm, ValidationError } from '@formspree/react';
import { aboutData } from '@/lib/constants';

const Contact = ({
    contactRef,
    handleButtonEnter,
    handleButtonLeave,
}: {
    contactRef: React.RefObject<null>;
    handleButtonEnter: (text: string) => void;
    handleButtonLeave: () => void;
}) => {
    const [state, handleSubmit] = useForm("xblgvraa");

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
                                    <Button variant="outline" size="icon" className="rounded-full relative bg-background" asChild>
                                        <a href={`mailto:${aboutData.contact.email}`} aria-label="Email">
                                            <Mail className="h-5 w-5 group-hover:text-primary transition-colors" />
                                        </a>
                                    </Button>
                                </div>
                                <div>
                                    <p className="font-medium">Email</p>
                                    <a
                                        href={`mailto:${aboutData.contact.email}`}
                                        className="text-muted-foreground group-hover:text-primary transition-colors hover:underline"
                                    >
                                        {aboutData.contact.email}
                                    </a>
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
                                    <Button variant="outline" size="icon" className="rounded-full relative bg-background" asChild>
                                        <a href={aboutData.contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                            <Linkedin className="h-5 w-5 group-hover:text-primary transition-colors" />
                                        </a>
                                    </Button>
                                </div>
                                <div>
                                    <p className="font-medium">LinkedIn</p>
                                    <a
                                        href={aboutData.contact.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-muted-foreground group-hover:text-primary transition-colors hover:underline"
                                    >
                                        linkedin.com/in/theonlyjunaid
                                    </a>
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
                                    <Button variant="outline" size="icon" className="rounded-full relative bg-background" asChild>
                                        <a href={aboutData.contact.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                            <Github className="h-5 w-5 group-hover:text-primary transition-colors" />
                                        </a>
                                    </Button>
                                </div>
                                <div>
                                    <p className="font-medium">GitHub</p>
                                    <a
                                        href={aboutData.contact.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-muted-foreground group-hover:text-primary transition-colors hover:underline"
                                    >
                                        github.com/theonlyjunaid
                                    </a>
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
                        {state.succeeded ? (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="bg-green-100 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 text-center space-y-4"
                            >
                                <div className="mx-auto w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                                    <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
                                </div>
                                <h4 className="text-xl font-semibold text-green-700 dark:text-green-300">Message Sent Successfully!</h4>
                                <p className="text-green-600 dark:text-green-400">
                                    Thank you for reaching out. I'll get back to you as soon as possible.
                                </p>
                                {/* <Button
                                    type="button"
                                    variant="outline"
                                    className="mt-4"
                                    onClick={() => window.location.reload()}
                                >
                                    Send Another Message
                                </Button> */}
                            </motion.div>
                        ) : (
                            <form className="space-y-4" onSubmit={handleSubmit}>
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
                                            name="name"
                                            className="w-full px-4 py-2 rounded-md border bg-background/50 backdrop-blur-sm focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                                            placeholder="Your name"
                                            required
                                            disabled={state.submitting}
                                        />
                                        <ValidationError
                                            prefix="Name"
                                            field="name"
                                            errors={state.errors}
                                            className="text-red-500 text-sm"
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
                                            name="email"
                                            className="w-full px-4 py-2 rounded-md border bg-background/50 backdrop-blur-sm focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                                            placeholder="Your email"
                                            required
                                            disabled={state.submitting}
                                        />
                                        <ValidationError
                                            prefix="Email"
                                            field="email"
                                            errors={state.errors}
                                            className="text-red-500 text-sm"
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
                                        name="subject"
                                        className="w-full px-4 py-2 rounded-md border bg-background/50 backdrop-blur-sm focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                                        placeholder="Subject"
                                        required
                                        disabled={state.submitting}
                                    />
                                    <ValidationError
                                        prefix="Subject"
                                        field="subject"
                                        errors={state.errors}
                                        className="text-red-500 text-sm"
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
                                        name="message"
                                        className="w-full px-4 py-2 rounded-md border bg-background/50 backdrop-blur-sm min-h-[150px] focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                                        placeholder="Your message"
                                        required
                                        disabled={state.submitting}
                                    ></textarea>
                                    <ValidationError
                                        prefix="Message"
                                        field="message"
                                        errors={state.errors}
                                        className="text-red-500 text-sm"
                                    />
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: 0.9 }}
                                    viewport={{ once: true }}
                                >
                                    {state.errors && state.errors.getAllFieldErrors.length > 0 && (
                                        <div className="mb-4 p-3 bg-red-100 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded text-red-600 dark:text-red-400 text-sm">
                                            There was an error submitting your form. Please check the fields and try again.
                                        </div>
                                    )}

                                    <Button
                                        type="submit"
                                        className="w-full sm:w-auto group relative overflow-hidden"
                                        onMouseEnter={() => handleButtonEnter("Send")}
                                        onMouseLeave={handleButtonLeave}
                                        disabled={state.submitting}
                                    >
                                        <span className="relative z-10 flex items-center">
                                            {state.submitting ? (
                                                <>
                                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                                    Sending...
                                                </>
                                            ) : (
                                                <>
                                                    Send Message
                                                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                                </>
                                            )}
                                        </span>
                                        <span className="absolute inset-0 bg-primary/80 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                                    </Button>
                                </motion.div>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>                  </div>
    )
}

export default Contact