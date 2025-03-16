
import React, { useState, useEffect } from 'react';
import { useAnimation } from '../contexts/AnimationContext';
import { BarChart3, FileText, Link as LinkIcon, Clock, Settings, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Project {
  id: string;
  name: string;
  type: string;
  status: 'in-progress' | 'completed' | 'pending';
  progress: number;
  startDate: string;
  estimatedCompletion: string;
  websiteUrl?: string;
}

const Dashboard: React.FC = () => {
  const { isAnimating } = useAnimation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState('projects');
  const [projects, setProjects] = useState<Project[]>([]);
  
  useEffect(() => {
    // For demonstration purposes, we'll simulate a logged-in user
    // with a few projects. In a real application, this would come from an API.
    const mockLogin = () => {
      setTimeout(() => {
        setIsLoggedIn(true);
        setProjects([
          {
            id: '1',
            name: 'Company Website Redesign',
            type: 'Full Glow Up',
            status: 'in-progress',
            progress: 65,
            startDate: '2023-04-15',
            estimatedCompletion: '2023-04-29',
          },
          {
            id: '2',
            name: 'E-commerce Store Update',
            type: 'Premium Glow Up',
            status: 'completed',
            progress: 100,
            startDate: '2023-03-01',
            estimatedCompletion: '2023-03-22',
            websiteUrl: 'https://example.com/store',
          },
        ]);
      }, 1000);
    };
    
    mockLogin();
  }, []);
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('sv-SE', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(date);
  };
  
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen pt-24 pb-20 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
            <svg className="animate-spin h-8 w-8 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
            </svg>
          </div>
          <h2 className="text-2xl font-bold mb-2">Laddar din dashboard...</h2>
          <p className="text-muted-foreground">Var god vänta medan vi hämtar din information.</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className={`min-h-screen pt-24 pb-20 transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="rounded-xl border border-border overflow-hidden">
              <div className="p-6 bg-secondary/30">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    M
                  </div>
                  <div>
                    <h3 className="font-medium">Maria Andersson</h3>
                    <p className="text-sm text-muted-foreground">maria@foretag.se</p>
                  </div>
                </div>
              </div>
              
              <div className="p-2">
                <nav className="space-y-1">
                  <button
                    className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                      activeTab === 'projects' ? 'bg-primary/10 text-primary' : 'hover:bg-secondary'
                    }`}
                    onClick={() => setActiveTab('projects')}
                  >
                    <BarChart3 size={18} />
                    <span>Mina projekt</span>
                  </button>
                  <button
                    className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                      activeTab === 'documents' ? 'bg-primary/10 text-primary' : 'hover:bg-secondary'
                    }`}
                    onClick={() => setActiveTab('documents')}
                  >
                    <FileText size={18} />
                    <span>Dokument</span>
                  </button>
                  <button
                    className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                      activeTab === 'settings' ? 'bg-primary/10 text-primary' : 'hover:bg-secondary'
                    }`}
                    onClick={() => setActiveTab('settings')}
                  >
                    <Settings size={18} />
                    <span>Inställningar</span>
                  </button>
                </nav>
              </div>
              
              <div className="p-4 border-t border-border">
                <button className="w-full flex items-center justify-center space-x-2 px-3 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">
                  <LogOut size={18} />
                  <span>Logga ut</span>
                </button>
              </div>
            </div>
            
            <div className="mt-6 rounded-xl bg-primary/5 p-6 border border-primary/10">
              <h3 className="font-medium mb-2">Behöver du hjälp?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Vårt supportteam finns tillgängliga för att hjälpa dig med dina frågor.
              </p>
              <Link to="/contact" className="btn-outline text-sm w-full block text-center">
                Kontakta support
              </Link>
            </div>
          </div>
          
          {/* Main content */}
          <div className="lg:col-span-3 space-y-6">
            {activeTab === 'projects' && (
              <>
                <div className="rounded-xl border border-border overflow-hidden">
                  <div className="p-6 border-b border-border bg-secondary/30">
                    <h2 className="text-xl font-bold">Dina projekt</h2>
                  </div>
                  
                  <div className="divide-y divide-border">
                    {projects.map((project) => (
                      <div key={project.id} className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-lg font-medium">{project.name}</h3>
                            <p className="text-sm text-muted-foreground">
                              {project.type}
                            </p>
                          </div>
                          <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                            project.status === 'completed' 
                              ? 'bg-green-100 text-green-800' 
                              : project.status === 'in-progress'
                                ? 'bg-blue-100 text-blue-800'
                                : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {project.status === 'completed' 
                              ? 'Färdig' 
                              : project.status === 'in-progress'
                                ? 'Pågående'
                                : 'Väntande'}
                          </div>
                        </div>
                        
                        <div className="mb-4">
                          <div className="flex justify-between text-sm mb-1">
                            <span>Framsteg</span>
                            <span>{project.progress}%</span>
                          </div>
                          <div className="w-full bg-secondary rounded-full h-2">
                            <div 
                              className="bg-primary h-2 rounded-full transition-all duration-500"
                              style={{ width: `${project.progress}%` }}
                            ></div>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                          <div>
                            <span className="text-muted-foreground">Startdatum:</span>
                            <p>{formatDate(project.startDate)}</p>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Beräknat färdigdatum:</span>
                            <p>{formatDate(project.estimatedCompletion)}</p>
                          </div>
                        </div>
                        
                        {project.status === 'completed' && project.websiteUrl && (
                          <a 
                            href={project.websiteUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center text-primary hover:text-primary/80 transition-colors"
                          >
                            <LinkIcon size={16} className="mr-1" />
                            Besök din webbplats
                          </a>
                        )}
                        
                        {project.status === 'in-progress' && (
                          <div className="flex items-center text-muted-foreground">
                            <Clock size={16} className="mr-1" />
                            <span className="text-sm">Nästa uppdatering: {formatDate(new Date().toISOString())}</span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="rounded-xl border border-border overflow-hidden">
                  <div className="p-6 border-b border-border bg-secondary/30">
                    <h2 className="text-xl font-bold">Starta ett nytt projekt</h2>
                  </div>
                  <div className="p-6">
                    <p className="text-muted-foreground mb-4">
                      Redo att ge en annan webbplats ett Glow Up? Utforska våra planer och välj den som passar din nästa webbplats.
                    </p>
                    <Link to="/plans" className="btn-primary">
                      Utforska planer
                    </Link>
                  </div>
                </div>
              </>
            )}
            
            {activeTab === 'documents' && (
              <div className="rounded-xl border border-border overflow-hidden">
                <div className="p-6 border-b border-border bg-secondary/30">
                  <h2 className="text-xl font-bold">Dokument</h2>
                </div>
                <div className="p-6 flex flex-col items-center justify-center py-12">
                  <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-4">
                    <FileText size={24} className="text-muted-foreground" />
                  </div>
                  <h3 className="text-lg font-medium mb-2">Inga dokument ännu</h3>
                  <p className="text-muted-foreground text-center max-w-md">
                    Dokument relaterade till dina projekt kommer att visas här. Kontakta vår support om du behöver hjälp.
                  </p>
                </div>
              </div>
            )}
            
            {activeTab === 'settings' && (
              <div className="rounded-xl border border-border overflow-hidden">
                <div className="p-6 border-b border-border bg-secondary/30">
                  <h2 className="text-xl font-bold">Inställningar</h2>
                </div>
                <div className="p-6">
                  <form className="space-y-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-sm font-medium">
                        Namn
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 rounded-lg border border-input focus:outline-none focus:ring-2 focus:ring-primary/30"
                        defaultValue="Maria Andersson"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-medium">
                        E-post
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 rounded-lg border border-input focus:outline-none focus:ring-2 focus:ring-primary/30"
                        defaultValue="maria@foretag.se"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="company" className="block text-sm font-medium">
                        Företag
                      </label>
                      <input
                        type="text"
                        id="company"
                        className="w-full px-4 py-2 rounded-lg border border-input focus:outline-none focus:ring-2 focus:ring-primary/30"
                        defaultValue="Marias Webbdesign AB"
                      />
                    </div>
                    
                    <div className="pt-2">
                      <button type="submit" className="btn-primary">
                        Spara ändringar
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
