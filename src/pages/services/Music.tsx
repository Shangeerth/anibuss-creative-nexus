import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Music, Headphones, Mic, Volume2 } from 'lucide-react';
import serviceImage from '../../assets/music-service.jpg';

const MusicService = () => {
  const benefits = [
    { icon: Music, title: 'Original Compositions', description: 'Completely original music tailored to your needs' },
    { icon: Headphones, title: 'Professional Sound', description: 'Studio-quality recording and mixing' },
    { icon: Volume2, title: 'Royalty-Free', description: 'Full ownership and commercial usage rights' },
    { icon: Mic, title: 'Multiple Formats', description: 'Delivered in all popular audio formats' },
  ];

  const process = [
    {
      step: '01',
      title: 'Understand Your Vision',
      description: 'We discuss your project, mood, style preferences, and intended use of the music.',
    },
    {
      step: '02',
      title: 'Compose & Create',
      description: 'Our musicians compose original pieces that perfectly match your requirements.',
    },
    {
      step: '03',
      title: 'Mix & Master',
      description: 'Professional mixing and mastering to ensure pristine audio quality.',
    },
    {
      step: '04',
      title: 'Deliver Excellence',
      description: 'Final tracks delivered in multiple formats with full commercial rights.',
    },
  ];

  const services = [
    { name: 'Brand Jingles', description: 'Catchy, memorable tunes that represent your brand perfectly' },
    { name: 'Background Music', description: 'Atmospheric music for videos, websites, and presentations' },
    { name: 'Custom Songs', description: 'Original songs for special occasions, events, or personal use' },
    { name: 'Podcast Intros', description: 'Professional intro and outro music for podcasts and shows' },
    { name: 'Commercial Music', description: 'Music for advertisements, commercials, and marketing content' },
    { name: 'Game Audio', description: 'Sound effects and background music for games and apps' },
  ];

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="container mx-auto px-6 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl font-poppins font-bold">
              <span className="gradient-text">Musical & Audio</span>
              <br />Creations
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Let your brand be heard with custom music and audio creations. From catchy jingles 
              and background tracks to original songs and sound design, we create audio experiences 
              that resonate with your audience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="btn-hero inline-flex items-center gap-2 px-8 py-4 rounded-xl text-lg"
              >
                Create Music
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/portfolio"
                className="btn-ghost inline-flex items-center gap-2 px-8 py-4 rounded-xl text-lg"
              >
                Listen to Samples
              </Link>
            </div>
          </div>
          
          <div className="relative">
            <img
              src={serviceImage}
              alt="Music & Audio Service"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-indigo-500/20 rounded-2xl"></div>
          </div>
        </div>
      </section>

      {/* What It Is */}
      <section className="py-20 bg-background-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold">
              What are <span className="gradient-text">Audio Creations?</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Custom audio creations are original musical compositions and sound designs crafted 
              specifically for your brand, project, or personal needs. Whether you need a memorable 
              jingle, atmospheric background music, or a complete original song, we create audio 
              that perfectly captures the essence of your vision.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6">
              Why Choose Our <span className="gradient-text">Music Services?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional-quality audio that makes your brand memorable and engaging.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="text-center group hover-lift"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
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

      {/* Services */}
      <section className="py-20 bg-background-secondary">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6">
              Our <span className="gradient-text">Audio Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From brand jingles to complete soundtracks, we create audio for every need.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.name}
                className="glass-card rounded-xl p-6 hover-lift group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Music className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-poppins font-semibold mb-3 group-hover:text-secondary transition-colors duration-300">
                  {service.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
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
              From concept to final master, we ensure every note serves your vision perfectly.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {process.map((item, index) => (
                <div
                  key={item.step}
                  className="flex flex-col md:flex-row items-start md:items-center gap-6 glass-card rounded-2xl p-8 hover-lift"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-2xl flex items-center justify-center flex-shrink-0">
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
                'Original composition',
                'Professional recording',
                'Studio-quality mixing',
                'Audio mastering',
                'Multiple file formats (MP3, WAV, FLAC)',
                'Different length versions',
                'Loop-ready versions',
                'Royalty-free license',
                'Commercial usage rights',
                'Stems/individual tracks',
                'Up to 3 revisions',
                'Quick turnaround (5-10 days)',
              ].map((feature) => (
                <div key={feature} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-purple-400 flex-shrink-0" />
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
              Let your brand <span className="gradient-text">be heard</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Whether you need a catchy jingle, atmospheric background music, or a complete original song, 
              let's create audio that perfectly represents your brand and resonates with your audience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="btn-hero inline-flex items-center gap-2 px-10 py-5 rounded-xl text-lg"
              >
                Create Your Sound
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

export default MusicService;