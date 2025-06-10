import Button from "../ui/Button";
import Container from "../ui/Container";

const miniCardsList = [
  {
    name: "Coco",
    image: "perroCoco.svg",
    state: "Extraviado",
    lastPlace: "Parque central",
    date: "2025-06-08",
    buttons: [
      <Button
        text="Ver más"
        style="pb-5.5 h-12 w-full rounded-2xl pt-2 bg-verde-oscuro text-white border-2 font-fredoka cursor-pointer border-verde-oscuro hover:bg-transparent hover:text-gris-oscuro duration-400"
        to="/seeMore"
      />
    ]
  },
  {
    name: "Luna",
    image: "Tobby.svg",
    state: "Extraviado",
    lastPlace: "Zona industrial",
    date: "2025-06-07",
    buttons: [
      <Button
        text="Ver más"
        style="pb-5.5 h-12 w-full rounded-2xl pt-2 bg-transparent text-gris-oscuro border-2 font-fredoka cursor-pointer border-verde-oscuro bg-verde-oscuro text-white duration-400 hover:bg-transparent hover:text-gris-oscuro"
        to="/seeMore"
      />
    ]
  }
];

const sliderProps = {
  image: "img-main.jpeg", 
  title: "Lista de Reportes",
  miniCards: miniCardsList
};

const btnBack = (
  <Button
    icon="/back.svg"
    text=""
    style="w-7 h-5 translate-y-[-2rem] absolute right-7"
    onClick={() => history.back()}
  />
);

export default function ReportList() {
  return <Container button={btnBack} mainCard={sliderProps} />;
}
