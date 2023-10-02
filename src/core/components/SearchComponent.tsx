import { SelectItem } from "@/lib/types";
import React, { useState } from "react";
import { SelectElement } from "./SelectElement";

const SearchComponent: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>(
    "Todas as Categorias"
  );

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
  const handleSearch = () => {
    console.log(`Buscando por ${searchTerm} na categoria ${selectedCategory}`);
  };

  const handleChangeCategory = () => {};

  return (
    <div className="flex w-screen border rounded-md  focus-within:border-blue-400 focus-within:shadow-md bg-white">
      <div className="flex  bg-gray-50  border-r-2 w-full h-16">
        <SelectElement data={categories} label="Categorias" />
      </div>
      {/* <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder={categoryRef.current?.value}
        className=" px-8 w-full focus:outline-none"
      />
      <i className="flex justify-center items-center p-4">
        <HiMagnifyingGlass className="text-gray-300 text-lg " size={32} />
      </i> */}
    </div>
  );
};

export default SearchComponent;
