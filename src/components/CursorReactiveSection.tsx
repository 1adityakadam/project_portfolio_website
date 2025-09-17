import { useEffect, useRef, ReactNode } from "react"

interface CursorReactiveSectionProps {
  children: ReactNode
  className?: string
  id?: string
}

export function CursorReactiveSection({ children, className = "", id }: CursorReactiveSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return
      
      const rect = sectionRef.current.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 100
      const y = ((e.clientY - rect.top) / rect.height) * 100
      
      sectionRef.current.style.background = `
        radial-gradient(circle at ${x}% ${y}%, 
          hsl(var(--primary) / 0.05) 0%, 
          transparent 50%),
        hsl(var(--background))
      `
    }

    const section = sectionRef.current
    if (section) {
      section.addEventListener('mousemove', handleMouseMove)
      return () => section.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div 
      ref={sectionRef}
      className={`relative overflow-hidden ${className}`}
      id={id}
      style={{
        background: 'hsl(var(--background))'
      }}
    >
      {children}
    </div>
  )
}