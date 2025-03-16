
import React, { useState } from 'react';
import { useAnimation } from '../contexts/AnimationContext';
import PlanCard from '../components/PlanCard';
import { toast } from 'sonner';

const Plans: React.FC = () => {
  const { isAnimating } = useAnimation();
  const [selectedPlan, setSelectedPlan] = useState<null | string>(null);
  
  const handleSelectPlan = (planName: string) => {
    setSelectedPlan(planName);
    
    // In a real application, this would redirect to Stripe Checkout
    // For this demo, we'll just show a toast
    toast.success(`Du har valt ${planName}!`, {
      description: "I en riktig app skulle du nu tas till Stripe Checkout."
    });
  };
  
  return (
    <div className={`min-h-screen pt-24 pb-20 transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold mb-4">Våra GlowUp-planer</h1>
          <p className="text-lg text-muted-foreground">
            Välj den plan som passar dina behov och ge din webbplats det lyft den förtjänar.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan) => (
            <PlanCard
              key={plan.name}
              name={plan.name}
              price={plan.price}
              description={plan.description}
              features={plan.features}
              isPopular={plan.isPopular}
              onSelect={() => handleSelectPlan(plan.name)}
            />
          ))}
        </div>
        
        <div className="rounded-xl bg-secondary/30 p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Är du osäker på vilken plan som passar dig?</h2>
              <p className="text-muted-foreground mb-6">
                Vi förstår att det kan vara svårt att välja rätt plan. Kontakta oss för en gratis konsultation,
                så hjälper vi dig att hitta den perfekta lösningen för ditt företag.
              </p>
              <button 
                onClick={() => window.location.href = '/contact'}
                className="btn-outline"
              >
                Kontakta oss
              </button>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3 mt-1 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary text-xs font-bold">?</span>
                </div>
                <div>
                  <h3 className="font-medium mb-1">Kan jag uppgradera min plan senare?</h3>
                  <p className="text-sm text-muted-foreground">
                    Ja, du kan enkelt uppgradera din plan när som helst genom din kundportal.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3 mt-1 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary text-xs font-bold">?</span>
                </div>
                <div>
                  <h3 className="font-medium mb-1">Hur lång tid tar det att få min webbplats?</h3>
                  <p className="text-sm text-muted-foreground">
                    Leveranstiden varierar beroende på vilken plan du väljer, men vanligtvis levererar vi inom 1-2 veckor.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3 mt-1 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary text-xs font-bold">?</span>
                </div>
                <div>
                  <h3 className="font-medium mb-1">Får jag tillgång till källkoden?</h3>
                  <p className="text-sm text-muted-foreground">
                    Ja, du får full tillgång till källkoden för din webbplats med Premium-planen.
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

// Plan data
const plans = [
  {
    name: "Mini Glow Up",
    price: "4 995",
    description: "En enkel men effektiv uppgradering av din befintliga webbplats.",
    isPopular: false,
    features: [
      { text: "Ny, modern design", included: true },
      { text: "Mobilanpassning", included: true },
      { text: "Grundläggande SEO-optimering", included: true },
      { text: "Uppdatering av befintligt innehåll", included: true },
      { text: "Snabbare laddningstider", included: true },
      { text: "1 månad gratis support", included: true },
      { text: "Integrationer med tredjepartstjänster", included: false },
      { text: "Fullständig ombyggnad", included: false },
      { text: "Tillgång till källkod", included: false },
    ],
  },
  {
    name: "Full Glow Up",
    price: "9 995",
    description: "En komplett modernisering av din webbplats med fokus på användarupplevelse.",
    isPopular: true,
    features: [
      { text: "Ny, modern design", included: true },
      { text: "Mobilanpassning", included: true },
      { text: "Avancerad SEO-optimering", included: true },
      { text: "Uppdatering av befintligt innehåll", included: true },
      { text: "Snabbare laddningstider", included: true },
      { text: "3 månader gratis support", included: true },
      { text: "Integrationer med tredjepartstjänster", included: true },
      { text: "Fullständig ombyggnad", included: true },
      { text: "Tillgång till källkod", included: false },
    ],
  },
  {
    name: "Premium Glow Up",
    price: "19 995",
    description: "Den ultimata uppgraderingen för företag som vill ha det bästa av allt.",
    isPopular: false,
    features: [
      { text: "Ny, modern design", included: true },
      { text: "Mobilanpassning", included: true },
      { text: "Avancerad SEO-optimering", included: true },
      { text: "Uppdatering av befintligt innehåll", included: true },
      { text: "Snabbare laddningstider", included: true },
      { text: "6 månader gratis support", included: true },
      { text: "Integrationer med tredjepartstjänster", included: true },
      { text: "Fullständig ombyggnad", included: true },
      { text: "Tillgång till källkod", included: true },
    ],
  },
];

export default Plans;
