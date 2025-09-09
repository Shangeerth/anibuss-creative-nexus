import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, PenTool, Video, Share2, Lightbulb } from 'lucide-react';
import serviceImage from '../../assets/creative-services.jpg';

const Creative = () => {
  const benefits = [
    { icon: Lightbulb, title: 'All-in-One Hub', description: 'Complete creative solutions under one roof' },
    { icon: PenTool, title: 'Expert Team', description: 'Specialists in every creative discipline' },
    { icon: Share2, title: 'Integrated Approach', description: 'Services that work together seamlessly' },
    { icon: Video, title: 'Multi-Media', description: 'From text to video, we create all content types' },
  ];

  const process = [
    {
      step: '01',
      title: 'Identify Your Needs',
      description: 'We assess your creative requirements and recommend the best combination of services.',
    },
    {
      step: '02',
      title: 'Curate Solutions',
      description: 'Create a custom package of services tailored to your specific goals and budget.',
    },
    {
      step: '03',
      title: 'Execute Excellence',
      description: 'Our expert team delivers each component with precision and creativity.',
    },
    {
      step: '04',
      title: 'Ongoing Support',
      description: 'Provide continued support and iterate based on performance and feedback.',
    },
  ];

  const services = [
    {
      category: 'Content Creation',
      items: [
        'Blog post writing',
        'Social media content',
        'Email marketing copy',
        'Website copywriting',
        'Product descriptions',
        'Press releases',
      ],
    },
    {
      category: 'Video Production',
      items: [
        'Promotional videos',
        'Social media clips',
        'Explainer animations',
        'Video editing',
        'Motion graphics',
        'Live stream setup',
      ],
    },
    {
      category: 'Social Media',
      items: [
        'Content strategy',
        'Account management',
        'Hashtag research',
        'Community engagement',
        'Analytics reporting',
        'Influencer outreach',
      ],
    },
    {
      category: 'Brand Identity',
      items: [
        'Logo design',
        'Brand guidelines',
        'Color palettes',
        'Typography systems',
        'Business cards',
        'Marketing materials',
      ],
    },
  ];

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="container mx-auto px-6 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl font-poppins font-bold">
              <span className="gradient-text">Other Creative</span>
              <br />Services
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Your one-stop creative hub for everything beyond our core services. From content writing 
              and video editing to social media management and brand identity – we've got all your 
              creative needs covered with our Add-On Series.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="btn-hero inline-flex items-center gap-2 px-8 py-4 rounded-xl text-lg"
              >
                Explore Options
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/portfolio"
                className="btn-ghost inline-flex items-center gap-2 px-8 py-4 rounded-xl text-lg"
              >
                See Our Work
              </Link>
            </div>
          </div>
          
          <div className="relative">
            <img
              src={serviceImage}
              alt="Creative Services"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 gradient-brand-reverse opacity-20 rounded-2xl"></div>
          </div>
        </div>
      </section>

      {/* What It Is */}
      <section className="py-20 bg-background-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold">
              What are <span className="gradient-text">Creative Add-On Services?</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Our Add-On Series covers all the creative services that complement your main projects. 
              Whether you need compelling content, engaging videos, social media management, or complete 
              brand identity packages, our expert team provides tailored solutions that integrate 
              seamlessly with your existing marketing efforts.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6">
              Why Choose Our <span className="gradient-text">Creative Hub?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              One team, unlimited creativity – everything you need to build and grow your brand.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="text-center group hover-lift"
              >
                <div className="w-16 h-16 gradient-brand-reverse rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
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

      {/* Services Grid */}
      <section className="py-20 bg-background-secondary">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6">
              Available <span className="gradient-text">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose from our comprehensive range of creative services or create a custom package.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((category, index) => (
              <div
                key={category.category}
                className="glass-card rounded-2xl p-8 hover-lift"
              >
                <h3 className="text-2xl font-poppins font-bold mb-6 gradient-text">
                  {category.category}
                </h3>
                <div className="space-y-3">
                  {category.items.map((item) => (
                    <div key={item} className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
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
              We work with you to identify exactly what you need and create the perfect creative package.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {process.map((item, index) => (
                <div
                  key={item.step}
                  className="flex flex-col md:flex-row items-start md:items-center gap-6 glass-card rounded-2xl p-8 hover-lift"
                >
                  <div className="w-16 h-16 gradient-brand-reverse rounded-2xl flex items-center justify-center flex-shrink-0">
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

      {/* Pricing */}
      <section className="py-20 bg-background-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold">
              Flexible <span className="gradient-text">Pricing</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="glass-card rounded-2xl p-8 hover-lift">
                <h3 className="text-xl font-poppins font-bold mb-4">Individual Services</h3>
                <p className="text-muted-foreground mb-6">
                  Choose specific services as needed with transparent per-project pricing.
                </p>
                <div className="text-2xl font-bold gradient-text">Custom Quote</div>
              </div>
              
              <div className="glass-card rounded-2xl p-8 hover-lift border-2 border-secondary">
                <div className="bg-secondary text-white px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                  Most Popular
                </div>
                <h3 className="text-xl font-poppins font-bold mb-4">Service Packages</h3>
                <p className="text-muted-foreground mb-6">
                  Bundled services for better value and integrated creative solutions.
                </p>
                <div className="text-2xl font-bold gradient-text">Save 20-30%</div>
              </div>
              
              <div className="glass-card rounded-2xl p-8 hover-lift">
                <h3 className="text-xl font-poppins font-bold mb-4">Monthly Retainer</h3>
                <p className="text-muted-foreground mb-6">
                  Ongoing creative support with priority access and dedicated resources.
                </p>
                <div className="text-2xl font-bold gradient-text">Best Value</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="glass-card rounded-2xl p-12 text-center space-y-8 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold">
              Looking for something <span className="gradient-text">special?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Don't see exactly what you need? We love taking on unique creative challenges. 
              Let's discuss your vision and create a custom solution that exceeds your expectations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="btn-hero inline-flex items-center gap-2 px-10 py-5 rounded-xl text-lg"
              >
                Talk to Us
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

export default Creative;