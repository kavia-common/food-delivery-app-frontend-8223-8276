import React from 'react';

/**
 * PUBLIC_INTERFACE
 * Footer with application info and theme hint.
 */
export default function Footer() {
  return (
    <footer className="app-footer" role="contentinfo">
      © {new Date().getFullYear()} OceanEats · Ocean Professional Elegant Theme · Static preview
    </footer>
  );
}
