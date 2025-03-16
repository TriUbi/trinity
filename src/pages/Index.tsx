
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowRight, Globe, Zap, BarChart, Sparkles, Users } from 'lucide-react';
import { useAnimation } from '../contexts/AnimationContext';

const Index: React.FC = () => {
  const { isAnimating } = useAnimation();
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  return (
    <div className={`min-h-screen transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 pb-32">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className={`space-y-8 transition-all duration-1000 delay-100 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div>
                <div className="inline-block mb-3 bg-primary/10 px-3 py-1 rounded-full text-sm font-medium text-primary">
                  Modernisering av webbplatser
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-balance mb-4">
                  Ge din webbplats ett <span className="text-gradient">Glow Up</span> som gör skillnad
                </h1>
                <p className="text-lg text-muted-foreground text-balance">
                  Vi hjälper startups och småföretag att förbättra sina webbplatser med professionella designlösningar som ökar konvertering och kundengagemang.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/plans" className="btn-primary inline-flex items-center">
                  Se våra planer <ChevronRight className="ml-1" size={18} />
                </Link>
                <Link to="/how-it-works" className="btn-outline inline-flex items-center">
                  Läs mer om processen
                </Link>
              </div>
              
              <div className="flex flex-wrap gap-8 pt-4">
                <div className="flex items-center">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((index) => (
                      <div 
                        key={index} 
                        className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center border-2 border-background text-xs font-medium"
                      >
                        {index}
                      </div>
                    ))}
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium">100+ kundrecensioner</p>
                    <div className="flex items-center text-yellow-400">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg 
                          key={star} 
                          className="w-3 h-3 fill-current" 
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center text-sm">
                  <div className="h-4 w-4 rounded-full bg-green-500 mr-2"></div>
                  <span>Alltid redo för nya projekt</span>
                </div>
              </div>
            </div>
            
            <div className={`relative transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="relative z-10 rounded-2xl overflow-hidden border border-border shadow-glossy float-animation">
                <img 
                  src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                  alt="GlowUp Design Process" 
                  className="w-full h-auto rounded-2xl"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 z-20 glass p-4 rounded-xl shadow-md">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    <Sparkles size={20} />
                  </div>
                  <div>
                    <div className="text-sm font-medium">Snabba resultat</div>
                    <div className="text-xs text-muted-foreground">Leverans inom 1-2 veckor</div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 z-20 glass p-4 rounded-xl shadow-md">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    <Users size={20} />
                  </div>
                  <div>
                    <div className="text-sm font-medium">Nöjda kunder</div>
                    <div className="text-xs text-muted-foreground">95% kundnöjdhet</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-bold leading-tight tracking-tight">
              Varför välja GlowUp för din webbplats?
            </h2>
            <p className="text-muted-foreground">
              Vi kombinerar modern design med funktionalitet för att skapa webbplatser som ger resultat.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="card bg-background hover:shadow-md transition-all duration-300"
              >
                <div className="p-3 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-5">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Redo att förbättra din webbplats?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Välj den Glow Up plan som passar dina behov och börja förvandlingen av din webbplats redan idag.
            </p>
            <Link to="/plans" className="btn-primary inline-flex items-center text-lg">
              Se alla våra planer <ArrowRight className="ml-2" size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

// Feature data
const features = [
  {
    title: "Modern design",
    description: "Vi skapar webbplatser med modern, responsiv design som fungerar på alla enheter.",
    icon: <Globe size={24} />,
  },
  {
    title: "Snabb leverans",
    description: "Våra GlowUp-planer levereras snabbt så att du kan börja attrahera fler kunder.",
    icon: <Zap size={24} />,
  },
  {
    title: "Förbättrade resultat",
    description: "Våra webbplatser är designade för att maximera konvertering och kundengagemang.",
    icon: <BarChart size={24} />,
  },
  {
    title: "SEO-optimerad",
    description: "Alla våra webbplatser är optimerade för sökmotorer för att öka din synlighet online.",
    icon: <Sparkles size={24} />,
  },
  {
    title: "Teknisk support",
    description: "Vi erbjuder teknisk support efter leverans för att säkerställa att allt fungerar perfekt.",
    icon: <Users size={24} />,
  },
  {
    title: "Anpassningsbar",
    description: "Våra lösningar är skräddarsydda för att passa just ditt företags unika behov och mål.",
    icon: <Sparkles size={24} />,
  },
];

export default Index;
