import React from "react";

interface Props {
  name: string;
  surname: string;
  email: string;
  message: string;
}

export default function EmailTemplate({
  name,
  surname,
  email,
  message,
}: Props) {
  return (
    <div className="py-20  h-screen px-40 flex w-screen flex-col items-center">
      <span className="h-fit  ">
        <h2 className="text-2xl font-bold">
          {name} {surname} ha enviado un mensaje
        </h2>
        <p>{message}</p>
        <i>{email}</i>
      </span>
    </div>
  );
}
