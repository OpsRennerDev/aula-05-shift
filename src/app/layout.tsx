import './globals.css'
import type { Metadata } from 'next'
import Menu from '../components/Menu'
import { UserProvider } from '@/context/UserContext'

export const metadata: Metadata = {
  title: 'Aula 05 SHIFT',
  description: 'Projeto Next.js App Router',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="flex flex-col min-h-screen">
        <UserProvider>
          <header className="bg-blue-500 text-white p-4">
            <h1 className="text-2xl font-bold">Projeto Aula 05</h1>
          </header>
          <Menu />
          <main className="flex-1 p-6">{children}</main>
          <footer className="bg-blue-500 text-white p-4 text-center">
            &copy; 2025 - SHIFT
          </footer>
        </UserProvider>
      </body>
    </html>
  )
}
