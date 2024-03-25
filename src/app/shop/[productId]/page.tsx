import Header from "@/components/Header/Header";
import Image from "next/image";
import { products } from "../items"
import image from '@/../public/instal-electricas.jpg'
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Props {
  params: {
    productId: string
  }
}
export default function page({ params }: Props) {
  const product = products[0];
  return (
    <>
      <Header />
      <main className="flex-1 py-6 px-6 md:px-12 lg:px-24">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="w-full  aspect-square">
            <Image src={image} alt={product.name} className="h-full rounded-lg w-full object-cover" />
          </div>
          <div className="py-4">
            <h2 className="text-2xl font-bold mb-2">Product Name</h2>
            <p className="text-gray-500 mb-4">Product Description</p>
            <p className="text-lg font-bold mb-4">$99.99</p>
            <h3 className="text-lg font-bold mb-2">Specifications</h3>
            <ul className="list-disc py-4 list-inside space-y-1">
              <li>Specification 1</li>
              <li>Specification 2</li>
              <li>Specification 3</li>
            </ul>
            <Link
              className="inline-flex text-gray-50 h-10 md:w-40 place-self-center items-center justify-center rounded-md border  border-gray-200 bg-blue-500 px-8 text-sm font-medium shadow-sm transition-colors hover:bg-blue-600 hover:text-gray-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-blue-800 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
              href="#">
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

    </>
  )
}
