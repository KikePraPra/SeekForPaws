import React from "react";
import MiniCards from "./MiniCards";

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

interface MainCardProps {
  image: string;
  title: string;
  buttons?: React.ReactNode[];
  text?: string;
  miniCards?: MiniCardsProps[];
}

export default function MainCard(props: MainCardProps) {
  let style = "flex flex-col pt-10";
  let contentSlider: React.ReactNode = null;

  if (props.title === "Inicio") {
    style = "flex flex-wrap justify-center max-w-md mx-auto pt-10";
  }
  if (props.miniCards && props.miniCards.length > 0) {
    contentSlider = (
      <section className="pt-12 flex flex-wrap justify-center gap-4">
        {props.miniCards.map((card, index) => (
          <MiniCards key={index} {...card} />
        ))}
      </section>
    );
  }

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
        <h1 className="text-3xl main-font text-verde-oscuro">{props.title}</h1>

        <div className={`${style}`}>
          {props.text ? (
            <div className="font-poppins max-w-md mx-auto mb-10">
              {props.text}
            </div>
          ) : (
            ""
          )}

          {contentSlider}

          {/* Renderizar botones */}
          {props.buttons && props.buttons[0] ? props.buttons[0] : ""}
          {props.buttons && props.buttons[1] ? props.buttons[1] : ""}
          {props.buttons && props.buttons[2] ? props.buttons[2] : ""}
          {props.buttons && props.buttons[3] ? props.buttons[3] : ""}
        </div>
      </article>
    </main>
  );
}
