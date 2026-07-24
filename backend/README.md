# Backend New Tesc

API Express com TypeScript, Prisma e SQLite para desenvolvimento local.

## Configuração

1. Copie `.env.example` para `.env`.
2. Execute `npm install`.
3. Execute `npm run prisma:generate`.
4. Execute `npm run prisma:migrate -- --name configurar_backend`.
5. Inicie com `npm run dev`.

O backend utiliza `http://localhost:3001` e aceita o frontend em
`http://localhost:3000`.

Para a busca automática do brasão, configure `GOOGLE_CSE_API_KEY` e
`GOOGLE_CSE_CX` no `.env`. O mecanismo de busca programável deve permitir
pesquisa de imagens.

## Rotas

- `GET /health`
- `GET /api/transito-individual/orgaos`
- `GET /api/transito-individual/orgaos/:id`
- `GET /api/transito-individual/orgaos/brasao?municipio_uf=Curitiba-PR`
- `POST /api/transito-individual/orgaos`
- `PUT /api/transito-individual/orgaos/:id`
- `DELETE /api/transito-individual/orgaos/:id`
