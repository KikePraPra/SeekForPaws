import React from "react";

interface MiniCardsProps {
  name: string;
  image: string;
  correo?: string;
  clave?: string;
  numero?: string;
  state?: string;
  lastPlace?: string;
  date?: string;
  buttons?: React.ReactNode[];
}

export default function MiniCards(props: MiniCardsProps) {
  return (
    <main className="relative flex items-center justify-center py-10">
      <section
        className="bg-white rounded-2xl border border-gray-200 shadow-md"
        style={{ minWidth: "300px", maxWidth: "350px" }} // ancho mínimo y máximo
      >
        <figure className="w-full h-40 rounded-xl shadow-md z-10 -translate-y-5">
          {props.image && (
            <img
              src={props.image}
              alt={props.name}
              className="w-full h-full object-cover rounded-xl"
            />
          )}
        </figure>

        <div className="font-poppins text-left pt-3 px-6 flex flex-col gap-2">
          <h4 className="text-xs text-gray-500">
            {props.date} {props.correo}
          </h4>
          <h1 className="text-base font-semibold text-gray-900">
            {props.name}
          </h1>
          <h2 className="text-sm text-gray-700">
            {props.state}
            {props.clave}
          </h2>
          <p className="text-xs text-gray-600 mt-1">
            {props.lastPlace}
            {props.numero}
          </p>

          <div className="flex flex-col items-center -mx-6 mt-4">
            {props.buttons &&
              props.buttons.map((btn, index) => (
                <div key={index} className="w-full">
                  {btn}
                </div>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}
