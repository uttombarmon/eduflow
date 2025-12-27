# 🌊 EduFlow | AI-Native Learning Management System

[![Framework: Next.js 15](https://img.shields.io/badge/Framework-Next.js%2015-black?style=flat-square&logo=nextdotjs)](https://nextjs.org/)
[![Database: PostgreSQL](https://img.shields.io/badge/Database-PostgreSQL-blue?style=flat-square&logo=postgresql)](https://www.postgresql.org/)
[![Vibe: High Velocity](https://img.shields.io/badge/Workflow-Vibe%20Coding-8A2BE2?style=flat-square)](https://github.com/uttombarmon/eduflow)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=flat-square)](./LICENSE)

**EduFlow** is a modern, full-stack LMS designed for the 2025 web. It bridges the gap between expert tutors and hungry learners through a seamless, high-performance interface. Architected with "Vibe Coding" principles—prioritizing intent, speed, and user experience.

---

## 🚀 Key Features

### 👨‍🏫 For Tutors (The Creator Studio)

- **Intuitive Course Builder:** Drag-and-drop curriculum management with multi-chapter support.
- **Rich Media Uploads:** Seamless video and PDF resource handling via UploadThing.
- **Analytics Dashboard:** Track student enrollment trends and revenue at a glance.
- **Publishing Control:** Toggle between draft mode and live production.

### 🎓 For Students (The Learning Experience)

- **Progress Tracking:** Real-time persistence—never lose your place in a video.
- **Dynamic Classroom:** A focused, distraction-free environment for consuming content.
- **Advanced Search:** Filter by categories, price, and ratings to find exactly what you need.
- **Course Dashboard:** Visual progress bars for every enrolled course.

---

## 🛠️ The Stack

- **Frontend:** Next.js 16+ (App Router), Tailwind CSS, Shadcn/UI, Lucide Icons.
- **Backend:** Next.js Server Actions, Middleware for Role-Based Access.
- **Database:** PostgreSQL via **Prisma ORM** (hosted on Supabase).
- **Authentication:** **Better-Auth** (Social Login + Role Management).
- **Payments:** **Stripe** Integration (Webhooks & Checkout).

---

## 🧠 Development Philosophy: Vibe Coding

This project was built using an **AI-Augmented workflow**. Instead of getting lost in boilerplate, I focused on:

1. **System Design:** Defining the complex relationships between Users, Enrollments, and Chapters.
2. **UX Polishing:** Using AI to iterate rapidly on UI components until the "vibe" felt premium.
3. **Rapid Prototyping:** Moving from a blank `npx create-next-app` to a functional LMS in record time.

---

## 🏁 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/uttombarmon/eduflow.git
cd eduflow
```

### 2. Install Dependencies

```bash
pnpm install
# or
npm install
```

### 3. Environment Setup

Create a .env file and add your credentials:

#### Code snippet

```bash
DATABASE_URL=
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
STRIPE_API_KEY=
UPLOADTHING_SECRET=
```

### 4. Sync Database & Launch

```bash
npx prisma db push
npm run dev
```
