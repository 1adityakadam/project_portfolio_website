import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Send } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Text cell - Section heading */}
        <div className="colab-text-cell mb-4">
          <h2 className="text-3xl font-bold">Let's Connect</h2>
        </div>

        {/* Code cell - Contact information */}
        <div className="colab-code-cell ml-12">
          <div className="space-y-3">
            <div className="code-comment text-lg font-bold">
              # Contact Information
            </div>
            <div className="code-string">
              '''
            </div>
            <div className="pl-4 space-y-3">
              <a
                href="mailto:askadam@iu.edu"
                className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span className="font-semibold">Email:</span>
                <span>askadam@iu.edu</span>
              </a>
              <a
                href="https://www.linkedin.com/in/1adityakadam/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span className="font-semibold">LinkedIn:</span>
                <span>/in/1adityakadam</span>
              </a>
              <a
                href="https://github.com/1adityakadam"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
              >
                <Github className="w-5 h-5" />
                <span className="font-semibold">GitHub:</span>
                <span>/1adityakadam</span>
              </a>
            </div>
            <div className="code-string">
              '''
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}