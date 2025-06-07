import Button from "../ui/Button";
import Container from "../ui/Container";

const btnConfirmar = (
  <Button
    text="Confirmar"
    style="pb-5.5 h-12 mb-5 w-84 rounded-2xl pt-2 bg-verde-oscuro text-white border-2 font-fredoka cursor-pointer border-verde-oscuro hover:bg-transparent hover:text-gris-oscuro duration-400"
    to="/start"
  />
);

const cardBienvenida = {
  image: "img-main.jpeg",
  title: "Usted ha entrado al Login",
  buttons: [btnConfirmar],
};
export default function Login() {
  return <Container /* navElement='burger'*/ mainCard={cardBienvenida} />;
}
