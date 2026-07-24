# New Tesc

Sistema web para centralizar módulos administrativos em um único dashboard.
O projeto reúne um frontend em Next.js e uma API em Express com persistência
local usando Prisma e SQLite.

## Acesso ao dashboard

Após iniciar o frontend, acesse:

http://localhost:3000/dashboard

Página principal do dashboard:

`app/dashboard/page.tsx`

## Funcionalidades

- Dashboard central com navegação entre módulos
- Cadastro e consulta no Banco de Preços
- Formulários do módulo Jurídico
- Formulários do módulo de Trânsito
- API CRUD para órgãos de trânsito
- Busca opcional de brasões usando Google Custom Search

## Estrutura do projeto

```text
new-tesc/
├── app/
│   ├── dashboard/
│   │   ├── banco-preco/
│   │   ├── juridico/
│   │   └── transito/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── backend/
│   ├── prisma/
│   ├── src/
│   │   ├── controllers/
│   │   ├── middlewares/
│   │   ├── repositories/
│   │   ├── routes/
│   │   └── services/
│   └── package.json
├── iniciar-dashboard.bat
├── next.config.ts
├── package.json
└── README.md
```

Pastas geradas, como `node_modules`, `.next` e `dist`, não são armazenadas no
GitHub. Elas são recriadas durante a instalação e o build.

## Tecnologias

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Express
- Prisma
- SQLite
- Zod

## Pré-requisitos

- Node.js 20 ou superior
- npm

## Instalação do frontend

Na pasta principal do projeto:

```bash
npm install
npm run dev
```

No Windows, também é possível executar `iniciar-dashboard.bat`.

## Instalação do backend

```bash
cd backend
copy .env.example .env
npm install
npm run prisma:generate
npm run prisma:migrate -- --name configurar_backend
npm run dev
```

O frontend utiliza a porta `3000` e a API utiliza a porta `3001`.

## Rotas da API

- `GET /health`
- `GET /api/transito-individual/orgaos`
- `GET /api/transito-individual/orgaos/:id`
- `GET /api/transito-individual/orgaos/brasao`
- `POST /api/transito-individual/orgaos`
- `PUT /api/transito-individual/orgaos/:id`
- `DELETE /api/transito-individual/orgaos/:id`

## Build de produção

Frontend:

```bash
npm run build
npm run start
```

Backend:

```bash
cd backend
npm run build
npm run start
```
