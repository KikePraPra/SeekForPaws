import { createFileRoute } from '@tanstack/react-router'
import Accounts from '../components/pages/Accounts'
export const Route = createFileRoute('/accounts')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Accounts />
}
