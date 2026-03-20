import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-[#8116E0] flex items-center justify-center shadow-[0_0_20px_rgba(129,22,224,0.5)]">
            <span className="text-[#D0FF00] font-black text-sm font-['Syne']">M</span>
          </div>
          <span className="font-['Syne'] font-800 text-xl text-[#0D0D1A] tracking-tight">
            Mon<span className="text-[#8116E0]">Budget</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8"></div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => navigate('/login')}
            className="text-sm font-semibold text-[#0D0D1A] hover:text-[#8116E0] transition-colors px-4 py-2"
          >
            Connexion
          </button>
          <button
            onClick={() => navigate('/register')}
            className="text-sm font-semibold bg-[#0D0D1A] text-white px-5 py-2.5 rounded-xl hover:bg-[#8116E0] transition-all duration-300 hover:shadow-[0_0_20px_rgba(129,22,224,0.4)]"
          >
            Commencer →
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`block w-5 h-0.5 bg-[#0D0D1A] transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-0.5 bg-[#0D0D1A] transition-all ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-[#0D0D1A] transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-2 mx-4 p-4 bg-white rounded-2xl shadow-xl border border-gray-100">
          <div className="mt-3 pt-3 border-t border-gray-100 flex flex-col gap-2">
            <button onClick={() => navigate('/login')} className="text-sm font-semibold text-[#0D0D1A] py-2">Connexion</button>
            <button onClick={() => navigate('/register')} className="text-sm font-semibold bg-[#0D0D1A] text-white py-2.5 rounded-xl">Commencer →</button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
