export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center space-x-2">
            <span className="font-semibold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Aditya Kadam
            </span>
            <span className="text-muted-foreground">|</span>
            <span className="text-sm text-muted-foreground">Data Scientist</span>
          </div>
          
          <div className="text-sm text-muted-foreground text-center md:text-right">
            <p>© 2024 Aditya Kadam. All rights reserved.</p>
            <p>Built with React, TypeScript & Tailwind CSS</p>
          </div>
        </div>
      </div>
    </footer>
  )
}