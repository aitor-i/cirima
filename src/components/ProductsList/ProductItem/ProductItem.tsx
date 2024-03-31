"use client"
import { Button } from "@/components/ui/button"
import { deleteProduct } from "@/serverActions/products"

interface Props {
  id: string,
  name: string,
  description: string
}
export default function ProductItem({ id, name, description }: Props) {
  return (
    <form action={() => deleteProduct(id.toString())} key={id} className="grid-cols-3 bg-gray-50 py-2 px-2 rounded w-full grid gap-4">
      <span className="font-semibold">{name}</span>
      <span>{description}</span>
      <Button type="submit" className="justify-self-end bg-red-600 hover:bg-red-500 font-semibold">Eliminar</Button>
    </form>
  )
}
