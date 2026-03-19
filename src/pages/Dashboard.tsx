import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-[#080810] flex items-center justify-center">
      <div className="text-center text-white">
        <h1 className="font-['Syne'] font-black text-4xl mb-2">
          Mon<span className="text-[#D0FF00]">Budget</span>
        </h1>
        <p className="text-white/40 mb-6">Dashboard — En cours 🚧</p>
        <button onClick={() => navigate('/')} className="text-[#8116E0] underline text-sm">← Landing Page</button>
      </div>
    </div>
  )
}

export default Dashboard
