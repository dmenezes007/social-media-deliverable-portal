# Social Media Deliverable Portal

Portal interativo de entregáveis de Social Media — estratégia, conteúdo de feed, stories e padrão operacional em uma única interface.

## Stack

- React 19 + TypeScript
- Vite 6
- Tailwind CSS v4
- Lucide React

## Desenvolvimento local

**Pré-requisitos:** Node.js 18+

1. Instale as dependências:
   ```
   npm install
   ```

2. Inicie o servidor de desenvolvimento:
   ```
   npm run dev
   ```

3. Acesse em http://localhost:3000

## Build de produção

```
npm run build
```

Os arquivos gerados ficam em dist/.

## Deploy no Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/dmenezes007/social-media-deliverable-portal)

O projeto está pré-configurado com ercel.json para funcionar como SPA.
O Vercel detecta automaticamente projetos Vite — basta conectar o repositório.

| Configuração | Valor |
|---|---|
| Framework | Vite |
| Build Command | 
pm run build |
| Output Directory | dist |
| Install Command | 
pm install |
