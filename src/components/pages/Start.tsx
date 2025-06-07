import Button from "../ui/Button";
import Container from "../ui/Container";


const btnReportes = (
  <Button
    icon="/reportes.svg"
    text="Reportes"
    style="m-5 pb-5.5 h-40 mb-5 w-40 rounded-2xl pt-2 font-fredoka border-2 border-gris-oscuro"
    to="/"
  />
);
const btnContacto = (
  <Button
    icon="/contacto.svg"
    text="Contacto"
    style="m-5 pb-5.5 h-40 mb-5 w-40 rounded-2xl pt-2 font-fredoka border-2 border-gris-oscuro"
    to="/"
  />
);
const btnAdopcion = (
  <Button
    icon="/adopcion.svg"
    text="Adopción"
    style="m-5 pb-5.5 h-40 mb-5 w-40 rounded-2xl pt-2 font-fredoka border-2 border-gris-oscuro"
    to="/adoption"
  />
);
const btnCerrarSesion = (
  <Button
    icon="/cerrar-sesion.svg"
    text="Cerrar Sesión"
    style="m-5 pb-5.5 h-40 mb-5 w-40 rounded-2xl pt-2 font-fredoka border-2 border-gris-oscuro"
    to="/"
  />
);
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
  return <Container /* navElement='burger'*/ mainCard={MainCard} />;
}
