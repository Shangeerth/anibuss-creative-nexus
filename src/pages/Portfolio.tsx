import React, { useState } from 'react';
import { ExternalLink, Eye } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Web', 'Branding', 'Illustrations', 'Music', 'Custom'];

  const projects = [
    {
      id: 1,
      title: 'TechStartup Landing',
      category: 'Web',
      description: 'Modern SaaS landing page with interactive animations',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop',
      tags: ['React', 'Tailwind', 'Framer Motion'],
    },
    {
      id: 2,
      title: 'Wedding Proposal Site',
      category: 'Custom',
      description: 'Romantic interactive website for a marriage proposal',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=500&h=300&fit=crop',
      tags: ['Custom Design', 'Animations', 'Music'],
    },
    {
      id: 3,
      title: 'Brand Identity Design',
      category: 'Branding',
      description: 'Complete brand identity for a creative agency',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop',
      tags: ['Logo Design', 'Brand Guide', 'Typography'],
    },
    {
      id: 4,
      title: 'Character Illustrations',
      category: 'Illustrations',
      description: 'Custom character designs for mobile game',
      image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=500&h=300&fit=crop',
      tags: ['Character Design', 'Digital Art', 'Game Assets'],
    },
    {
      id: 5,
      title: 'Brand Jingle',
      category: 'Music',
      description: 'Catchy brand jingle for tech company',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&h=300&fit=crop',
      tags: ['Original Music', 'Brand Audio', 'Sound Design'],
    },
    {
      id: 6,
      title: 'E-commerce Platform',
      category: 'Web',
      description: 'Full-featured online store with custom checkout',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop',
      tags: ['E-commerce', 'Payment Integration', 'Admin Panel'],
    },
    {
      id: 7,
      title: 'Restaurant Branding',
      category: 'Branding',
      description: 'Complete visual identity for fine dining restaurant',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&h=300&fit=crop',
      tags: ['Restaurant Branding', 'Menu Design', 'Signage'],
    },
    {
      id: 8,
      title: 'Birthday Celebration Site',
      category: 'Custom',
      description: 'Interactive birthday website with photo gallery and games',
      image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=500&h=300&fit=crop',
      tags: ['Interactive Design', 'Photo Gallery', 'Custom Games'],
    },
    {
      id: 9,
      title: 'Digital Art Series',
      category: 'Illustrations',
      description: 'Abstract digital art collection for gallery exhibition',
      image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=500&h=300&fit=crop',
      tags: ['Abstract Art', 'Digital Painting', 'Exhibition'],
    },
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="container mx-auto px-6 mb-20">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="text-5xl md:text-6xl font-poppins font-bold">
            Our <span className="gradient-text">Portfolio</span>
          </h1>
          <p className="text-xl text-muted-foreground font-playfair italic">
            Showcasing our creative journey through stunning digital experiences.
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="container mx-auto px-6 mb-12">
        <div className="flex flex-wrap justify-center gap-4">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? 'gradient-brand text-white shadow-lg'
                  : 'glass-card text-muted-foreground hover:text-foreground hover:scale-105'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group glass-card rounded-2xl overflow-hidden hover-lift animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <button className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                      <Eye className="h-5 w-5 text-white" />
                    </button>
                    <button className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                      <ExternalLink className="h-5 w-5 text-white" />
                    </button>
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-poppins font-semibold text-foreground group-hover:gradient-text transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-muted text-muted-foreground px-2 py-1 rounded-md text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Load More / CTA Section */}
      <section className="container mx-auto px-6 mt-20">
        <div className="text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold">
            Like what you see?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            These are just a few examples of our work. Let's create something amazing together.
          </p>
          <button className="btn-hero inline-flex items-center gap-2 px-8 py-4 rounded-xl text-lg">
            Start Your Project
          </button>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;