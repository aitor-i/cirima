import LoginForm from '@/components/LoginForm/LoginForm'
import React from 'react'

export default function page() {
  return (
    <section className='min-h-screen'>
      <div className='grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 grid px-4 md:px-8 py-8 md:py-24'>
        <div>
          <h1 className='text-4xl font-bold text-black'>Login</h1>
          <h2>Accede para poder administrar la tienda</h2>
        </div>
        <LoginForm />
      </div>
    </section>
  )
}
