import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Main from '../components/Main';
import Footer from '../components/Footer';

/**
 * PUBLIC_INTERFACE
 * Landing page composing the basic app layout.
 */
export default function Landing() {
  return (
    <div className="app-shell">
      <Header />
      <div className="app-content">
        <Sidebar />
        <Main />
      </div>
      <Footer />
    </div>
  );
}
