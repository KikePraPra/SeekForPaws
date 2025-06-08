import { createFileRoute } from "@tanstack/react-router";
import Contacto from "../components/pages/Contacto";
export const Route = createFileRoute("/contacto")({
  component: RouteComponent,
});

function RouteComponent() {
  return <Contacto />;
}
