import { createFileRoute } from "@tanstack/react-router";
import ReportForms from "../components/pages/ReportForms";
export const Route = createFileRoute("/reportForms")({
  component: RouteComponent,
});

function RouteComponent() {
  return <ReportForms />;
}
