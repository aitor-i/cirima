'use client'
import React from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from '../ui/textarea'

export default function UploadProductForm() {
  const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget)

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const url = new URL(`${baseUrl}/api/add-product`);

    const response = await fetch(url, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
  }

  return (
    <form className="grid gap-4" onSubmit={onSubmitHandler}>
      <Input name='product-name' placeholder="Producto" type="text" />
      <Input name='product-description' placeholder="Descripcion" type="text" />
      <Input name='price' placeholder="Precio" type="text" />
      <Textarea name='spec' className="min-h-[10rem]" placeholder="Especificaciones" />
      <Input name='image' placeholder="Imagen" type="file" />
      <Button className='bg-blue-500 hover:bg-blue-600' type="submit">Añadir</Button>
    </form>
  )
}
