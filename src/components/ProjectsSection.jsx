import { ExternalLink, Github, ArrowRight} from "lucide-react";

const projects = [
    {
        id: 1,
        title: "LLM Web Parsing Scrapper ",
        description: "Designed to extract and analyze data from any website and leverages a FastAPI backend for RESTful API endpoints, and an integrated Large Language Model (LLM) powered by Ollama",
        image: "/projects/Project1.png",
        tags: ["Python", "LLM Ollama", "FastAPI"],
        demoUrl: "#",
        githubUrl: "https://github.com/Angel10301/AiChatBotP",
    },
    {
        id: 2,
        title: "Computer Vision Tracking",
        description: "A Computer Vision applicaiton that tracks pose landmarks on a model and can be pinpointed to exact ones that we want to track and follow.",
        image: "/projects/Project2.png",
        tags: ["Python", "openCV", "mediapipe"],
        demoUrl: "#",
        githubUrl: "https://github.com/Angel10301/Ai-foundation",
    },
    {
        id: 3,
        title: "Underconstruction",
        description: "desc",
        image: "path to image",
        tags: ["skills", "used", "whatever"],
        demoUrl: "#",
        githubUrl: "#",
    },   
]

export const ProjectsSection = () => {
    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> Featured 
                <span className="text-blue-400"> Projects</span>
            </h2>
            <p className=" text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Here are some of my recent projects. Each project was carefully
            crafted with attention to detail, performence, and user experience. </p>
            <div className="grid grid-col:1 md:grid-cols-2 lg:grid-cols-3 gap-9">
                 {projects.map((projects, key)  => (
                    <div key = {key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                        <div className="h-48 overflow-hidden">
                            <img src={projects.image} alt={projects.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 border"/>
                        </div>
                        <div className="p-6" > 
                            <div className="flex flex-wrap gap-2 mb-4" >
                                {projects.tags.map((tags) => (
                                    <span className="px-2 py-1 text-xs border font-medium rounded-full bg-secondary text-secondary-foreground ">{tags} </span>
                                ))}

                        
                        </div>
                        <h3 className="text-xl font-semibold mb-1 text-blue-400"> {projects.title}</h3>
                        <p className=" text-muted-foreground text-sm mb-4">
                        {projects.description}
                        </p>
                        <div className=" flex justify-between items-center">
                            <div className="flex space-x-3">
                                <a href= {projects.demoUrl} 
                                target="_blank"
                                className="text-foreground/80 hover:text-blue-400 transition-colors duration-300">
                                    <ExternalLink/>
                                    </a>
                                <a href= {projects.GithubUrl} 
                                target="_blank"
                                className="text-foreground/80 hover:text-blue-400 transition-colors duration-300">
                                    <Github/>
                                </a>
                            </div>
                         </div>
                    </div>
                </div>
                 ))}
                </div>
                <div className="text-center mt-12">
                    <a className="cosmic-button-git w-fit flex items-center mx-auto gap-2" href="https://github.com/Angel10301" target="https://github.com/Angel10301">
                        Check My Github out! <ArrowRight size = {16} />
                    </a>

                </div>
        </div>
    </section>;
};