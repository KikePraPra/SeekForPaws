import React from "react";

interface MiniCardsProps {
  name: string;
  image: string;
  state: string;
  lastPlace: string;
  date: string;
  buttons?: React.ReactNode[];
}

export default function MiniCards(props: MiniCardsProps) {
  return (
    <main className="relative flex items-center justify-center py-10">
      <section className="bg-white rounded-2xl border border-gray-200  shadow-md">
        <figure className="w-full h-40 rounded-xl shadow-md z-10 -translate-y-5">
          <img
            src={props.image}
            alt={props.name}
          />
        </figure>

        <div className="font-poppins text-left pt-3 px-6 flex flex-col gap-2">
          <h4 className="text-xs text-gray-500">{props.date}</h4>
          <h1 className="text-base font-semibold text-gray-900">{props.name}</h1>
          <h2 className="text-sm text-gray-700">{props.state}</h2>
          <p className="text-xs text-gray-600 mt-1">📍 {props.lastPlace}</p>

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
