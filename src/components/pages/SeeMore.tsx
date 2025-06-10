import Button from "../ui/Button";
import Container from "../ui/Container";

const btnSeeIt = (
  <Button
    text="Avistado"
    style="pb-5.5 h-12 w-full rounded-2xl pt-2 bg-verde-oscuro text-white border-2 font-fredoka cursor-pointer border-verde-oscuro hover:bg-transparent hover:text-gris-oscuro duration-400"
    to="/contacto"
  />
);
const btnGotIt = (
  <Button
    text="Lo tengo"
    style="pb-5.5 h-12 w-full rounded-2xl pt-2 bg-verde-oscuro text-white border-2 font-fredoka cursor-pointer border-verde-oscuro hover:bg-transparent hover:text-gris-oscuro duration-400"
    to="/adoption"
  />
);


const seeMore = {
    name: "Coco",
    image: "perroCoco.svg",
    profilePic: "perroCoco.svg",
    profileName: "Jorge Monge",
    phone: "123456789",
    state: "Extraviado",
    lastPlace: "Parque central",
    description: "Responde a coco, está esterilizado, tiene una mancha en el pecho",
    date: "2025-06-08",
    buttons: [
        btnSeeIt, btnGotIt
    ],
}

const btnBack = (
  <Button
    icon="/back.svg"
    text=""
    style="w-7 h-5 translate-y-[-2rem] absolute right-7"
    onClick={() => history.back()}
  />
);

export default function SeeMore() {
  return <Container button={btnBack} detailedCard={seeMore} />;
}