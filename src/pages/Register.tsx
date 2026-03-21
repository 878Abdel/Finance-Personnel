import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User, Mail, Lock, Eye, EyeOff, CreditCard, ArrowLeft } from "lucide-react";

const Register = () => {
  const navigate = useNavigate();

  // États pour les champs et l'affichage du mot de passe
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault(); // Empêche le rechargement de la page

    if (!name || !email || !password || !confirmPassword) {
      alert("Veuillez remplir tous les champs ⚠️");
      return;
    }

    if (password !== confirmPassword) {
      alert("Les mots de passe ne correspondent pas ❌");
      return;
    }

    // Sauvegarde de l'utilisateur
    const user = { name, email, password };
    localStorage.setItem("user", JSON.stringify(user));

    alert("Inscription réussie 🔥 ! Redirection vers la connexion...");
    navigate("/login");
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-[#ff0000] to-[#2b0000] p-4 font-sans relative overflow-hidden">
      
      {/* Cercles décoratifs dorés */}
      <div className="absolute top-[-10%] left-[-5%] w-64 h-64 border-2 border-yellow-500/10 rounded-full"></div>

      <div className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-center gap-12 z-10">
        
        {/* Section Gauche : La Carte Bancaire Dynamique */}
        <div className="hidden md:flex flex-col items-start gap-6">
           <button 
            onClick={() => navigate("/login")}
            className="p-3 bg-black/20 rounded-2xl hover:bg-black/40 transition-colors border border-white/10"
          >
            <ArrowLeft size={24} className="text-yellow-500" />
          </button>

          <div className="relative w-80 h-48 bg-gradient-to-br from-[#ff0000] to-[#000000] rounded-2xl shadow-[0_0_35px_rgba(212,175,55,0.4)] p-6 flex flex-col justify-between border border-yellow-500/20">
            <div className="flex justify-between items-start">
              <div className="space-y-1">
                <p className="text-white/80 text-[10px] uppercase tracking-widest font-light">Carte Premium</p>
                <p className="text-white text-lg font-mono">**** **** **** 1234</p>
              </div>
              <CreditCard className="text-yellow-500/40" size={24} />
            </div>
            <div className="flex justify-between items-end">
              <p className="text-white text-sm font-medium italic">{name || "Votre Nom"}</p>
              <p className="text-yellow-500 font-bold italic text-xl">VISA</p>
            </div>
          </div>
        </div>

        {/* Section Droite : Formulaire d'Inscription */}
        <div className="w-full max-w-md bg-[#1a1c2c] p-8 rounded-[2.5rem] shadow-2xl border border-white/5">
          <h2 className="text-white text-2xl font-bold text-center mb-8 uppercase tracking-widest">Inscription</h2>
          
          <form onSubmit={handleRegister} className="space-y-4">
            {/* Champ Nom */}
            <div className="space-y-1">
              <label className="text-white/60 text-[10px] uppercase ml-1 font-bold">Nom Complet</label>
              <div className="relative">
                <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-yellow-500" />
                <input 
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Jean Dupont"
                  className="w-full bg-black border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-yellow-500 transition-all"
                />
              </div>
            </div>

            {/* Champ Email */}
            <div className="space-y-1">
              <label className="text-white/60 text-[10px] uppercase ml-1 font-bold">Email professionnel</label>
              <div className="relative">
                <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-yellow-500" />
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="contact@banque.com"
                  className="w-full bg-black border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-yellow-500 transition-all"
                />
              </div>
            </div>

            {/* Champ Mot de passe */}
            <div className="space-y-1">
              <label className="text-white/60 text-[10px] uppercase ml-1 font-bold">Mot de passe</label>
              <div className="relative">
                <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-yellow-500" />
                <input 
                  type={showPassword ? "text" : "password"} 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-black border border-white/10 rounded-xl py-3 pl-12 pr-12 text-white placeholder:text-gray-600 focus:outline-none focus:border-yellow-500 transition-all"
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-yellow-500"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Champ Confirmer Mot de passe */}
            <div className="space-y-1">
              <label className="text-white/60 text-[10px] uppercase ml-1 font-bold">Confirmer</label>
              <div className="relative">
                <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-yellow-500" />
                <input 
                  type="password" 
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-black border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-yellow-500 transition-all"
                />
              </div>
            </div>

            {/* Bouton S'inscrire */}
            <button 
              type="submit"
              className="w-full bg-gradient-to-r from-[#ff4d4d] to-[#ffcc00] text-black font-extrabold py-4 rounded-xl shadow-lg hover:opacity-90 active:scale-[0.98] transition-all mt-4 uppercase tracking-tighter"
            >
              CRÉER MON COMPTE
            </button>

            <p className="text-center text-white/40 text-sm mt-4">
              Déjà membre ? 
              <span 
                onClick={() => navigate("/login")}
                className="text-yellow-500 font-bold ml-2 cursor-pointer hover:underline"
              >
                Se connecter
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;