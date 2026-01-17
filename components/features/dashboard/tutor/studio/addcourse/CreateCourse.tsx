"use client"
import React, { useState } from 'react';
import { Plus, Save, Image as ImageIcon } from 'lucide-react';
import { Course, Lesson } from '@/types/TypesAll';
import { AddLesson } from './AddLesson';


const CreateCourseForm = () => {
    const [lessons, setLessons] = useState<Partial<Lesson>[]>([]);
    const [courseData, setCourseData] = useState<Partial<Course>>({
        level: 'Beginner',
        category: 'Development',
        price: 0
    });

    const addLesson = () => {
        setLessons([...lessons, { id: crypto.randomUUID(), title: '', isCompleted: false }]);
    };

    const updateLesson = (index: number, data: Partial<Lesson>) => {
        const newLessons = [...lessons];
        newLessons[index] = { ...newLessons[index], ...data };
        setLessons(newLessons);
    };

    const removeLesson = (index: number) => {
        setLessons(lessons.filter((_, i) => i !== index));
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Create New Course</h2>

            {/* Basic Info Section */}
            <section className="space-y-6 mb-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="md:col-span-2 space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Course Title</label>
                            <input
                                type="text"
                                className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                                placeholder="Enter a catchy title..."
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                            <textarea
                                rows={4}
                                className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                                placeholder="What will students learn?"
                            />
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="border-2 border-dashed border-gray-200 rounded-xl h-48 flex flex-col items-center justify-center text-gray-400 hover:border-indigo-400 transition cursor-pointer">
                            <ImageIcon size={32} />
                            <span className="text-xs mt-2 font-medium">Upload Thumbnail</span>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                            <div>
                                <label className="block text-xs font-bold text-gray-500 mb-1">Price ($)</label>
                                <input type="number" className="w-full p-2 border rounded-lg" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-500 mb-1">Level</label>
                                <select className="w-full p-2 border rounded-lg">
                                    <option>Beginner</option>
                                    <option>Intermediate</option>
                                    <option>Advanced</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Curriculum Section */}
            <section className="mb-10">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-bold text-gray-900">Curriculum</h3>
                    <button
                        onClick={addLesson}
                        className="flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-700"
                    >
                        <Plus size={18} /> Add Lesson
                    </button>
                </div>

                {lessons.length === 0 ? (
                    <div className="text-center py-12 bg-gray-50 rounded-xl border border-dashed border-gray-200">
                        <p className="text-gray-500">No lessons added yet. Click "Add Lesson" to start building your curriculum.</p>
                    </div>
                ) : (
                    lessons.map((lesson, index) => (
                        <AddLesson
                            key={lesson.id}
                            index={index}
                            lesson={lesson}
                            onUpdate={updateLesson}
                            onRemove={removeLesson}
                        />
                    ))
                )}
            </section>

            <div className="pt-6 border-t flex justify-end gap-4">
                <button className="px-6 py-2 rounded-lg font-medium text-gray-600 hover:bg-gray-100 transition">
                    Save Draft
                </button>
                <button className="px-6 py-2 rounded-lg font-medium bg-indigo-600 text-white hover:bg-indigo-700 transition flex items-center gap-2">
                    <Save size={18} /> Publish Course
                </button>
            </div>
        </div>
    );
};

export default CreateCourseForm;