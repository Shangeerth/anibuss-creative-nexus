import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Code, Smartphone, Search, Zap } from 'lucide-react';
import serviceImage from '../../assets/web-dev-service.jpg';

const WebDevelopment = () => {
  const benefits = [
    { icon: Smartphone, title: 'Responsive Design', description: 'Perfect on all devices and screen sizes' },
    { icon: Search, title: 'SEO-Ready', description: 'Optimized for search engines from day one' },
    { icon: Zap, title: 'Lightning Fast', description: 'Optimized for speed and performance' },
    { icon: Code, title: 'Clean Code', description: 'Maintainable and scalable architecture' },
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery',
      description: 'We understand your business goals, target audience, and technical requirements.',
    },
    {
      step: '02',
      title: 'Design',
      description: 'Create wireframes and visual designs that align with your brand identity.',
    },
    {
      step: '03',
      title: 'Develop',
      description: 'Build your website using modern technologies and best practices.',
    },
    {
      step: '04',
      title: 'Test',
      description: 'Thorough testing across devices, browsers, and performance metrics.',
    },
    {
      step: '05',
      title: 'Launch',
      description: 'Deploy your website and provide ongoing support and maintenance.',
    },
  ];

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="container mx-auto px-6 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl font-poppins font-bold">
              <span className="gradient-text">Web Design &</span>
              <br />Development
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Transform your digital presence with modern, responsive, and interactive websites 
              that not only look stunning but also drive results and engage your audience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="btn-hero inline-flex items-center gap-2 px-8 py-4 rounded-xl text-lg"
              >
                Start Your Project
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/portfolio"
                className="btn-ghost inline-flex items-center gap-2 px-8 py-4 rounded-xl text-lg"
              >
                View Examples
              </Link>
            </div>
          </div>
          
          <div className="relative">
            <img
              src={serviceImage}
              alt="Web Development Service"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 gradient-brand opacity-20 rounded-2xl"></div>
          </div>
        </div>
      </section>

      {/* What It Is */}
      <section className="py-20 bg-background-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold">
              What is <span className="gradient-text">Web Development?</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Web development is the art and science of creating digital experiences that work beautifully 
              across all devices. We combine cutting-edge technology with stunning design to build websites 
              that not only capture attention but also convert visitors into customers.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6">
              Why Choose Our <span className="gradient-text">Web Development?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We don't just build websites; we create digital experiences that drive business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="text-center group hover-lift"
              >
                <div className="w-16 h-16 gradient-brand rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
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

      {/* Process */}
      <section className="py-20 bg-background-secondary">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6">
              Our <span className="gradient-text">Process</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A systematic approach that ensures your project is delivered on time, 
              within budget, and exceeds expectations.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {process.map((item, index) => (
                <div
                  key={item.step}
                  className="flex flex-col md:flex-row items-start md:items-center gap-6 glass-card rounded-2xl p-8 hover-lift"
                >
                  <div className="w-16 h-16 gradient-brand rounded-2xl flex items-center justify-center flex-shrink-0">
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

      {/* Features List */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-center mb-16">
              What's <span className="gradient-text">Included</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'Custom responsive design',
                'Mobile-first approach',
                'SEO optimization',
                'Performance optimization',
                'Cross-browser compatibility',
                'Content management system',
                'Analytics integration',
                'Security best practices',
                'SSL certificate setup',
                'Regular backups',
                '3 months free support',
                'Training and documentation',
              ].map((feature) => (
                <div key={feature} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background-secondary">
        <div className="container mx-auto px-6">
          <div className="glass-card rounded-2xl p-12 text-center space-y-8 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold">
              Ready to transform your <span className="gradient-text">online presence?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Let's build a website that not only looks amazing but also drives real business results. 
              Your success is our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="btn-hero inline-flex items-center gap-2 px-10 py-5 rounded-xl text-lg"
              >
                Work with us
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

export default WebDevelopment;