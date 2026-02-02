import { Button } from "@/components/ui/button";
import { Course, Pagination } from "@/types/Course";
import React from "react";

const FooterPagination = ({
  courses,
  page,
  setPage,
  pagination,
}: {
  courses: Course[];
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  pagination: Pagination;
}) => {
  return (
    <div className="p-4 border-t border-slate-100 bg-slate-50/30 flex justify-between items-center text-xs text-slate-500">
      <span>
        Showing {courses.length > 8 ? page * 8 : courses.length} of{" "}
        {courses.length} courses
      </span>
      <div className="flex gap-2">
        <Button
          variant="outline"
          size="sm"
          disabled={page === 1}
          onClick={() => setPage((p) => p - 1)}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          disabled={!pagination.hasNextPage}
          onClick={() => setPage((p) => p + 1)}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default FooterPagination;
