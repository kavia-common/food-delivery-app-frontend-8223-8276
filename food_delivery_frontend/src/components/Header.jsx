import React from 'react';

/**
 * PUBLIC_INTERFACE
 * Header component rendering brand and minimal meta details.
 */
export default function Header() {
  return (
    <header className="app-header" role="banner">
      <div className="header-inner">
        <div className="brand" aria-label="App brand">
          <div className="brand-mark" aria-hidden="true" />
          <div className="brand-title">OceanEats</div>
        </div>
        <div className="header-meta" aria-label="Header meta info">
          <span className="badge badge--primary">Elegant</span>
          <span className="badge badge--secondary">Food Delivery</span>
        </div>
      </div>
    </header>
  );
}
