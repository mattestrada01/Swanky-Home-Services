import React from 'react';
import beforeImg from "../assets/solar-before.jpg";
import afterImg from "../assets/solar-after.jpg";

const estimateLink =
  "https://clienthub.getjobber.com/client_hubs/0825649d-9dfd-42b9-9e74-3daabadcd37f/public/work_request/new?source=social_media";

const About = () => (
  <section id="about" className="py-24 md:py-32 bg-[hsl(var(--background))]">
    <div className="container mx-auto px-6">
      <p className="text-[hsl(var(--primary))] font-['Inter'] text-sm tracking-[0.3em] uppercase text-center mb-4">
        Real Results
      </p>
      <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-center mb-6 text-[hsl(var(--foreground))]">
        Before &amp; After
      </h2>
      <p className="font-['Inter'] text-[hsl(var(--muted-foreground))] text-center max-w-xl mx-auto mb-16 text-sm leading-relaxed">
        See the difference professional cleaning makes. Dirty panels lose up to 30% efficiency — we bring them back to peak performance.
      </p>

      <div className="grid md:grid-cols-2 gap-20 max-w-5xl mx-auto">

        <div className="relative overflow-hidden rounded-sm border border-[hsl(var(--border))]">
          <img
            src={beforeImg}
            alt="Dirty solar panels covered in dust and grime"
            width={960}
            height={640}
            loading="lazy"
            className="w-full h-64 md:h-80 object-cover"
          />
          <span className="absolute top-4 left-4 bg-red-600 text-white font-['Inter'] text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-sm">
            Before
          </span>
          <div className="p-5">
            <p className="font-['Playfair_Display'] text-lg font-semibold text-[hsl(var(--foreground))] mb-1">–30% Efficiency</p>
            <p className="font-['Inter'] text-[hsl(var(--muted-foreground))] text-sm">Dust, pollen &amp; debris block sunlight and reduce output.</p>
          </div>
        </div>


        <div className="relative overflow-hidden rounded-sm border border-[hsl(43,72%,55%,0.30)]">
          <img
            src={afterImg}
            alt="Clean gleaming solar panels reflecting sunlight"
            width={960}
            height={640}
            loading="lazy"
            className="w-full h-64 md:h-80 object-cover"
          />
          <span className="absolute top-4 left-4 bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] font-['Inter'] text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-sm">
            After
          </span>
          <div className="p-5">
            <p className="font-['Playfair_Display'] text-lg font-semibold text-[hsl(var(--primary))] mb-1">100% Restored</p>
            <p className="font-['Inter'] text-[hsl(var(--muted-foreground))] text-sm">Professional deionized water cleaning maximizes energy production.</p>
          </div>
        </div>
      </div>


      <div className="text-center mt-14">
        <a
          href={estimateLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] px-8 py-4 rounded-sm font-['Inter'] font-semibold text-sm tracking-wide uppercase hover:bg-[hsl(var(--gold-glow))] transition-colors duration-300"
        >
          Get Your Free Quote
        </a>
      </div>
    </div>
  </section>
);

export default About;