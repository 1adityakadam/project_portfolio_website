import { useEffect, useRef, useState } from "react";

interface InteractiveTitleProps {
  text: string;
  className?: string;
}

export function InteractiveTitle({ text, className }: InteractiveTitleProps) {
  const [isCodeStyle, setIsCodeStyle] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsCodeStyle(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleDoubleClick = () => setIsCodeStyle(true);

  return (
    <div ref={containerRef} onDoubleClick={handleDoubleClick} className={className}>
      {isCodeStyle ? (
        <span className="text-primary text-2xl font-bold"># {text}</span>
      ) : (
        <span className="text-3xl font-bold">{text}</span>
      )}
    </div>
  );
}


