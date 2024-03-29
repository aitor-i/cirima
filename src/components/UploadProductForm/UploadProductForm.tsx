import React from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from '../ui/textarea'
import fs from 'fs'
import { sql } from "@vercel/postgres";


export default async function UploadProductForm() {

  const onSubmitHandler = async (formData: FormData) => {
    'use server'
    try {
      let image = formData.get('image')?.valueOf() as File;

      const name = formData.get("product-name")?.toString();
      const description = formData.get("product-description")?.toString();
      const price = formData.get("price")?.toString();
      const spec = formData.get("spec")?.toString();


      if (image) {
        const imageName = image?.name.toString();
        const stram = fs.createWriteStream(`public/${imageName}`);
        const buffer = await image.arrayBuffer();

        stram.write(Buffer.from(buffer), (error) => {
          if (error) {
            console.log(error)
          }
        })

        const imagePath = `public/${imageName}`
        const res = await sql`INSERT INTO public.products (name, description, price, specifications, imagePath) VALUES (${name}, ${description}, ${price}, ${spec}, ${imagePath})`;

      }
    } catch (error) {

      console.log(error)
    }

  }

  return (
    <form className="grid gap-4" action={onSubmitHandler}>
      <Input name='product-name' placeholder="Producto" type="text" />
      <Input name='product-description' placeholder="Descripcion" type="text" />
      <Input name='price' placeholder="Precio" type="text" />
      <Textarea name='spec' className="min-h-[10rem]" placeholder="Especificaciones" />
      <Input name='image' placeholder="Imagen" type="file" />
      <Button className='bg-blue-500 hover:bg-blue-600'>Añadir</Button>
    </form>
  )
}
