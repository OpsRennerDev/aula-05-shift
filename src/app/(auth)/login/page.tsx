'use client'

// import { useEffect} from "react";
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation";
import { useUser } from "@/context/UserContext";
import { User } from "@/constants/types";

const loginSchema = z.object({
  email: z.string().email("Email inválido"),
  password: z.string().min(4, "Senha muito curta"),
})

type LoginData = z.infer<typeof loginSchema>

export default function Login() {
  const { login } = useUser()
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<LoginData>({
    resolver: zodResolver(loginSchema)
  })

  const onSubmit = (data: LoginData) => {
    const users: User[] = JSON.parse(localStorage.getItem("users") || "[]")
    const user = users.find(u => u.email === data.email && u.password === data.password)

    if (user){
      login({name: user.name || "Usuário", email: user.email})
      localStorage.setItem("loggedUser", JSON.stringify(user)) 
      alert("Logado")
      router.push("/")
    } else {
      alert('Credenciais inválidas')
    }
  }

  // useEffect(() => {
  //   const saved = localStorage.getItem("loggedUser")
  //   if (saved){
  //     const parsed: User = JSON.parse(saved)
  //     login({name: parsed.name || "Usuário", email: parsed.email})
  //   }
  // }, [login])


  return (
    <main className="flex items-center justify-center bg-blue-950 p-6">
      <div className="w-full shadow-xl bg-blue-800">
        <h2 className="justify-center text-2xl">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
          <div>
            <input 
              type="email" 
              placeholder="Email"
              className="w-full"
              {...register("email", {required: true})}
            />
            {errors.email && <p>{errors.email.message}</p>}
          </div>
          <div>
            <input 
              type="password" 
              placeholder="Sua senha"
              className="w-full"
              {...register("password", {required: true})}
            />
            {errors.password && <p>{errors.password.message}</p>}
          </div>
          <button type="submit">Entrar</button>
        </form>
      </div>
    </main>
  );
}
