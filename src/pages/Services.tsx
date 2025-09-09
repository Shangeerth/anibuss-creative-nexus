import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Heart, Palette, Music, Plus, CheckCircle } from 'lucide-react';
import webDevImage from '../assets/web-dev-service.jpg';
import customWebsiteImage from '../assets/custom-websites-service.jpg';
import illustrationsImage from '../assets/illustrations-service.jpg';
import musicImage from '../assets/music-service.jpg';
import creativeImage from '../assets/creative-services.jpg';

const Services = () => {
  const services = [
    {
      title: 'Web Design & Development',
      description: 'Modern, responsive, and interactive websites optimized for speed and SEO.',
      features: ['Responsive Design', 'SEO Optimization', 'Fast Loading', 'Interactive Animations'],
      icon: Code,
      image: webDevImage,
      path: '/services/web-development',
      color: 'from-gradient-start to-gradient-end',
      price: 'Starting at $2,500',
    },
    {
      title: 'Custom Birthday & Proposal Websites',
      description: 'Personalized, animated websites for special occasions with galleries, countdowns, music.',
      features: ['Personalized Design', 'Photo Galleries', 'Countdown Timers', 'Background Music'],
      icon: Heart,
      image: customWebsiteImage,
      path: '/services/custom-websites',
      color: 'from-pink-400 to-red-500',
      price: 'Starting at $800',
    },
    {
      title: 'Digital Drawing & Illustrations',
      description: 'Custom illustrations for personal gifts or branding with multiple artistic styles.',
      features: ['Multiple Styles', 'High Resolution', 'Commercial License', 'Revisions Included'],
      icon: Palette,
      image: illustrationsImage,
      path: '/services/illustrations',
      color: 'from-orange-400 to-pink-500',
      price: 'Starting at $150',
    },
    {
      title: 'Musical & Audio Creations',
      description: 'Custom jingles, tracks, or songs with professional sound quality.',
      features: ['Original Compositions', 'Professional Mixing', 'Royalty-Free', 'Multiple Formats'],
      icon: Music,
      image: musicImage,
      path: '/services/music',
      color: 'from-purple-400 to-indigo-500',
      price: 'Starting at $300',
    },
    {
      title: 'Other Creative Services',
      description: 'Content writing, video editing, social media, and more creative solutions.',
      features: ['Content Writing', 'Video Editing', 'Social Media', 'Brand Identity'],
      icon: Plus,
      image: creativeImage,
      path: '/services/creative',
      color: 'from-gradient-end to-gradient-start',
      price: 'Custom Pricing',
    },
  ];

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="container mx-auto px-6 mb-20">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="text-5xl md:text-6xl font-poppins font-bold">
            Our <span className="gradient-text">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground font-playfair italic">
            "Got an idea? Consider it done." - We transform your creative vision into digital reality.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group glass-card rounded-2xl overflow-hidden hover-lift"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-80 group-hover:opacity-60 transition-opacity duration-300`}></div>
                <div className="absolute top-6 left-6">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center">
                    <service.icon className="h-7 w-7 text-white" />
                  </div>
                </div>
                <div className="absolute bottom-6 right-6">
                  <div className="bg-white/20 backdrop-blur-md rounded-lg px-4 py-2">
                    <span className="text-white font-semibold text-sm">{service.price}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-8 space-y-6">
                <div>
                  <h3 className="text-2xl font-poppins font-bold text-foreground mb-3 group-hover:gradient-text transition-all duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">What's Included:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-secondary mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to={service.path}
                  className="btn-hero w-full justify-center inline-flex items-center gap-2 px-6 py-3 rounded-xl"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 mt-20">
        <div className="glass-card rounded-2xl p-12 text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold">
            Need a <span className="gradient-text">Custom Solution?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't see exactly what you're looking for? We love taking on unique challenges 
            and creating custom solutions tailored to your specific needs.
          </p>
          <Link
            to="/contact"
            className="btn-hero inline-flex items-center gap-2 px-8 py-4 rounded-xl text-lg"
          >
            Let's Discuss Your Project
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;