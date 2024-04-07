import React from "react";
import { StarIcon } from "../Icons/Icons";
import { Card, CardContent, CardFooter } from "../ui/card";

const dict = {
  title: "La satisfaccion de nuestros clientes",
  comments: [
    {
      comment:
        "Son muy atentos y tienen remanentes de cosas desaparecidas o difíciles de encontrar",
      subtitle: "Reseñas de Google",
      username: "Juan Alfonso Revenga Caso",
    },
    {
      comment:
        "Muy buena atención, consejos y explicaciones , tanto del personal de tienda como del técnico que acudió a mi domicilio.",
      subtitle: "Reseñas de Google",
      username: "Angel Fernåndez Gavilån",
    },
  ],
};

export default function Feedback() {
  return (
    <section className="grid items-center gap-6">
      <div className="grid items-center mb-4 gap-2">
        <StarIcon />
        <h2 className="text-3xl font-bold tracking-tight">{dict.title}</h2>
      </div>
      <div className="container">
        <div className="grid md:grid-cols-2 gap-6">
          {dict.comments.map((comment) => (
            <Card
              key={comment.comment}
              className="grid items-center gap-4 px-6 py-6"
            >
              <CardContent className="text-center">
                <div className="mx-auto w-12 h-12 text-2xl" />
                <blockquote className="mt-4 text-lg font-medium text-gray-500">
                  {comment.comment}
                </blockquote>
              </CardContent>
              <CardFooter className="flex flex-col gap-2 text-sm">
                <div className="font-medium">{comment.username}</div>
                <div className="text-gray-500">{comment.subtitle}</div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
