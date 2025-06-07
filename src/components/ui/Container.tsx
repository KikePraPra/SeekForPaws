import type { Container } from "react-dom/client";
import MainCard from "./MainCard";


interface MainCardProps { //cambiar nombre
    image: string,
    title: string,
    buttons?: React.ReactNode[];
}

interface FormsProps{
    title: string,
    // aqui tiene que haber un array que asocie un texto con un input
    button?: React.ReactNode;
    text?: string,
}


interface MiniCardsProps{
    title: string,
    image: string,
    text: string,
    lastPlace: string,
    date: string
}

interface FilterProps{
    // un placeholder que se pueda activar
    text: string[],
    // campos de texto que se pueden activar
}

interface SliderProps{ //maincard
    titlte: string,
    filter?: FilterProps,
    miniCards?: MiniCardsProps[]
}

interface SeeMoreProps{
    title: string,
    date: string,
    image: string,
    profilePic: string,
    state: string,
    lastPlace: string,
    phone: string
    description: string
    buttons?: React.ReactNode[]
}

// todas estas interfaces son ideas correspondientes a componentes aún no creados


interface ContainerProps{
    navElement?: string,
    mainCard?: MainCardProps
    forms?: FormsProps,
    slider?: SliderProps,
    seeMore?: SeeMoreProps
}

export default function Container(props: ContainerProps) {

    if (!props.mainCard) return null;
    // if (!props.forms) return null;
    // if (!props.menu) return null;
    // if (!props.slider) return null;
    // if (!props.seeMore) return null;

    let pageContent;


if (props.mainCard) {
    pageContent = <MainCard {...props.mainCard} />;
// } else if (props.forms) {
//     pageContent = <Forms {...props.forms} />;
// } else if (props.menu) {
//     pageContent = <Menu {...props.menu} />;
// } else if (props.slider) {
//     pageContent = <Slider {...props.slider} />;
// } else if (props.seeMore) {
//     pageContent = <SeeMore {...props.seeMore} />;
} else {
    pageContent = <div className="text-gray-500 text-center">No hay contenido disponible</div>;
}


// Todo lo comentado es para el futuro, en caso de que se utilice la idea propuesta




    let navElement = "";
    let navImage = "";

    switch(props.navElement){
        case "burger":
            navImage = "./burger.svg";
            break;
        case "back":
            navImage = "./back.svg";
            break;
        default:
            navElement = 'none';
            break;
    }

    return (
        <div className="grid min-h-screen grid-rows-[auto_1fr_auto]">

            <header className="flex bg-verde-oscuro h-20 px-7 items-center z-1">

                <article className="flex align-middle gap-48 items-center">
                    <figure>
                        <img className="w-27" src="./logo.svg" alt=""/>
                    </figure>
                    <figure>

                        <div className={`${navElement}`}>
                            <img src={navImage} alt="" />
                        </div>
                        
                    </figure>
                </article>

            </header>

            {/* <MainCard {...props.mainCard} /> */}

            {pageContent}

            

            <footer className="flex items-center justify-center px-7 h-20 z-1 bg-verde-oscuro">
                <h1 className="text-white text-center">2025 Seek for Paws. Todos los derechos reservados.</h1>
            </footer>


        </div>
    )
}