import Link from "next/link"
import { CardContent, Card, CardFooter } from "@/components/ui/card"

import Image from 'next/image'
import Header from "./Header/Header"
import certificadoER from '@/../public/certificado-er-cirima.jpg'
import certificadoIqnet from '@/../public/certificado-iqnet.jpg'
import ebara from '@/../public/ebara-logo.jpg'
import calefacioneFotot from '@/../public/calefaccion-y-agua-caliente.jpg'
import arc from '@/../public/logo-arc.jpg'
import { CheckIcon, MountainIcon, LocateIcon, MailIcon, PhoneIcon, SettingsIcon, StarIcon, WrenchIcon } from "./Icons/Icons"
import { HeatingServices } from "./services/HeatingServices/HeatingServices"

import dynamic from "next/dynamic"
import ElectricServices from "./services/ElectricServices/ElectricServices"
import ContactInfo from "./ContactInfo/ContactInfo"
import Feedback from "./FeedBack/Feedback"
import Hero from "./Sections/Hero/Hero"
import AboutUs from "./Sections/AboutUs/AboutUs"

const dict = {
  description: "Somos una empresa que está dedicada desde hace más de 40 años al mantenimiento de instalaciones de calefacción, agua caliente sanitaria y a trabajos de electricidad, tanto en instalaciones nuevas como reparaciones. ontamos con la certificación <b>ISO 9001 </b> y pertenecemos a la <b>Asociación de Mantenedores de calor y frío de Navarra </b>."
}

const ContactForm = dynamic(() => import('./ContactForm/ContactForm'), { ssr: false })
const MapComponent = dynamic(() => import('./MapComponent/MapComponent'), { ssr: false })

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
        <section className="grid items-center gap-6">
          <div className="container grid items-center gap-6 text-center md:text-left">
            <div className="grid items-center gap-2">
              <WrenchIcon className="w-8 h-8 flex-shrink-0" />
              <h2 className="text-3xl font-bold tracking-tight">Certificados y distribuidores</h2>
            </div>
          </div>
          <div className="container">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 items-center gap-6">

              <a href={"@/../public/CertificadoER-1453-2005_ES_2020-07-03.pdf"} download={"Certificado ER"}>
                <Image
                  className="rounded-lg h-64 w-64"
                  alt="certificadoER"
                  style={{
                    objectFit: "cover",
                  }}
                  src={certificadoER} />

              </a>
              <a href={"@/../public/CertificadoER-1453-2005_ES_2020-07-03.pdf"} download={"Certificado ER"}>
                <Image
                  className="rounded-lg h-64 w-64"
                  alt="certificadoER"
                  style={{
                    objectFit: "cover",
                  }}
                  src={certificadoIqnet} />

              </a>
              <Image
                className="rounded-lg h-64"
                alt="certificadoER"
                style={{
                  // objectFit: "cover",
                }}
                src={ebara} />

              <Image
                className="rounded-lg h-64 w-64"
                style={{
                  // objectFit: "cover",
                }}
                alt="certificadoER"
                src={arc} />

            </div>
          </div>
        </section>

        <section className="overflow-hidden rounded-2xl">
          <div className="grid items-center mb-4 gap-2">
            <LocateIcon />
            <h2 className="text-3xl font-bold tracking-tight">Encuentranos aqui</h2>
          </div>
          <div className="relative rounded-lg aspect-[2/1]">
            <MapComponent />
          </div>
        </section>

        <section className="grid items-center grid-cols-1 md:grid-cols-2 gap-6">
          <div className="container max-w-lg">
            <ContactForm />
          </div>
          <ContactInfo />
        </section>


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




