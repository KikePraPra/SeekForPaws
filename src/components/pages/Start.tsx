import Button from "../ui/Button";
import BurgerMenu from "../ui/BurgerMenu";
import Container from "../ui/Container";

const btnReports = (
  <Button
    icon="/reportes.svg"
    text="Reportes"
    style="m-5 pb-5.5 h-30 w-30 mb-5 rounded-2xl pt-2 font-fredoka border-2 border-gris-oscuro"
    to="/reports"
  />
);
const btnContact = (
  <Button
    icon="/contacto.svg"
    text="Contacto"
    style="m-5 pb-5.5 h-30 w-30 mb-5 rounded-2xl pt-2 font-fredoka border-2 border-gris-oscuro"
    to="/contacto"
  />
);
const btnAdoption = (
  <Button
    icon="/adopcion.svg"
    text="Adopción"
    style="m-5 pb-5.5 h-30 w-30 mb-5 rounded-2xl pt-2 font-fredoka border-2 border-gris-oscuro"
    to="/adoption"
  />
);
const btnCloseSession = (
  <Button
    icon="/cerrar-sesion.svg"
    text="Cerrar Sesión"
    style="m-5 pb-5.5 h-30 w-30 mb-5 rounded-2xl pt-2 font-fredoka border-2 border-gris-oscuro"
    to="/"
  />
);

const MainCard = {
  image: "img-main.jpeg",
  title: "Inicio",
  buttons: [btnReports, btnContact, btnAdoption, btnCloseSession],
};

export default function Start() {
  return <Container button={<BurgerMenu />} mainCard={MainCard} />;
}
