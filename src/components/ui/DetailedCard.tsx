import React from "react";

interface DetailedCardProps {
  name: string,
  image: string,
  profilePic: string,
  profileName: string,
  phone: string,
  state: string,
  lastPlace: string,
  description: string,
  date: string,
  buttons?: React.ReactNode[];
}

export default function DetailedCard(props: DetailedCardProps) {

    return (

        <main className="font-poppins">
            <figure className="w-screen">
                <img
                    src={props.image}
                    alt={props.name}
                    className="w-full"
                />
                
            </figure>

            <section className="px-9 text-sm bg-white text-gris-oscuro">
                <article>
                    <h1 className="font-fredoka text-4xl text-white -translate-y-12">{props.name}</h1>
                    <p className="-translate-y-5 pb-5">{props.date}</p>
                    <figure className="flex items-center gap-4">
                    <img
                        src={props.profilePic}
                        alt=""
                        className="w-26 h-26 rounded-full object-cover"
                    />
                    <div className="mb-8">
                        <p className="">{props.profileName}</p>
                        <p className="text-left">Dueño</p>
                    </div>
                </figure>
                </article>
                
                <article className="flex flex-col gap-3 pb-6">
                    <p className="mt-5">{props.state}</p>
                    <p>{props.lastPlace}</p>
                    <p>{props.phone}</p>
                    <p className="text-black">Detalles</p>
                    <p className="mb-3">{props.description}</p>

                    {props.buttons &&
                        props.buttons.map((btn, index) => (
                            <div key={index} className="w-full mb-2">
                                {btn}
                            </div>
                        ))}

                </article>
            </section>

        </main>

    )
}