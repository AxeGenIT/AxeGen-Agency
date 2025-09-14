import Link from "next/link";
import React from "react";
import { Button } from "./UI/Button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Animated Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(/herobg.png)` }}
      />

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute top-1/4 -right-32 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute -bottom-32 left-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "4s" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center pt-20 mt-5">
        {/* Badge */}
        <div className="inline-flex items-center px-6 py-3 rounded-full glass border border-primary-30 mb-8 animate-scale-in glow-cyan">
          <span className="text-primary font-medium text-sm uppercase tracking-wider ">
            ✨ 5+ Years Building Digital Excellence
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-6xl max-[380px]:text-[40px] max-[419px]:text-5xl md:text-8xl font-black mb-8 leading-tight animate-slide-up text-[#E6FFFF]">
          <span className="block ">Building</span>
          <span className="text-gradient-cyan block -mt-2.5">
            Tomorrow&apos;s
          </span>
          <span className="block -mt-2.5">Digital World</span>
        </h1>

        {/* Subheadline */}
        <p
          className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed animate-slide-up font-light text-white"
          style={{ animationDelay: "0.2s" }}
        >
          We partner with visionary companies to create
          <span className="text-gradient-accent font-semibold">
            {" "}
            extraordinary digital experiences
          </span>{" "}
          that drive growth, engage users, and transform industries.
        </p>

        {/* Stats */}
        <div
          className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-12 animate-slide-up  max-[317px]:grid-cols-2 "
          style={{ animationDelay: "0.4s" }}
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gradient-cyan mb-2">
              100+
            </div>
            <div className="text-sm text-muted-foreground uppercase tracking-wide ">
              Projects Delivered
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gradient-accent mb-2">
              5+
            </div>
            <div className="text-sm text-muted-foreground uppercase tracking-wide ">
              Years Experience
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gradient-cyan mb-2">
              24/7
            </div>
            <div className="text-sm text-muted-foreground uppercase tracking-wide">
              Support
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-up"
          style={{ animationDelay: "0.6s" }}
        >
          <Link href="/contact">
            <Button
              size="lg"
              className="group relative overflow-hidden bg-primary hover:button-gradient-project hover:bg-primary/90 text-primary-foreground px-12 py-6 text-lg font-semibold glow-cyan transition-all duration-300 hover:scale-105 rounded-2xl"
            >
              <span className="relative z-10">Start Your Project</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
          </Link>

          <Link href="/portfolio">
            <Button
              size="lg"
              variant="outline"
              className="group px-12 py-6 text-lg font-semibold border-primary-30 text-white   hover:border-primary transition-all duration-300 hover:scale-105 rounded-2xl"
            >
              View Our Work
              <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300 ">
                →
              </span>
            </Button>
          </Link>
        </div>

        {/* Trusted By */}
        <div
          className="mt-20 animate-slide-up"
          style={{ animationDelay: "0.8s" }}
        >
          <p className="text-sm text-muted-foreground uppercase tracking-widest mb-8">
            Trusted by innovative companies
          </p>
          <div className="flex justify-center items-center space-x-12 opacity-60">
            <div className="text-2xl font-bold text-muted-foreground">
              TechCorp
            </div>
            <div className="text-2xl font-bold text-muted-foreground">
              InnovateLab
            </div>
            <div className="text-2xl font-bold text-muted-foreground">
              StartupX
            </div>
            <div className="text-2xl font-bold text-muted-foreground">
              FutureFlow
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-primary-50 rounded-full p-1">
          <div className="w-1 h-3 bg-primary rounded-full mx-auto animate-pulse-glow" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
