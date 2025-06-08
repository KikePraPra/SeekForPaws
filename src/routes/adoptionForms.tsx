import { createFileRoute } from "@tanstack/react-router";
import AdoptionForms from "../components/pages/AdoptionForms";
export const Route = createFileRoute("/adoptionForms")({
  component: RouteComponent,
});

function RouteComponent() {
  return <AdoptionForms />;
}
