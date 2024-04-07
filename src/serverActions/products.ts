"use server";
import fs from "fs";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";

export interface Product {
  name: string;
  description: string;
  price: string;
  imagepath: string;
  spec: string;
  id: number;
}

export async function getProduct(id: string) {
  const products = await sql`SELECT * FROM products where id = ${id}`;
  return products.rows[0] as Product;
}
export async function deleteProduct(id: string) {
  const products = await sql`DELETE FROM products where id = ${+id}`;
  revalidatePath("/dashboard");
  revalidatePath("/shop");
  console.log(products);
}
export async function getProducts() {
  const products = await sql`SELECT * FROM products`;
  return products.rows as Product[];
}

export const onSubmitHandler = async (formData: FormData) => {
  try {
    let image = formData.get("image")?.valueOf() as File;

    const name = formData.get("product-name")?.toString();
    const description = formData.get("product-description")?.toString();
    const price = formData.get("price")?.toString();
    const spec = formData.get("spec")?.toString();

    if (image) {
      const arrayBuffer = await image.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      const base64 = buffer.toString("base64");

      console.log("BASE 64", base64);

      const res =
        await sql`INSERT INTO public.products (name, description, price, specifications, imagePath) VALUES (${name}, ${description}, ${price}, ${spec}, ${base64})`;
      revalidatePath("/shop");
      revalidatePath("/dashboard");
      console.log(res);
    }
  } catch (error) {
    console.log(error);
  }
};
