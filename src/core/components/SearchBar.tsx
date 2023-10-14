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
    <div className="flex w-full  h-14 ">
      <div className="relative h-full">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="appearance-none bg-white pl-3 pr-10 py-2 border border-r-gray-100 h-full shadow-sm focus:outline-none focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        >
          {categories.map((category) => (
            <option
              className="bg-gray-200 text-gray-900"
              key={category.value}
              value={category.value}
            >
              {category.label}
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
        className="bg-white border-t border-b border-r rounded-r p-2 w-full focus:outline-none focus:border-blue-500"
      />
    </div>
  );
};

export default SearchBar;
