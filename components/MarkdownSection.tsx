'use client';

import { Preview } from './ui/Preview';
import MarkdownPreview from './MarkdownPreview';

export function MarkdownSection() {
  return (
    <Preview>
      <MarkdownPreview />
    </Preview>
  );
}
