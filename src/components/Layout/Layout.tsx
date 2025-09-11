import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import WhatsAppFloat from './WhatsAppFloat';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
  <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      <Navigation />
      <main className="pt-16 flex-1">
        {children}
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Layout;