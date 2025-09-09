import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Heart, Calendar, Music, Image } from 'lucide-react';
import serviceImage from '../../assets/custom-websites-service.jpg';

const CustomWebsites = () => {
  const benefits = [
    { icon: Heart, title: 'Unique Surprise', description: 'Create unforgettable memories with personalized touches' },
    { icon: Image, title: 'Photo Galleries', description: 'Beautiful galleries to showcase your special moments' },
    { icon: Calendar, title: 'Countdown Timers', description: 'Build excitement with animated countdowns' },
    { icon: Music, title: 'Personal Soundtrack', description: 'Custom music and audio to set the perfect mood' },
  ];

  const process = [
    {
      step: '01',
      title: 'Collect Details',
      description: 'We gather your story, photos, preferences, and special moments to include.',
    },
    {
      step: '02',
      title: 'Design Experience',
      description: 'Create a personalized design that reflects your unique relationship and style.',
    },
    {
      step: '03',
      title: 'Add Magic',
      description: 'Implement animations, music, and interactive elements to create the perfect atmosphere.',
    },
    {
      step: '04',
      title: 'Deliver Joy',
      description: 'Present your custom website and watch the magic unfold on your special day.',
    },
  ];

  const examples = [
    'Anniversary celebration websites',
    'Birthday surprise pages',
    'Marriage proposal sites',
    'Baby announcement pages',
    'Graduation celebrations',
    'Valentine\'s Day surprises',
  ];

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="container mx-auto px-6 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl font-poppins font-bold">
              <span className="gradient-text">Custom Birthday &</span>
              <br />Proposal Websites
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Make your special moments unforgettable with personalized, animated websites 
              that tell your unique story. Perfect for birthdays, proposals, anniversaries, 
              and any celebration worth remembering.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="btn-hero inline-flex items-center gap-2 px-8 py-4 rounded-xl text-lg"
              >
                Start Planning
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/portfolio"
                className="btn-ghost inline-flex items-center gap-2 px-8 py-4 rounded-xl text-lg"
              >
                See Examples
              </Link>
            </div>
          </div>
          
          <div className="relative">
            <img
              src={serviceImage}
              alt="Custom Websites Service"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-pink-400/20 to-red-500/20 rounded-2xl"></div>
          </div>
        </div>
      </section>

      {/* What It Is */}
      <section className="py-20 bg-background-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold">
              What are <span className="gradient-text">Custom Celebration Websites?</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              These are personalized, interactive websites designed specifically for your special occasions. 
              Each site tells your unique story through custom animations, photo galleries, music, 
              countdown timers, and heartfelt messages that create an emotional digital experience.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6">
              Why Choose <span className="gradient-text">Custom Websites?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Create moments that last forever with websites as unique as your relationships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="text-center group hover-lift"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
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

      {/* Examples */}
      <section className="py-20 bg-background-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold">
              Perfect for <span className="gradient-text">Every Celebration</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {examples.map((example, index) => (
                <div
                  key={example}
                  className="glass-card rounded-xl p-6 text-center hover-lift group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-foreground group-hover:text-secondary transition-colors duration-300">
                    {example}
                  </h3>
                </div>
              ))}
            </div>
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
              From your initial idea to the final reveal, we guide you through every step 
              of creating your perfect celebration website.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {process.map((item, index) => (
                <div
                  key={item.step}
                  className="flex flex-col md:flex-row items-start md:items-center gap-6 glass-card rounded-2xl p-8 hover-lift"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-red-500 rounded-2xl flex items-center justify-center flex-shrink-0">
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
                'Personalized design theme',
                'Interactive photo galleries',
                'Animated countdown timers',
                'Background music integration',
                'Custom love story timeline',
                'Guest message system',
                'Social media sharing',
                'Mobile-friendly design',
                'Secure hosting for 1 year',
                'Custom domain name',
                'Unlimited revisions',
                'Forever keepsake guarantee',
              ].map((feature) => (
                <div key={feature} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-pink-400 flex-shrink-0" />
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
              Make your moment <span className="gradient-text">unforgettable</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Whether it's a proposal, birthday, anniversary, or any special celebration, 
              let's create a digital experience that captures the magic of your moment forever.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="btn-hero inline-flex items-center gap-2 px-10 py-5 rounded-xl text-lg"
              >
                Plan Your Surprise
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

export default CustomWebsites;