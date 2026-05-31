# Data Scientist & AI/ML Engineer Portfolio

A complete, production-grade personal portfolio website built with Next.js 15, Tailwind CSS, Framer Motion, and shadcn/ui. 

## Features

- **Modern Tech Stack**: Next.js 15 (App Router), React, TypeScript.
- **Beautiful Design**: Custom deep navy and gold aesthetic, fully responsive.
- **Smooth Animations**: Page transitions and scroll-reveal effects via Framer Motion.
- **AI Chatbot Widget**: Integrated Google Gemini API to answer visitor questions directly from your portfolio.
- **Static Export**: Fully optimized for GitHub Pages deployment (`output: 'export'`).

## Prerequisites

- Node.js 20+
- npm or yarn

## Getting Started

1. Clone this repository (or download the source code).
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Setting Up the Gemini API Chatbot

The chatbot widget at the bottom right uses the Google Gemini 2.0 Flash model to answer questions about your portfolio.

1. Get a free API key from [Google AI Studio](https://aistudio.google.com/).
2. You don't need to save the key in `.env`. Visitors (and you) can input the API key directly into the widget in the browser. 
3. *Note: If you want to hardcode it for your own deployment, you can edit `components/ChatbotWidget.tsx` and pass the key via environment variables, but be careful not to expose it on public GitHub repositories unless restricted.*

## Deployment to GitHub Pages

Since the app is configured for static export (`output: 'export'` in `next.config.ts`), deploying to GitHub Pages is straightforward.

1. Make sure `next.config.ts` has:
   ```typescript
   const nextConfig: NextConfig = {
     output: "export",
     images: {
       unoptimized: true,
     },
   };
   ```
2. Build the project:
   ```bash
   npm run build
   ```
3. The static files will be generated in the `out/` directory.
4. You can use the `gh-pages` npm package or GitHub Actions to deploy the `out/` directory to your repository's `gh-pages` branch. 
   - Using GitHub Actions: Create a workflow file `.github/workflows/deploy.yml` using the official Next.js GitHub Pages deployment template.

## Customization

- **Theme Colors**: Edit the CSS variables in `app/globals.css`.
- **Content**: Update the placeholders in the components located in `components/sections/`.
- **Fonts**: The project uses Inter and Playfair Display from `next/font/google`. You can change these in `app/layout.tsx`.
