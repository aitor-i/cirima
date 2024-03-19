
import Image from 'next/image'
import cuadro from '@/../public/instal-electricas.jpg'
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

import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { SettingsIcon } from '@/components/Icons/Icons'

export default function ElectricServices() {
  return (
    <>
      <section className="overflow-hidden rounded-2xl">
        <div className="relative aspect-[2/1]">
          <Image
            alt="Hero"
            className="object-cover w-full rounded-t-2xl"
            height={600}
            src={cuadro}
            width={1200}
            placeholder='blur'
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
      <section className="my-40 grid items-center gap-6">
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
            {electricalServices.map(service => <Card key={service.titulo}>
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
    </>
  )
}
