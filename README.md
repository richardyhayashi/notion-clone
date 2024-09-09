# Build and Deploy Notion Clone – Full Stack Tutorial (NextJS 13, DALL•E, DrizzleORM, OpenAI, Vercel)
by `freeCodeCamp`, `Eliot Chong`

YouTube:

Source:

01. Intro & Demo
02. Outline Knowledge
03. Set Up Project
04. Set Up Shadcn
05. Set Up Clerk Auth
06. Landing Page
07. Dashboard UI
08. DrizzleORM
09. Create Note UI
10. OpenAI Generate Image Prompt
11.
12.
13.
14.
15.
16.
17.
18.
19.


## Project 

### Create Notion Clone

`$ mkdir src`
`$ cd src`
`$ npx create-next-app@latest --ts .`
or
`$ npx create-next-app@latest --ts src`
`$ cd src`

### Run Notion Clone

In `src` foler:
`$ npm run dev`

### Shadcn UI

#### Init Shadcn UI

`$ npx shadcn@latest init`

#### Add Component

`$ npx shadcn@latest add {component}`

### Clerk

`$ npm i @clerk/nextjs`

### Typewriter Effect

`$ npm i typewriter-effect`

### Install Icons

`$ npm i lucide-react`

Website: `https://lucide.dev/`


## Register w/ Neon.tech

`https://neon.tech`

### Install DrizzleOrm

`$ npm i drizzle-orm @neondatabase/serverless dotenv`
`$ npm i -D drizzle-kit`

### Dizzle Migrations

Add in `package.json` scripts:
`"db:generate": "drizzle-kit generate"`
`"db:migrate": "drizzle-kit migrate"`
`"db:push": "drizzle-kit push"`

Run:
`$ npm run db:generate`
or
`$ npm run db:migrate`
or
`$ npm run db:push`

### Run "dizzle-kit studio"

`$ npx drizzle-kit studio`


## OpenAI

### Install

`$ npm install openai-edge`

### ????

`$ npm install @tanstack/react-query`


## VSCode

`tsrafce` - 
`Ctrl + K + C`  - Add line comment