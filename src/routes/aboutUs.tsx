import { createFileRoute } from '@tanstack/react-router'
import AboutUs from '../components/pages/AboutUs'

export const Route = createFileRoute('/aboutUs')({
  component: RouteComponent,
})

function RouteComponent() {
  return <AboutUs />
}
