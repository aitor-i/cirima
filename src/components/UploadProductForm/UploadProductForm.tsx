'use client'
import React, { useRef } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from '../ui/textarea'
import { onSubmitHandler } from '@/serverActions/products'
import { useFormStatus } from 'react-dom'


export default async function UploadProductForm() {
  const { pending } = useFormStatus()

  const formRef = useRef<HTMLFormElement>(null)
  const actionHandler = (formData: FormData) => {
    formRef.current?.reset()
    onSubmitHandler(formData)
  }


  return (
    <form className="grid gap-4" ref={formRef} action={actionHandler}>
      <Input name='product-name' maxLength={25} placeholder="Producto" type="text" />
      <Input name='product-description' maxLength={25} placeholder="Descripcion" type="text" />
      <Input name='price' placeholder="Precio" maxLength={10} type="text" />
      <Textarea maxLength={255} name='spec' className="min-h-[10rem]" placeholder="Especificaciones" />
      <Input name='image' placeholder="Imagen" type="file" />
      <Button className='bg-blue-500 hover:bg-blue-600'>{pending ? "Cargando..." : "Enviar"}</Button>
    </form>
  )
}
