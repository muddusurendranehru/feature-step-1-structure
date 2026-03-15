"use client";

import { useState } from "react";

const PLACEHOLDER = "/blog/placeholder.svg";

interface BlogCardImageProps {
  src: string;
  alt: string;
  className?: string;
}

/**
 * Blog card image with fallback to placeholder if the image fails to load (e.g. file not in public/blog/).
 * Uses native <img> so missing files don't trigger Next.js image optimizer 404 errors.
 */
export function BlogCardImage({ src, alt, className = "" }: BlogCardImageProps) {
  const [usePlaceholder, setUsePlaceholder] = useState(false);
  const effectiveSrc = usePlaceholder || !src ? PLACEHOLDER : src;

  return (
    <img
      src={effectiveSrc}
      alt={alt}
      className={`absolute inset-0 h-full w-full object-cover ${className}`}
      onError={() => setUsePlaceholder(true)}
    />
  );
}
