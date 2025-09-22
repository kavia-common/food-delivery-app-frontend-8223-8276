import React from 'react';

/**
 * PUBLIC_INTERFACE
 * Sidebar with static navigation placeholders (no interactions yet).
 */
export default function Sidebar() {
  return (
    <aside className="sidebar surface" role="complementary" aria-label="Sidebar navigation">
      <div className="nav-title">Explore</div>
      <div className="nav-list">
        <div className="nav-pill nav-pill--accent" aria-label="Home link">Home</div>
        <div className="nav-pill" aria-label="Restaurants link">Restaurants</div>
        <div className="nav-pill" aria-label="Cuisines link">Cuisines</div>
        <div className="nav-pill" aria-label="Deals link">Deals</div>
        <div className="nav-pill" aria-label="About link">About</div>
      </div>
    </aside>
  );
}
