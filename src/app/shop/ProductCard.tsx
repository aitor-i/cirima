import { PhoneIcon } from "@/components/Icons/Icons"
import { Button } from "@/components/ui/button"
import Image, { StaticImageData } from "next/image"
import Link from "next/link"

interface Props {

  id: number
  image: string,
  title: string,
  price: string,
  description: string
}

export default function ProductCard({ image, description, price, title, id }: Props) {
  console.log(image)
  return (
    <Link href={"/shop/" + id} className="w-full flex flex-col items-start max-w-sm mx-auto bg-blue-50 rounded-md shadow-md overflow-hidden">
      <div className="flex items-end justify-end h-56 w-full bg-cover">
        <span className="h-full w-full border">
          <Image src={image} height={400} width={400} alt={title} className="w-full h-full object-cover" />
        </span>
        <Button className="z-10 p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 absolute hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
          <PhoneIcon />
        </Button>
      </div>
      <div className="px-5 py-3">
        <h3 className="text-gray-700 font-bold uppercase">{title}</h3>
        <span className="text-gray-500 mt-2">{price}</span>
        <p className="text-sm text-gray-500 mt-2">
          {description}
        </p>
      </div>
    </Link>
  )
}

