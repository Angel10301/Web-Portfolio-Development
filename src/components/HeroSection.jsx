import { ArrowDown } from "lucide-react"

export const HeroSection = () => {
    return <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center justify-center px-4">
        <div className="container max-w-4xl mx-auto text-center z-10">
            <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                    <span className="opacity-0 animate-fade-in">Hi I'm </span>
                    <span className="text-primary opacity-0 animate-fade-in-delay-1">Angel</span>
                    <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2"> Pichardo</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                    As a passionate computer engineering professional, I bring a dynamic skill set in both hardware and software domains, with a strong focus on embedded systems and robotics. My hands-on experience includes designing and optimizing microcontrollers and real-time processing systems, ensuring seamless hardware communication. I am also well-versed in web development, with proficiency in creating robust applications using modern frameworks and technologies. My true passion lies in artificial intelligence, ignited during my final undergraduate semester through immersive Machine Learning and AI courses using Python and R. These experiences led me to explore advanced computer vision techniques, leveraging libraries like TensorFlow, OpenCV, and Scikit-Image to build innovative solutions with real-world impact.
                </p>
                <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                    <a href="#projects" className="cosmic-button">
                        View My Work!
                    </a>
                </div>
            </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce"> 
        <span className="text-sm text-muted-foreground mb-2" > Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary"/>
        </div>
    </section>
}