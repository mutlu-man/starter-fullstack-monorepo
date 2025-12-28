# 🚀 Starter App (Frontend)

A modern **React Native starter application** built with **Expo** and **TypeScript**.  
This project provides a clean authentication flow, navigation setup, and a scalable foundation for mobile apps.

---

## 🧠 Tech Stack

- React Native
- Expo
- TypeScript
- React Navigation
- Context API (Auth State)
- Zod (shared validation schemas)

---

## 📁 Project Structure

frontend/
├── src/
│ ├── navigation/ # Auth & App navigators
│ ├── screens/ # Login, Register, Home
│ ├── context/ # AuthContext
│ ├── services/ # API & token storage
│ ├── shared/ # Shared Zod schemas
│ └── assets/ # Images & icons
├── app.json
├── tsconfig.json
├── package.json
└── README.md


---

## 🔐 Authentication Flow

- Email & password login and registration
- JWT stored securely on device
- Automatic session restore on app start
- Navigation switches based on auth state

---

## ▶️ Running the App

Install dependencies:

```bash
npm install

Start Expo:
npx expo start

🧩 Shared Zod Schemas

Frontend uses the same validation schemas as the backend:

import { LoginSchema } from '@shared/schemas/auth';

Benefits:

Single source of truth
Safer forms
Fewer backend errors

👋 About

This project is intended as a starter template for React Native apps with authentication, navigation, and clean architecture.