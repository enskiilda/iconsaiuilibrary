'use client';

import { useState } from 'react';

interface CodeCopyProps {
  code: string;
}

export function CodeCopy({ code }: CodeCopyProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={handleCopy}
        className="absolute right-2 top-2 px-3 py-1.5 text-xs font-medium rounded-md bg-fd-primary text-fd-primary-foreground hover:bg-fd-primary/90 transition-colors"
      >
        {copied ? 'Copied!' : 'Copy Code'}
      </button>
      <pre className="overflow-x-auto p-4 pt-12 rounded-lg bg-fd-secondary text-fd-secondary-foreground text-sm">
        <code>{code}</code>
      </pre>
    </div>
  );
}
