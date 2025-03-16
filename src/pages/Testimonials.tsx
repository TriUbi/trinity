
import React from 'react';
import { useAnimation } from '../contexts/AnimationContext';
import TestimonialCard from '../components/TestimonialCard';
import { Link } from 'react-router-dom';

const Testimonials: React.FC = () => {
  const { isAnimating } = useAnimation();
  
  return (
    <div className={`min-h-screen pt-24 pb-20 transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold mb-4">Kundrecensioner</h1>
          <p className="text-lg text-muted-foreground">
            Se vad våra nöjda kunder säger om sina GlowUp-upplevelser.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="h-full">
              <TestimonialCard
                quote={testimonial.quote}
                author={testimonial.author}
                role={testimonial.role}
                company={testimonial.company}
                rating={testimonial.rating}
                avatarUrl={testimonial.avatarUrl}
              />
            </div>
          ))}
        </div>
        
        <div className="bg-primary/5 rounded-xl p-8 md:p-12 border border-primary/10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Bli vår nästa framgångshistoria</h2>
              <p className="text-muted-foreground mb-6">
                Anslut dig till våra nöjda kunder och ge din webbplats ett GlowUp som förvandlar ditt online-närvaro.
              </p>
              <Link to="/plans" className="btn-primary">
                Se våra planer
              </Link>
            </div>
            
            <div className="space-y-6">
              <div className="flex space-x-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium">100% kundnöjdhet</h3>
                  <p className="text-sm text-muted-foreground">
                    Vi strävar efter att överträffa förväntningar och skapa resultat som våra kunder älskar.
                  </p>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium">Trygg investering</h3>
                  <p className="text-sm text-muted-foreground">
                    Vi levererar alltid högkvalitativa resultat som ger avkastning på din investering.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Testimonial data
const testimonials = [
  {
    quote: "GlowUp förvandlade vår föråldrade webbplats till en modern, professionell sida som ökade vår kundengagemang med över 30%. Den nya designen är exakt vad vi behövde.",
    author: "Erik Johansson",
    role: "VD",
    company: "TechSolutions AB",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
  },
  {
    quote: "Jag var imponerad av hur snabbt och professionellt GlowUp levererade vår nya webbplats. Från första kontakt till lansering var processen smidig och resultatet är fantastiskt.",
    author: "Sara Lindberg",
    role: "Marknadschef",
    company: "Innovate Design",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
  },
  {
    quote: "Premium Glow Up-planen var den bästa investeringen för mitt företag. Den nya webbplatsen har ökat vår trovärdighet och hjälpt oss att attrahera större kunder.",
    author: "Johan Svensson",
    role: "Grundare",
    company: "Creative Solutions",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
  },
  {
    quote: "Vår e-handelsbutik behövde verkligen ett lyft, och GlowUp levererade! Konverteringsgraden har ökat med över 25% sedan lanseringen av vår nya design.",
    author: "Anna Eriksson",
    role: "E-handelsansvarig",
    company: "Nordic Style",
    rating: 4,
    avatarUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
  },
  {
    quote: "GlowUp förstod exakt vad vårt varumärke behövde. Den nya webbplatsen speglar perfekt vår företagsidentitet och har fått massor av positiv feedback från våra kunder.",
    author: "Mikael Andersson",
    role: "Kreativ direktör",
    company: "Brand Studio",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
  },
  {
    quote: "Som småföretagare var jag orolig för processen, men GlowUp gjorde allt så enkelt. Min nya webbplats ser professionell ut och var klar på bara en vecka!",
    author: "Lina Bergman",
    role: "Ägare",
    company: "Linas Café",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
  },
];

export default Testimonials;
