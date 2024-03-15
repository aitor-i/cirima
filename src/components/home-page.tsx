import Link from "next/link"
import { CardContent, Card, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

import Image from 'next/image'
import cuadro from '@/../public/instal-electricas.jpg'
import caldera from '@/../public/cirima-mantenimiento.jpg'
import Header from "./Header/Header"

const services = [
  {
    titulo: "Mantenimiento",
    descripcion: "Mantenimientos de salas de calderas completas de gas, gasóleo, solar en comunidades de propietarios, empresas, instituciones públicas…"
  },
  {
    titulo: "Revisiones",
    descripcion: "Realizamos las revisiones correctivas y preventivas en las instalaciones."
  },
  {
    titulo: "Transformaciones",
    descripcion: "Transformaciones de gasóleo a gas, reformas integrales de salas de calderas, puesta de marcha de nueva instalación e implantación de telegestiones."
  }
]
const electricalServices = [
  {
    titulo: "Cuadros electricos",
    descripcion: "Cuadros eléctricos generales completos con autómatas para alumbrados, regulación de sistemas de calefacción, climatización y agua caliente sanitaria"
  },
  {
    titulo: "Led",
    descripcion: "Instalación de luminarias con lámparas LED."
  },
  {
    titulo: "Automaticaciones",
    descripcion: "Detectores de movimiento, Centralización de contadores, "
  },
  {
    titulo: "Boletines",
    descripcion: "Elaboración de boletines y certificación de la instalación."
  },
  {
    titulo: "Correcion de gastos",
    descripcion: "Corrección de gastos por energía reactiva en facturas eléctricas."
  }

]
export function HomePage() {
  return (
    <div className="grid grid-rows-[auto 1fr auto] gap-6 min-h-screen px-4 sm:px-6 lg:px-8">
      <Header />
      <main className="grid items-center gap-12">

        <section className="overflow-hidden rounded-2xl">
          <div className="relative aspect-[2/1]">
            <Image
              alt="Hero"
              className="object-cover w-full rounded-t-2xl"
              height={600}
              src={cuadro}
              width={1200}
            />
            <div className="absolute inset-0 flex items-center justify-center p-6 text-center bg-black bg-opacity-50 backdrop-blur-sm">
              <div className="grid gap-6">
                <h1 className="text-4xl lg:text-8xl font-bold tracking-tight text-gray-100">Instalaciones eléctricas</h1>
                <p className="mx-auto max-w-2xl lg:text-3xl text-gray-200">
                  Mantenimientos & Reparaciones.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="my-40 md:mx-32 grid items-center gap-6">
          <div className="container grid items-center gap-6 text-center md:text-left">
            <div className="grid items-center gap-2">
              <SettingsIcon className="w-8 h-8 flex-shrink-0" />
              <h2 className="text-3xl font-bold tracking-tight">Instalaciones electricas y optimicaciones</h2>
            </div>
            <p className="mx-auto max-w-3xl text-gray-500 md:text-left">
              Especialistas en instalaciones eléctricas y reparaciones de todo tipo en empresas, comunidades de propietarios, administradores e instituciones públicas.
            </p>
          </div>

          <div className="container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 items-center gap-6">
              {electricalServices.map(service => <Card>
                <CardContent key={service.titulo} className="flex-col flex p-3 gap-[6px] text-sm h-48">
                  <span className="font-bold mb-6 text-lg">{service.titulo}</span>
                  <span className="font-semibold text-gray-500">Description:</span>
                  <span>{service.descripcion}</span>
                </CardContent>
              </Card>
              )}
            </div>
          </div>
        </section>

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

        <section className="overflow-hidden rounded-2xl">
          <div className="relative aspect-[2/1]">
            <Image
              alt="Hero"
              className="object-cover w-full rounded-t-2xl"
              height={600}
              src={caldera}
              width={1200}
            />
            <div className="absolute inset-0 flex items-center justify-center p-6 text-center bg-black bg-opacity-50 backdrop-blur-sm">
              <div className="grid gap-6">
                <h1 className="text-4xl font-bold tracking-tight text-gray-100">Instalaciones de calefacción</h1>
                <p className="mx-auto max-w-2xl text-gray-200">
                  Mantenimientos & Reparaciones.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="my-40 md:mx-32 grid items-center gap-6">
          <div className="container grid items-center gap-6 text-center md:text-left">
            <div className="grid items-center gap-2">
              <WrenchIcon className="w-8 h-8 flex-shrink-0" />
              <h2 className="text-3xl font-bold tracking-tight">Instalaciones de calefacción</h2>
            </div>
            <p className="mx-auto max-w-3xl text-gray-500 md:text-left">
              En CIRIMA somos especialistas en instalaciones de calefacción, tenemos todos los requisitos como empresa autorizada para realizar el servicio de mantenimiento de sala calderas por la que toda instalación superior a 70 Kw está obligada a realizar cumpliendo la normativa RITE y por supuesto, satisfacción, confort y seguridad al cliente.
            </p>
          </div>

          <div className="container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 items-center gap-6">
              {services.map(service => <Card>
                <CardContent key={service.titulo} className="flex-col flex p-3 gap-[6px] text-sm h-48">
                  <span className="font-bold mb-6 text-lg">{service.titulo}</span>
                  <span className="font-semibold text-gray-500">Description:</span>
                  <span>{service.descripcion}</span>
                </CardContent>
              </Card>
              )}
            </div>
          </div>
        </section>

        <section className="grid items-center gap-6">
          <div className="container grid items-center gap-6 text-center md:text-left">
            <div className="grid items-center gap-2">
              <WrenchIcon className="w-8 h-8 flex-shrink-0" />
              <h2 className="text-3xl font-bold tracking-tight">Electrical Maintenance Services</h2>
            </div>
            <p className="mx-auto max-w-3xl text-gray-500 md:text-left">
              Regular maintenance is essential for the safety and performance of your electrical system. We offer
              comprehensive maintenance services to keep your electrical system in top condition.
            </p>
          </div>
          <div className="container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 items-center gap-6">
              <Card>
                <CardContent className="grid gap-2 text-sm">
                  <span className="font-semibold text-gray-500">Service:</span>
                  <span>Electrical Inspection</span>
                  <span className="font-semibold text-gray-500">Description:</span>
                  <span>
                    Thorough inspection of the electrical system to identify potential issues and ensure compliance with
                    safety standards.
                  </span>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="grid gap-2 text-sm">
                  <span className="font-semibold text-gray-500">Service:</span>
                  <span>Surge Protection Installation</span>
                  <span className="font-semibold text-gray-500">Description:</span>
                  <span>
                    Installing surge protection devices to safeguard electronic devices and appliances from power
                    surges.
                  </span>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="grid gap-2 text-sm">
                  <span className="font-semibold text-gray-500">Service:</span>
                  <span>Wire & Cable Maintenance</span>
                  <span className="font-semibold text-gray-500">Description:</span>
                  <span>
                    Cleaning and maintenance of wires and cables to prevent corrosion and ensure optimal conductivity.
                  </span>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="overflow-hidden rounded-2xl">
          <div className="relative aspect-[2/1]">
            <img
              alt="Services"
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
                  Quality Electrical Services
                </h2>
                <p className="mx-auto max-w-2xl text-gray-500">
                  Experienced in providing a wide range of electrical services to meet your needs.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="grid items-center gap-6">
          <div className="container grid items-center gap-6 text-center md:text-left">
            <div className="grid items-center gap-2">
              <StarIcon className="w-8 h-8 flex-shrink-0" />
              <h2 className="text-3xl font-bold tracking-tight">Trusted & Reliable Electrician</h2>
            </div>
            <p className="mx-auto max-w-3xl text-gray-500 md:text-left">
              Our team is dedicated to providing exceptional service, and our customers' satisfaction is our top
              priority. We are committed to professionalism, quality workmanship, and safety in every project we
              undertake.
            </p>
          </div>
          <div className="container grid md:grid-cols-2 gap-6">
            <div className="grid items-center gap-4">
              <img
                alt="Team"
                className="rounded-full"
                height={400}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "400/400",
                  objectFit: "cover",
                }}
                width={400}
              />
            </div>
            <div className="grid items-center gap-4">
              <ul className="grid gap-2">
                <li className="grid gap-1.5">
                  <CheckIcon className="w-4 h-4 opacity-50" />
                  <span className="text-sm leading-none">Licensed & Insured Electricians</span>
                </li>
                <li className="grid gap-1.5">
                  <CheckIcon className="w-4 h-4 opacity-50" />
                  <span className="text-sm leading-none">Safety is Our Top Priority</span>
                </li>
                <li className="grid gap-1.5">
                  <CheckIcon className="w-4 h-4 opacity-50" />
                  <span className="text-sm leading-none">Courteous & Professional Service</span>
                </li>
              </ul>
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
                <LocateIcon className="w-6 h-6 opacity-50" />
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
            <div className="mt-8">
              <form className="grid gap-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input placeholder="First Name" />
                  <Input placeholder="Last Name" />
                </div>
                <Input placeholder="Email" type="email" />
                <Input placeholder="Phone" />
                <Textarea className="min-h-[10rem]" placeholder="Your Message" />
                <Button type="submit">Submit</Button>
              </form>
            </div>
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




function BoldIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 12a4 4 0 0 0 0-8H6v8" />
      <path d="M15 20a4 4 0 0 0 0-8H6v8Z" />
    </svg>
  )
}


function SettingsIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}


function WrenchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  )
}


function StarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}


function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}


function MailIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}


function LocateIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>
  )
}


function PhoneIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}
