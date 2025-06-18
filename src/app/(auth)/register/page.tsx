'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";

type User = {
  name: string;
  email: string;
  password: string;
}


export default function Register() {
  const [name, setName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const router = useRouter()

  const handleRegister = (e: any) => {
    e.preventDefault()
    const users: User[] = JSON.parse(localStorage.getItem("users") || "[]")
    users.push({name, email, password})
    localStorage.setItem("users", JSON.stringify(users))
    alert("Cadastro realizado")
    router.push("/login")
  }

  return (
    <main className="flex items-center justify-center bg-blue-950 p-6">
      <div className="w-full shadow-xl bg-blue-800">
        <h2 className="justify-center text-2xl">Registro</h2>
        <form onSubmit={handleRegister} className="space-y-4 mt-4">
          <input 
            type="name" 
            className="w-full"
            placeholder="Insira seu nome" 
            value={name}
            onChange={e => setName(e.target.value)} 
          />
          <input 
            type="email" 
            placeholder="Email" 
            className="w-full"
            value={email}
            onChange={e => setEmail(e.target.value)} 
          />
          <input 
            type="password" 
            placeholder="Insira uma senha" 
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
