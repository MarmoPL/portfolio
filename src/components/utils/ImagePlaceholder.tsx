'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface ImagePlaceholderProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  fallback?: React.ReactNode;
}

/**
 * Image component with fallback to placeholder gradient
 * Useful while images are being added
 */
export default function ImagePlaceholder({
  src,
  alt,
  width = 400,
  height = 400,
  className = '',
  priority = false,
  fallback,
}: ImagePlaceholderProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className={className}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className="w-full h-full object-cover"
        onError={() => {
          // Image failed to load, fallback is shown
        }}
      />
    </motion.div>
  );
}

/**
 * Gradient placeholder while images load
 */
export function ImageGradientPlaceholder({
  className = '',
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className={`bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl border border-border flex items-center justify-center ${className}`}>
      {children}
    </div>
  );
}
