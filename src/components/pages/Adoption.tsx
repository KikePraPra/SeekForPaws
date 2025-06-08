import Button from "../ui/Button";
import BurgerMenu from "../ui/BurgerMenu";
import Container from "../ui/Container";

const btnRegistrarAdopcion = (
  <Button
    text="Registrar adopción"
    style="pb-5.5 h-12 mb-5 w-80 rounded-2xl pt-2 bg-verde-oscuro text-white border-2 font-fredoka cursor-pointer border-verde-oscuro hover:bg-transparent hover:text-gris-oscuro duration-400"
    to="/adoptionForms"
  />
);

const btnMascotasAdopcion = (
  <Button
    text="Mascotas en adopción"
    style="pb-5.5 h-12 mb-5 w-80 rounded-2xl pt-2 bg-verde-oscuro text-white border-2 font-fredoka cursor-pointer border-verde-oscuro hover:bg-transparent hover:text-gris-oscuro duration-400"
    to="/"
  />
);

const cardAdoption = {
  image: "img-main.jpeg",
  title: "Adopción de Mascotas",
  buttons: [btnRegistrarAdopcion, btnMascotasAdopcion],
};

export default function Adoption() {
  return <Container button={<BurgerMenu />} mainCard={cardAdoption} />;
}
