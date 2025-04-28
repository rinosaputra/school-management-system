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
   VITE_FIREBASE_API_KEY=your-api-key
   VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=your-project-id
   VITE_FIREBASE_STORAGE_BUCKET=your-bucket.appspot.com
   VITE_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
   VITE_FIREBASE_APP_ID=your-app-id
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
