
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ProcessStepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  stepNumber: number;
  isLast?: boolean;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ 
  icon, 
  title, 
  description, 
  stepNumber,
  isLast = false 
}) => {
  return (
    <div className="relative">
      <div className="flex items-start">
        <div className="flex-shrink-0">
          <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary border border-primary/20">
            {icon}
          </div>
          
          {!isLast && (
            <div className="absolute top-14 left-[calc(28px-1px)] bottom-0 w-0.5 bg-border">
            </div>
          )}
        </div>
        
        <div className="ml-6">
          <div className="bg-secondary/50 text-xs font-medium text-secondary-foreground rounded-full px-2.5 py-0.5 inline-block mb-2">
            Steg {stepNumber}
          </div>
          <h3 className="text-lg font-semibold text-foreground mb-1">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProcessStep;
