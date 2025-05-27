import { Suspense } from "react"
import { DashboardHeader } from "@/components/dashboard-header"
import { AlunosTable } from "@/components/alunos-table"
import { DashboardShell } from "@/components/dashboard-shell"
import { DashboardCards } from "@/components/dashboard-cards"
import { LoadingDashboard } from "@/components/loading-dashboard"
import  Charts  from "@/components/alunos-charts"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      <DashboardHeader />
      <DashboardShell>
        <Suspense fallback={<LoadingDashboard />}>
          <DashboardCards />
          <AlunosTable />
          <Charts />
        </Suspense>
      </DashboardShell>
    </main>
  )
}
