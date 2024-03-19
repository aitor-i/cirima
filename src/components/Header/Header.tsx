import Link from "next/link"
import Image from "next/image"
import logo from "@/../public/logo-cirima2.png"

export default function Header() {
  return (
    <header className="flex items-center py-6">
      <div className="container flex items-center gap-4">
        <Link className="flex w-44 items-center gap-2" href="#">
          <Image src={logo} alt="Cirima - electiricidad SL" />
        </Link>
        <nav className="ml-auto flex items-center gap-4 text-sm font-medium">
          <Link className="text-gray-900 dark:text-gray-100 px-2.5 py-2 rounded-md" href="#">
            Home
          </Link>
          <Link className="text-gray-900 dark:text-gray-100 px-2.5 py-2 rounded-md" href="#">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
}
