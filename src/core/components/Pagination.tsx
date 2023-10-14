import React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  return (
    <div className="flex gap-4 w-full justify-center items-center ">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-2 mr-2 bg-gray-200 rounded cursor-pointer"
      >
        <FiChevronLeft title="Página Anterior" size={32} />
      </button>

      {Array.from({ length: totalPages }).map((_, idx) => (
        <button
          key={idx}
          onClick={() => onPageChange(idx + 1)}
          className={`px-3 py-2 mx-1 rounded ${
            currentPage === idx + 1 ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          {idx + 1}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-2 ml-2 bg-gray-200 rounded cursor-pointer"
      >
        <FiChevronRight title="Próxima Página" size={32} />
      </button>
    </div>
  );
};

export default Pagination;
