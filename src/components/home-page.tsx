import Link from "next/link"
import { CardContent, Card, CardFooter } from "@/components/ui/card"

import Image from 'next/image'
import Header from "./Header/Header"
import certificadoER from '@/../public/certificado-er-cirima.jpg'
import certificadoIqnet from '@/../public/certificado-iqnet.jpg'
import ebara from '@/../public/ebara-logo.jpg'
import arc from '@/../public/logo-arc.jpg'
import { CheckIcon, LocateIcon, MailIcon, PhoneIcon, SettingsIcon, StarIcon, WrenchIcon } from "./Icons/Icons"
import { HeatingServices } from "./services/HeatingServices/HeatingServices"

import dynamic from "next/dynamic"
import ElectricServices from "./services/ElectricServices/ElectricServices"


const ContactForm = dynamic(() => import('./ContactForm/ContactForm'), { ssr: false })

export function HomePage() {
  return (
    <div className="grid grid-rows-[auto 1fr auto] gap-6 min-h-screen px-4 sm:px-6 lg:px-8">
      <Header />
      <main className="grid items-center gap-12">

        <ElectricServices />

        <section className="my-40 md:mx-32 grid items-center gap-6">
          <div className="container grid items-center gap-8 text-center md:text-left">
            <div className="grid items-center gap-2 text-center">
              <h2 className="text-3xl md:text-6xl font-bold tracking-tight">Cirima</h2>
            </div>
            <p className="mx-auto md:text-xl max-w-3xl text-gray-500 md:text-left">
              Somos una empresa que está dedicada desde hace más de 40 años al mantenimiento de instalaciones de calefacción, agua caliente sanitaria y a trabajos de electricidad, tanto en instalaciones nuevas como reparaciones.
              Contamos con la certificación <b>ISO 9001 </b> y pertenecemos a la <b>Asociación de Mantenedores de calor y frío de Navarra </b>.
            </p>
            <Link
              className="inline-flex h-10 md:w-40 place-self-center items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-blue-200 px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-blue-800 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
              href="mailto:cirima@cirima.es"
            >
              Contactanos
            </Link>
          </div>
        </section>

        <HeatingServices />

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
          <div className="relative aspect-[2/1]">
            <img
              alt="Testimonials"
              className="object-cover w-full rounded-t-2xl"
              height={600}
              src="/placeholder.svg"
              style={{
                aspectRatio: "1200/600",
                objectFit: "cover",
              }}
              width={1200}
            />
            <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
              <div className="grid gap-6">
                <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                  Satisfied Customers, Glowing Reviews
                </h2>
                <p className="mx-auto max-w-2xl text-gray-500">
                  Our customers appreciate our dedication to quality and professionalism. Here's what they have to say
                  about our services:
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="grid items-center gap-6">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="grid items-center gap-4 px-6 py-6">
                <CardContent className="text-center">
                  <div className="mx-auto w-12 h-12 text-2xl" />
                  <blockquote className="mt-4 text-lg font-medium text-gray-500">
                    The electrician from this company was prompt, professional, and very knowledgeable. They quickly
                    identified the issue with my circuit and had it fixed in no time. I was impressed by their attention
                    to detail and courteous service. I highly recommend them for any electrical work.
                  </blockquote>
                </CardContent>
                <CardFooter className="flex flex-col gap-2 text-sm">
                  <div className="font-medium">Alice Johnson</div>
                  <div className="text-gray-500">Residential Customer</div>
                </CardFooter>
              </Card>
              <Card className="grid items-center gap-4 px-6 py-6">
                <CardContent className="text-center">
                  <div className="mx-auto w-12 h-12 text-2xl" />
                  <blockquote className="mt-4 text-lg font-medium text-gray-500">
                    I hired this company to upgrade the lighting in my restaurant, and I'm extremely satisfied with the
                    results. The new lighting has transformed the ambiance of the place, and my customers love it. The
                    team was professional, and the work was completed on time. I couldn't be happier with the service.
                  </blockquote>
                </CardContent>
                <CardFooter className="flex flex-col gap-2 text-sm">
                  <div className="font-medium">Mark Davis</div>
                  <div className="text-gray-500">Restaurant Owner</div>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        <section className="grid items-center gap-6">
          <div className="container grid items-center gap-6 text-center md:text-left">
            <div className="grid items-center gap-2">
              <MailIcon className="w-8 h-8 flex-shrink-0" />
              <h2 className="text-3xl font-bold tracking-tight">Contact Us for Expert Electrical Services</h2>
            </div>
            <p className="mx-auto max-w-3xl text-gray-500 md:text-left">
              Ready to experience the best in electrical services? Contact us to discuss your project or schedule a
              service call. We're here to provide the expertise and solutions you need.
            </p>
          </div>
          <div className="container max-w-lg">
            <div className="grid items-center gap-4">
              <div className="grid items-center gap-2">
                <LocateIcon
                  className="w-6 h-6 opacity-50" />
                <span className="text-sm leading-none">123 Main St, Cityville</span>
              </div>
              <div className="grid items-center gap-2">
                <PhoneIcon className="w-6 h-6 opacity-50" />
                <span className="text-sm leading-none">(555) 123-4567</span>
              </div>
              <div className="grid items-center gap-2">
                <MailIcon className="w-6 h-6 opacity-50" />
                <span className="text-sm leading-none">info@example.com</span>
              </div>
            </div>
            <ContactForm />
          </div>
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




