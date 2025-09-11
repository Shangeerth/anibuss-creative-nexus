import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const services = [
    { name: 'Web Development', path: '/services/web-development' },
    { name: 'Custom Websites', path: '/services/custom-websites' },
    { name: 'Digital Illustrations', path: '/services/illustrations' },
    { name: 'Music & Audio', path: '/services/music' },
    { name: 'Creative Services', path: '/services/creative' },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      href: '#',
      label: 'Facebook',
      hoverClass: 'hover:bg-[#1877F3] hover:text-white',
    },
    {
      icon: Instagram,
      href: '#',
      label: 'Instagram',
      hoverClass: 'hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] hover:text-white',
    },
    {
      icon: Twitter,
      href: '#',
      label: 'Twitter',
      hoverClass: 'hover:bg-[#1DA1F2] hover:text-white',
    },
    {
      icon: Linkedin,
      href: '#',
      label: 'LinkedIn',
      hoverClass: 'hover:bg-[#0077B5] hover:text-white',
    },
  ];

  return (
    <footer className="bg-background-secondary border-t border-border/30">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 gradient-brand rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">AB</span>
              </div>
              <span className="gradient-text text-xl font-poppins font-bold">
                Anibuss
              </span>
            </Link>
            <p className="text-muted-foreground leading-relaxed">
              A Creative Digital Agency transforming ideas into stunning digital experiences. 
              Got an idea? Consider it done.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <div key={social.label} className="relative group">
                  <a
                    href={social.href}
                    aria-label={social.label}
                    className={`w-10 h-10 glass-card rounded-lg flex items-center justify-center transition-all duration-300 hover-lift ${social.hoverClass}`}
                  >
                    <social.icon className="h-4 w-4" />
                  </a>
                  <span className="absolute left-1/2 -bottom-8 -translate-x-1/2 px-2 py-1 rounded bg-black text-white text-xs opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300 whitespace-nowrap">
                    {social.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-poppins font-semibold text-foreground mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-secondary transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-poppins font-semibold text-foreground mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-muted-foreground hover:text-secondary transition-colors duration-300"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-poppins font-semibold text-foreground mb-6">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 glass-card rounded-lg flex items-center justify-center">
                  <Mail className="h-4 w-4 text-secondary" />
                </div>
                <span className="text-muted-foreground text-sm">info@anibuss.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 glass-card rounded-lg flex items-center justify-center">
                  <Phone className="h-4 w-4 text-secondary" />
                </div>
                <span className="text-muted-foreground text-sm">+94 (077) 194-5267</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 glass-card rounded-lg flex items-center justify-center">
                  <MapPin className="h-4 w-4 text-secondary" />
                </div>
                <span className="text-muted-foreground text-sm">Batticaloa, SriLanka</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/30 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2025 Anibuss. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="text-muted-foreground hover:text-secondary text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-muted-foreground hover:text-secondary text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;