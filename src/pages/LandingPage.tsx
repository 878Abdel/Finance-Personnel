// LandingPage.tsx
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const LandingPage = () => {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-[#F8F8F2]">
      <Navbar />
      <main className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="font-['Syne'] font-black text-6xl text-[#0D0D1A] mb-4">
            Mon<span className="text-[#8116E0]">Budget</span>
          </h1>
          <p className="text-gray-500 mb-8">Landing Page — En cours de construction 🚀</p>
          <button onClick={() => navigate('/dashboard')} className="bg-[#D0FF00] text-[#0D0D1A] font-bold px-6 py-3 rounded-xl">
            Voir le Dashboard →
          </button>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default LandingPage
