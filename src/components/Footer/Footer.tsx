import Link from "next/link"

export default function Footer() {
  return (

    <footer className="grid items-center px-4 sm:px-6 lg:px-8 bg-blue-700 text-white font-bold py-12">
      <div className="container grid items-center gap-4 text-center sm:text-left">
        <nav className="flex flex-col gap-2 text-sm">
          <Link className="font-medium" href="/">
            Home
          </Link>
          <Link className="font-medium" href="/shop">
            Tienda
          </Link>
          <Link className="font-medium" href="/login">
            Acceso
          </Link>
        </nav>
        <div className="grid gap-2 text-sm">
          <span className="opacity-70">© 2024 Cirima</span>
        </div>
      </div>
    </footer>
  )
}
