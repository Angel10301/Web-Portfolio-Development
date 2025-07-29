import { Briefcase, Code, User } from "lucide-react"
export const AboutSection = () => {
    return( 
    <section id="about" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary"> Me</span>
                </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="font-bold text-xl"> Passionate Software Developer</h3>
                    <p className="text-muted-foreground">
                        I bring a robust blend of expertise in both hardware and software domains, cultivated through a rigorous academic journey and hands-on experience. My hardware proficiency encompasses embedded systems and robotics, with a deep understanding of microcontrollers, real-time processing, and system-level communication protocols. On the software front, I excel as a full-stack developer, adept in modern web technologies such as HTML, CSS, and React.js, alongside a strong command of databases, APIs, server-side frameworks, and core web concepts like HTTP requests and responses. Courses like Algorithm Analysis and Software Engineering have sharpened my critical thinking and problem-solving skills, fueling my drive to innovate in these dynamic fields. My passion for artificial intelligence was started during my final undergraduate semester through transformative courses in Machine Learning and AI, where I honed my skills in R and Python. These experiences inspired me to delve into advanced AI techniques, experimenting with libraries like TensorFlow, OpenCV, and Scikit-Image to develop computer vision solutions. With a relentless curiosity and commitment to excellence, I am eager to contribute to cutting-edge AI and engineering advancements, delivering impactful solutions that bridge technology and real-world challenges.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">
                            Get in Touch
                        </a>
                        <a href="public\resume\AngelPichardoResume2025.pdf" target="public\resume\AngelPichardoResume2025.pdf" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                            Download CV
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4 ">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className=" h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-bold text-lg">Software Engineering</h4>
                                <p className="text-muted-foreground">
                                    Developing robust, scalable software solutions by leveraging modern frameworks, optimizing performance, and ensuring seamless user experiences across diverse platforms
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4 ">
                            <div className="p-3 rounded-full bg-primary/10">
                                <User className=" h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-bold text-lg">Algorithms </h4>
                                <p className="text-muted-foreground">
                                    Engineered software solutions using advanced algorithmic techniques, integrating them seamlessly with modern frameworks to improve system efficiency.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4 ">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Briefcase className=" h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-bold text-lg">Prompt Engineering</h4>
                                <p className="text-muted-foreground">
                                    Leveraged prompt engineering expertise to maximize AI model output quality, delivering tailored responses that significantly enhanced project outcomes and user satisfaction.
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        </div>
    </section>
    )
}