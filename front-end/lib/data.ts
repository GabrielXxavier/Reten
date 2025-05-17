import type { Aluno } from "./types"

export async function fetchAlunosEmRisco(): Promise<Aluno[]> {
  try {
    const response = await fetch("http://127.0.0.1:5000/alunos-em-risco")

    if (!response.ok) {
      throw new Error(`Erro ao buscar dados: ${response.status}`)
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error("Erro ao buscar dados da API:", error)

    // Retornar dados de exemplo em caso de erro
    return [
      {
        Altura: 1.66,
        Email: "aluno_45@exemplo.com",
        Frequencia_Semanal: 5,
        Genero: 1,
        ID: 45,
        IMC: 32.9,
        Idade: 37,
        Nome: "Aluno_45",
        Objetivo: 1,
        Peso: 90.6,
        Plano: 1,
        Presencas_Ultimo_Mes: 14,
        Prob_Churn: 0.28,
        Tempo_de_Assinatura: 32,
      }
    ]
  }
}
