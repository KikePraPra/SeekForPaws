import Button from "../ui/Button";
import Container from "../ui/Container";

const btnComplaints = (
  <Button
    text="Levantar una queja"
    style="pb-5.5 h-12 mb-5 w-80 rounded-2xl pt-2 bg-verde-oscuro text-white border-2 font-fredoka cursor-pointer border-verde-oscuro hover:bg-transparent hover:text-gris-oscuro duration-400"
    to="/complaints"
  />
);

const btnSupport = (
  <Button
    text="Contacto con soporte"
    style="pb-5.5 h-12 mb-5 w-80 rounded-2xl pt-2 bg-verde-oscuro text-white border-2 font-fredoka cursor-pointer border-verde-oscuro hover:bg-transparent hover:text-gris-oscuro duration-400"
    to="/support"
  />
);

const cardContacto = {
  image: "img-main.jpeg",
  title: "Contáctanos",

  buttons: [btnComplaints, btnSupport],
};

const btnBack = (
  <Button
    icon="/back.svg"
    style="w-7 h-5 translate-y-[-2rem] absolute right-7"
    onClick={() => history.back()}
  />
);

export default function Contacto() {
  return <Container button={btnBack} mainCard={cardContacto} />;
}
