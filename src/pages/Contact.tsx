import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = [
    'Web Development',
    'Custom Websites',
    'Digital Illustrations',
    'Music & Audio',
    'Creative Services',
    'Other',
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
      duration: 5000,
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      detail: 'hello@anibuss.com',
      description: 'Send us an email anytime',
    },
    {
      icon: Phone,
      title: 'Call Us',
      detail: '+94 (077) 194-5267',
      description: 'Mon-Fri from 8am to 5pm',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      detail: 'Digital Studio, Creative District',
      description: 'Come say hello at our office',
    },
  ];

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="container mx-auto px-6 mb-20">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="text-5xl md:text-6xl font-poppins font-bold">
            Let's Create Something <span className="gradient-text">Amazing</span>
          </h1>
          <p className="text-xl text-muted-foreground font-playfair italic">
            Ready to bring your ideas to life? Let's discuss your project and make it happen.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="glass-card rounded-2xl p-8">
            <h2 className="text-2xl font-poppins font-bold mb-6">
              Send us a message
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-background-secondary border border-border rounded-lg 
                             focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-background-secondary border border-border rounded-lg 
                             focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-background-secondary border border-border rounded-lg 
                             focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                    Service Interested In *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-background-secondary border border-border rounded-lg 
                             focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-background-secondary border border-border rounded-lg 
                           focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors resize-none"
                  placeholder="Tell us about your project, timeline, and any specific requirements..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-hero py-4 rounded-lg text-lg font-semibold 
                         disabled:opacity-50 disabled:cursor-not-allowed
                         flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="h-5 w-5" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-poppins font-bold mb-6">
                Get in Touch
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Have a project in mind? We'd love to hear about it. Send us a message 
                and we'll get back to you as soon as possible.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div
                  key={info.title}
                  className="flex items-start space-x-4 glass-card rounded-xl p-6 hover-lift"
                >
                  <div className="w-12 h-12 gradient-brand rounded-lg flex items-center justify-center flex-shrink-0">
                    <info.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                    <p className="text-secondary font-medium mb-1">{info.detail}</p>
                    <p className="text-muted-foreground text-sm">{info.description}</p>
                  </div>
                </div>
              ))}
            </div>

            
            <div className="glass-card rounded-xl p-6 relative">
                <h3 className="font-semibold text-foreground mb-4">Our Location</h3>
                <div className="w-full h-48 md:h-80 rounded-lg overflow-hidden relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63256.38444690455!2d81.63729478177744!3d7.734104024682055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afacd5a8d4e794b%3A0x445b48547815a564!2sBatticaloa!5e0!3m2!1sen!2slk!4v1757412958212!5m2!1sen!2slk"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>

                        {/* Floating button overlay */}
                        <a
                          href="https://goo.gl/maps/uCN3D2cAhfrZPw3K9"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="absolute bottom-3 right-3 bg-primary text-white text-xs px-3 py-2 rounded-lg shadow-lg hover:bg-primary/90 transition"
                        >
                          View on Google Maps
                        </a>
                      </div>
                    </div>

            {/* Benefits */}
            <div className="glass-card rounded-xl p-6">
              <h3 className="font-semibold text-foreground mb-4">Why Choose Anibuss?</h3>
              <div className="space-y-3">
                {[
                  'Fast 24-hour response time',
                  'Free initial consultation',
                  'Transparent pricing',
                  'Unlimited revisions',
                  '100% satisfaction guarantee',
                ].map((benefit) => (
                  <div key={benefit} className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-secondary mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;