import { ArrowUp } from "lucide-react"

export const Footer = () =>{
    return(
        <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
            {" "}
            <p className="text-sm texte-muted-foreground"> &copy; {new Date().getFullYear()} AngelPichardo.co . All rights reserved</p>
            <a href="#hero" className="text-blue-400">
                <ArrowUp />

            </a>
        </footer>
    )
}