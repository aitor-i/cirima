'use client'

import React from 'react'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function ContactForm() {


  const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget)
    const name = formData.get('name')?.valueOf();
    const surname = formData.get('surname')?.valueOf();
    const email = formData.get('email')?.valueOf();
    const phone = formData.get('phone')?.valueOf();
    const message = formData.get('message')?.valueOf();

    const body = {
      name,
      surname,
      email,
      phone,
      message
    }

    const url = new URL('http://localhost:3003/api/contact-form');


    const response = await fetch(url, {
      method: 'POST', // Set the method to POST
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body), // Convert the data to a JSON string
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

  }


  return (
    <div className="mt-8">
      <form className="grid gap-4" onSubmit={onSubmitHandler}>
        <div className="grid md:grid-cols-2 gap-4">
          <Input name='name' placeholder="Nombre" />
          <Input name='surname' placeholder="Apellido" />
        </div>
        <Input name='email' placeholder="Email" type="email" />
        <Input name='phone' placeholder="Telefono (Opcional)" />
        <Textarea name='message' className="min-h-[10rem]" placeholder="Mensaje" />
        <Button type="submit">Enviar</Button>
      </form>
    </div>
  )
}
