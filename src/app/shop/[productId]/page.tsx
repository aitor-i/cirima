import Header from "@/components/Header/Header";
import Image from "next/image";
import { products } from "../items"
import image from '@/../public/rodamiento.jpeg'
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PhoneIcon } from "@/components/Icons/Icons";

interface Props {
  params: {
    productId: string
  }
}
export default function page({ params }: Props) {
  const product = products[0];
  return (
    <main className="flex-1 py-6 px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="w-full  aspect-square">
          <Image src={image} alt={product.name} className="h-full rounded-lg w-full object-cover" />
        </div>
        <div className="py-4">
          <h2 className="text-3xl font-bold mb-2">Rodamiento</h2>
          <p className="text-gray-500 mb-4">Rodamiento de lavadora modelo LG-567  </p>
          <p className="text-lg font-bold mb-4">45€</p>
          <h3 className="text-lg font-bold mb-2">Especificaciones</h3>
          <ul className="list-disc text-gray-700 py-4 list-inside space-y-1">
            <li>Lavadoras LG</li>
            <li>Ano 2003</li>
            <li>Diametro: 10 cm</li>
          </ul>
          <Link
            className=" text-gray-50 flex gap-2 h-10 md:w-40 place-self-center items-center justify-center rounded-md border  border-gray-200 bg-blue-500 px-8 text-sm font-medium shadow-sm transition-colors hover:bg-blue-600 hover:text-gray-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-blue-800 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
            href="#">
            <PhoneIcon />
            Reservalo
          </Link>
        </div>
      </div>
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
      </div>
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Related Products</h2>
      </div>
    </main>
  )
}
