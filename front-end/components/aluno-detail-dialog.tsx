"use client"

import type { ReactNode } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Activity, Calendar, Clock, Dumbbell, Mail, MessageSquare, Phone, Scale, Target, User } from "lucide-react"
import type { Aluno } from "@/lib/types"

interface AlunoDetailDialogProps {
  children: ReactNode
  aluno: Aluno
}

export function AlunoDetailDialog({ children, aluno }: AlunoDetailDialogProps) {
  const genero = aluno.Genero === 1 ? "Masculino" : "Feminino"
  const objetivo = getObjetivo(aluno.Objetivo)
  const plano = getPlano(aluno.Plano)

  const risco = aluno.Prob_Churn * 100
  const riscoLabel = risco >= 30 ? "Alto" : risco >= 25 ? "Médio" : "Baixo"
  const riscoColor = risco >= 30 ? "bg-red-500" : risco >= 25 ? "bg-amber-500" : "bg-green-500"

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[700px]">
        <DialogHeader>
          <DialogTitle>Detalhes do Aluno</DialogTitle>
          <DialogDescription>Informações detalhadas e análise de risco</DialogDescription>
        </DialogHeader>
        <div className="grid gap-6">
          <div className="flex items-center gap-4">
            <Avatar className="h-16 w-16">
              <AvatarFallback className="bg-rose-100 text-rose-800 text-xl">
                {aluno.Nome.substring(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="text-xl font-bold">{aluno.Nome}</h3>
              <p className="text-sm text-muted-foreground">ID: {aluno.ID}</p>
              <div className="mt-1 flex items-center gap-3">
                <Button size="sm" variant="outline" className="h-8 gap-1">
                  <Mail className="h-3.5 w-3.5" />
                  Email
                </Button>
                <Button size="sm" variant="outline" className="h-8 gap-1">
                  <Phone className="h-3.5 w-3.5" />
                  Ligar
                </Button>
                <Button size="sm" variant="outline" className="h-8 gap-1">
                  <MessageSquare className="h-3.5 w-3.5" />
                  Mensagem
                </Button>
              </div>
            </div>
          </div>

          <Tabs defaultValue="perfil">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="perfil">Perfil</TabsTrigger>
              <TabsTrigger value="atividade">Atividade</TabsTrigger>
              <TabsTrigger value="risco">Análise de Risco</TabsTrigger>
            </TabsList>
            <TabsContent value="perfil" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Informações Pessoais</CardTitle>
                  </CardHeader>
                  <CardContent className="grid gap-3">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">Gênero:</span>
                      <span className="text-sm font-medium">{genero}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">Idade:</span>
                      <span className="text-sm font-medium">{aluno.Idade} anos</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">Email:</span>
                      <span className="text-sm font-medium">{aluno.Email}</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Dados Físicos</CardTitle>
                  </CardHeader>
                  <CardContent className="grid gap-3">
                    <div className="flex items-center gap-2">
                      <Scale className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">Peso:</span>
                      <span className="text-sm font-medium">{aluno.Peso} kg</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Activity className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">Altura:</span>
                      <span className="text-sm font-medium">{aluno.Altura} m</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Activity className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">IMC:</span>
                      <span className="text-sm font-medium">{aluno.IMC.toFixed(1)}</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Informações da Assinatura</CardTitle>
                  </CardHeader>
                  <CardContent className="grid gap-3">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">Tempo de Assinatura:</span>
                      <span className="text-sm font-medium">{aluno.Tempo_de_Assinatura} meses</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Target className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">Objetivo:</span>
                      <span className="text-sm font-medium">{objetivo}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Dumbbell className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">Plano:</span>
                      <span className="text-sm font-medium">{plano}</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Frequência</CardTitle>
                  </CardHeader>
                  <CardContent className="grid gap-3">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">Frequência Semanal:</span>
                      <span className="text-sm font-medium">{aluno.Frequencia_Semanal}x por semana</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Activity className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">Presenças no Último Mês:</span>
                      <span className="text-sm font-medium">{aluno.Presencas_Ultimo_Mes} presenças</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="atividade">
              <Card>
                <CardHeader>
                  <CardTitle>Histórico de Atividades</CardTitle>
                  <CardDescription>Registro de atividades e presenças do aluno</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Dados de atividade detalhados estariam disponíveis aqui.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="risco">
              <Card>
                <CardHeader>
                  <CardTitle>Análise de Risco de Desistência</CardTitle>
                  <CardDescription>Probabilidade calculada com base no comportamento e perfil</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Probabilidade de Desistência</span>
                      <span className="text-sm font-bold">{(aluno.Prob_Churn * 100).toFixed(0)}%</span>
                    </div>
                    <div className="h-4 w-full overflow-hidden rounded-full bg-secondary">
                      <div className={`h-full ${riscoColor}`} style={{ width: `${aluno.Prob_Churn * 100}%` }} />
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Baixo</span>
                      <span>Médio</span>
                      <span>Alto</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="mb-3 font-medium">Fatores de Risco</h4>
                    <ul className="space-y-2 text-sm">
                      {aluno.Frequencia_Semanal < 3 && (
                        <li className="flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-red-500" />
                          Baixa frequência semanal ({aluno.Frequencia_Semanal}x por semana)
                        </li>
                      )}
                      {aluno.Presencas_Ultimo_Mes < 10 && (
                        <li className="flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-red-500" />
                          Poucas presenças no último mês ({aluno.Presencas_Ultimo_Mes})
                        </li>
                      )}
                      {aluno.IMC > 30 && (
                        <li className="flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-amber-500" />
                          IMC elevado ({aluno.IMC.toFixed(1)})
                        </li>
                      )}
                      {aluno.Tempo_de_Assinatura < 6 && (
                        <li className="flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-amber-500" />
                          Assinatura recente ({aluno.Tempo_de_Assinatura} meses)
                        </li>
                      )}
                    </ul>
                  </div>

                  <div>
                    <h4 className="mb-3 font-medium">Ações Recomendadas</h4>
                    <div className="space-y-2">
                      <Button className="w-full">Agendar Contato</Button>
                      <Button variant="outline" className="w-full">
                        Enviar Plano Personalizado
                      </Button>
                      <Button variant="outline" className="w-full">
                        Oferecer Desconto
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </DialogContent>
    </Dialog>
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
