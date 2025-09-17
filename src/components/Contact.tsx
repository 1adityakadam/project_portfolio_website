import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Send } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Let's Connect</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on data science projects or discuss opportunities? I'd love to hear from you.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-border/50">
            <CardHeader>
              <CardTitle className="text-center text-2xl">Get In Touch</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button variant="outline" size="lg" className="h-16 flex-col gap-2" asChild>
                  <a href="mailto:askadam@iu.edu" className="group">
                    <Mail className="w-6 h-6 group-hover:text-primary transition-colors" />
                    <span className="text-sm">Email Me</span>
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="h-16 flex-col gap-2" asChild>
                  <a href="https://www.linkedin.com/in/1adityakadam/" target="_blank" rel="noopener noreferrer" className="group">
                    <Linkedin className="w-6 h-6 group-hover:text-primary transition-colors" />
                    <span className="text-sm">LinkedIn</span>
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="h-16 flex-col gap-2" asChild>
                  <a href="https://github.com/1adityakadam" target="_blank" rel="noopener noreferrer" className="group">
                    <Github className="w-6 h-6 group-hover:text-primary transition-colors" />
                    <span className="text-sm">GitHub</span>
                  </a>
                </Button>
              </div>
              
              <div className="text-center">
                <p className="text-muted-foreground mb-4">
                  Currently pursuing my Master's in Data Science at Indiana University Bloomington
                </p>
                <Button size="lg" className="group" asChild>
                  <a href="mailto:askadam@iu.edu">
                    Start a Conversation
                    <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}