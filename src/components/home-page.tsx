import Link from "next/link"

import Header from "./Header/Header"
import { HeatingServices } from "./services/HeatingServices/HeatingServices"

import ElectricServices from "./services/ElectricServices/ElectricServices"
import Feedback from "./FeedBack/Feedback"
import Hero from "./Sections/Hero/Hero"
import AboutUs from "./Sections/AboutUs/AboutUs"
import Certificates from "./Sections/Certificates/Certificates"
import Locate from "./Sections/Locate/Locate"
import Contact from "./Sections/Contact/Contact"

const dict = {
  description: "Somos una empresa que está dedicada desde hace más de 40 años al mantenimiento de instalaciones de calefacción, agua caliente sanitaria y a trabajos de electricidad, tanto en instalaciones nuevas como reparaciones. ontamos con la certificación <b>ISO 9001 </b> y pertenecemos a la <b>Asociación de Mantenedores de calor y frío de Navarra </b>."
}


export function HomePage() {
  return (
    <div className="grid grid-rows-[auto 1fr auto] gap-6 min-h-screen px-4 sm:px-6 lg:px-8">
      <Header />
      <main className="grid items-center gap-12">
        <Hero />
        <AboutUs description={dict.description} />
        <ElectricServices />
        <HeatingServices />
        <Feedback />
        <Certificates />
        <Locate />
        <Contact />
      </main>

      <footer className="grid items-center py-12">
        <div className="container grid items-center gap-4 text-center sm:text-left">
          <nav className="flex flex-col gap-2 text-sm">
            <Link className="font-medium" href="#">
              Home
            </Link>
            <Link className="font-medium" href="#">
              Services
            </Link>
            <Link className="font-medium" href="#">
              Testimonials
            </Link>
            <Link className="font-medium" href="#">
              Contact
            </Link>
          </nav>
          <div className="grid gap-2 text-sm">
            <span className="opacity-70">© 2023 Electrician</span>
            <span className="opacity-70">Terms of Service | Privacy Policy</span>
          </div>
        </div>
      </footer>
    </div>
  )
}




