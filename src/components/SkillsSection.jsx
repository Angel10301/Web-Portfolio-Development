import { useState } from "react"
import { cn } from "../lib/utils"

const skills = [
    //Programming Language 
    {name:"Python", level: 85, category:"Coding Languages"},
    {name:"React", level: 85, category:"Coding Languages"},
    {name:"JavaScript", level: 85, category:"Coding Languages"},
    {name:"HTML/CSS", level: 75, category:"Coding Languages"},
    {name:"R", level: 75, category:"Coding Languages"},
    {name:"SQL", level: 50, category:"Coding Languages"},
    {name:"C++", level: 40, category:"Coding Languages"},
    
    //Backend and Frameworks
    {name:"Node.js", level: 85, category:"Frameworks"},
    {name:"PyTorch", level: 85, category:"frmework"},
    {name:"TensorFlow", level: 80, category:"Frameworks"},
    {name:"MediaPipe", level: 83, category:"Frameworks"},
    {name:"OpenCV", level: 75, category:"Frameworks"},
    {name:"React Native", level: 75, category:"Frameworks"},
    {name:"Pandas", level: 73, category:"Frameworks"},
    {name:"Scikit-image", level: 80, category:"Frameworks"},
    {name:"FastAPI", level: 65, category:"backend"},
    {name:"KiCad", level: 65, category:"Frameworks"},
    
    //Tools
    {name:"Git/Github", level: 90, category:"Tools"},
    {name:"VS Code", level: 90, category:"Tools"},
    {name:"Linux", level: 80, category:"Tools"},
    {name:"Anaconda", level: 70, category:"Tools"},
    {name:"Docker", level: 65, category:"Tools"},
]

const categories = ["all", "Coding Languages", "Frameworks", "Tools"]
export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all")

    const filteredSkills = skills.filter((skill) => activeCategory === "all" || skill.category === activeCategory);
    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30"> 
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center" >
                My <span className="text-primary"> Skills </span>
            </h2>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category, key) => (
                    <button 
                    key = {key} 
                    onClick={() => setActiveCategory(category)} 
                    className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                        activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bd-secondary"
                    )}>
                        {category}
                    </button>
                ))}

            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSkills.map((skill, key) => (
                    <div key = {key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                    <div className="text-left mb-4" >
                        <h3 className="font-semibold text-lg"> {skill.name}</h3> 
                    </div>
                    <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                    <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out" 
                    style={{width: skill.level + "% "}}/>
                    </div>
                    <div className="text-right mt-1">
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                </div>
                ))}

            </div>
        </div>
        </section>
    )
}