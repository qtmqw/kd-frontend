import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  pages: {
    
    Sakums: {
      entry: './src/pages/Sakums.jsx'
    },
    Par_mums: {
      entry: './src/pages/Par_mums.jsx'
    },
    Sortiments: {
      entry: './src/pages/Sortiments.jsx'
    },
    Kontakti: {
      entry: './src/pages/Kontakti.jsx'
    },
    Produkts: {
      entry: './src/pages/Produkts.jsx'
    },
    Grozs: {
      entry: './src/pages/Grozs.jsx'
    },
    Registreties: {
      entry: './src/components/Registreties.jsx'
    },
    Pieslegties: {
      entry: './src/components/Pieslegties.jsx'
    },
    CRUD: {
      entry: './src/admin/CRUD.jsx'
    },
    PievienoPreci: {
      entry: './src/admin/PievienoPreci.jsx'
    },
    EditPreces: {
      entry: './src/admin/EditPreces.jsx'
    },
    Profils: {
      entry: './src/pages/Profils.jsx'
    },
  },

})