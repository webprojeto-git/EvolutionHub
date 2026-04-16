import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  // Caminho base obrigatório para o GitHub Pages (nome do repositório entre barras)
  base: '/EvolutionHub/', 

  build: {
    rollupOptions: {
      input: {
        // Liste todas as suas páginas aqui para que o Vite as compile corretamente
        main: resolve(__dirname, 'index.html'),
        historia: resolve(__dirname, 'historia.html'),
        galeria: resolve(__dirname, 'galeria.html'),
        'index-en': resolve(__dirname, 'index-en.html'),
        'historia-en': resolve(__dirname, 'historia-en.html'),
        'galeria-en': resolve(__dirname, 'galeria-en.html'),
      },
    },
  },
})
