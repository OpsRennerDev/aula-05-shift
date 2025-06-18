'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";

type User = {
  email: string;
  password: string;
}

export default function Login() {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  
  const router = useRouter()
  
  const handleLogin = (e: any) => {
    e.preventDefault()
    const users: User[] = JSON.parse(localStorage.getItem("users") || "[]") //as User
    const user = users.find(u => u.email === email && u.password === password)
    
    if (user){
      alert("Logado") // isso é
      localStorage.setItem("loggedUser", JSON.stringify(user)) //o mesmo que isso
      router.push("/")
    } else {
      alert('Credenciais inválidas')
    }
  }

  return (
    <main className="flex items-center justify-center bg-blue-950 p-6">
      <div className="w-full shadow-xl bg-blue-800">
        <h2 className="justify-center text-2xl">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4 mt-4">
          <input 
            type="email" 
            placeholder="Email"
            className="w-full"
            value={email}
            onChange={e => setEmail(e.target.value)} 
          />
          <input 
            type="password" 
            placeholder="Sua senha"
            className="w-full"
            value={password}
            onChange={e => setPassword(e.target.value)} 
          />
          <button type="submit">Entrar</button>
        </form>
      </div>
    </main>
  );
}
