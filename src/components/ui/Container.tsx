import type { Container } from "react-dom/client";
import MainCard from "./MainCard";

interface MainCardProps {
    image: string,
    title: string,
    buttons?: React.ReactNode[];
}

interface ContainerProps{
    mainCard?: MainCardProps
}

export default function Container(props: ContainerProps) {

    if (!props.mainCard) return null;

    return (
        <div className="grid min-h-screen grid-rows-[auto_1fr_auto]">

            <header className="flex bg-verde-oscuro h-20 px-7 items-center z-1">

                <article>
                    <figure>
                        <img className="w-27" src="./logo.svg" alt=""/>
                    </figure>
                </article>

            </header>

            <MainCard {...props.mainCard} />

            <footer className="flex items-center justify-center px-7 h-20 z-1 bg-verde-oscuro">
                <h1 className="text-white text-center">2025 Seek for Paws. Todos los derechos reservados.</h1>
            </footer>


        </div>
    )
}