"use client"
import { Video, Trash2 } from 'lucide-react';
import { Lesson } from '@/types/TypesAll';

interface AddLessonProps {
    index: number;
    lesson: Partial<Lesson>;
    onUpdate: (index: number, data: Partial<Lesson>) => void;
    onRemove: (index: number) => void;
}

export const AddLesson = ({ index, lesson, onUpdate, onRemove }: AddLessonProps) => {
    return (
        <div className="p-4 border border-gray-200 rounded-lg bg-gray-50 mb-4 relative group">
            <button
                onClick={() => onRemove(index)}
                className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition"
            >
                <Trash2 size={18} />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase text-gray-500">Lesson Title</label>
                    <input
                        type="text"
                        placeholder="e.g. Introduction to Hooks"
                        className="w-full p-2 border rounded-md focus:ring-2 focus:ring-indigo-500 outline-none"
                        value={lesson.title || ''}
                        onChange={(e) => onUpdate(index, { title: e.target.value })}
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase text-gray-500">Video URL</label>
                    <div className="relative">
                        <Video className="absolute left-2 top-2.5 text-gray-400" size={16} />
                        <input
                            type="text"
                            placeholder="Vimeo/YouTube Link"
                            className="w-full p-2 pl-8 border rounded-md focus:ring-2 focus:ring-indigo-500 outline-none"
                            value={lesson.videoUrl || ''}
                            onChange={(e) => onUpdate(index, { videoUrl: e.target.value })}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};