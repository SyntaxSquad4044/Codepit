
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CustomHeader } from "@/components/layout/CustomHeader";
import { Footer } from "@/components/layout/Footer";

const Dashboard = () => {
  const navigate = useNavigate();
  
  // Check if user is logged in
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [navigate]);

  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const userLevel = localStorage.getItem("userLevel") || "beginner";

  return (
    <div className="min-h-screen flex flex-col">
      <CustomHeader />
      <main className="flex-1 pt-16 px-4 md:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Welcome, {user.email?.split('@')[0] || "User"}</h1>
            <p className="text-gray-400">Here's your personalized dashboard</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="glass-card p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-2">Your Progress</h2>
              <div className="h-2 bg-gray-700 rounded-full mb-4">
                <div className="h-2 bg-[color:var(--accent-color)] rounded-full w-1/3"></div>
              </div>
              <p className="text-sm text-gray-400">You've completed 33% of your {userLevel} track</p>
            </div>
            
            <div className="glass-card p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-2">Streak</h2>
              <div className="flex items-end gap-1 h-12 mb-2">
                {[3, 5, 2, 7, 4, 6, 8].map((height, i) => (
                  <div 
                    key={i} 
                    className="flex-1 bg-[color:var(--accent-color)] rounded-t-sm"
                    style={{ height: `${height/10 * 100}%` }}
                  ></div>
                ))}
              </div>
              <p className="text-sm text-gray-400">8 day streak! Keep it up!</p>
            </div>
            
            <div className="glass-card p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-2">Next Challenge</h2>
              <h3 className="font-medium mb-1">Two Sum</h3>
              <p className="text-sm text-gray-400 mb-3">Array manipulation - Easy</p>
              <button className="text-sm text-[color:var(--accent-color)] hover:underline">Start now →</button>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Recommended for you</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {["Arrays", "Hash Tables", "Linked Lists", "Dynamic Programming"].map((topic) => (
                <div key={topic} className="glass-card p-4 rounded-lg cursor-pointer hover:bg-white/5 transition-colors">
                  <h3 className="font-medium">{topic}</h3>
                  <p className="text-sm text-gray-400">5 challenges</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
