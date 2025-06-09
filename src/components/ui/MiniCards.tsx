import React from "react";

interface MiniCardsProps {
    
  name: string;
  image: string;
  text: string;
  lastPlace: string;
  date: string;
  buttons?: React.ReactNode[];
}

export default function MiniCards(props: MiniCardsProps) {
  return (
    <main className="relative m-20">
      <section className="bg-white rounded-3xl border border-gray-200 p-4 max-w-sm w-full mx-auto pt-32">
        <figure className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-sm h-48 rounded-2xl overflow-hidden shadow-md z-10">
          <img
            src={props.image}
            alt={props.name}
            className="object-cover w-full h-full"
          />
        </figure>

        <div className="font-poppins text-left py-4 px-3 flex flex-col gap-3">
          <h4 className="font-poppins text-xs text-gray-500">{props.date}</h4>
          <h1 className="font-poppins text-lg font-semibold text-gray-900">{props.name}</h1>
          <h2 className="font-poppins text-sm text-gray-700">{props.text}</h2>
          <p className="font-poppins text-xs text-gray-600 mt-1">📍 {props.lastPlace}</p>

          <div className="flex justify-center  mt-6 w-full">
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
