import React, { useState } from 'react';
import { Phone, MapPin } from "lucide-react";
import emailjs from 'emailjs-com';

const googleLink =
  "https://www.google.com/maps/place/Swanky+Home+Services/@33.6409484,-118.1100381,10z/data=!3m1!4b1!4m6!3m5!1s0x832a2f7bdee52541:0xcee1b4e07f3237be!8m2!3d33.640814!4d-117.7803964!16s%2Fg%2F11y3m7wrb7?entry=ttu";

const Contact = () => {
  const [isSent, setIsSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm('service_dgqdv87', 'template_niodenk', e.target, 'wLEYks8rNw6-BI8OS')
      .then((result) => {
        console.log(result.text);
        setIsSent(true);
        setLoading(false);
      }, (error) => {
        console.log(error.text);
        setLoading(false);
      });

    e.target.reset();
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-[hsl(var(--card))]">
      <div className="container mx-auto px-6">
        <p className="text-[hsl(var(--primary))] font-['Inter'] text-sm tracking-[0.3em] uppercase text-center mb-4">
          Get Started
        </p>
        <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-center mb-16 text-[hsl(var(--foreground))]">
          Free Quote
        </h2>

        <div className="grid lg:grid-cols-2 gap-16 max-w-5xl mx-auto">


          <div className="flex flex-col justify-center space-y-8">
            <div>
              <h3 className="font-['Playfair_Display'] text-2xl font-semibold text-[hsl(var(--foreground))] mb-2">
                Ready to boost your solar efficiency?
              </h3>
              <p className="text-[hsl(var(--muted-foreground))] font-['Inter'] text-sm leading-relaxed">
                Get in touch today for a free, no-obligation quote. We serve Cypress, CA and surrounding Orange County areas.
              </p>
            </div>

            <div className="space-y-4">

              <a
                href="tel:+15622857619"
                className="flex items-center gap-3 text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] transition-colors duration-300 font-['Inter'] group"
              >
                <Phone className="w-5 h-5 text-[hsl(var(--primary))] group-hover:scale-110 transition-transform" />
                (562) 285-7619
              </a>

              <a
                href={googleLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] transition-colors duration-300 font-['Inter'] group"
              >
                <MapPin className="w-5 h-5 text-[hsl(var(--primary))] group-hover:scale-110 transition-transform" />
                Cypress, CA 90630
              </a>
            </div>
          </div>


          {isSent ? (
            <div className="flex items-center justify-center border border-[hsl(43,72%,55%,0.30)] rounded-sm p-12">
              <div className="text-center">
                <p className="font-['Playfair_Display'] text-2xl font-semibold text-[hsl(var(--primary))] mb-2">Thank You!</p>
                <p className="text-[hsl(var(--muted-foreground))] font-['Inter'] text-sm">We'll get back to you within 24 hours.</p>
              </div>
            </div>
          ) : (
            <form onSubmit={sendEmail} className="space-y-5">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                className="w-full bg-[hsl(var(--background))] border border-[hsl(var(--border))] rounded-sm px-4 py-3 font-['Inter'] text-sm text-[hsl(var(--foreground))] placeholder:text-[hsl(var(--muted-foreground))] focus:outline-none focus:border-[hsl(43,72%,55%,0.50)] transition-colors"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                required
                className="w-full bg-[hsl(var(--background))] border border-[hsl(var(--border))] rounded-sm px-4 py-3 font-['Inter'] text-sm text-[hsl(var(--foreground))] placeholder:text-[hsl(var(--muted-foreground))] focus:outline-none focus:border-[hsl(43,72%,55%,0.50)] transition-colors"
              />
              <textarea
                name="message"
                placeholder="Tell us about your project..."
                rows={4}
                className="w-full bg-[hsl(var(--background))] border border-[hsl(var(--border))] rounded-sm px-4 py-3 font-['Inter'] text-sm text-[hsl(var(--foreground))] placeholder:text-[hsl(var(--muted-foreground))] focus:outline-none focus:border-[hsl(43,72%,55%,0.50)] transition-colors resize-none"
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] px-8 py-4 rounded-sm font-['Inter'] font-semibold text-sm tracking-wide uppercase hover:bg-[hsl(var(--gold-glow))] transition-colors duration-300 disabled:opacity-50"
              >
                {loading ? "Sending..." : "Request Free Quote"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;