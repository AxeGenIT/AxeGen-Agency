"use client";
import React, { useState } from "react";
import { useToast } from "../Hooks/use-toast";
import { Button } from "@/Component/UI/Button";
import { Input } from "@/Component/UI/Input";
import { Textarea } from "@/Component/UI/Textarea";
import { Card, CardContent } from "@/Component/UI/Card";
import Navigation from "@/Component/Navbar";
import Footer from "@/Component/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    message: "",
  });

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent! 🚀",
      description: "We'll get back to you within 24 hours to discuss your project.",
    });
    setFormData({ name: '', email: '', project: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };


  return (
    <div className="min-h-screen bg-gradient-animated">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto max-w-7xl relative z-10 text-center">
          <div className="glass-strong rounded-3xl p-12 max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Let&apos;s <span className="text-gradient-cyan">Connect</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Ready to transform your digital presence? Let&apos;s discuss your project and create something extraordinary together.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <Card className="glass-strong border-primary/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-gradient-cyan">Start Your Project</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Name</label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="glass border-primary/30 focus:border-primary"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="glass border-primary/30 focus:border-primary"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Project Type</label>
                    <Input
                      name="project"
                      value={formData.project}
                      onChange={handleChange}
                      className="glass border-primary/30 focus:border-primary"
                      placeholder="Website, App, CMS, Marketing..."
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Project Details</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="glass border-primary/30 focus:border-primary min-h-32"
                      placeholder="Tell us about your vision, goals, and requirements..."
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground glow-cyan transition-all duration-300 hover:scale-105"
                  >
                    Send Message 🚀
                  </Button>
                </form>
              </CardContent>
            </Card>
            
            {/* Contact Info */}
            <div className="space-y-8">
              {/* Why Choose Us */}
              <Card className="glass-strong border-accent/20 glow-purple">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-gradient-accent">Why Partner With Axegen?</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-2 h-2 bg-primary rounded-full mt-3 glow-cyan" />
                      <div>
                        <h4 className="font-semibold text-lg">5+ Years of Excellence</h4>
                        <p className="text-muted-foreground">Proven track record in delivering high-impact digital solutions</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-2 h-2 bg-accent rounded-full mt-3 glow-purple" />
                      <div>
                        <h4 className="font-semibold text-lg">Modern Technology Stack</h4>
                        <p className="text-muted-foreground">Latest frameworks and tools for optimal performance</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-2 h-2 bg-primary rounded-full mt-3 glow-cyan" />
                      <div>
                        <h4 className="font-semibold text-lg">End-to-End Solutions</h4>
                        <p className="text-muted-foreground">From concept to launch and beyond</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Contact Methods */}
              <Card className="glass-strong border-primary/20">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-6 text-gradient-cyan">Get In Touch</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center glow-cyan">
                        <span className="text-primary">📧</span>
                      </div>
                      <div>
                        <div className="font-medium">Email</div>
                        <div className="text-muted-foreground">hello@axegen.dev</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center glow-cyan">
                        <span className="text-primary">📞</span>
                      </div>
                      <div>
                        <div className="font-medium">Phone</div>
                        <div className="text-muted-foreground">+1 (555) 123-4567</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center glow-cyan">
                        <span className="text-primary">📍</span>
                      </div>
                      <div>
                        <div className="font-medium">Location</div>
                        <div className="text-muted-foreground">San Francisco, CA</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Schedule Call */}
              <Card className="glass-strong border-accent/20">
                <CardContent className="p-8 text-center">
                  <h3 className="text-xl font-bold mb-4">Prefer a Direct Call?</h3>
                  <p className="text-muted-foreground mb-6">
                    Let&apos;s schedule a call to discuss your project in detail
                  </p>
                  
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-accent/30 text-foreground hover:bg-accent/10 hover:border-accent transition-all duration-300"
                  >
                    Schedule a Call 📞
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};


export default Contact;
