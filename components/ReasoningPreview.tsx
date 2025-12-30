"use client"

import {
  Reasoning,
  ReasoningContent,
  ReasoningTrigger,
} from "@/components/prompt-kit/reasoning"
import { useState } from "react"

const simulateMarkdownStream = async (
  setText: (text: string) => void,
  setIsStreaming: (streaming: boolean) => void
) => {
  const reasoning = `# Solving: Square Root of 144

## Step 1: Problem Analysis
I need to find a number that, when **multiplied by itself**, equals 144.

## Step 2: Testing Values
- \`10² = 100\` ❌ (too small)
- \`13² = 169\` ❌ (too large) 
- \`12² = 144\` ✅ (perfect!)

## Step 3: Verification
\`\`\`
12 × 12 = 144 ✓
\`\`\`

> **Answer:** The square root of 144 is **12**.`

  setIsStreaming(true)
  setText("")

  for (let i = 0; i <= reasoning.length; i++) {
    setText(reasoning.slice(0, i))
    await new Promise((resolve) => setTimeout(resolve, 20))
  }

  setIsStreaming(false)
}

export default function ReasoningPreview() {
  const [reasoningText, setReasoningText] = useState("")
  const [isStreaming, setIsStreaming] = useState(false)

  const handleGenerateReasoning = () => {
    simulateMarkdownStream(setReasoningText, setIsStreaming)
  }

  return (
    <div className="flex w-full flex-col items-start gap-4">
      <button
        onClick={handleGenerateReasoning}
        disabled={isStreaming}
        className="px-4 py-2 text-sm font-medium rounded-md border border-fd-border bg-fd-background hover:bg-fd-muted transition-colors disabled:opacity-50"
      >
        {isStreaming ? "Thinking..." : "Generate Reasoning"}
      </button>

      <Reasoning isStreaming={isStreaming}>
        <ReasoningTrigger>Show AI reasoning</ReasoningTrigger>
        <ReasoningContent
          className="ml-2 border-l-2 border-l-slate-200 px-2 pb-1 dark:border-l-slate-700"
        >
          {reasoningText}
        </ReasoningContent>
      </Reasoning>
    </div>
  )
}
