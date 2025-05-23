/// <reference types="vite/client" />

interface ImportMetaEnv {
  // Environment variables for application
  readonly VITE_APP_NAME_SHORT: string;
  readonly VITE_APP_NAME: string;
  readonly VITE_APP_VERSION: string;
  readonly VITE_APP_LEVEL: string;
  readonly VITE_APP_FORCE_ONLINE: string;

  // Recaptha configuration
  readonly VITE_RECAPTCHA_SITE_KEY: string;

  // Firebase configuration
  readonly VITE_FIREBASE_API_KEY: string;
  readonly VITE_FIREBASE_AUTH_DOMAIN: string;
  readonly VITE_FIREBASE_PROJECT_ID: string;
  readonly VITE_FIREBASE_STORAGE_BUCKET: string;
  readonly VITE_FIREBASE_MESSAGING_SENDER_ID: string;
  readonly VITE_FIREBASE_APP_ID: string;
  readonly VITE_FIREBASE_MEASUREMENT_ID: string;
  readonly VITE_FIREBASE_EMULATOR: string;

  // # Features Configuration
  readonly VITE_FEATURE_DOC_ADDRESS: string;
  readonly VITE_FEATURE_HEAD_NAME: string;
  readonly VITE_FEATURE_HEAD_CODE: string;
  readonly VITE_FEATURE_YEAR_ACTIVE: string;
  readonly VITE_FEATURE_GRADUATION: string;
  readonly VITE_FEATURE_GRADUATION_DATE: string;
  readonly VITE_FEATURE_GRADUATION_DOC: string;
  readonly VITE_FEATURE_GRADUATION_DOC_DESCRIPTION: string;
}
interface ImportMeta {
  readonly env: ImportMetaEnv;
}