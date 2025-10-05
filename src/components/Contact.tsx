import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Send } from "lucide-react"
import { CodeBlock } from "@/components/CodeBlock"

export function Contact() {
  return (
    <section id="contact" className="py-12 px-4 anchor-offset">
      <div className="max-w-7xl mx-auto">
        {/* Text cell - Section heading */}
        <div className="colab-text-cell mb-4">
          <h2 className="text-3xl font-bold">Let's Connect</h2>
        </div>

        {/* Code cell - Contact information */}
        {(() => {
          const code = `# Contact Information\n'''\n  Email: askadam.iu.edu\n  LinkedIn: www.linkedin.com/in/1adityakadam\n  GitHub: github.com/1adityakadam\n'''`
          return (
            <CodeBlock
              className="colab-code-cell ml-12 flex gap-4 group"
              code={code}
              executionNumber={1}
              onExecute={() => {}}
            />
          )
        })()}
      </div>

      
    </section>
  )
}