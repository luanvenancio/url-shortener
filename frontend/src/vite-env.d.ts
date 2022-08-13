/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_API_URL: string
    readonly VITE_MONGO_CONNECTIONL: string
    readonly VITE_GOOGLE_API: string
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }
