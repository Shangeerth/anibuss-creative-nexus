import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Heart, Palette, Music, Plus } from 'lucide-react';
import heroImage from '../assets/hero-bg.jpg';
import webDevImage from '../assets/web-dev-service.jpg';
import customWebsiteImage from '../assets/custom-websites-service.jpg';
import illustrationsImage from '../assets/illustrations-service.jpg';
import musicImage from '../assets/music-service.jpg';
import creativeImage from '../assets/creative-services.jpg';

const Home = () => {
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      title: 'Web Development',
      description: 'Modern, responsive, and interactive websites optimized for speed and SEO.',
      icon: Code,
      image: webDevImage,
      path: '/services/web-development',
      color: 'from-gradient-start to-gradient-end',
    },
    {
      title: 'Custom Websites',
      description: 'Personalized websites for birthdays, proposals, and special moments.',
      icon: Heart,
      image: customWebsiteImage,
      path: '/services/custom-websites',
      color: 'from-pink-400 to-red-500',
    },
    {
      title: 'Digital Illustrations',
      description: 'Custom artwork and illustrations for personal gifts or branding.',
      icon: Palette,
      image: illustrationsImage,
      path: '/services/illustrations',
      color: 'from-orange-400 to-pink-500',
    },
    {
      title: 'Music & Audio',
      description: 'Original jingles, tracks, and audio creations for your brand.',
      icon: Music,
      image: musicImage,
      path: '/services/music',
      color: 'from-purple-400 to-indigo-500',
    },
    {
      title: 'Creative Services',
      description: 'Content writing, video editing, social media, and more creative solutions.',
      icon: Plus,
      image: creativeImage,
      path: '/services/creative',
      color: 'from-gradient-end to-gradient-start',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-5xl md:text-7xl font-poppins font-bold animate-fade-up">
              <span className="gradient-text">Got an idea?</span>
              <br />
              <span className="text-foreground">Consider it done.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto animate-fade-up animate-delay-200 font-playfair italic">
              We transform creative ideas into stunning digital experiences that captivate and convert.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up animate-delay-400">
              <Link
                to="/services"
                className="btn-hero inline-flex items-center gap-2 px-8 py-4 rounded-xl text-lg"
              >
                Explore Services
                <ArrowRight className="h-5 w-5" />
              </Link>
              
              <Link
                to="/portfolio"
                className="btn-ghost inline-flex items-center gap-2 px-8 py-4 rounded-xl text-lg"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-secondary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-secondary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-background-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold animate-on-scroll">
              Welcome to <span className="gradient-text">Anibuss</span>
            </h2>
            
            <p className="text-xl text-muted-foreground leading-relaxed animate-on-scroll animate-delay-200">
              We're a creative digital agency that specializes in bringing your wildest ideas to life. 
              From cutting-edge web development to personalized celebration websites, from stunning 
              digital illustrations to original music compositions – we're your one-stop creative hub.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="text-center space-y-4 animate-on-scroll animate-delay-300">
                <div className="w-16 h-16 gradient-brand rounded-full flex items-center justify-center mx-auto">
                  <span className="text-white font-bold text-2xl">50+</span>
                </div>
                <h3 className="font-poppins font-semibold text-xl">Projects Completed</h3>
                <p className="text-muted-foreground">Successful projects delivered across various industries</p>
              </div>
              
              <div className="text-center space-y-4 animate-on-scroll animate-delay-400">
                <div className="w-16 h-16 gradient-brand rounded-full flex items-center justify-center mx-auto">
                  <span className="text-white font-bold text-2xl">24/7</span>
                </div>
                <h3 className="font-poppins font-semibold text-xl">Support</h3>
                <p className="text-muted-foreground">Round-the-clock support for all your creative needs</p>
              </div>
              
              <div className="text-center space-y-4 animate-on-scroll animate-delay-500">
                <div className="w-16 h-16 gradient-brand rounded-full flex items-center justify-center mx-auto">
                  <span className="text-white font-bold text-2xl">100%</span>
                </div>
                <h3 className="font-poppins font-semibold text-xl">Satisfaction</h3>
                <p className="text-muted-foreground">Guaranteed satisfaction with every project delivery</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section ref={servicesRef} className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6 animate-on-scroll">
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-on-scroll animate-delay-200">
              From web development to creative content, we offer comprehensive digital solutions 
              tailored to your unique needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`group glass-card rounded-2xl overflow-hidden hover-lift animate-on-scroll animate-delay-${(index + 1) * 100}`}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-80 group-hover:opacity-60 transition-opacity duration-300`}></div>
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-poppins font-semibold text-foreground group-hover:gradient-text transition-all duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <Link
                    to={service.path}
                    className="inline-flex items-center text-secondary hover:text-primary transition-colors duration-300 font-medium text-sm group/link"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4 ml-1 transition-transform duration-300 group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12 animate-on-scroll animate-delay-600">
            <Link
              to="/services"
              className="btn-hero inline-flex items-center gap-2 px-8 py-4 rounded-xl text-lg"
            >
              View All Services
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold animate-on-scroll">
              Ready to bring your <span className="gradient-text">ideas to life?</span>
            </h2>
            
            <p className="text-xl text-muted-foreground animate-on-scroll animate-delay-200">
              Let's collaborate and create something extraordinary together. 
              Your vision, our expertise – the perfect combination.
            </p>
            
            <div className="animate-on-scroll animate-delay-400">
              <Link
                to="/contact"
                className="btn-hero inline-flex items-center gap-2 px-10 py-5 rounded-xl text-lg"
              >
                Start Your Project
                <ArrowRight className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;