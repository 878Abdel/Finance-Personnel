import { useNavigate } from 'react-router-dom'

export const Register = () => {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-[#080810] flex items-center justify-center">
      <div className="text-center text-white">
        <h1 className="font-['Syne'] font-black text-4xl mb-4">Inscription</h1>
        <p className="text-white/40 mb-6">Page Register — En cours 🚧</p>
        <button onClick={() => navigate('/login')} className="text-[#D0FF00] underline text-sm">Déjà inscrit ? Connexion</button>
      </div>
    </div>
  )
}

export default Register
