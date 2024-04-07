import React from "react";
import { CardContent, Card, CardFooter } from "@/components/ui/card";

import Image from "next/image";
import caldera from "@/../public/cirima-mantenimiento.jpg";
import { WrenchIcon } from "@/components/Icons/Icons";

export const HeatingServices = (props: {}) => {
  const services = [
    {
      titulo: "Mantenimiento",
      descripcion:
        "Mantenimientos de salas de calderas completas de gas, gasóleo, solar en comunidades de propietarios, empresas, instituciones públicas…",
    },
    {
      titulo: "Revisiones",
      descripcion:
        "Realizamos las revisiones correctivas y preventivas en las instalaciones.",
    },
    {
      titulo: "Transformaciones",
      descripcion:
        "Transformaciones de gasóleo a gas, reformas integrales de salas de calderas, puesta de marcha de nueva instalación e implantación de telegestiones.",
    },
  ];
  return (
    <>
      <section className="overflow-hidden rounded-2xl">
        <div className="relative aspect-[2/1]">
          <Image
            alt="Hero"
            className="object-cover w-full rounded-t-2xl"
            height={600}
            src={caldera}
            width={1200}
            placeholder="blur"
          />
          <div className="absolute inset-0 flex items-center justify-center p-6 text-center bg-black bg-opacity-50 backdrop-blur-sm">
            <div className="grid gap-6">
              <h1 className="text-4xl lg:text-8xl font-bold tracking-tight text-gray-100">
                Instalaciones de calefacción
              </h1>
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
            <WrenchIcon className="w-8 h-8 flex-shrink-0" />
            <h2 className="text-3xl font-bold tracking-tight">
              Instalaciones de calefacción
            </h2>
          </div>
          <p className="mx-auto max-w-3xl text-gray-500 md:text-left">
            En CIRIMA somos especialistas en instalaciones de calefacción,
            tenemos todos los requisitos como empresa autorizada para realizar
            el servicio de mantenimiento de sala calderas por la que toda
            instalación superior a 70 Kw está obligada a realizar cumpliendo la
            normativa RITE y por supuesto, satisfacción, confort y seguridad al
            cliente.
          </p>
        </div>

        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 items-center gap-6">
            {services.map((service) => (
              <Card key={service.titulo}>
                <CardContent className="flex-col flex p-3 gap-[6px] text-sm h-48">
                  <span className="font-bold mb-6 text-lg">
                    {service.titulo}
                  </span>
                  <span className="font-semibold text-gray-500">
                    Description:
                  </span>
                  <span>{service.descripcion}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
