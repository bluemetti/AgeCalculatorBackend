// Importa funções do Vite e plugin React
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Exporta configuração do Vite para projetos React
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()], // Adiciona suporte ao React
})
