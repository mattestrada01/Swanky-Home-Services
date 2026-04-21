import React from 'react';
import heroImage from "../assets/hero-solar.webp";
import { Phone } from "lucide-react";

const estimateLink =
  "https://clienthub.getjobber.com/client_hubs/0825649d-9dfd-42b9-9e74-3daabadcd37f/public/work_request/new?source=social_media";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroImage}
        alt="Gleaming solar panels on a modern home at golden hour in Cypress, California"
        width={1920}
        height={1080}
        fetchPriority="high"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-[hsl(var(--background)/0.80)]" />

      <div className="relative z-10 container flex flex-col items-center justify-center text-center px-6 py-32">

        <p className="text-[hsl(var(--primary))] font-['Inter'] text-sm tracking-[0.3em] uppercase mb-6">
          Cypress, CA &bull; 5.0 ★ Rated
        </p>

        <h1 className="font-['Playfair_Display'] text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
          <span className="text-gradient-gold">Swanky</span>
          <br />
          <span className="text-[hsl(var(--foreground))]">Home Services</span>
        </h1>

        <p className="font-['Inter'] text-[hsl(var(--muted-foreground))] text-lg md:text-xl max-w-2xl mx-auto mb-10">
          Transform your living space with our top-rated window cleaning, gutter maintenance,
          solar panel cleaning, and holiday decorating services.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

          <a
            href="tel:+15622857619"
            className="inline-flex items-center gap-2 bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] px-8 py-4 rounded-sm font-['Inter'] font-semibold text-sm tracking-wide uppercase hover:bg-[hsl(var(--gold-glow))] transition-colors duration-300"
          >
            <Phone className="w-4 h-4" />
            Call Now
          </a>

          <a
            href={estimateLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-[hsl(var(--primary)/0.30)] text-[hsl(var(--primary))] px-8 py-4 rounded-sm font-['Inter'] font-semibold text-sm tracking-wide uppercase hover:bg-[hsl(var(--primary)/0.10)] transition-colors duration-300"
          >
            Free Estimate
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;