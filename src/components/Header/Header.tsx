import Link from "next/link"
import Image from "next/image"
import logo from "@/../public/logo-cirima2.png"
import { TelephoneIcon } from "../Icons/Icons"

export default function Header() {
  return (
    <header className="flex items-center py-6 px-4 sm:px-6 lg:px-8">
      <div className="container flex items-center gap-4">
        <Link className="flex w-44 items-center gap-2" href="/">
          <Image src={logo} alt="Cirima - electiricidad SL" />
        </Link>
        <nav className="ml-auto flex items-center gap-4 text-sm font-medium">
          <Link className="text-gray-900 dark:text-gray-100 px-2.5 py-2 rounded-md" href="/shop">
            Tienda
          </Link>
          <Link className="text-gray-900 dark:text-gray-100 px-2.5 py-2 rounded-md" href="https://www.piconec.es/Account/Login?ReturnUrl=%2F">
            Acceso usuarios
          </Link>
          <Link className="text-gray-900 dark:text-gray-100 px-2.5 py-2 rounded-md" href="tel:948 266 157">
            948 266 157
          </Link>
        </nav>
      </div>
    </header>
  )
}
