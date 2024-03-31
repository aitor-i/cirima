'use server'
import fs from 'fs'
import { sql } from "@vercel/postgres";
import { revalidatePath } from 'next/cache'

export interface Product {
  name: string,
  description: string,
  price: string,
  imagepath: string
  spec: string,
  id: number

}

export async function getProduct(id: string) {
  const products = await sql`SELECT * FROM products where id = ${id}`;
  return products.rows[0] as Product
}
export async function deleteProduct(id: string) {
  const products = await sql`DELETE FROM products where id = ${+id}`;
  revalidatePath("/dashboard")
  revalidatePath("/shop")
  console.log(products)
}
export async function getProducts() {
  const products = await sql`SELECT * FROM products`;
  return products.rows as Product[]
}

export const onSubmitHandler = async (formData: FormData) => {
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
      const b64Img = convertImageToBase64Sync(`public/${imageName}`)
      console.log(b64Img)
      const res = await sql`INSERT INTO public.products (name, description, price, specifications, imagePath) VALUES (${name}, ${description}, ${price}, ${spec}, ${imagePath})`;
      revalidatePath("/shop",)
      revalidatePath("/dashboard",)
      console.log(res)

    }
  } catch (error) {

    console.log(error)
  }

}
const convertImageToBase64Sync = (filePath: string) => {
  try {
    // Read file synchronously
    const data = fs.readFileSync(filePath);
    // Convert to Base64
    const base64Image = data.toString('base64');
    console.log(base64Image);
    // Use the Base64 string as needed
  } catch (err) {
    console.error('Error reading the file:', err);
  }
};
