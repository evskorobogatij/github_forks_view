import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve:{
    alias: {
      '@pages/': `${path.resolve(__dirname,'src/pages')}/`,
      '@store/': `${path.resolve(__dirname,'src/store')}/`,
      '@api/' : `${path.resolve(__dirname,'src/api')}/`,
      '@components/': `${path.resolve(__dirname,'src/components')}/`,
      '@interfaces/': `${path.resolve(__dirname,'src/interfaces')}/`,
      '@app/': `${path.resolve(__dirname,'src/app')}/`
    }
  }
})
