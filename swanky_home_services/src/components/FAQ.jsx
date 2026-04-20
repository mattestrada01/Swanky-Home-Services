import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordian";

const faqs = [
  {
    question: "How often should I clean my solar panels?",
    answer: "We recommend cleaning your solar panels at least twice a year — ideally before summer and after fall. Homes near trees, construction, or heavy traffic may benefit from quarterly cleanings.",
  },
  {
    question: "How much does solar panel cleaning cost?",
    answer: "Pricing depends on the number of panels and roof accessibility. Most residential jobs in Cypress range from $150–$350. Contact us for a free, no-obligation quote.",
  },
  {
    question: "Will cleaning actually improve my energy output?",
    answer: "Absolutely. Dirty panels can lose up to 30% efficiency. After a professional cleaning, most customers see a noticeable increase in energy production within days.",
  },
  {
    question: "Do you use chemicals on the panels?",
    answer: "No. We use a deionized water system that leaves zero residue or mineral deposits. It's safe for your panels, your roof, and the environment.",
  },
  {
    question: "How do I schedule a cleaning?",
    answer: "You can call us directly, fill out the contact form on this page, or request a quote online. We typically schedule within 3–5 business days.",
  },
  {
    question: "Do you offer bundled services?",
    answer: "Yes! We offer solar panel cleaning, window cleaning, and gutter cleaning — individually or as a bundled maintenance plan with quarterly visits and priority scheduling.",
  },
];

const FAQ = () => (
  <section id="FAQ" className="py-24 md:py-32 bg-[hsl(var(--background))]">
    <div className="container mx-auto px-6">
      <p className="text-[hsl(var(--primary))] font-['Inter'] text-sm tracking-[0.3em] uppercase text-center mb-4">
        FAQ
      </p>
      <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-center mb-16 text-[hsl(var(--foreground))]">
        Common Questions
      </h2>

      <div className="max-w-2xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-[hsl(var(--border))]">
              <AccordionTrigger className="font-['Inter'] text-left text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] hover:no-underline pb-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="font-['Inter'] text-[hsl(var(--muted-foreground))] leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  </section>
);

export default FAQ;