import Link from "next/link"

export default function Header() {
  return (
    <header className="flex items-center py-6">
      <div className="container flex items-center gap-4">
        <Link className="flex items-center gap-2" href="#">
          <span className="text-lg font-semibold">Cirima</span>
        </Link>
        <nav className="ml-auto flex items-center gap-4 text-sm font-medium">
          <Link className="text-gray-900 dark:text-gray-100 px-2.5 py-2 rounded-md" href="#">
            Home
          </Link>
          <Link className="text-gray-900 dark:text-gray-100 px-2.5 py-2 rounded-md" href="#">
            Services
          </Link>
          <Link className="text-gray-900 dark:text-gray-100 px-2.5 py-2 rounded-md" href="#">
            Testimonials
          </Link>
          <Link className="text-gray-900 dark:text-gray-100 px-2.5 py-2 rounded-md" href="#">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
}
