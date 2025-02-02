import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';


export default defineConfig({
  base: '/frontend-mentor-social-proof-section/',
  plugins: [react(), svgr({
    exportAsDefault: false,
  })],
})
