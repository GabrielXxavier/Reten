"use client"

import { Button } from "@/components/ui/button"
import type { Aluno } from "@/lib/types"

interface ExportCSVProps {
  alunos: Aluno[]
}

export function ExportCSV({ alunos }: ExportCSVProps) {
  const exportToCSV = () => {
    // Cabeçalhos do CSV
    const headers = [
      "ID",
      "Nome",
      "Email",
      "Idade",
      "Gênero",
      "Altura",
      "Peso",
      "IMC",
      "Objetivo",
      "Plano",
      "Frequência Semanal",
      "Presenças Último Mês",
      "Tempo de Assinatura",
      "Probabilidade de Churn"
    ]

    // Mapear os dados para o formato CSV
    const csvData = alunos.map((aluno) => [
      aluno.ID,
      aluno.Nome,
      aluno.Email,
      aluno.Idade,
      aluno.Genero === 1 ? "Masculino" : "Feminino",
      aluno.Altura,
      aluno.Peso,
      aluno.IMC.toFixed(1),
      getObjetivo(aluno.Objetivo),
      getPlano(aluno.Plano),
      aluno.Frequencia_Semanal,
      aluno.Presencas_Ultimo_Mes,
      aluno.Tempo_de_Assinatura,
      (aluno.Prob_Churn * 100).toFixed(1) + "%"
    ])

    // Adicionar cabeçalhos ao início
    csvData.unshift(headers)

    // Converter para string CSV
    const csvString = csvData.map(row => row.join(",")).join("\n")

    // Criar blob e link para download
    const blob = new Blob([csvString], { type: "text/csv;charset=utf-8;" })
    const link = document.createElement("a")
    const url = URL.createObjectURL(blob)
    
    link.setAttribute("href", url)
    link.setAttribute("download", `alunos-em-risco-${new Date().toISOString().split("T")[0]}.csv`)
    link.style.visibility = "hidden"
    
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <Button variant="outline" size="sm" onClick={exportToCSV}>
      Exportar CSV
    </Button>
  )
}

function getObjetivo(codigo: number): string {
  switch (codigo) {
    case 0:
      return "Perda de Peso"
    case 1:
      return "Ganho de Massa"
    case 2:
      return "Condicionamento"
    default:
      return "Não Especificado"
  }
}

function getPlano(codigo: number): string {
  switch (codigo) {
    case 0:
      return "Básico"
    case 1:
      return "Intermediário"
    case 2:
      return "Premium"
    default:
      return "Não Especificado"
  }
} 