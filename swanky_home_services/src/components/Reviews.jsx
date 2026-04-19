import React from 'react';
import { Star } from "lucide-react";
 
const googleLink =
  "https://www.google.com/maps/place/Swanky+Home+Services/@33.6409484,-118.1100381,10z/data=!3m1!4b1!4m6!3m5!1s0x832a2f7bdee52541:0xcee1b4e07f3237be!8m2!3d33.640814!4d-117.7803964!16s%2Fg%2F11y3m7wrb7?entry=ttu";
 
const reviews = [
  { name: "Sanjit T.", text: "Amazing job! Showed up on time and was extremely clean!!! Highly recommend." },
  { name: "Jonathan M.", text: "These guys crushed it! Super clean setup, zero hassle. Showed up on time and got everything done fast." },
  { name: "Joshua K.", text: "Everything came out great! Super clean set up and they really made sure to do their best." },
  { name: "Nicholas S.", text: "Reliable and creative work! Stress free service that really took their time and made sure everything looked perfect." },
  { name: "George V.", text: "Great company! They helped me from start to finish. The team delivered such great service. Will definitely reach out again!" },
  { name: "Se Y.", text: "Best service in town, very easy to get in touch with and did an excellent job." },
];
 
const Reviews = () => {
  return (
    <section id="reviews" className="py-24 md:py-32 bg-[hsl(var(--background))]">
      <div className="container mx-auto px-6">
        <p className="text-[hsl(var(--primary))] font-['Inter'] text-sm tracking-[0.3em] uppercase text-center mb-4">
          Testimonials
        </p>
        <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-center mb-4 text-[hsl(var(--foreground))]">
          5.0 ★ on Google
        </h2>
        <p className="font-['Inter'] text-[hsl(var(--muted-foreground))] text-center mb-16">
          50+ five-star reviews from happy homeowners
        </p>
 
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {reviews.map((review) => (
            <a
              key={review.name}
              href={googleLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 border border-[hsl(var(--border))] rounded-sm hover:border-[hsl(43,72%,55%,0.40)] transition-colors block"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[hsl(var(--primary))] text-[hsl(var(--primary))] group-hover:scale-110 transition-transform" />
                ))}
              </div>
              <p className="font-['Inter'] text-[hsl(var(--foreground))] text-sm leading-relaxed mb-4">
                "{review.text}"
              </p>
              <p className="font-['Inter'] text-[hsl(var(--muted-foreground))] text-xs tracking-wide uppercase">
                — {review.name}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
 
export default Reviews;