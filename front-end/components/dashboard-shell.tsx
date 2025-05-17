import type { ReactNode } from "react"

interface DashboardShellProps {
  children: ReactNode
}

export function DashboardShell({ children }: DashboardShellProps) {
  return <div className="container grid items-start gap-6 px-4 py-6 md:px-6 md:py-8">{children}</div>
}
