
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { useAnimation } from "../contexts/AnimationContext";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const { isAnimating } = useAnimation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className={`min-h-screen pt-24 pb-20 flex items-center justify-center transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
      <div className="text-center px-4">
        <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
        <p className="text-2xl font-medium mb-6">Sidan kunde inte hittas</p>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          Sidan du letar efter existerar inte eller har flyttats. Kontrollera adressen eller gå tillbaka till startsidan.
        </p>
        <Link to="/" className="btn-primary inline-flex items-center">
          <Home size={18} className="mr-2" />
          Tillbaka till startsidan
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
