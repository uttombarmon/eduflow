import { Course } from "@/types/TypesAll";

export const FilterProduct = (
  courses: Course[] | undefined,
  search: string,
  categorie: string,
  level: string,
  price: string,
  sortBy: string
): Course[] => {
  console.log("filter: ", courses);
  if (!courses) return [];
  const filtered = courses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(search.toLowerCase()) ||
      course.instructor.toLowerCase().includes(search.toLowerCase());
    const matchesCategory =
      categorie === "All" || course.category === categorie;
    const matchesLevel = level === "All" || course.level === level;
    const matchesPrice =
      price === "All" ||
      (price === "Free" ? course.price === 0 : course.price > 0);

    return matchesSearch && matchesCategory && matchesLevel && matchesPrice;
  });
  return [...filtered].sort((a, b) => {
    switch (sortBy) {
      case "Rating":
        return b.rating - a.rating;
      case "Price: Low to High":
        return a.price - b.price;
      case "Price: High to Low":
        return b.price - a.price;
      case "Popularity":
      default:
        return b.studentsCount - a.studentsCount;
    }
  });
};
