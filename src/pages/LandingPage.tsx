// LandingPage.tsx
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const LandingPage = () => {
  const navigate = useNavigate()
  
  const ledGlowStyle = `
    @keyframes ledPulse {
      0%, 100% {
        box-shadow: 0 0 20px rgba(209, 255, 0, 0.6), 0 0 40px rgba(209, 255, 0, 0.4), 0 0 60px rgba(209, 255, 0, 0.2);
      }
      50% {
        box-shadow: 0 0 30px rgba(209, 255, 0, 0.8), 0 0 50px rgba(209, 255, 0, 0.6), 0 0 80px rgba(209, 255, 0, 0.3);
      }
    }
    .led-glow {
      animation: ledPulse 2s ease-in-out infinite;
      border-radius: 16px;
      border: 2px solid rgba(209, 255, 0, 0.5);
      padding: 4px;
    }
  `
  
  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat text-[#0b0b14]" style={{ backgroundImage: 'url(/images/card-hand.png)' }}>
      <style>{ledGlowStyle}</style>
      <Navbar />

      <main className="relative overflow-hidden pt-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <section className="relative z-10 pt-10 pb-16 md:pb-24">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div className="space-y-6">
                <p className="inline-flex items-center gap-2 rounded-full bg-[#f5ebff] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#7a22ff]">Vos Finances,Une Priorité    </p>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight">Vos Finances,<br />Une Priorité</h1>
                <p className="max-w-xl text-gray-600 text-base sm:text-lg">Une Bonne Gestion,Une Bonne Santé.</p>
                <div className="flex flex-wrap gap-3 items-center">
                  <button onClick={() => navigate('/register')} className="rounded-full bg-[#0d0d1a] text-white px-6 py-3 text-sm font-semibold shadow-lg shadow-[#00000033] hover:bg-[#2c0f78] transition-all">Inscription</button>
                  <button onClick={() => navigate('/login')} className="rounded-full border border-[#0d0d1a] text-[#0d0d1a] px-6 py-3 text-sm font-semibold hover:bg-[#0d0d1a] hover:text-white transition-all">Connexion</button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm text-gray-500">
                  <div className="rounded-2xl bg-white/70 p-3 shadow-sm border border-white/40">Gestion Intelligente des Tâches</div>
                  <div className="rounded-2xl bg-white/70 p-3 shadow-sm border border-white/40">Calendrier Intégré et Échéances</div>
                  <div className="rounded-2xl bg-white/70 p-3 shadow-sm border border-white/40">Mode Focus pour bloquer les distractions</div>
                </div>
              </div>

              <div className="relative flex justify-center">
                <div className="led-glow">
                  <img src="/images/dashboard.png" alt="Dashboard" className="w-full max-w-lg drop-shadow-2xl rounded-xl" />
                </div>
              </div>
            </div>
          </section>
        </div>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-[#ececf8]">
              <h2 className="text-3xl font-extrabold">Conçu pour vous aider à mieux gérer vos finances  avec moins de stress</h2>
              <p className="mt-3 text-gray-600">Notre app de gestion financière est conçue pour tous ceux qui veulent rester organisés, concentrés et en contrôle.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="rounded-2xl bg-white p-4 shadow-lg border border-[#f1f0ff]">
                <h3 className="font-bold text-sm">Gestion Intelligente des Finances</h3>
                <p className="text-gray-500 text-xs mt-1"> priorisez et gérez vos finances de façon fluide.</p>
              </div>
              <div className="rounded-2xl bg-white p-4 shadow-lg border border-[#f1f0ff]">
                <h3 className="font-bold text-sm">Calendrier Intégré</h3>
                <p className="text-gray-500 text-xs mt-1">Synchronisez vos finances et vos objectifs.</p>
              </div>
              <div className="rounded-2xl bg-white p-4 shadow-lg border border-[#f1f0ff]">
                <h3 className="font-bold text-sm">Mode Focus</h3>
                <p className="text-gray-500 text-xs mt-1">Réduisez les dépenses et augmentez vos économies.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default LandingPage
