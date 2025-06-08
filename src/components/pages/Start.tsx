import Button from "../ui/Button";
import Container from "../ui/Container";


const btnReportes = (
  <Button
    icon="/reportes.svg"
    text="Reportes"
    style="m-5 pb-5.5 h-30 w-30 mb-5 rounded-2xl pt-2 font-fredoka border-2 border-gris-oscuro"
    to="/reports"
  />
);
const btnContacto = (
  <Button
    icon="/contacto.svg"
    text="Contacto"
    style="m-5 pb-5.5 h-30 w-30 mb-5 rounded-2xl pt-2 font-fredoka border-2 border-gris-oscuro"
    to="/contacto"
  />
);
const btnAdopcion = (
  <Button
    icon="/adopcion.svg"
    text="Adopción"
    style="m-5 pb-5.5 h-30 w-30 mb-5 rounded-2xl pt-2 font-fredoka border-2 border-gris-oscuro"
    to="/adoption"
  />
);
const btnCerrarSesion = (
  <Button
    icon="/cerrar-sesion.svg"
    text="Cerrar Sesión"
    style="m-5 pb-5.5 h-30 w-30 mb-5 rounded-2xl pt-2 font-fredoka border-2 border-gris-oscuro"
    to="/"
  />
);

const btnBurger = (
  <Button
    icon="/burger.svg"
    text=""
    style="w-7 h-5 translate-y-[-1.5rem]"
    to="/"
  />
)

/* image:string,
    title: string,
    icon: string,
    text: string*/ 
const MainCard = {
  image: "img-main.jpeg",
  title: "Inicio",
  buttons: [btnReportes, btnContacto,btnAdopcion, btnCerrarSesion],

};
export default function Start() {
  return <Container button={btnBurger} mainCard={MainCard} />;
}
