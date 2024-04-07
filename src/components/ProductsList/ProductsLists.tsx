import { deleteProduct, getProducts } from "@/serverActions/products";
import { Button } from "../ui/button";
import ProductItem from "./ProductItem/ProductItem";

export default async function ProductsLists() {
  const products = await getProducts();
  return (
    <div className="px-4 md:px-10 lg:px-24 flex flex-col gap-1">
      {products.map((product) => (
        <ProductItem
          name={product.name}
          description={product.description}
          id={product.id.toString()}
          key={product.id}
        />
      ))}
    </div>
  );
}
