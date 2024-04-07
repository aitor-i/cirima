import Link from "next/link";

import Image from "next/image";
import calefacioneFotot from "@/../public/calefaccion-y-agua-caliente.jpg";

export default function Hero() {
  return (
    <section className="overflow-hidden rounded-2xl">
      <div className="relative aspect-[2/1]">
        <Image
          alt="Hero"
          className="object-cover w-full rounded-t-2xl"
          height={600}
          src={calefacioneFotot}
          width={1200}
          placeholder="blur"
        />
        <div className="absolute inset-0 flex items-center justify-center p-6 text-center bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="grid gap-6">
            <h1 className="text-4xl lg:text-8xl font-bold tracking-tight text-gray-100">
              Cirima
            </h1>
            <p className="mx-auto max-w-2xl lg:text-3xl text-gray-200">
              Mantenimientos & Reparaciones.
            </p>
            <Link
              className="inline-flex h-10 md:w-40 place-self-center items-center justify-center rounded-md border  border-gray-200 bg-blue-200 px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-blue-800 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
              href="mailto:cirima@cirima.es"
            >
              Contactanos
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
