import { useNavigate } from 'react-router-dom'
import { useState } from "react"

const ForgotPassword = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const handleReset = () => {
  const storedUser = localStorage.getItem("user")

  if (!storedUser) {
    alert("Aucun compte trouvé") 
    return
  }

  const user = JSON.parse(storedUser)

  if (email !== user.email) {
    alert("Email incorrect ❌")
    return
  }

  // mise à jour du mot de passe
  user.password = newPassword
  localStorage.setItem("user", JSON.stringify(user))

  alert("Mot de passe réinitialisé ✅")

  navigate("/login")
}

  return (
  <div className="min-h-screen bg-[#080810] flex items-center justify-center">
    <div className="text-center text-white w-full max-w-md">

      <h1 className="text-4xl mb-4">Réinitialisation</h1>

      <p className="text-white/60 mb-6">
        Entre ton email pour réinitialiser ton mot de passe
      </p>

      <input
  type="email"
  placeholder="Ton email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  className="w-full p-3 mb-3 rounded bg-gray-800"
/>

<input
  type="password"
  placeholder="Nouveau mot de passe"
  value={newPassword}
  onChange={(e) => setNewPassword(e.target.value)}
  className="w-full p-3 mb-4 rounded bg-gray-800"
/>

<button
  onClick={handleReset}
  className="w-full bg-[#D0FF00] text-[#0D0D1A] font-bold py-3 rounded"
>
  Réinitialiser
</button>

      <p className="mt-4">
        <span
          onClick={() => navigate("/login")}
          className="text-[#D0FF00] underline cursor-pointer"
        >
          ← Retour connexion
        </span>
      </p>

    </div>
  </div>
)
}

export default ForgotPassword
