import React from 'react';
import { Droplets, Sun, Sparkles, ShieldCheck } from "lucide-react";
 
const estimateLink =
  "https://clienthub.getjobber.com/client_hubs/0825649d-9dfd-42b9-9e74-3daabadcd37f/public/work_request/new?source=social_media";
 
const services = [
  {
    icon: Droplets,
    title: "Solar Panel Cleaning",
    description: "Restore up to 30% energy efficiency on your panels with our professional deionized water cleaning system.",
  },
  {
    icon: Sun,
    title: "Window Cleaning",
    description: "Crystal-clear windows inside and out, using streak-free eco-friendly solutions for perfect results.",
  },
  {
    icon: Sparkles,
    title: "Gutter Cleaning",
    description: "Prevent water damage from blockage/debris and keep your home protected with thorough gutter maintenance.",
  },
  {
    icon: ShieldCheck,
    title: "Maintenance Plans",
    description: "Scheduled quarterly cleanings to keep your panels performing at peak efficiency all year-round.",
  },
];
 
const Services = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-[hsl(var(--card))]">
      <div className="container mx-auto px-6">
        <p className="text-[hsl(var(--primary))] font-['Inter'] text-sm tracking-[0.3em] uppercase text-center mb-4">
          What We Do
        </p>
        <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-center mb-16 text-[hsl(var(--foreground))]">
          Our Services
        </h2>
 
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {services.map((service) => (
            <a
              href={estimateLink}
              target="_blank"
              rel="noopener noreferrer"
              key={service.title}
              className="group p-8 border border-[hsl(var(--border))] rounded-sm hover:border-[hsl(var(--primary)/0.40)] transition-colors block"
            >
              <service.icon className="w-8 h-8 text-[hsl(var(--primary))] mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="font-['Playfair_Display'] text-xl font-semibold text-[hsl(var(--foreground))] mb-3">
                {service.title}
              </h3>
              <p className="font-['Inter'] text-[hsl(var(--muted-foreground))] text-sm leading-relaxed">
                {service.description}
              </p>
              <span className="inline-block mt-4 text-[hsl(var(--primary))] font-['Inter'] text-xs font-semibold tracking-wider uppercase group-hover:underline">
                Book Now →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
 
export default Services;
 
