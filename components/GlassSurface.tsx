import React from 'react';

type GlassTier = 'whisper' | 'present' | 'prominent';

interface GlassSurfaceProps {
  tier?: GlassTier;
  children: React.ReactNode;
  className?: string;
}

/**
 * Black Glass GlassSurface
 * Functional only. Glass must clarify hierarchy, focus, boundary or state.
 * Uses CSS custom properties from the token system.
 */
export function GlassSurface({
  tier = 'present',
  children,
  className = '',
}: GlassSurfaceProps) {
  const tierClass = `glass-${tier}`;

  return (
    <div className={`glass-surface ${tierClass} ${className}`.trim()}>
      {children}
    </div>
  );
}

// Example usage (copy-paste ready)
// <GlassSurface tier="prominent">
//   <p>Content that needs focus or boundary.</p>
// </GlassSurface>
