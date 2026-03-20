// LandingPage.tsx
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const LandingPage = () => {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-[#fff9f0] to-[#f7f0ff] text-[#0b0b14]">
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
                  <button onClick={() => navigate('/register')} className="rounded-full bg-[#0d0d1a] text-white px-6 py-3 text-sm font-semibold shadow-lg shadow-[#00000033] hover:bg-[#2c0f78] transition-all">Try it for free</button>
                  <button onClick={() => navigate('/login')} className="rounded-full border border-[#0d0d1a] text-[#0d0d1a] px-6 py-3 text-sm font-semibold hover:bg-[#0d0d1a] hover:text-white transition-all">Demo</button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm text-gray-500">
                  <div className="rounded-2xl bg-white/70 p-3 shadow-sm border border-white/40">Smart Task Management</div>
                  <div className="rounded-2xl bg-white/70 p-3 shadow-sm border border-white/40">Integrated Calendar & Deadlines</div>
                  <div className="rounded-2xl bg-white/70 p-3 shadow-sm border border-white/40">Focus Mode to block distractions</div>
                </div>
              </div>

              <div className="relative flex justify-center">
                <div className="w-[280px] h-[420px] sm:w-[340px] sm:h-[500px] rounded-[36px] bg-gradient-to-b from-[#f6c3ff] via-[#ff8f8f] to-[#fff5a7] shadow-2xl border border-white/50 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.7),transparent_55%)]" />
                  <div className="absolute -bottom-10 -right-10 w-48 h-48 rounded-full bg-[#7c2dff]/30 blur-3xl" />
                  <div className="absolute inset-0 flex items-end justify-center pb-7">
                    <div className="w-[210px] h-[360px] rounded-3xl bg-[#0d0d1a] border border-white/20 shadow-xl relative overflow-hidden">
                      <div className="h-16 bg-gradient-to-r from-[#1e1e38] via-[#4b2f9f] to-[#f4547d]" />
                      <div className="px-4 py-3 space-y-2 text-white text-xs">
                        <div className="h-2 rounded-full bg-white/20 w-2/3" />
                        <div className="h-2 rounded-full bg-white/20 w-1/2" />
                        <div className="h-2 rounded-full bg-white/20 w-5/6" />
                        <div className="h-2 rounded-full bg-white/20 w-4/5" />
                        <div className="h-2 rounded-full bg-white/20 w-1/2" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-[#ececf8]">
              <h2 className="text-3xl font-extrabold">Designed to help you do more with less stress</h2>
              <p className="mt-3 text-gray-600">Notre app de productivité est conçue pour les professionnels modernes qui veulent rester organisés, concentrés et en contrôle.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="rounded-2xl bg-white p-4 shadow-lg border border-[#f1f0ff]">
                <h3 className="font-bold text-sm">Smart Task Management</h3>
                <p className="text-gray-500 text-xs mt-1">Créez, priorisez et gérez vos tâches de façon fluide.</p>
              </div>
              <div className="rounded-2xl bg-white p-4 shadow-lg border border-[#f1f0ff]">
                <h3 className="font-bold text-sm">Integrated Calendar</h3>
                <p className="text-gray-500 text-xs mt-1">Synchronisez vos échéances et vos objectifs.</p>
              </div>
              <div className="rounded-2xl bg-white p-4 shadow-lg border border-[#f1f0ff]">
                <h3 className="font-bold text-sm">Focus Mode</h3>
                <p className="text-gray-500 text-xs mt-1">Réduisez les interruptions et augmentez votre concentration.</p>
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
