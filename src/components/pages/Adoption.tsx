import Button from "../ui/Button";
import Container from "../ui/Container";

const btnRegistrarAdopcion = (
  <Button
    text="Registrar adopción"
    style="pb-5.5 h-12 mb-5 w-84 rounded-2xl pt-2 bg-verde-oscuro text-white border-2 font-fredoka cursor-pointer border-verde-oscuro hover:bg-transparent hover:text-gris-oscuro duration-400"
    to="/login"
  />
);

const btnMascotasAdopcion = (
  <Button
    text="Mascotas en adopción"
    style="pb-5.5 h-12 w-84 rounded-2xl pt-2 bg-transparent text-gris-oscuro border-2 font-fredoka cursor-pointer border-verde-oscuro hover:bg-verde-oscuro hover:text-white duration-400"
    to="/"
  />
);

const cardBienvenida = {
  image: "img-main.jpeg",
  title: "Adopción de Mascotas",
  buttons: [btnRegistrarAdopcion, btnMascotasAdopcion],
};

export default function Adoption() {
  return <Container /* navElement='burger'*/ mainCard={cardBienvenida} />;
}
