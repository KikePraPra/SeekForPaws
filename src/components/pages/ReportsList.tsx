import Button from "../ui/Button";
import BurgerMenu from "../ui/BurgerMenu";
import Container from "../ui/Container";

const miniCardsList = [
  {
    name: "Coco",
    image: "perroCoco.svg",
    text: "Extraviado",
    lastPlace: "Parque central",
    date: "2025-06-08",
    buttons: [
      <Button
        text="Ver más"
        style="pb-5.5 h-12 w-80 rounded-2xl pt-2 bg-transparent text-gris-oscuro border-2 font-fredoka cursor-pointer border-verde-oscuro hover:bg-verde-oscuro hover:text-white duration-400"
        to="/detalle-reporte/1"
      />
    ]
  },
  {
    name: "Luna",
    image: "Tobby.svg",
    text: "Extraviado",
    lastPlace: "Zona industrial",
    date: "2025-06-07",
    buttons: [
      <Button
        text="Ver más"
        style="pb-5.5 h-12 w-80 rounded-2xl pt-2 bg-transparent text-gris-oscuro border-2 font-fredoka cursor-pointer border-verde-oscuro bg-verde-oscuro text-white duration-400 hover:bg-transparent hover:text-gris-oscuro"
        to="/detalle-reporte/2"
      />
    ]
  }
];


const sliderProps = {
  image: "img-main.jpeg", 
  title: "Lista de Reportes",
  miniCards: miniCardsList
};

export default function ReportList() {
  return <Container button={<BurgerMenu />} mainCard={sliderProps} />;
}
