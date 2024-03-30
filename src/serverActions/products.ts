'use server'
import { sql } from "@vercel/postgres";

export async function getProduct(id: string) {
  const products = await sql`SELECT * FROM products where id = ${id}`;
  return products.rows[0]
}
