import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/ThemeToggle"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-2">
          {/* Logo placeholder - removed name */}
        </div>
        
        <nav className="hidden md:flex items-center space-x-6 absolute left-1/2 transform -translate-x-1/2" style={{ marginLeft: '35px' }}>
          <a href="#hero" className="text-sm font-medium hover:text-primary transition-colors">
            About
          </a>
          <a href="#experience" className="text-sm font-medium hover:text-primary transition-colors">
            Experience
          </a>
          <a href="#projects" className="text-sm font-medium hover:text-primary transition-colors">
            Projects
          </a>
          <a href="#skills" className="text-sm font-medium hover:text-primary transition-colors">
            Skills
          </a>
          <a href="#education" className="text-sm font-medium hover:text-primary transition-colors">
            Education
          </a>
        </nav>

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
    </header>
  )
}
