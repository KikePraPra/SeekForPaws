import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

import Button from "../components/ui/Button";
import Container from "../components/ui/Container";

const btnIniciaSesion = (
  <Button
    text="Inicia Sesión"
    style="pb-5.5 h-12 mb-5 w-80 m-auto rounded-2xl pt-2 bg-verde-oscuro text-white border-2 font-fredoka cursor-pointer border-verde-oscuro hover:bg-transparent hover:text-gris-oscuro duration-400"
    to="/login"
  />
);

const btnDescripcion = (
  <Button
    text="Descripción"
    style="pb-5.5 h-12 w-80 m-auto rounded-2xl pt-2 bg-transparent text-gris-oscuro border-2 font-fredoka cursor-pointer border-verde-oscuro hover:bg-verde-oscuro hover:text-white duration-400"
    to="/aboutus"
  />
);

const cardBienvenida = {
  image: "img-main.jpeg",
  title: "¡Bienvenido!",
  buttons: [btnIniciaSesion, btnDescripcion],
};

function RouteComponent() {
  return <Container mainCard={cardBienvenida} />;
}
