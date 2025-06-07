import { createFileRoute } from '@tanstack/react-router'
import Adoption from '../components/pages/Adoption'
export const Route = createFileRoute('/adoption')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Adoption />
}
