/**
 * Individual Stat Card Data
 */
export interface DashboardStat {
  label: string;
  value: string | number;
  icon: "BookOpen" | "Clock" | "Star" | "Award"; // Restrict to icons you actually use
  color: string;
  trend?: string; // e.g., "+2% from last month"
}

/**
 * Course progress for the "Continue Learning" section
 */
export interface ActiveCourse {
  id: string;
  title: string;
  thumbnail: string;
  progress: number;
  category?: string;
}

/**
 * Recommendation items
 */
export interface Recommendation {
  id: string;
  title: string;
  time: string;
  tag: "New" | "Pro" | "Intermediate" | "Beginner";
  category: string;
}

/**
 * The complete structure returned by your API Controller
 */
export interface StudentDashboardResponse {
  success: boolean;
  data: {
    stats: DashboardStat[];
    activeCourses: ActiveCourse[];
    recommendations: Recommendation[];
  };
  message?: string;
}