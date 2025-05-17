import { fetchAlunosEmRisco } from "@/lib/data"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Eye, Mail, Phone } from "lucide-react"
import { AlunoDetailDialog } from "@/components/aluno-detail-dialog"
import { ExportCSV } from "@/components/export-csv"

export async function AlunosTable() {
  const alunos = await fetchAlunosEmRisco()

  // Ordenar por probabilidade de churn (do maior para o menor)
  const alunosOrdenados = [...alunos].sort((a, b) => b.Prob_Churn - a.Prob_Churn)

  return (
    <div className="mt-6 space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tight">Alunos em Risco de Desistência</h2>
        <div className="flex items-center gap-2">
          <ExportCSV alunos={alunosOrdenados} />
          <Button size="sm">Ações em Massa</Button>
        </div>
      </div>
      <div className="rounded-lg border bg-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Aluno</TableHead>
              <TableHead>Idade</TableHead>
              <TableHead>IMC</TableHead>
              <TableHead>Frequência</TableHead>
              <TableHead>Tempo de Assinatura</TableHead>
              <TableHead>Risco de Desistência</TableHead>
              <TableHead className="text-right">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {alunosOrdenados.map((aluno) => (
              <TableRow key={aluno.ID}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarFallback className="bg-rose-100 text-rose-800">
                        {aluno.Nome.substring(0, 2).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{aluno.Nome}</p>
                      <p className="text-xs text-muted-foreground">{aluno.Email}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>{aluno.Idade} anos</TableCell>
                <TableCell>{aluno.IMC.toFixed(1)}</TableCell>
                <TableCell>
                  {aluno.Frequencia_Semanal}x por semana
                  <p className="text-xs text-muted-foreground">{aluno.Presencas_Ultimo_Mes} presenças no último mês</p>
                </TableCell>
                <TableCell>{aluno.Tempo_de_Assinatura} meses</TableCell>
                <TableCell>
                  <RiscoBadge probabilidade={aluno.Prob_Churn} />
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button size="icon" variant="ghost">
                      <Mail className="h-4 w-4" />
                      <span className="sr-only">Enviar email</span>
                    </Button>
                    <Button size="icon" variant="ghost">
                      <Phone className="h-4 w-4" />
                      <span className="sr-only">Ligar</span>
                    </Button>
                    <AlunoDetailDialog aluno={aluno}>
                      <Button size="icon" variant="ghost">
                        <Eye className="h-4 w-4" />
                        <span className="sr-only">Ver detalhes</span>
                      </Button>
                    </AlunoDetailDialog>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

function RiscoBadge({ probabilidade }: { probabilidade: number }) {
  let variant: "outline" | "destructive" | "secondary" | "default" = "outline"
  let label = ""

  if (probabilidade >= 0.5) {
    variant = "destructive"
    label = "Alto"
  } else if (probabilidade >= 0.25) {
    variant = "secondary"
    label = "Médio"
  } else {
    variant = "default"
    label = "Baixo"
  }

  return (
    <Badge variant={variant} className="font-medium">
      {label} ({(probabilidade * 100).toFixed(0)}%)
    </Badge>
  )
}
