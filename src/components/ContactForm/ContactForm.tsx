'use client'

import React from 'react'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function ContactForm() {


  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget)
    const name = formData.get('name')?.valueOf();

    console.log("Name form: ", name)


  }
  return (
    <div className="mt-8">
      <form className="grid gap-4" onSubmit={onSubmitHandler}>
        <div className="grid md:grid-cols-2 gap-4">
          <Input name='name' placeholder="Nombre" />
          <Input name='surname' placeholder="Apellido" />
        </div>
        <Input name='email' placeholder="Email" type="email" />
        <Input placeholder="Telefono (Opcional)" />
        <Textarea className="min-h-[10rem]" placeholder="Mensaje" />
        <Button type="submit">Enviar</Button>
      </form>
    </div>
  )
}
