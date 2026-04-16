import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  // Define que os recursos (JS/CSS/Imagens) serão buscados em /teste/
  base: '/teste/', 

  build: {
    rollupOptions: {
      input: {
        // Mapeamento de todas as páginas para o build multipage
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
