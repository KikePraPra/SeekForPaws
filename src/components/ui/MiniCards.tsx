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
    <main className="relative  flex items-center justify-center mt-20 px-4 py-10">
      <section className="bg-white rounded-2xl border border-gray-200 p-3 w-full max-w-xs pt-20 shadow-md">
        <figure className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-2xs h-40 rounded-xl overflow-hidden shadow-md z-10">
          <img
            src={props.image}
            alt={props.name}
            className="object-cover w-full h-full"
          />
        </figure>

        <div className="font-poppins text-left py-3 px-2 flex flex-col gap-2">
          <h4 className="text-xs text-gray-500">{props.date}</h4>
          <h1 className="text-base font-semibold text-gray-900">{props.name}</h1>
          <h2 className="text-sm text-gray-700">{props.text}</h2>
          <p className="text-xs text-gray-600 mt-1">📍 {props.lastPlace}</p>

          <div className="flex flex-col items-center mt-4 w-full">
            {props.buttons &&
              props.buttons.map((btn, index) => (
                <div key={index} className="w-full max-w-xs">
                  {btn}
                </div>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}
