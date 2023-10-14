import { SelectItem } from "@/lib/types";
import React from "react";
import { FiChevronDown } from "react-icons/fi";

type SearchBarProps = {
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
};

const SearchBar: React.FC<SearchBarProps> = ({
  selectedCategory,
  setSelectedCategory,
  searchTerm,
  setSearchTerm,
}) => {
  const categories: SelectItem[] = [
    {
      value: "0",
      label: "Todas as Categorias",
    },
    {
      value: "1",
      label: "Financeiro",
    },
    {
      value: "2",
      label: "Trabalhista",
    },
    {
      value: "3",
      label: "Desenvolvimento",
    },
    {
      value: "4",
      label: "Geradores",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row w-full h-auto md:h-14">
      <div className="relative w-full md:w-80 h-full mb-2 md:mb-0">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="appearance-none w-full bg-white pl-3 pr-10 py-2 border border-r-gray-100 h-full shadow-sm focus:outline-none focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 md:rounded-l"
        >
          {categories.map((category) => (
            <option className="" key={category.value} value={category.value}>
              <span className="flex p-4 h-16">{category.label}</span>
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-700">
          <FiChevronDown className=" h-4 w-4" />
        </div>
      </div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Buscar..."
        autoFocus
        className="bg-white border-t border-b border-r rounded-r p-2 w-full focus:outline-none focus:border-blue-500"
      />
    </div>
  );
};

export default SearchBar;
