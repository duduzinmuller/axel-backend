# Axel Backend

**Axel Backend** é uma API robusta desenvolvida em Node.js com TypeScript, Express e Prisma ORM, focada em autenticação, pagamentos, gerenciamento de usuários, notificações por e-mail, integração com provedores OAuth (Google, Facebook), e muito mais. O projeto é modular, escalável e segue boas práticas de arquitetura, facilitando manutenção e evolução.

---

## 🚀 Tecnologias Principais

- **Node.js** + **TypeScript**
- **Express** (API REST)
- **Prisma ORM** (PostgreSQL)
- **Supabase** (OAuth)
- **MercadoPago** (Pagamentos)
- **Nodemailer** (E-mails)
- **JWT** (Autenticação)
- **Zod** (Validação)
- **Husky, ESLint, Prettier** (Qualidade de código)

---

## 📁 Estrutura de Pastas (`/src`)

```
src/
├── adapters/           # Adapters para autenticação, tokens, etc.
├── config/             # Configurações de serviços externos (Supabase, MercadoPago, etc)
├── controller/         # Controllers organizados por domínio (auth, user, payment, etc)
├── email-templates/    # Templates HTML para envio de e-mails
├── errors/             # Classes de erro customizadas
├── factories/          # Fábricas para instanciar controllers e use-cases
├── middleware/         # Middlewares Express (ex: autenticação, error handler)
├── repositories/       # Repositórios de acesso a dados (Prisma)
├── routes/             # Rotas Express organizadas por domínio
├── schemas/            # Schemas de validação (Zod)
├── services/           # Serviços auxiliares (e-mail, weather, etc)
├── types/              # Tipos e interfaces TypeScript globais
├── uploads/            # Uploads de arquivos
├── use-cases/          # Lógica de negócio (casos de uso)
├── utils/              # Funções utilitárias (helpers)
├── app.ts              # Configuração principal do Express
└── index.ts            # Ponto de entrada do servidor
```

---

## 🧩 Principais Funcionalidades

- **Autenticação**: Login tradicional e social (Google, Facebook) com verificação de e-mail.
- **Gerenciamento de Usuários**: Cadastro, atualização, reset de senha, verificação de e-mail.
- **Pagamentos**: Integração com MercadoPago (cartão, boleto, PIX), atualização automática de plano e expiração.
- **Notificações por E-mail**: Envio de e-mails transacionais e de verificação.
- **Controle de Plano**: Planos `FREE`, `MONTHLY` (30 dias), `ANNUAL` (365 dias) com expiração automática.
- **Upload de Arquivos**: Suporte a uploads via API.
- **Validação e Segurança**: Uso de Zod, JWT, middlewares e tratamento centralizado de erros.

---

## 🏗️ Modelos Principais (Prisma)

- **User**: Usuário, plano, expiração, autenticação, etc.
- **Payment**: Pagamentos, status, método, integração MercadoPago.
- **EmailVerification**: Verificação de e-mail.
- **AccessCode**: Códigos de acesso.
- **EmailNotification**: Notificações por e-mail.
- **MessageUsage**: Controle de uso de mensagens por usuário.

---

## ⚙️ Como rodar o projeto

1. **Clone o repositório**
2. **Instale as dependências**
   ```sh
   npm install
   ```
3. **Configure as variáveis de ambiente**  
   Crie um arquivo `.env` com as chaves necessárias (banco, supabase, mercado pago, etc).
4. **Rode as migrations do Prisma**
   ```sh
   npx prisma migrate dev
   ```
5. **Inicie o servidor em desenvolvimento**
   ```sh
   npm run dev
   ```
6. **Acesse a API**  
   O servidor rodará na porta definida em `PORT` no `.env`.

---

## 🔑 Exemplos de Rotas

- `POST /api/auth/login` — Login tradicional
- `GET /api/auth/login/:provider` — Login social (OAuth)
- `GET /api/auth/callback` — Callback OAuth
- `POST /api/users` — Cadastro de usuário
- `POST /api/payment` — Iniciar pagamento
- `POST /api/verification-code` — Enviar código de verificação de e-mail
- `POST /api/validate-code` — Validar código de e-mail

---

## 📝 Convenções

- Commits seguem o padrão **Conventional Commits**.
- Código validado com **ESLint** e formatado com **Prettier**.
- Testes e deploy facilitados por scripts no `package.json`.

---

## 👨‍💻 Estrutura Detalhada das Pastas

- **adapters/**: Integrações com autenticação externa, geração de tokens, etc.
- **controller/**: Lógica de controle das rotas, separada por domínio.
- **email-templates/**: Templates HTML para e-mails transacionais.
- **errors/**: Definição de erros customizados.
- **factories/**: Instanciação de controllers e use-cases.
- **middleware/**: Middlewares Express (autenticação, erros, etc).
- **repositories/**: Acesso a dados via Prisma.
- **routes/**: Definição das rotas Express.
- **schemas/**: Schemas de validação (Zod).
- **services/**: Serviços auxiliares (e-mail, clima, etc).
- **types/**: Tipos globais TypeScript.
- **uploads/**: Uploads de arquivos.
- **use-cases/**: Lógica de negócio (casos de uso).
- **utils/**: Funções utilitárias.

---

## 📚 Observações

- O projeto é facilmente extensível para novos domínios (ex: analytics, notificações push).
- O uso de Prisma facilita a manutenção e evolução do banco de dados.
- O sistema de planos é flexível e pode ser adaptado para novas modalidades.

---

## 🏆 Autor

- Eduardo Muller
- André Nunus

---

## 🗝️ Exemplo de .env

```env
# Porta do servidor
PORT=3000

# Banco de dados (Prisma/Postgres)
DATABASE_URL=

# Supabase (OAuth)
SUPABASE_URL=
SUPABASE_ANON_KEY=

# MercadoPago
MP_ACCESS_TOKEN=

# JWT
JWT_ACCESS_TOKEN_SECRET=
JWT_REFRESH_TOKEN_SECRET=

# E-mail (Nodemailer)
EMAIL_USER=
EMAIL_PASS=

# Google OAuth
GOOGLE_CLIENT_ID=
GOOGLE_GENERATE_API_KEY=

# API externa de clima
OPENWEATHER_API_KEY=

# URL do frontend
FRONT_END_APP_API=

# URL do backend (para uploads, etc)
BACKEND_URL=

# Outras variáveis que seu projeto possa precisar...
```
