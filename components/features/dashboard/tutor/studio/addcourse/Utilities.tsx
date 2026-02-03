import React from "react";
import CourseCategories from "./CourseCategories";
import ImageUpload from "./ImageUpload";
import { Course, CourseStatus } from "@/types/Course";

const Utilities = ({
  courseData,
  setCourseData,
}: {
  courseData: Partial<Course>;
  setCourseData: React.Dispatch<React.SetStateAction<Partial<Course>>>;
}) => {
  return (
    <div className="space-y-4">
      {/* course thumbnail */}
      <div className="border-2 border-dashed border-gray-200 rounded-xl h-48 flex flex-col items-center justify-center text-gray-400 hover:border-indigo-400 transition cursor-pointer relative">
        <ImageUpload courseData={courseData} setCourseData={setCourseData} />
      </div>
      {/* course price and level */}
      <div className="grid grid-cols-2 gap-2">
        <div>
          <label className="block text-xs font-bold text-gray-500 mb-1">
            Price ($)
          </label>
          <input
            defaultValue={0}
            onChange={(e) =>
              setCourseData({
                ...courseData,
                price: Number(e.target.value),
              })
            }
            type="number"
            className="w-full p-2 border rounded-lg"
          />
        </div>
        {/* course level */}
        <div>
          <label className="block text-xs font-bold text-gray-500 mb-1">
            Level
          </label>
          <select
            onChange={(e) =>
              setCourseData({ ...courseData, level: e.target.value })
            }
            className="w-full p-2 border rounded-lg"
          >
            <option defaultChecked>Select a Level</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>
        {/* course category */}
        <div>
          <label className="block text-xs font-bold text-gray-500 mb-1">
            Category
          </label>
          <CourseCategories
            courseData={courseData}
            setCourseData={setCourseData}
          />
        </div>
        {/* course status */}
        <div>
          <label className="block text-xs font-bold text-gray-500 mb-1">
            Status
          </label>
          <select
            onChange={(e) =>
              setCourseData({
                ...courseData,
                status: e.target.value as CourseStatus,
              })
            }
            className="w-full p-2 border rounded-lg"
          >
            <option defaultChecked>Select a Status</option>
            <option value="draft">Draft</option>
            <option value="publish">Publish</option>
            <option value="archive">Archive</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Utilities;
