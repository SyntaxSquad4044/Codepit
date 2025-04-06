
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function CustomHeader() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInStatus = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedInStatus);
  }, []);

  const handleLogin = () => {
    navigate("/login");
  };

  const handleGetStarted = () => {
    navigate("/get-started");
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    navigate("/");
  };

  const handleDashboard = () => {
    navigate("/dashboard");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[color:var(--bg-black)]/95 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/1e4cc934-8e77-475c-ad63-ede0e4f9f9fc.png" 
                alt="CodePit Logo" 
                className="h-16" 
              />
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
            <Link to="/challenges" className="text-gray-300 hover:text-white transition-colors">Challenges</Link>
            <Link to="/projects" className="text-gray-300 hover:text-white transition-colors">Projects</Link>
          </nav>
          <div className="flex items-center gap-3">
            {isLoggedIn ? (
              <>
                <Button variant="ghost" onClick={handleDashboard}>Dashboard</Button>
                <Button 
                  variant="outline" 
                  className="border-[color:var(--accent-color)] text-[color:var(--accent-color)] hover:bg-[color:var(--accent-color)] hover:text-white"
                  onClick={handleLogout}
                >
                  Sign out
                </Button>
              </>
            ) : (
              <>
                <Button variant="ghost" onClick={handleLogin}>Login</Button>
                <Button 
                  className="bg-[color:var(--accent-color)] text-white hover:bg-[color:var(--accent-color)]/80"
                  onClick={handleGetStarted}
                >
                  Get Started
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
