'use client';

import { useState } from 'react';
import iconsData from '@/lib/icons-data.json';

interface IconData {
  name: string;
  svg: string;
}

export function IconsGallery() {
  const [searchTerm, setSearchTerm] = useState('');
  const [copiedIcon, setCopiedIcon] = useState<string | null>(null);

  const icons = iconsData as IconData[];

  const filteredIcons = icons.filter((icon) =>
    icon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCopy = async (icon: IconData) => {
    try {
      await navigator.clipboard.writeText(icon.svg);
      setCopiedIcon(icon.name);
      setTimeout(() => setCopiedIcon(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="space-y-6">
      <div className="sticky top-0 z-10 bg-fd-background pb-4">
        <input
          type="text"
          placeholder="Search icons..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-md px-4 py-2 rounded-lg border border-fd-border bg-fd-card text-fd-foreground placeholder:text-fd-muted-foreground focus:outline-none focus:ring-2 focus:ring-fd-primary"
        />
        <p className="mt-2 text-sm text-fd-muted-foreground">
          {filteredIcons.length} icons found. Click to copy SVG code.
        </p>
      </div>

      <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12 gap-2">
        {filteredIcons.map((icon) => (
          <button
            key={icon.name}
            onClick={() => handleCopy(icon)}
            className="group relative flex flex-col items-center justify-center p-3 rounded-lg border border-fd-border bg-fd-card hover:bg-fd-accent hover:border-fd-primary transition-colors cursor-pointer"
            title={icon.name}
          >
            <div
              className="w-6 h-6 text-fd-foreground"
              dangerouslySetInnerHTML={{ __html: icon.svg.replace(/width="1em" height="1em"/, 'width="100%" height="100%"') }}
            />
            {copiedIcon === icon.name && (
              <div className="absolute inset-0 flex items-center justify-center bg-fd-primary/90 rounded-lg text-fd-primary-foreground text-xs font-medium">
                Copied!
              </div>
            )}
            <span className="sr-only">{icon.name}</span>
          </button>
        ))}
      </div>

      {filteredIcons.length === 0 && (
        <p className="text-center text-fd-muted-foreground py-8">
          No icons found matching "{searchTerm}"
        </p>
      )}
    </div>
  );
}
