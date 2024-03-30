'use server'
import fs from 'fs'
import { sql } from "@vercel/postgres";
import { revalidatePath } from 'next/cache'

export async function getProduct(id: string) {
  const products = await sql`SELECT * FROM products where id = ${id}`;
  return products.rows[0]
}
export async function getProducts() {
  'use server'
  const products = await sql`SELECT * FROM products`;
  return products.rows
}

export const onSubmitHandler = async (formData: FormData) => {
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

      const imagePath = `/${imageName}`
      const res = await sql`INSERT INTO public.products (name, description, price, specifications, imagePath) VALUES (${name}, ${description}, ${price}, ${spec}, ${imagePath})`;
      revalidatePath("/shop")
      console.log(res)

    }
  } catch (error) {

    console.log(error)
  }

}

