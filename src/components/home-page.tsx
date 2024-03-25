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
    </div>
  )
}




