import { Fragment, useMemo, useState } from "react";
import { Play, Square, Check } from "lucide-react";

interface CodeBlockProps {
  code: string;
  executionNumber: number;
  onExecute: () => void;
  className?: string;
  indicatorLeft?: string; // CSS length for outside [ ] position
}

type ExecutionState = "idle" | "playing" | "stopping" | "completed";

export const CodeBlock = ({ code, executionNumber, onExecute, className, indicatorLeft }: CodeBlockProps) => {
  const [state, setState] = useState<ExecutionState>("idle");

  const handleClick = () => {
    if (state !== "idle") return;

    onExecute();
    setState("playing");
    setTimeout(() => {
      setState("stopping");
      setTimeout(() => {
        setState("completed");
      }, 500);
    }, 1000);
  };

  const parsedLines = useMemo(() => {
    const lines = code.split("\n");
    const result: { text: string; className?: string }[] = [];
    let inDocstring = false;

    for (const line of lines) {
      const trimmed = line.trim();
      const isFence = trimmed === "'''";

      if (isFence) {
        // Render the fence line in docstring color and toggle state
        result.push({ text: line, className: "code-string" });
        inDocstring = !inDocstring;
        continue;
      }

      if (!inDocstring && trimmed.startsWith("#")) {
        result.push({ text: line, className: "code-comment" });
      } else if (inDocstring) {
        result.push({ text: line, className: "code-string" });
      } else {
        result.push({ text: line });
      }
    }

    return result;
  }, [code]);

  return (
    <div className={(className ? className : "flex gap-4 group") + " relative"}>
      {/* Indicator outside to the left of the code cell */}
      <div className="absolute top-2 text-muted-foreground font-mono text-sm min-w-[40px] text-center" style={{ left: indicatorLeft ?? '-3rem' }}>
        {state === "completed" ? (
          <div className="flex flex-col items-center gap-1">
            <div className="flex items-center gap-1 text-success">
              <Check className="w-4 h-4" />
              <span className="text-xs">0s</span>
            </div>
            <span className="text-foreground">[{executionNumber}]</span>
          </div>
        ) : (
          <span>[{state === "idle" ? " " : executionNumber}]</span>
        )}
      </div>

      {/* Left sidebar inside the code cell: play button only */}
      <div className="flex flex-col items-center gap-2 pt-3">
        {state !== "completed" && (
          <button onClick={handleClick} disabled={state !== "idle"} className="relative group/btn">
            <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center transition-all hover:bg-secondary">
              {state === "idle" && <Play className="w-5 h-5 text-muted-foreground fill-current pl-0.5" />}
              {state === "playing" && <Play className="w-5 h-5 text-accent fill-current pl-0.5" />}
              {state === "stopping" && <Square className="w-4 h-4 text-accent fill-current" />}
            </div>
            {state === "playing" && <div className="absolute inset-0 rounded-full border-2 border-dashed border-accent animate-spin-slow" />}
            {state === "stopping" && (
              <div className="absolute inset-0">
                <div className="w-full h-full rounded-full border-2 border-transparent border-t-accent animate-spin" />
              </div>
            )}
          </button>
        )}
      </div>

      <div className="flex-1">
        <pre className="m-0">
          <code className="text-sm font-mono text-foreground whitespace-pre-wrap break-words">
            {parsedLines.map((line, idx) => {
              if (line.className === "code-string") {
                // Linkify URLs, mailto, and emails while keeping orange color
                const urlRegex = /(mailto:[^\s]+|https?:\/\/[^\s]+|www\.[^\s]+|github\.com\/[^\s]+|[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g;
                const parts = line.text.split(urlRegex);
                const matches = line.text.match(urlRegex);
                if (!matches) {
                  return <span key={idx} className={line.className}>{line.text}{idx < parsedLines.length - 1 ? "\n" : ""}</span>;
                }
                const rendered: React.ReactNode[] = [];
                for (let i = 0; i < parts.length; i++) {
                  if (i > 0 && matches && matches[i - 1]) {
                    const token = matches[i - 1];
                    const isMailto = token.startsWith("mailto:");
                    const display = isMailto ? token.replace(/^mailto:/, "") : token;
                    const href = isMailto ? token : (token.includes("@") ? `mailto:${token}` : (token.startsWith("http") ? token : `https://${token}`));
                    rendered.push(
                      <a key={`l-${idx}-${i}`} href={href} target={(token.includes("@") || isMailto) ? undefined : "_blank"} rel={(token.includes("@") || isMailto) ? undefined : "noopener noreferrer"} className="code-string underline">
                        {display}
                      </a>
                    );
                  }
                  if (parts[i]) {
                    rendered.push(<Fragment key={`t-${idx}-${i}`}>{parts[i]}</Fragment>);
                  }
                }
                return <span key={idx} className={line.className}>{rendered}{idx < parsedLines.length - 1 ? "\n" : ""}</span>;
              }
              return <span key={idx} className={line.className}>{line.text}{idx < parsedLines.length - 1 ? "\n" : ""}</span>;
            })}
          </code>
        </pre>
      </div>
    </div>
  );
};


