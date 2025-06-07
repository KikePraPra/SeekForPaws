import { createFileRoute } from '@tanstack/react-router'
import Start from '../components/pages/Start'
export const Route = createFileRoute('/start')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Start />;
}
