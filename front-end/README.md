# FitRetain - Sistema de Monitoramento de Alunos

Sistema para monitoramento e prevenção de desistência de alunos em academias.

## Funcionalidades

- 📊 Dashboard com métricas de risco
- 👥 Lista de alunos em risco de desistência
- 📈 Análise de probabilidade de churn
- 📱 Interface em next
- 📥 Exportação de dados em CSV
- 🌓 Suporte a tema claro/escuro

## Tecnologias Utilizadas

- Next.js 14
- TypeScript
- Tailwind CSS
- Shadcn/ui
- Lucide Icons

## Instalação

1. Clone o repositório:
```bash
git clone [url-do-repositorio]
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
# ou
yarn dev
```

4. Acesse `http://localhost:3000`

## Estrutura do Projeto

```
├── app/                 # Páginas da aplicação
├── components/         # Componentes React
├── lib/               # Utilitários e tipos
└── public/            # Arquivos estáticos
```

## API

O sistema se conecta a uma API local em `http://127.0.0.1:5000` que fornece os dados dos alunos.

### Endpoints

- `GET /alunos-em-risco`: Retorna lista de alunos com probabilidade de desistência

## Dados do Aluno

```typescript
interface Aluno {
  ID: number
  Nome: string
  Email: string
  Idade: number
  Genero: number
  Altura: number
  Peso: number
  IMC: number
  Objetivo: number
  Plano: number
  Frequencia_Semanal: number
  Presencas_Ultimo_Mes: number
  Tempo_de_Assinatura: number
  Prob_Churn: number
}
```

## Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request 