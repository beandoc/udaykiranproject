import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import * as React from 'react';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Helper to calculate reading time
const countWords = (node: React.ReactNode): number => {
    if (typeof node === 'string') {
        return node.trim().split(/\s+/).length;
    }
    if (React.isValidElement(node) && node.props.children) {
        return React.Children.toArray(node.props.children).reduce((acc, child) => acc + countWords(child), 0);
    }
    if (Array.isArray(node)) {
        return node.reduce((acc, child) => acc + countWords(child), 0);
    }
    return 0;
};

// Words per minute
const WPM = 200; 

export const calculateReadingTime = (content: React.ReactNode) => {
    const wordCount = countWords(content);
    const time = Math.ceil(wordCount / WPM);
    return Math.max(1, time); // Ensure at least 1 minute
}
