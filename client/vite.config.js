import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  pages: {
    // the key is the path of the page, and the value is the entry point for the page
    '/': './src/pages/Sakums.jsx',
    '/Par_mums': './src/pages/Par_mums.jsx',
    '/Sortiments': './src/pages/Sortiments.jsx',
    '/Kontakti': './src/pages/Kontakti.jsx',
    '/Produkts': './src/pages/Produkts.jsx',
    '/Grozs': './src/pages/Grozs.jsx',
    '/Registreties': './src/components/Registreties.jsx',
    '/Pieslegties': './src/components/Pieslegties.jsx',
    '/admin/CRUD': './src/admin/CRUD.jsx',
    '/admin/PievienoPreci': './src/admin/PievienoPreci.jsx',
    '/admin/EditPreces/update/:id': './src/admin/EditPreces.jsx',
    '/lietotajs/Profils': './src/pages/Profils.jsx',
  },

})