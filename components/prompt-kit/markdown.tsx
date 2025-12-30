"use client"

import { marked } from "marked"
import { useMemo } from "react"

interface MarkdownProps {
  children: string
  className?: string
}

export function Markdown({ children, className }: MarkdownProps) {
  const html = useMemo(() => {
    return marked.parse(children) as string
  }, [children])

  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{ __html: html }}
      style={{
        ['--inline-code-style' as string]: 'transparent'
      }}
    />
  )
}

export const inlineCodeStyles = `
  code:not(pre code) {
    background-color: transparent;
    padding: 0.125rem 0.375rem;
    border-radius: 0.375rem;
    border: 1px solid #d1d5db;
    font-size: 0.875em;
    font-weight: 500;
    color: #1f2937;
  }
  
  .dark code:not(pre code) {
    background-color: transparent;
    border-color: #4b5563;
    color: #f3f4f6;
  }
`
