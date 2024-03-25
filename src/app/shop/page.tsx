import ProductCard from "./ProductCard"
import { products } from "./items"
import image from '@/../public/rodamiento.jpeg'
export default function page() {
  return (
    <div className="grid grid-rows-[auto 1fr auto] gap-6 min-h-screen px-4 sm:px-6 lg:px-8">
      <main className="grid  gap-12 py-8">
        <section >
          <h2 className="text-2xl md:text-5xl font-bold tracking-tight">Tienda</h2>
          <p>Tenemos todo tipod de articulos para reparacion o sustitucion...</p>
        </section>
        <section className="grid grid-cols-1  gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {products.map(product => <ProductCard
            key={product.name}
            description={product.description}
            price={product.price.toString()}
            title={product.name}
            image={image} />)}
        </section>


      </main>
    </div>
  )
}
