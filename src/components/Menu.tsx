'use client'

import Link from "next/link";
import { useUser } from "@/context/UserContext";
import { usePathname } from "next/navigation";


const links = [
  { href: "/", label: "Home" },
  { href: "/sobre", label: "Sobre" }, 
  { href: "/contato", label: "Contato" },
  { href: "/login", label: "Login" },
  { href: "/register", label: "Registrar" },
];

export default function Menu() {
  const pathname = usePathname();
  const { user } = useUser()

  // if(user) {
  //   return <div></div>
  // } else {
  //   return null
  // }

  // {user ? (div) : null}
  return (
    <nav className="flex gap-4 p-4">
      {links.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className={`hover:underline ${pathname === href ? "font-bold text-blue-600" : ""}`}
        >
          {label}
        </Link>
      ))}
      <div>
        {user && (
          <div className="text-sm">
            👀 {user.name}
          </div>
        )}
      </div>
    </nav>
  );
}
