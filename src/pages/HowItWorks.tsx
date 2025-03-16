
import React from 'react';
import { MousePointer, CreditCard, Lock, BarChart, CheckCircle } from 'lucide-react';
import ProcessStep from '../components/ProcessStep';
import { Link } from 'react-router-dom';
import { useAnimation } from '../contexts/AnimationContext';

const HowItWorks: React.FC = () => {
  const { isAnimating } = useAnimation();
  
  return (
    <div className={`min-h-screen pt-24 pb-20 transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold mb-4">Så fungerar det</h1>
          <p className="text-lg text-muted-foreground">
            Vår Glow Up-process är enkel och transparent. 
            Följ dessa steg för att förvandla din webbplats.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Process steps */}
          <div className="space-y-16">
            <ProcessStep
              icon={<MousePointer size={24} />}
              title="Välj en plan"
              description="Bläddra igenom våra GlowUp-planer och välj den som bäst passar dina behov och budget."
              stepNumber={1}
            />
            
            <ProcessStep
              icon={<CreditCard size={24} />}
              title="Betala säkert"
              description="Använd vår säkra Stripe Checkout för att genomföra din betalning. Vi börjar arbeta direkt efter bekräftad betalning."
              stepNumber={2}
            />
            
            <ProcessStep
              icon={<Lock size={24} />}
              title="Få tillgång"
              description="Du får direkt tillgång till din personliga kundportal där du kan följa projektets utveckling."
              stepNumber={3}
            />
            
            <ProcessStep
              icon={<BarChart size={24} />}
              title="Följ projektet"
              description="Håll dig uppdaterad om ditt projekts framsteg genom din kundportal och ge feedback under processen."
              stepNumber={4}
            />
            
            <ProcessStep
              icon={<CheckCircle size={24} />}
              title="Färdig webbplats"
              description="Få tillgång till din nyrenoverade webbplats och börja imponera på dina kunder med en modern design."
              stepNumber={5}
              isLast={true}
            />
          </div>
          
          {/* FAQ section */}
          <div>
            <div className="sticky top-28 space-y-8">
              <div className="rounded-xl bg-secondary/30 p-8">
                <h2 className="text-2xl font-bold mb-6">Vanliga frågor</h2>
                
                <div className="space-y-6">
                  {faqs.map((faq, index) => (
                    <details key={index} className="group">
                      <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                        <span>{faq.question}</span>
                        <span className="transition group-open:rotate-180">
                          <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                            <path d="M6 9l6 6 6-6"></path>
                          </svg>
                        </span>
                      </summary>
                      <p className="text-muted-foreground mt-3 group-open:animate-fadeIn">
                        {faq.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </div>
              
              <div className="rounded-xl bg-primary/5 p-8 border border-primary/10">
                <h3 className="text-xl font-bold mb-4">Redo att börja?</h3>
                <p className="text-muted-foreground mb-6">
                  Välj den GlowUp-plan som passar dig bäst och ge din webbplats en modern makeover.
                </p>
                <Link to="/plans" className="btn-primary w-full block text-center">
                  Se våra planer
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// FAQ data
const faqs = [
  {
    question: "Hur lång tid tar hela processen?",
    answer: "Beroende på vilken plan du väljer och komplexiteten i ditt projekt, tar hela processen vanligtvis 1-2 veckor från betalning till färdig webbplats."
  },
  {
    question: "Kan jag se förslag innan ni börjar ombyggnaden?",
    answer: "Ja, med Full Glow Up och Premium Glow Up planerna får du designförslag som du kan granska och ge feedback på innan vi påbörjar den faktiska implementeringen."
  },
  {
    question: "Förlorar jag mitt befintliga innehåll?",
    answer: "Nej, vi migrerar allt ditt befintliga innehåll till den nya designen. Du kan också välja att uppdatera eller lägga till nytt innehåll under processen."
  },
  {
    question: "Vad händer om jag inte är nöjd med resultatet?",
    answer: "Vi strävar efter 100% kundnöjdhet och kommer att göra rimliga justeringar tills du är helt nöjd med din nya webbplats."
  },
  {
    question: "Behöver jag teknisk kunskap för att hantera min nya webbplats?",
    answer: "Nej, vi designar webbplatser som är lätta att hantera även för icke-tekniska användare. Vi erbjuder också support om du behöver hjälp."
  }
];

export default HowItWorks;
