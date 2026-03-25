import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  // Garante que os arquivos carreguem as imagens e CSS com caminhos relativos no GitHub Pages
  base: './', 
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        mainEn: resolve(__dirname, 'index-en.html'),
        galeria: resolve(__dirname, 'galeria.html'),
        galeriaEn: resolve(__dirname, 'galeria-en.html'),
        historia: resolve(__dirname, 'historia.html'),
        historiaEn: resolve(__dirname, 'historia-en.html'),
      }
    }
  }
});
