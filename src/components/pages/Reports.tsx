import Button from "../ui/Button";
import BurgerMenu from "../ui/BurgerMenu";
import Container from "../ui/Container";

const btnRegisterReport = (
  <Button
    text="Registrar reporte"
    style="pb-5.5 h-12 mb-5 w-80 rounded-2xl pt-2 bg-verde-oscuro text-white border-2 font-fredoka cursor-pointer border-verde-oscuro hover:bg-transparent hover:text-gris-oscuro duration-400"
    to="/reportForms"
  />
);

const btnViewReports = (
  <Button
    text="Ver Reportes"
    style="pb-5.5 h-12 w-80 rounded-2xl pt-2 bg-transparent text-gris-oscuro border-2 font-fredoka cursor-pointer border-verde-oscuro hover:bg-verde-oscuro hover:text-white duration-400"
    to="/ReportsList"
  />
);

const cardReports = {
  image: "img-main.jpeg",
  title: "Reportes",
  buttons: [btnRegisterReport, btnViewReports],
};

const btnBack = (
  <Button
    icon="/back.svg"
    style="w-7 h-5 translate-y-[-2rem] absolute right-7"
    onClick={() => history.back()}
  />
);

export default function Reports() {
  return <Container button={btnBack} mainCard={cardReports} />;
}
