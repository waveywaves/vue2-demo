# Vue 3 Task List Demo

A minimal Vue 3 task list application built with TypeScript, Composition API, and modern tooling.

## Quick Start

```bash
npm install
npm run dev
```

Opens at http://localhost:8082

## Stack

- Vue 3.5
- Pinia 2.2
- Vite 6.0
- TypeScript 5.6

## Structure

- **src/App.vue** - Root component with `<script lang="ts">`
- **src/components/TaskList.vue** - Task list display (Composition API)
- **src/components/TaskInput.vue** - Task input form (Composition API)
- **src/stores/taskStore.ts** - Pinia store with TypeScript types
- **src/main.ts** - Application entry point

## Features

- **TypeScript** - Full type safety across components and stores
- **Composition API** - Modern Vue 3 component structure with `setup()` function
- **Pinia** - Intuitive state management with typed stores
- **CSS Variables** - Theming support via custom properties for colors, spacing, and borders
