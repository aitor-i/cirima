import Link from "next/link";

interface Props {
  description: string;
}

export default function AboutUs({ description }: Props) {
  return (
    <section className=" my-40 md:mx-32 grid items-center gap-6">
      <div className="container grid items-center gap-8 text-center md:text-left">
        <div className="grid items-center gap-2 text-center">
          <h2 className="text-3xl md:text-6xl font-bold tracking-tight">
            Sobre nosotros
          </h2>
        </div>
        <p
          className="mx-auto md:text-xl max-w-3xl text-gray-500 md:text-left"
          dangerouslySetInnerHTML={{ __html: description }}
        ></p>
        <Link
          className="inline-flex h-10 md:w-40 place-self-center items-center justify-center rounded-md border  border-gray-200 bg-blue-500 text-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-blue-600 hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-blue-800 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
          href="mailto:cirima@cirima.es"
        >
          Contactanos
        </Link>
      </div>
    </section>
  );
}
