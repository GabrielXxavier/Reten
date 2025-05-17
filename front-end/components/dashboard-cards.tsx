import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, TrendingDown, Users, UserCheck } from "lucide-react"
import { fetchAlunosEmRisco } from "@/lib/data"

export async function DashboardCards() {
  const alunos = await fetchAlunosEmRisco()

  const totalAlunos = alunos.length
  const alunosAltoRisco = alunos.filter((aluno) => aluno.Prob_Churn >= 0.5).length
  const alunosMedioRisco = alunos.filter((aluno) => aluno.Prob_Churn >= 0.25 && aluno.Prob_Churn < 0.5).length
  const alunosBaixoRisco = alunos.filter((aluno) => aluno.Prob_Churn < 0.25).length

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
          <CardTitle className="text-sm font-medium">Total de Alunos em Risco</CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{totalAlunos}</div>
          <p className="text-xs text-muted-foreground">Alunos monitorados pelo sistema</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
          <CardTitle className="text-sm font-medium">Alto Risco</CardTitle>
          <AlertTriangle className="h-4 w-4 text-red-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{alunosAltoRisco}</div>
          <p className="text-xs text-muted-foreground">Probabilidade &gt; 50%</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
          <CardTitle className="text-sm font-medium">Médio Risco</CardTitle>
          <TrendingDown className="h-4 w-4 text-amber-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{alunosMedioRisco}</div>
          <p className="text-xs text-muted-foreground">Probabilidade entre 25-50%</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
          <CardTitle className="text-sm font-medium">Baixo Risco</CardTitle>
          <UserCheck className="h-4 w-4 text-green-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{alunosBaixoRisco}</div>
          <p className="text-xs text-muted-foreground">Probabilidade &lt; 25%</p>
        </CardContent>
      </Card>
    </div>
  )
}
