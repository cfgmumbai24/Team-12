import React from 'react';
import '../styles/Layout.css';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <header className="header">
        EKlavya
      </header>
      <main className="content">
        {children}
      </main>
      <footer className="footer">
        Contact us at <a href="mailto:contact@eklavya.com">contact@eklavya.com</a> | Phone: 123-456-7890
      </footer>
    </div>
  );
};

export default Layout;
