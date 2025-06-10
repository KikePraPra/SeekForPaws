import { createFileRoute } from '@tanstack/react-router'
import SeeMore from '../components/pages/SeeMore'
export const Route = createFileRoute('/seeMore')({
  component: RouteComponent,
})

function RouteComponent() {
  return <SeeMore />
}
