"use client"
import { Course } from '@/types/TypesAll'
import React from 'react'

const CourseCategories = ({ courseData, setCourseData }: { courseData: Partial<Course>, setCourseData: React.Dispatch<React.SetStateAction<Partial<Course>>> }) => {
    const categories = [
        "Web Development", "Mobile App Development", "Data Science & AI",
        "Cybersecurity", "UI/UX Design", "Digital Marketing",
        "Personal Development", "Finance & Accounting"
    ];

    return (
        <select
            onChange={(e) => setCourseData({ ...courseData, category: e.target.value })}
            className="w-full p-2 border rounded-lg bg-white"
            defaultValue=""
        >
            {
                categories.sort().map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                ))
            }
        </select>
    )
}

export default CourseCategories