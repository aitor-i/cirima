import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function page() {
  return (
    <section className="flex flex-col py-32 items-center  h-screen  ">
      <div className="text-center space-y-4 flex flex-col gap-2">
        <h1 className="text-6xl font-bold text-gray-900 ">404 Not Found</h1>
        <p className="text-xl text-gray-600">
          Oops! La pagina que buscas no existe
        </p>
        <Link className="" href="/shop">
          <Button className="bg-blue-500 hover:bg-blue-600">
            {" "}
            Volver a la tienda
          </Button>
        </Link>
      </div>
    </section>
  );
}
