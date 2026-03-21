import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, Lock, User, CreditCard } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const storedUser = localStorage.getItem("user");

    if (!storedUser) {
      alert("Aucun compte trouvé ❌. Veuillez vous inscrire.");
      return;
    }

    const user = JSON.parse(storedUser);

    if (email === user.email && password === user.password) {
      alert("Connexion réussie 🔥");
      // On redirige vers "/" (Landing Page) si tu ne fais pas le dashboard
      navigate("/"); 
    } else {
      alert("Email ou mot de passe incorrect ❌");
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-[#ff0000] to-[#2b0000] p-4 font-sans relative overflow-hidden">
      
      <div className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-center gap-12 z-10">
        
        {/* Section Gauche : Ta Carte Bancaire Premium */}
        <div className="relative w-80 h-48 bg-gradient-to-br from-[#ff0000] to-[#000000] rounded-2xl shadow-[0_0_35px_rgba(212,175,55,0.4)] p-6 flex flex-col justify-between border border-yellow-500/20">
          <div className="flex justify-between items-start">
            <div className="space-y-1">
              <p className="text-white/80 text-[10px] uppercase tracking-widest font-light">Carte Premium</p>
              <p className="text-white text-lg font-mono">**** **** **** 1234</p>
            </div>
            <CreditCard className="text-yellow-500/40" size={24} />
          </div>
          <div className="flex justify-between items-end">
            <p className="text-white text-sm font-medium">Bienvenue</p>
            <p className="text-yellow-500 font-bold italic text-xl">VISA</p>
          </div>
        </div>

        {/* Section Droite : Formulaire de Connexion */}
        <div className="w-full max-w-md bg-[#1a1c2c] p-10 rounded-[2.5rem] shadow-2xl border border-white/5">
          <h2 className="text-white text-3xl font-bold text-center mb-8 uppercase tracking-widest">Connexion</h2>
          
          <form onSubmit={handleLogin} className="space-y-5">
            <div className="space-y-1">
              <label className="text-white/60 text-[10px] uppercase ml-1 font-bold">Email</label>
              <div className="relative">
                <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-yellow-500" />
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="votre@email.com"
                  className="w-full bg-black border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-yellow-500 transition-all"
                  required
                />
              </div>
            </div>

            <div className="space-y-1 relative">
              <label className="text-white/60 text-[10px] uppercase ml-1 font-bold">Mot de passe</label>
              <div className="relative">
                <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-yellow-500" />
                <input 
                  type={showPassword ? "text" : "password"} 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-black border border-white/10 rounded-xl py-4 pl-12 pr-12 text-white placeholder:text-gray-600 focus:outline-none focus:border-yellow-500 transition-all"
                  required
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-yellow-500"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <button 
              type="submit"
              className="w-full bg-gradient-to-r from-[#ff4d4d] to-[#ffcc00] text-black font-extrabold py-4 rounded-xl shadow-lg hover:opacity-90 active:scale-[0.98] transition-all mt-4 uppercase"
            >
              Se connecter
            </button>

            <p className="text-center text-white/40 text-sm mt-6">
              Pas de compte ? 
              <span 
                onClick={() => navigate("/register")}
                className="text-yellow-500 font-bold ml-2 cursor-pointer hover:underline"
              >
                S'inscrire
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;