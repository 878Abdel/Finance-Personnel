import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-[#0D0D1A] text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#8116E0] flex items-center justify-center">
                <span className="text-[#D0FF00] font-black text-sm font-['Syne']">M</span>
              </div>
              <span className="font-['Syne'] font-black text-xl tracking-tight">
                Mon<span className="text-[#D0FF00]">Budget</span>
              </span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Prenez le contrôle total de vos finances personnelles. Simple, intelligent, efficace.
            </p>
          </div>

          <div>
            <h4 className="font-['Syne'] font-bold text-sm text-white/40 uppercase tracking-widest mb-4">Compte</h4>
            <ul className="space-y-2">
              {[
                { label: 'Connexion', to: '/login' },
                { label: 'Inscription', to: '/register' },
                { label: 'Dashboard', to: '/dashboard' },
              ].map((item) => (
                <li key={item.label}>
                  <Link to={item.to} className="text-sm text-white/60 hover:text-[#D0FF00] transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">© 2025 MonBudget. Tous droits réservés.</p>
          <div className="flex items-center gap-4">
            <div className="w-1.5 h-1.5 rounded-full bg-[#00E5A0] animate-pulse" />
            <span className="text-xs text-white/30">Tous systèmes opérationnels</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
