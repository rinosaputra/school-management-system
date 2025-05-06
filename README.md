# School Management System - Open Source

![React](https://img.shields.io/badge/React-18.2-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Firebase](https://img.shields.io/badge/Firebase-9.0-orange)
![Vite](https://img.shields.io/badge/Vite-4.0-purple)

A modern, open-source school management system built with React, TypeScript, Firebase, and Vite.

## Features

- 🚀 Blazing fast development with Vite
- 🔒 Secure authentication with Firebase Auth
- 📊 Real-time database with Firestore
- 📱 Responsive design for all devices
- 📁 Clean project structure with TypeScript
- � Path aliases for cleaner imports

## Project Structure

```
src/
├── @types/               # Custom TypeScript types
├── assets/               # Static assets (images, fonts)
├── components/           # Reusable UI components
│   ├── layout/           # Layout components
│   └── ui/               # UI-specific components
├── features/             # App features
├── contexts/             # React contexts
├── hooks/                # Custom React hooks
├── routers/              # Application routing schema
├── lib/                  # Utility functions
├── App.tsx               # Main App component
├── index.css             # Global styles
└── main.tsx              # Application entry point
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Firebase project setup
  - Hosting `firebase experiments:enable webframeworks`

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/rinosaputra/school-management-system.git
   cd school-management-system
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env` file in the root directory and add your Firebase config:

   ```env
   # Environment variables for application

   ```env
   # Application Info
   VITE_APP_NAME_SHORT=""           # string, short app name (e.g. "SMS")
   VITE_APP_NAME=""                 # string, full app name (e.g. "School Management System")
   VITE_APP_LEVEL=""                # string, education level (e.g. "smk")
   VITE_APP_VERSION=""              # string/number, app version (e.g. "1")
   VITE_APP_FORCE_ONLINE=""         # boolean ("true"/"false"), force online mode
   APP_EMAIL_ADMIN=""               # string, admin email address

   # Recaptcha Configuration
   VITE_RECAPTCHA_SITE_KEY=""       # string, reCAPTCHA site key
   RECAPTCHA_SECRET_KEY=""          # string, reCAPTCHA secret key

   # Firebase Configuration
   VITE_FIREBASE_EMULATOR=""                # boolean ("true"/"false"), use Firebase emulator
   VITE_FIREBASE_API_KEY=""                 # string, Firebase API key
   VITE_FIREBASE_AUTH_DOMAIN=""             # string, Firebase Auth domain
   VITE_FIREBASE_PROJECT_ID=""              # string, Firebase project ID
   VITE_FIREBASE_STORAGE_BUCKET=""          # string, Firebase storage bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=""     # string, Firebase messaging sender ID
   VITE_FIREBASE_APP_ID=""                  # string, Firebase app ID
   VITE_FIREBASE_MEASUREMENT_ID=""          # string, Firebase measurement ID
   VITE_FIREBASE_VAP_ID=""                  # string, Firebase VAP ID
   VITE_FIREBASE_SENDER_ID=""               # string, Firebase sender ID

   # Features Configuration
   VITE_FEATURE_DOC_ADDRESS=""              # string, document address
   VITE_FEATURE_HEAD_NAME=""                # string, headmaster/principal name
   VITE_FEATURE_HEAD_CODE=""                # string, headmaster/principal code (e.g. NUPTK)
   VITE_FEATURE_YEAR_ACTIVE=""              # string/number, active year (e.g. "2024")
   VITE_FEATURE_GRADUATION=""               # boolean ("true"/"false"), graduation feature enabled
   VITE_FEATURE_GRADUATION_DATE=""          # string (YYYY-MM-DD HH:mm:ss), graduation date
   VITE_FEATURE_GRADUATION_DOC=""           # boolean ("true"/"false"), graduation doc enabled
   VITE_FEATURE_GRADUATION_DOC_DESCRIPTION="" # string, graduation doc description
   ```

   > **Info:**  
   > - Ganti nilai variabel di atas sesuai kebutuhan Anda.  
   > - Lihat dokumentasi atau file `.env.example` untuk penjelasan setiap variabel.
   ```

4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

## Available Scripts

- `dev`: Runs the app in development mode
- `build`: Builds the app for production
- `preview`: Previews the production build locally
- `lint`: Runs ESLint
- `typecheck`: Runs TypeScript type checking
- `test`: Runs tests

## Path Aliases

This project uses `@` as an alias for the `src` directory. Example:

```typescript
import Button from "@/components/common/Button";
import { useAuth } from "@/hooks/useAuth";
```

Configured in `vite.config.ts` and `tsconfig.json`.

## Firebase Setup

1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Enable Authentication (Email/Password recommended)
3. Enable Firestore database
4. Add your web app and copy the configuration

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Ino - [@rinosaputra](https://x.com/RinoSaputraAS)

Project Link: [https://github.com/rinosaputra/school-management-system](https://github.com/rinosaputra/school-management-system)

---

Made with ❤️ by Open Source Contributors
