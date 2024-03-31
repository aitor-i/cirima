import Image from "next/image";
import Link from "next/link";
import { PhoneIcon } from "@/components/Icons/Icons";
import { getProduct } from "@/serverActions/products";
import { notFound } from "next/navigation";

interface Props {
  params: {
    productId: string
  }
}

export async function generateMetadata({ params }: Props) {

  const product = await getProduct(params.productId);
  if (!product) notFound();
  return {
    title: `Cirima - ${product.name}`,
    description: product.description,
    keywords: ["Electricista", "Calderas", "Pamplona", product.name],
  };
}

export default async function page({ params }: Props) {

  const product = await getProduct(params.productId);
  return (
    <main className="flex-1 py-6 px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="w-full  aspect-square">
          <Image src={product.imagepath} alt={product.name} width={800} height={800} className="h-full rounded-lg w-full object-cover" />
        </div>
        <div className="py-4">
          <h2 className="text-3xl font-bold mb-2">{product.name}</h2>
          <p className="text-gray-500 mb-4">{product.description}</p>
          <p className="text-lg font-bold mb-4">{product.price}</p>
          <h3 className="text-lg font-bold mb-2">Especificaciones</h3>
          <ul className="list-disc text-gray-700 py-4 list-inside space-y-1">
            {product.spec}
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
