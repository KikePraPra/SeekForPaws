import React from "react";

interface FormProps {
  title: string;
  image: string;
  inputs?: React.ReactNode[];
  button?: React.ReactNode;
  text?: React.ReactNode;
}

export default function Form(props: FormProps) {
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

        <div className="mt-11 flex flex-col gap-7">
          {props.inputs?.map((input, index) => <div key={index}>{input}</div>)}
          {props.button ? props.button : ""}
          <p className="text-verde-oscuro text-center">{props.text}</p>
        </div>
      </article>
    </main>
  );
}
