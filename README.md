# 🧩 Fullstack Starter App

This repository contains a **fullstack starter setup** with a React Native frontend and a NestJS backend.

It is designed as a clean foundation for mobile applications with authentication, shared validation schemas, and scalable architecture.

---

## 📁 Repository Structure

/
├── frontend/ # React Native (Expo) app
├── backend/ # NestJS API
├── shared/ # Shared Zod schemas & types
└── README.md


---

## 🧠 Tech Stack

### Frontend
- React Native
- Expo
- TypeScript
- React Navigation

### Backend
- Node.js
- NestJS
- MongoDB (Mongoose)
- JWT Authentication

### Shared
- Zod (validation & type inference)

---

## 🔁 Shared Code

The `shared/` directory contains **Zod schemas** used by both frontend and backend.

Benefits:
- Single source of truth
- No duplicated validation logic
- Type-safe frontend ↔ backend communication


