'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import { Button } from './UI/Button';
import { usePathname } from 'next/navigation';

const Navbar = () => {
     const [isOpen, setIsOpen] = useState(false);
  const location = usePathname();

  const isActive = (path: string) => {
    return location === path;
  };
    return (
         <nav className="fixed top-0 w-full z-50 glass-strong border-b border-primary/20">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-gradient-cyan hover:scale-105 transition-transform duration-300">
            AxeGen
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
               href="/" 
              className={`transition-colors duration-300 ${
                isActive('/') ? 'text-primary' : 'text-muted-foreground hover:text-primary'
              }`}
            >
              Home
            </Link>
            <Link 
               href="/services" 
              className={`transition-colors duration-300 ${
                isActive('/services') ? 'text-primary' : 'text-muted-foreground hover:text-primary'
              }`}
            >
              Services
            </Link>
            <Link 
              href="/about" 
              className={`transition-colors duration-300 ${
                isActive('/about') ? 'text-primary' : 'text-muted-foreground hover:text-primary'
              }`}
            >
              About
            </Link>
            <Link 
              href="/portfolio" 
              className={`transition-colors duration-300 ${
                isActive('/portfolio') ? 'text-primary' : 'text-muted-foreground hover:text-primary'
              }`}
            >
              Portfolio
            </Link>
            <Link 
              href="/contact" 
              className={`transition-colors duration-300 ${
                isActive('/contact') ? 'text-primary' : 'text-muted-foreground hover:text-primary'
              }`}
            >
              Contact
            </Link>
            
            <Link href="/contact">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground glow-cyan hover:scale-105 transition-all duration-300">
                Start Project
              </Button>
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#2892FF]"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4  ">
            <Link 
              href="/" 
              className={`block transition-colors duration-300 ${
                isActive('/services') ? 'text-primary' : 'text-muted-foreground hover:text-primary'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/services" 
              className={`block transition-colors duration-300 ${
                isActive('/services') ? 'text-primary' : 'text-muted-foreground hover:text-primary'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link 
              href="/about" 
              className={`block transition-colors duration-300 ${
                isActive('/about') ? 'text-primary' : 'text-muted-foreground hover:text-primary'
              }`}
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/portfolio" 
              className={`block transition-colors duration-300 ${
                isActive('/portfolio') ? 'text-primary' : 'text-muted-foreground hover:text-primary'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Portfolio
            </Link>
            <Link 
              href="/contact" 
              className={`block transition-colors duration-300 ${
                isActive('/contact') ? 'text-primary' : 'text-muted-foreground hover:text-primary'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground ">
                Start Project
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
    );
};

export default Navbar;