import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/ThemeToggle"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="border-4 border-primary rounded-lg px-4 py-1">
              <span className="text-2xl font-black text-primary font-courier tracking-wider">
                ADITYA KADAM
              </span>
            </div>
            <span className="text-xl font-courier">.ipynb</span>
          </div>

          <div className="flex items-center space-x-2">
          <Button variant="ghost" size="sm" asChild>
            <a href="https://github.com/1adityakadam" target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </a>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <a href="https://www.linkedin.com/in/1adityakadam/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-4 w-4" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <a href="mailto:askadam@iu.edu">
              <Mail className="h-4 w-4" />
              <span className="sr-only">Email</span>
            </a>
          </Button>
          <ThemeToggle />
          </div>
        </div>
        
        {/* Navigation Menu */}
        <div className="flex items-center gap-6 text-sm font-courier border-b border-border pb-2">
          <a href="#hero" className="hover:text-primary">About</a>
          <a href="#experience" className="hover:text-primary">Experience</a>
          <a href="#projects" className="hover:text-primary">Projects</a>
          <a href="#skills" className="hover:text-primary">Skills</a>
          <a href="#education" className="hover:text-primary">Education</a>
          <a href="https://medium.com/@1adityakadam" target="_blank" rel="noopener noreferrer" className="hover:text-primary">Medium Blog Posts</a>
        </div>
      </div>
    </header>
  )
}
