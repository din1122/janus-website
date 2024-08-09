import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import dotenv from 'dotenv';

dotenv.config();
export default defineConfig({
  plugins: [
    react({
      plugins: [
        ['@swc/plugin-styled-components', {
          displayName: true,
          fileName: true,
          ssr: false,
          pure: true,
        }]
      ]
    }),
  ],
  resolve: {
    alias: {
      '~': "/src",
    },
  },
})
