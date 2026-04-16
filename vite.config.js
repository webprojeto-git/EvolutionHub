import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  // Caminho base para a subpasta no servidor Locaweb
  base: '/teste/', 

  build: {
    rollupOptions: {
      input: {
        // Mapeamento completo de todas as suas páginas HTML
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
