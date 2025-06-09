import React from "react";
import MiniCards from "./MiniCards";

interface MiniCardsProps {
  name: string;
  image: string;
  text: string;
  lastPlace: string;
  date: string;
  buttons?: React.ReactNode[];
}

interface  SliderProps {
  image: string;
  title: string;
  text?: string;
  miniCards?: MiniCardsProps[];
}

export default function Slider(props: SliderProps) {
  return (
    <main className="bg-white">
      <figure>
        <img
          className="translate-y-[-1.rem] z-0"
          src={props.image}
          alt="Imagen de animales"
        />
      </figure>

      <article className="flex items-center flex-col rounded-4xl bg-white px-7 pt-10 translate-y-[-3rem] z-1">
        <h1 className="text-3xl p-10 main-font text-verde-oscuro ">{props.title}</h1>

        

        {props.miniCards && props.miniCards.length > 0 && (
          <section className="pt-12 flex flex-wrap justify-center gap-10">
            {props.miniCards.map((card, index) => (
              <MiniCards key={index} {...card} />
            ))}
          </section>
        )}
      </article>
    </main>
  );
}
