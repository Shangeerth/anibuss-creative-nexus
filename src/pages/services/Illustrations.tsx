import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Palette, Layers, Download, Zap } from 'lucide-react';
import serviceImage from '../../assets/illustrations-service.jpg';

const Illustrations = () => {
  const benefits = [
    { icon: Palette, title: 'Multiple Styles', description: 'From realistic portraits to abstract art - we do it all' },
    { icon: Layers, title: 'High Quality', description: 'Professional-grade illustrations in high resolution' },
    { icon: Download, title: 'Commercial License', description: 'Full rights to use for personal or business purposes' },
    { icon: Zap, title: 'Fast Delivery', description: 'Quick turnaround without compromising on quality' },
  ];

  const process = [
    {
      step: '01',
      title: 'Concept Discussion',
      description: 'We understand your vision, style preferences, and intended use of the illustration.',
    },
    {
      step: '02',
      title: 'Initial Sketches',
      description: 'Create preliminary sketches and concepts for your review and feedback.',
    },
    {
      step: '03',
      title: 'Refine & Polish',
      description: 'Develop the chosen concept into a detailed, high-quality digital illustration.',
    },
    {
      step: '04',
      title: 'Final Delivery',
      description: 'Deliver your illustration in multiple formats with full commercial rights.',
    },
  ];

  const styles = [
    { name: 'Portrait Illustrations', description: 'Realistic or stylized portraits of people and pets' },
    { name: 'Character Design', description: 'Custom characters for games, books, or branding' },
    { name: 'Logo Illustrations', description: 'Custom illustrated logos and brand mascots' },
    { name: 'Digital Art', description: 'Abstract and artistic digital paintings' },
    { name: 'Technical Drawings', description: 'Detailed technical and architectural illustrations' },
    { name: 'Children\'s Book Art', description: 'Whimsical illustrations for books and stories' },
  ];

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="container mx-auto px-6 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl font-poppins font-bold">
              <span className="gradient-text">Digital Drawing &</span>
              <br />Illustrations
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Bring your imagination to life with custom digital illustrations. Whether for personal gifts, 
              business branding, or creative projects, we transform ideas into stunning visual artwork 
              that tells your story.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="btn-hero inline-flex items-center gap-2 px-8 py-4 rounded-xl text-lg"
              >
                Commission Art
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/portfolio"
                className="btn-ghost inline-flex items-center gap-2 px-8 py-4 rounded-xl text-lg"
              >
                View Gallery
              </Link>
            </div>
          </div>
          
          <div className="relative">
            <img
              src={serviceImage}
              alt="Digital Illustrations Service"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-pink-500/20 rounded-2xl"></div>
          </div>
        </div>
      </section>

      {/* What It Is */}
      <section className="py-20 bg-background-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold">
              What are <span className="gradient-text">Digital Illustrations?</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Digital illustrations are custom artwork created using digital tools and techniques. 
              They can range from realistic portraits and character designs to abstract art and 
              technical drawings. Perfect for personal gifts, business branding, book illustrations, 
              or any creative project that needs a unique visual touch.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6">
              Why Choose Our <span className="gradient-text">Illustrations?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional-quality artwork tailored to your exact specifications and vision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="text-center group hover-lift"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-poppins font-semibold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Styles */}
      <section className="py-20 bg-background-secondary">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6">
              Illustration <span className="gradient-text">Styles</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From realistic portraits to whimsical characters, we master every style to match your vision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {styles.map((style, index) => (
              <div
                key={style.name}
                className="glass-card rounded-xl p-6 hover-lift group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-pink-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Palette className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-poppins font-semibold mb-3 group-hover:text-secondary transition-colors duration-300">
                  {style.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {style.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6">
              Our <span className="gradient-text">Process</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From initial concept to final artwork, we ensure every illustration exceeds your expectations.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {process.map((item, index) => (
                <div
                  key={item.step}
                  className="flex flex-col md:flex-row items-start md:items-center gap-6 glass-card rounded-2xl p-8 hover-lift"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-pink-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xl">{item.step}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-poppins font-bold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-background-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-center mb-16">
              What's <span className="gradient-text">Included</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'Custom illustration design',
                'Multiple style options',
                'High-resolution files (300 DPI)',
                'Various file formats (PNG, JPG, SVG)',
                'Commercial usage rights',
                'Up to 3 revision rounds',
                'Print-ready versions',
                'Web-optimized versions',
                'Color and black & white versions',
                'Transparent background option',
                'Fast turnaround (3-7 days)',
                'Lifetime support',
              ].map((feature) => (
                <div key={feature} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-orange-400 flex-shrink-0" />
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="glass-card rounded-2xl p-12 text-center space-y-8 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold">
              Bring your imagination <span className="gradient-text">to life</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Whether you need a portrait, character design, or abstract art, 
              let's create something beautiful together that perfectly captures your vision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="btn-hero inline-flex items-center gap-2 px-10 py-5 rounded-xl text-lg"
              >
                Commission Your Art
                <ArrowRight className="h-6 w-6" />
              </Link>
              <Link
                to="/services"
                className="btn-ghost inline-flex items-center gap-2 px-10 py-5 rounded-xl text-lg"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Illustrations;