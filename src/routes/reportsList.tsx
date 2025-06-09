import { createFileRoute } from '@tanstack/react-router'
import ReportList from '../components/pages/ReportsList'
export const Route = createFileRoute('/reportsList')({
  component: RouteComponent,
})

function RouteComponent() {
  return <ReportList />
}
