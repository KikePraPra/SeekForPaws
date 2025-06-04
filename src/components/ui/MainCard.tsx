import React from "react";

interface MainCardProps {
  image: string,
  title: string,
  buttons?: React.ReactNode[];
}

export default function MainCard(props: MainCardProps) {

    return(

        <main className="bg-white">
      
          <figure>
            <img className="translate-y-[-1.rem] z-0" 
            src={props.image} alt="Imagen de animales"/>
          </figure>
          
          <article className="flex items-center flex-col rounded-4xl bg-white w-full px-7 pt-10 translate-y-[-3rem] z-1">

            <h1 className="text-3xl main-font text-verde-oscuro">{props.title}</h1>

            <div className="flex flex-col pt-10">

            {props.buttons && props.buttons[0] ? props.buttons[0] : ""}
            {props.buttons && props.buttons[1] ? props.buttons[1] : ""} 
            {/* espero esa vara sirva */}

              
            </div>

          </article>

    </main>

    )
}