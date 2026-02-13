# AI Studio

An all-in-one AI SaaS platform built with Next.js 15 that provides conversation, code generation, image generation, music generation, and video generation tools — all behind a freemium subscription model.

## Features

- **Conversation** — Chat with an AI assistant powered by OpenAI
- **Code Generation** — Generate code snippets with AI
- **Image Generation** — Create images using Replicate models
- **Music Generation** — Generate music tracks with AI
- **Video Generation** — Create videos with AI
- **Authentication** — User auth via Supabase (sign-in, sign-up, protected routes)
- **Free Tier** — 5 free API calls, then upgrade to Pro
- **Pro Subscription** — Unlimited usage via Stripe billing
- **Dark Mode** — System/light/dark theme support
- **Responsive UI** — Mobile-friendly sidebar and dashboard

## Tech Stack

- **Framework:** Next.js 15 (App Router, Turbopack)
- **Language:** TypeScript
- **Auth:** Supabase
- **Database:** Supabase (PostgreSQL)
- **AI:** OpenAI (conversation & code), Replicate (image, music, video)
- **Payments:** Stripe (subscriptions & webhooks)
- **UI:** Tailwind CSS, shadcn/ui, Radix UI, Lucide icons
- **State:** Zustand
- **Live Chat:** Crisp (optional)

## Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL database
- API keys for Clerk, OpenAI, Replicate, and Stripe

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd multi-saas
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Copy the example env file and fill in your keys:

```bash
cp .env.example .env
```

See `.env.example` for all required variables.

### 4. Set up the database

Configure your Supabase project and create the required tables (e.g. `user_subscriptions`, `user_api_limits`). You can use the SQL editor in the Supabase dashboard or run SQL migrations.

### 5. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```text
app/
  (dashboard)/          # Authenticated dashboard routes
    code/               # Code generation page
    conversation/       # Conversation page
    dashboard/          # Dashboard home
    image/              # Image generation page
    music/              # Music generation page
    settings/           # User settings
    video/              # Video generation page
  api/                  # API routes
    code/               # Code generation endpoint
    conversation/       # Conversation endpoint
    image/              # Image generation endpoint
    music/              # Music generation endpoint
    video/              # Video generation endpoint
    stripe/             # Stripe checkout
    webhook/            # Stripe webhook handler
components/             # Reusable UI components
lib/                    # Utilities (Prisma client, Stripe, API limits, subscriptions)
prisma/                 # Prisma schema
```

## Scripts

| Command         | Description                  |
| --------------- | ---------------------------- |
| `npm run dev`   | Start dev server (Turbopack) |
| `npm run build` | Production build             |
| `npm run start` | Start production server      |
| `npm run lint`  | Run ESLint                   |
