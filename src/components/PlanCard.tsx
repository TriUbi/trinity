
import React from 'react';
import { Check } from 'lucide-react';

interface PlanFeature {
  text: string;
  included: boolean;
}

interface PlanCardProps {
  name: string;
  price: string;
  description: string;
  features: PlanFeature[];
  isPopular?: boolean;
  onSelect: () => void;
}

const PlanCard: React.FC<PlanCardProps> = ({ 
  name, 
  price, 
  description, 
  features, 
  isPopular = false,
  onSelect 
}) => {
  return (
    <div 
      className={`card relative card-hover ${
        isPopular ? 'border-2 border-primary shadow-md' : 'border border-border'
      }`}
    >
      {isPopular && (
        <div className="absolute top-0 right-0 -mt-2 -mr-2">
          <div className="bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full font-medium">
            Populäraste
          </div>
        </div>
      )}
      
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold text-foreground">{name}</h3>
        <div className="mt-2">
          <span className="text-3xl font-bold">{price}</span>
          <span className="text-muted-foreground"> SEK</span>
        </div>
      </div>
      
      <p className="text-sm text-center text-muted-foreground mb-6">
        {description}
      </p>
      
      <div className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start">
            <div className={`rounded-full p-1 mr-2 ${feature.included ? 'bg-primary/10 text-primary' : 'bg-muted text-muted-foreground'}`}>
              <Check size={14} />
            </div>
            <span className={`text-sm ${feature.included ? 'text-foreground' : 'text-muted-foreground line-through'}`}>
              {feature.text}
            </span>
          </div>
        ))}
      </div>
      
      <button 
        onClick={onSelect}
        className={`w-full py-3 rounded-lg font-medium transition-all duration-300 ${
          isPopular 
            ? 'bg-primary text-primary-foreground hover:bg-primary/90' 
            : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
        }`}
      >
        Välj plan
      </button>
    </div>
  );
};

export default PlanCard;
