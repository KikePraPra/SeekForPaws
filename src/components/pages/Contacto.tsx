import Button from "../ui/Button";
import BurgerMenu from "../ui/BurgerMenu";
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

const cardBienvenida = {
  image: "img-main.jpeg",
  title: "Contacto",
  buttons: [btnComplaints, btnSupport],
};

export default function Adoption() {
  return <Container button={<BurgerMenu />} mainCard={cardBienvenida} />;
}
