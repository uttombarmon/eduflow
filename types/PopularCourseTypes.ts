export interface Instructor {
    name: string;
    avatar: string | null;
}

export interface PopularCourse {
    id: string;
    title: string;
    thumbnail: string;
    instructor: Instructor;
    rating: number;
    price: number;
    category: string;
}

