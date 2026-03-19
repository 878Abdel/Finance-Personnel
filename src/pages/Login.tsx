import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-[#080810] flex items-center justify-center">
      <div className="text-center text-white">
        <h1 className="font-['Syne'] font-black text-4xl mb-4">Connexion</h1>
        <p className="text-white/40 mb-6">Page Login — En cours 🚧</p>
        <div className="flex gap-3 justify-center">
          <button onClick={() => navigate('/register')} className="text-[#D0FF00] underline text-sm">Inscription</button>
          <button onClick={() => navigate('/dashboard')} className="bg-[#D0FF00] text-[#0D0D1A] font-bold px-5 py-2 rounded-xl text-sm">Dashboard →</button>
        </div>
      </div>
    </div>
  )
}

export default Login
