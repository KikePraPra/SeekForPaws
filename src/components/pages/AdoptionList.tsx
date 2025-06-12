import Button from "../ui/Button";
import FilterPanel from "../ui/FilterPanel";
import Container from "../ui/Container";

const groups = [
  { label: "Estado", key: "state", options: ["Extraviado", "En adopción"] },
  {
    label: "Provincia",
    key: "province",
    options: [
      "San Jose",
      "Alajuela",
      "Cartago",
      "Heredia",
      "Guanacaste",
      "Puntarenas",
      "Limon",
    ],
  },
];

const miniCardsList = [
  {
    name: "Elvis",
    image: "perroCoco.svg",
    state: "En adopción",
    lastPlace: "Desamparados",
    date: "2025-03-02",
    buttons: [
      <Button
        text="Ver más"
        style="pb-5.5 h-12 w-full rounded-2xl pt-2 bg-verde-oscuro text-white border-2 font-fredoka cursor-pointer border-verde-oscuro hover:bg-transparent hover:text-gris-oscuro duration-400"
        to="/seeMore"
      />,
    ],
  },
  {
    name: "Doby",
    image: "Tobby.svg",
    state: "En adopción",
    lastPlace: "Cerro Bajo",
    date: "2025-06-07",
    buttons: [
      <Button
        text="Ver más"
        style="pb-5.5 h-12 w-full rounded-2xl pt-2 bg-transparent text-gris-oscuro border-2 font-fredoka cursor-pointer border-verde-oscuro bg-verde-oscuro text-white duration-400 hover:bg-transparent hover:text-gris-oscuro"
        to="/seeMore"
      />,
    ],
  },
];

const sliderProps = {
  image: "img-main.jpeg",
  title: "Lista de Adopción",
  text: <FilterPanel groups={groups} onFilterChange={() => {}} />,
  miniCards: miniCardsList,
};

const btnBack = (
  <Button
    icon="/back.svg"
    style="w-7 h-5 translate-y-[-2rem] absolute right-7"
    onClick={() => history.back()}
  />
);

export default function ReportList() {
  return <Container button={btnBack} mainCard={sliderProps} />;
}
