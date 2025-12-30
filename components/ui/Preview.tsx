'use client';

import { ReactNode } from 'react';

interface PreviewProps {
  children: ReactNode;
  className?: string;
}

export function Preview({ children, className }: PreviewProps) {
  return (
    <div className={`rounded-xl border border-fd-border overflow-hidden bg-fd-card ${className || ''}`}>
      <div className="p-8 flex items-center justify-center min-h-[200px] bg-fd-background">
        {children}
      </div>
    </div>
  );
}
