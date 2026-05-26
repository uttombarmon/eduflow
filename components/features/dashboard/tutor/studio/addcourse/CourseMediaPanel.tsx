import ImageUpload from "./ImageUpload";

// --- RIGHT COLUMN: COURSE MEDIA ---
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CourseMediaPanel = ({ courseData, setCourseData }: any) => (
  <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
    <h3 className="text-lg font-bold text-slate-800 mb-4">Course Media</h3>

    <div className="aspect-video border-2 rounded-xl mb-4 overflow-hidden relative flex items-center justify-center cursor-pointer group">
      {/* Placeholder for uploaded image */}
      {/* <div className="text-center p-4 group-hover:scale-105 transition-transform">
        <h4 className="text-white font-black text-2xl uppercase tracking-widest opacity-50">
          Upload Thumbnail
        </h4>
      </div> */}
      <ImageUpload courseData={courseData} setCourseData={setCourseData} />
    </div>

    <p className="text-xs text-slate-500 mb-4 leading-relaxed">
      <span className="font-bold text-slate-700">Pro Tip:</span> High-quality
      visuals increase enrollment by 45%. Recommended size: 1280x720px (16:9).
    </p>

    <div className="flex gap-2">
      {["JPG", "PNG", "Max 5MB"].map((tag) => (
        <span
          key={tag}
          className="px-3 py-1 bg-blue-50 text-blue-600 text-[10px] font-bold rounded-full uppercase tracking-wider"
        >
          {tag}
        </span>
      ))}
    </div>
  </div>
);

export default CourseMediaPanel;
