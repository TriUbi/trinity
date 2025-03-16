
import React from 'react';
import { useAnimation } from '../contexts/AnimationContext';
import ContactForm from '../components/ContactForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  const { isAnimating } = useAnimation();
  
  return (
    <div className={`min-h-screen pt-24 pb-20 transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold mb-4">Kontakta oss</h1>
          <p className="text-lg text-muted-foreground">
            Har du frågor eller behöver du hjälp? Kontakta oss direkt så återkommer vi så snart som möjligt.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="bg-card rounded-xl border border-border p-8 shadow-sm">
              <h2 className="text-2xl font-bold mb-6">Skicka ett meddelande</h2>
              <ContactForm />
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="bg-secondary/30 rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-6">Kontaktinformation</h2>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">Adress</h3>
                    <p className="text-muted-foreground">
                      Designgatan 42<br />
                      114 35 Stockholm<br />
                      Sverige
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">Telefon</h3>
                    <p className="text-muted-foreground">
                      +46 70 123 45 67
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">E-post</h3>
                    <p className="text-muted-foreground">
                      info@glowup.se<br />
                      support@glowup.se
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">Öppettider</h3>
                    <p className="text-muted-foreground">
                      Måndag - Fredag: 9:00 - 17:00<br />
                      Lördag - Söndag: Stängt
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="rounded-xl overflow-hidden border border-border h-80">
              {/* For a real app, replace this with an actual map */}
              <div className="w-full h-full bg-secondary flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={32} className="mx-auto mb-3 text-primary" />
                  <p className="font-medium">Karta skulle visas här</p>
                  <p className="text-sm text-muted-foreground">Designgatan 42, Stockholm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
