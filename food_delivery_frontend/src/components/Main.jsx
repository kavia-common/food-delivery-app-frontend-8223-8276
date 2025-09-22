import React from 'react';

/**
 * PUBLIC_INTERFACE
 * Main content area with static placeholders for restaurants, cart, and order flow.
 */
export default function Main() {
  return (
    <main className="main" role="main">
      {/* Restaurants Section */}
      <section className="surface section" aria-labelledby="restaurants-heading">
        <div className="section-header">
          <div>
            <h2 id="restaurants-heading" className="section-title">Featured Restaurants</h2>
            <div className="section-subtitle">Discover curated picks in your area</div>
          </div>
          <button className="btn" aria-label="View all restaurants">View All</button>
        </div>
        <div className="card-grid">
          {['Rose Garden', 'Amber Bites', 'Emerald Bowl'].map((name, idx) => (
            <article className="card" key={name} aria-label={`${name} card`}>
              <div className="card-media" aria-hidden="true" />
              <div className="card-body">
                <div className="card-title">{name}</div>
                <div className="card-meta">• Pastel ambiance • 30-40 min • $$</div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Cart + Order Flow Duo */}
      <section className="duo">
        <div className="surface section" aria-labelledby="cart-heading">
          <div className="section-header">
            <div>
              <h2 id="cart-heading" className="section-title">Your Cart</h2>
              <div className="section-subtitle">Static preview — no items added yet</div>
            </div>
            <span className="badge badge--primary">0 items</span>
          </div>
          <div style={{ color: '#6B7280', fontSize: 14 }}>
            Add items from restaurants to see them here.
          </div>
        </div>

        <div className="surface section" aria-labelledby="order-heading">
          <div className="section-header">
            <div>
              <h2 id="order-heading" className="section-title">Order Flow</h2>
              <div className="section-subtitle">Preview of steps</div>
            </div>
            <span className="badge badge--secondary">Preview</span>
          </div>
          <ol style={{ margin: 0, paddingLeft: 18, color: '#6B7280' }}>
            <li>Choose Restaurant</li>
            <li>Select Items</li>
            <li>Review Cart</li>
            <li>Delivery Details</li>
            <li>Payment</li>
            <li>Confirmation</li>
          </ol>
        </div>
      </section>
    </main>
  );
}
