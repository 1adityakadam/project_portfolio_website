import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.className = 'glass-cursor';
    document.body.appendChild(cursor);

    const handleMouseMove = (e: MouseEvent) => {
      cursor.style.left = e.clientX - 10 + 'px';
      cursor.style.top = e.clientY - 10 + 'px';
    };

    const handleMouseEnter = () => {
      cursor.style.transform = 'scale(1.2)';
    };

    const handleMouseLeave = () => {
      cursor.style.transform = 'scale(1)';
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      if (cursor.parentNode) {
        cursor.parentNode.removeChild(cursor);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <div className="snap-section">
          <Hero />
        </div>
        <div className="snap-section">
          <Experience />
        </div>
        <div className="snap-section">
          <Projects />
        </div>
        <div className="snap-section">
          <Skills />
        </div>
        <div className="snap-section">
          <Education />
        </div>
        <div className="snap-section">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
