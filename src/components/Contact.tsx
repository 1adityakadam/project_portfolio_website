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
          const code = `# Contact Information\n'''\n  Email: \n  LinkedIn: \n  GitHub: \n'''`
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

      {/* Hidden accessible links for Let's Connect (clickable without showing plain text) */}
      <div className="sr-only">
        <a href="mailto:askadam@iu.edu">askadam@iu.edu</a>
        <a href="https://www.linkedin.com/in/1adityakadam" target="_blank" rel="noopener noreferrer">www.linkedin.com/in/1adityakadam</a>
        <a href="https://github.com/1adityakadam" target="_blank" rel="noopener noreferrer">github.com/1adityakadam</a>
      </div>
    </section>
  )
}