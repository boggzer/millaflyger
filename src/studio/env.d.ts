interface ImportMetaEnv {
    readonly NEXT_PUBLIC_SANITY_DATASET: string
    readonly NEXT_PUBLIC_SANITY_PROJECT_ID: string
    readonly SANITY_STUDIO_BASE_URL: string
    readonly VITE_USER_NODE_ENV: string
  }
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }