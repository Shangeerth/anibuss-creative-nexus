import React from 'react';
import { CheckCircle, Users, Lightbulb, Zap, Heart } from 'lucide-react';

const About = () => {
  const timeline = [
    {
      year: '2020',
      title: 'The Beginning',
      description: 'Anibuss was founded with a simple mission: turn creative ideas into digital reality.',
    },
    {
      year: '2021',
      title: 'First Milestone',
      description: 'Completed our first 10 projects and established our unique creative process.',
    },
    {
      year: '2022',
      title: 'Growing Team',
      description: 'Expanded our team of creative professionals and launched specialized services.',
    },
    {
      year: '2023',
      title: 'Recognition',
      description: 'Received industry recognition for innovative digital experiences and client satisfaction.',
    },
    {
      year: '2024',
      title: 'New Horizons',
      description: 'Continuing to push boundaries with cutting-edge technology and creative solutions.',
    },
  ];

  const team = [
    {
      name: 'Alex Rivera',
      role: 'Creative Director',
      bio: 'Visionary leader with 8+ years in digital design and brand strategy.',
    },
    {
      name: 'Maya Chen',
      role: 'Lead Developer',
      bio: 'Full-stack developer specializing in modern web technologies and animations.',
    },
    {
      name: 'Jordan Blake',
      role: 'UI/UX Designer',
      bio: 'Design expert creating intuitive and beautiful user experiences.',
    },
    {
      name: 'Sam Thompson',
      role: 'Content Strategist',
      bio: 'Storytelling specialist crafting compelling narratives for brands.',
    },
  ];

  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We constantly explore new technologies and creative approaches to deliver unique solutions.',
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Every project is crafted with genuine care and enthusiasm for excellence.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work closely with our clients to ensure their vision becomes reality.',
    },
    {
      icon: Zap,
      title: 'Efficiency',
      description: 'We deliver high-quality results quickly without compromising on quality.',
    },
  ];

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="container mx-auto px-6 mb-20">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="text-5xl md:text-6xl font-poppins font-bold">
            About <span className="gradient-text">Anibuss</span>
          </h1>
          <p className="text-xl text-muted-foreground font-playfair italic">
            We help startups and brands grow with creativity, technology, and passion.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="container mx-auto px-6 mb-20">
        <div className="glass-card rounded-2xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6">
            Our <span className="gradient-text">Mission</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            At Anibuss, we believe every great idea deserves to be brought to life beautifully. 
            We're not just a digital agency – we're your creative partners, dedicated to transforming 
            your vision into stunning digital experiences that inspire, engage, and convert.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="container mx-auto px-6 mb-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6">
            Our <span className="gradient-text">Values</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="text-center space-y-4 group hover-lift"
            >
              <div className="w-16 h-16 gradient-brand rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                <value.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-poppins font-semibold">{value.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline Section */}
      <section className="container mx-auto px-6 mb-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6">
            Our <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From a small idea to a growing creative agency - here's how we've evolved.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gradient-start to-gradient-end transform md:-translate-x-1/2"></div>
            
            {timeline.map((item, index) => (
              <div
                key={item.year}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 gradient-brand rounded-full transform md:-translate-x-1/2 z-10"></div>
                
                {/* Content */}
                <div className={`ml-16 md:ml-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} md:w-1/2`}>
                  <div className="glass-card rounded-xl p-6 hover-lift">
                    <div className="inline-block gradient-brand text-white px-3 py-1 rounded-full text-sm font-semibold mb-3">
                      {item.year}
                    </div>
                    <h3 className="text-xl font-poppins font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6">
            Meet Our <span className="gradient-text">Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The creative minds behind every project, dedicated to bringing your ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={member.name}
              className="text-center group"
            >
              <div className="w-32 h-32 gradient-brand rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <span className="text-white font-bold text-2xl">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <h3 className="text-xl font-poppins font-semibold mb-2">{member.name}</h3>
              <p className="text-secondary font-medium mb-3">{member.role}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;