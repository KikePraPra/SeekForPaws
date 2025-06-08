import Button from "../ui/Button";
import BurgerMenu from "../ui/BurgerMenu";
import Container from "../ui/Container";

const btnRegisterReport = (
  <Button
    text="Registrar reporte"
    style="pb-5.5 h-12 mb-5 w-80 rounded-2xl pt-2 bg-verde-oscuro text-white border-2 font-fredoka cursor-pointer border-verde-oscuro hover:bg-transparent hover:text-gris-oscuro duration-400"
    to="/adoptionForms"
  />
);

const btnViewReports = (
  <Button
    text="Ver Reportes"
    style="pb-5.5 h-12 w-80 rounded-2xl pt-2 bg-transparent text-gris-oscuro border-2 font-fredoka cursor-pointer border-verde-oscuro hover:bg-verde-oscuro hover:text-white duration-400"
    to="/"
  />
);

const cardReports = {
  image: "img-main.jpeg",
  title: "Reportes",
  buttons: [btnRegisterReport, btnViewReports],
};

export default function Adoption() {
  return <Container button={<BurgerMenu />} mainCard={cardReports} />;
}
