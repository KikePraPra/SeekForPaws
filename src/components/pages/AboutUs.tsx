
import Button from "../ui/Button";
import Container from "../ui/Container";

const btnIniciaSesion = (
  <Button
    text="Inicia Sesión"
    style="pb-5.5 h-12 mb-5 w-80 m-auto rounded-2xl pt-2 bg-verde-oscuro text-white border-2 font-fredoka cursor-pointer border-verde-oscuro hover:bg-transparent hover:text-gris-oscuro duration-400"
    to="/login"
  />
);

const descriptionCard = {
  image: "img-main.jpeg",
  title: "Somos Seek for Paws",
  buttons: [btnIniciaSesion],
  text: "Seek for Paws es un proyecto que busca ofrecer una solución efectiva ante la problemática del extravío de mascotas domésticas. La herramienta permitirá crear y compartir tarjetas informativas sobre las mascotas, en las cuales se incluirá el nombre del animal, el nombre del dueño, un número de contacto, fotografías para facilitar su reconocimiento, la última ubicación en la que fue visto y otros datos adicionales que se deseen agregar.",
};

const btnBack = (
  <Button
    icon="/back.svg"
    style="w-7 h-5 translate-y-[-2rem] absolute right-7"
    onClick={() => history.back()}
  />
);

export default function AboutUs() {
  return <Container button={btnBack} mainCard={descriptionCard} />;
}
