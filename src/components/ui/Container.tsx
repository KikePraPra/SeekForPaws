import type { Container } from "react-dom/client";
import MainCard from "./MainCard";
import Form from "./Form";
import DetailedCard from "./DetailedCard";

interface MainCardProps { //cambiar nombre
    image: string,
    title: string,
    buttons?: React.ReactNode[];
}

interface FormProps{
    title: string,
    image: string,
    inputs?: React.ReactNode[],
    button?: React.ReactNode;
    text?: React.ReactNode,
}
interface MiniCardsProps {
    
  name: string;
  image: string;
  text: string;
  lastPlace: string;
  date: string;
  buttons?: React.ReactNode[];
}

/*interface FilterProps{
    // un placeholder que se pueda activar
    text: string[],
    // campos de texto que se pueden activar
}*/

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

interface ContainerProps{
    button?: React.ReactNode,
    mainCard?: MainCardProps
    form?: FormProps,
    miniCards?: MiniCardsProps[],
    detailedCard?: DetailedCardProps;
}

export default function Container(props: ContainerProps) {

    let pageContent;

if (props.mainCard) {
    pageContent = <MainCard {...props.mainCard} />;
} else if (props.form) {
    pageContent = <Form {...props.form} />;
} else if (props.detailedCard) {
    pageContent = <DetailedCard {...props.detailedCard} />;
} else {
    pageContent = <div className="bg-white">hola</div>
    // return null
}

    let navElement = "";

    if(!props.button){
        navElement = 'none';
    }

    return (
        <div className="grid min-h-screen grid-rows-[auto_1fr_auto]">

            <header className="flex bg-verde-oscuro h-20 px-7 items-center z-1">

               <article className="flex align-middle items-center">

                    <figure>
                        <img className="w-27" src="./logo.svg" alt=""/>
                    </figure>
                    <figure>

                        <div className={`${navElement}`}>
                            {props.button ? props.button : ""}
                        </div>
                        
                    </figure>
                </article>

            </header>

            {pageContent}

            <footer className="flex items-center justify-center px-7 h-20 z-1 bg-verde-oscuro">
                <h1 className="text-white text-center">2025 Seek for Paws. Todos los derechos reservados.</h1>
            </footer>

        </div>
    )
}