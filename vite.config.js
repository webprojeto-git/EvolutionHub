import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  // Define que os recursos (JS/CSS/Imagens) serão buscados em /teste/
  base: '/teste/', 

  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        historia: resolve(__dirname, 'historia.html'),
        galeria: resolve(__dirname, 'galeria.html'),
        incubadora: resolve(__dirname, 'incubadora.html'),
      },
    },
  },
})
