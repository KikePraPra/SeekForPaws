import { createFileRoute } from "@tanstack/react-router";
import AdoptionList from "../components/pages/AdoptionList";
export const Route = createFileRoute("/adoptionList")({
  component: RouteComponent,
});

function RouteComponent() {
  return <AdoptionList />;
}
