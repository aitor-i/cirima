import ProductsLists from '@/components/ProductsList/ProductsLists'
import UploadProductForm from '@/components/UploadProductForm/UploadProductForm'
import React from 'react'

export default function page() {
  return (
    <section className='min-h-screen'>
      <div className='grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 grid px-4 md:px-10 lg:px-24 py-8 md:py-36'>
        <div>
          <h1 className='text-4xl md:text-6xl font-bold text-black'>Panel</h1>
          <h2>Administra el inventario de la tienda</h2>
        </div>
        <div>
          <UploadProductForm />

        </div>
      </div>
      <ProductsLists />
    </section>
  )
}
