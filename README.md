<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1qmG9IDa489R2fWA3qEtge3iZzzGN4_ux

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `VITE_GEMINI_API_KEY` in `.env.local` to your Gemini API key
3. Run the app:
   `npm run dev`

## Deploy en GitHub Pages

1. Crea el secreto `VITE_GEMINI_API_KEY` en tu repositorio (Settings → Secrets and variables → Actions).
2. Asegúrate de que GitHub Pages use GitHub Actions como fuente (Settings → Pages → Build and deployment).
3. Haz un push a `main` o `master` para activar el workflow de despliegue.

> Nota: la API key se inyecta en el build y quedará en el bundle publicado. No la uses si no quieres exponerla en el cliente.
