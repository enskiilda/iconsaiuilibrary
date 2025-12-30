"use client"

import type React from "react"
import { IconPlus } from "@tabler/icons-react"
import { useRef, useState } from "react"

function cn(...inputs: (string | undefined | null | false)[]) {
  return inputs.filter(Boolean).join(" ")
}

export default function ChatInput() {
  const [message, setMessage] = useState("")
  const [isExpanded, setIsExpanded] = useState(false)
  const [isGenerating, setIsGenerating] = useState(false)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (message.trim()) {
      setIsGenerating(true)
      setMessage("")
      setIsExpanded(false)

      if (textareaRef.current) {
        textareaRef.current.style.height = "auto"
      }

      setTimeout(() => {
        setIsGenerating(false)
      }, 3000)
    }
  }

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value)

    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
    }

    setIsExpanded(e.target.value.length > 100 || e.target.value.includes("\n"))
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSubmit(e as any)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="group/composer w-full">
      <div
        className={cn(
          "w-full max-w-2xl mx-auto bg-transparent dark:bg-muted/50 cursor-text overflow-clip bg-clip-padding p-2.5 shadow-lg border border-border transition-all duration-200",
          isExpanded
            ? "rounded-3xl grid grid-cols-1 grid-rows-[auto_1fr_auto]"
            : "rounded-[28px] grid grid-cols-[auto_1fr_auto] grid-rows-[auto_1fr_auto]",
        )}
        style={{
          gridTemplateAreas: isExpanded
            ? "'header' 'primary' 'footer'"
            : "'header header header' 'leading primary trailing' '. footer .'",
        }}
      >
        <div
          className={cn(
            "flex min-h-14 items-center overflow-x-hidden px-1.5",
            isExpanded ? "px-2 py-1 mb-0" : "-my-2.5",
          )}
          style={{ gridArea: "primary" }}
        >
          <div className="flex-1 overflow-auto max-h-52">
            <textarea
              ref={textareaRef}
              value={message}
              onChange={handleTextareaChange}
              onKeyDown={handleKeyDown}
              placeholder="Ask anything"
              className="border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content w-full bg-transparent text-base outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm min-h-0 resize-none rounded-none border-0 p-0 focus-visible:ring-0 focus-visible:ring-offset-0 scrollbar-thin dark:bg-transparent"
              rows={1}
            />
          </div>
        </div>

        <div className={cn("flex", isExpanded && "hidden")} style={{ gridArea: "leading" }}>
          <button
            type="button"
            onClick={() => {}}
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 size-9 h-9 w-9 rounded-full hover:bg-accent"
          >
            <IconPlus className="size-6 text-muted-foreground" />
          </button>
        </div>

        <div className="flex items-center gap-2" style={{ gridArea: isExpanded ? "footer" : "trailing" }}>
          <div className="ms-auto flex items-center gap-1.5">
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground hover:bg-primary/90 size-9 h-9 w-9 rounded-full"
            >
              {isGenerating ? (
                <svg viewBox="0 0 24 24" fill="currentColor" className="size-5">
                  <path
                    d="M8.7587 3H15.2413C16.0463 2.99999 16.7106 2.99998 17.2518 3.0442C17.8139 3.09012 18.3306 3.18868 18.816 3.43598C19.5686 3.81947 20.1805 4.43139 20.564 5.18404C20.8113 5.66938 20.9099 6.18608 20.9558 6.74818C21 7.28937 21 7.95372 21 8.75868V15.2413C21 16.0463 21 16.7106 20.9558 17.2518C20.9099 17.8139 20.8113 18.3306 20.564 18.816C20.1805 19.5686 19.5686 20.1805 18.816 20.564C18.3306 20.8113 17.8139 20.9099 17.2518 20.9558C16.7106 21 16.0463 21 15.2413 21H8.75868C7.95372 21 7.28937 21 6.74818 20.9558C6.18608 20.9099 5.66938 20.8113 5.18404 20.564C4.43139 20.1805 3.81947 19.5686 3.43598 18.816C3.18868 18.3306 3.09012 17.8139 3.0442 17.2518C2.99998 16.7106 2.99999 16.0463 3 15.2413V8.75868C2.99999 7.95373 2.99998 7.28936 3.0442 6.74818C3.09012 6.18608 3.18868 5.66938 3.43598 5.18404C3.81947 4.43139 4.43139 3.81947 5.18404 3.43598C5.66938 3.18868 6.18608 3.09012 6.74818 3.0442C7.28936 2.99998 7.95375 2.99999 8.7587 3Z"
                    fill="currentColor"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-up-icon lucide-arrow-up size-6"
                >
                  <path d="m5 12 7-7 7 7" />
                  <path d="M12 19V5" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </form>
  )
}
