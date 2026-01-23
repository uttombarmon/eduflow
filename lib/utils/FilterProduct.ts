import { CourseDetail } from "@/types/CoursesTypes";
import { Course } from "@/types/TypesAll";

interface FilterParams {
  courses: CourseDetail[];
  search: string;
  categorie: string;
  level: string;
  price: string;
  sortBy: string;
}

export const FilterProduct = ({
  courses,
  search,
  categorie,
  level,
  price,
  sortBy,
}: FilterParams): CourseDetail[] => {
  if (!courses) return [];

  // Prepare lowercase versions of the filters
  const s = search.toLowerCase().trim();
  const c = categorie.toLowerCase();
  const l = level.toLowerCase();
  const p = price.toLowerCase();

  // FILTERING
  const filtered = courses.filter((course) => {
    // console.log(course.instructor.name)
    if (!course) return [];
    // Search Logic
    const matchesSearch =
      s === "" ||
      course.title.toLowerCase().includes(s) ||
      course.instructor.name.toLowerCase().includes(s);

    // Category Logic
    const matchesCategory = c === "all" || course.category.toLowerCase() === c;

    // Level Logic
    const matchesLevel = l === "all" || course.level.toLowerCase() === l;

    // Price Logic
    const matchesPrice =
      p === "all" || (p === "free" ? course.price === 0 : course.price > 0);

    return matchesSearch && matchesCategory && matchesLevel && matchesPrice;
  });

  // SORTING (Exact string match for SortBy is usually safer)
  return [...filtered].sort((a, b) => {
    switch (sortBy) {
      case "Rating":
        return b.rating - a.rating;
      case "Price: Low to High":
        return a.price - b.price;
      case "Price: High to Low":
        return b.price - a.price;
      default: // Popularity
        return b.studentsCount! - a.studentsCount!;
    }
  });
};
