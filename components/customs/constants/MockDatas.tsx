import { Course } from "@/types/TypesAll";

export const MOCK_COURSES: Course[] = [
  {
    id: "c1",
    title: "Advanced React Architecture",
    instructor: "Dr. Sarah Smith",
    instructorId: "t1",
    description:
      "Master enterprise-scale React applications with clean architecture and performance patterns.",
    thumbnail:
      "https://img.freepik.com/free-vector/quantum-computing-abstract-concept-illustration_335657-3847.jpg",
    category: "Development",
    price: 89.99,
    rating: 4.8,
    studentsCount: 1240,
    progress: 45,
    lessons: [
      {
        id: "l1",
        title: "Introduction to Atomic Design",
        duration: "15:20",
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
        content:
          "Learn how to structure components into atoms, molecules, and organisms for maximum reusability.",
        isCompleted: true,
      },
      {
        id: "l2",
        title: "State Management with TanStack Query",
        duration: "25:45",
        videoUrl: "https://www.w3schools.com/html/movie.mp4",
        content:
          "Efficiently handle server state, caching, and synchronization in large applications.",
        isCompleted: false,
      },
      {
        id: "l3",
        title: "Implementing Micro-frontends",
        duration: "32:10",
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
        content:
          "Breaking down a monolith into independent, scalable frontend modules.",
        isCompleted: false,
      },
    ],
  },
  {
    id: "c2",
    title: "AI Engineering with Gemini API",
    instructor: "Marcus Chen",
    instructorId: "t2",
    description:
      "Learn to build intelligent applications using Google's latest multimodal AI models.",
    thumbnail:
      "https://img.freepik.com/free-photo/futuristic-ai-chip-circuit-board_23-2151977487.jpg",
    category: "Artificial Intelligence",
    price: 129.99,
    rating: 4.9,
    studentsCount: 850,
    progress: 10,
    lessons: [
      {
        id: "l4",
        title: "Getting Started with GenAI",
        duration: "12:00",
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
        content:
          "An overview of generative models and setting up your first API connection.",
        isCompleted: true,
      },
      {
        id: "l5",
        title: "Multimodal Prompt Engineering",
        duration: "45:30",
        videoUrl: "https://www.w3schools.com/html/movie.mp4",
        content:
          "Techniques for combining text, image, and audio inputs for complex reasoning tasks.",
        isCompleted: false,
      },
    ],
  },
  {
    id: "c3",
    title: "UI/UX Design Masterclass",
    instructor: "Elena Rodriguez",
    instructorId: "t3",
    description:
      "From wireframes to high-fidelity prototypes. Become a professional product designer.",
    thumbnail:
      "https://img.freepik.com/free-vector/atom-science-education-icon-vector-neon-digital-graphic_53876-114080.jpg",
    category: "Design",
    price: 59.99,
    rating: 4.7,
    studentsCount: 3100,
    progress: 0,
    lessons: [
      {
        id: "l6",
        title: "The Psychology of Color",
        duration: "20:15",
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
        content:
          "Understanding how different palettes evoke emotions and drive user behavior.",
        isCompleted: false,
      },
    ],
  },
];
