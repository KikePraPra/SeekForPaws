import { createFileRoute } from "@tanstack/react-router";
import Complaints from "../components/pages/Complaints";
export const Route = createFileRoute("/complaints")({
  component: RouteComponent,
});

function RouteComponent() {
  return <Complaints />;
}
