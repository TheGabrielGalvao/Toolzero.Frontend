import React, { useState } from "react";
import { useQuery } from "react-query";
import { CardElement } from "../core/components/CardElement";
import { HeroElement } from "../core/components/HeroElement";
import Pagination from "../core/components/Pagination";
import SearchBar from "../core/components/SearchBar";
import { ToolModel } from "../model/Tool.model";
import ToolService from "../service/ToolService";

const ITEMS_PER_PAGE = 8;

const IndexPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("0");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const { data: toolList } = useQuery(["tool"], ToolService.getAll, {
    retry: false,
    enabled: true,
    refetchOnWindowFocus: false,
  });

  const totalPages = Math.ceil(
    (toolList as ToolModel[])?.length / ITEMS_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const filteredToolList = toolList?.filter((tool) => {
    if (selectedCategory !== "0" && tool.categoryId !== selectedCategory) {
      return false;
    }

    if (
      searchTerm &&
      !tool.label?.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return false;
    }

    return true;
  });
  return (
    <div className=" flex flex-col justify-center items-center overflow-x-hidden">
      <HeroElement>
        <div className="flex flex-col justify-center items-center text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold tracking-tight text-gray-900">
            Tudo o que você precisa em um só lugar!
          </h1>

          <p className="mt-6 text-sm sm:text-base md:text-lg text-gray-600">
            Selecione uma categoria e busque por ferramentas
          </p>
        </div>
        <div className="w-full flex justify-center items-center h-16 md:px-[32rem] sm:px-[8rem] px-4">
          {/* <SelectElement data={categories} label="Categorias" /> */}
          <SearchBar
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
        </div>
      </HeroElement>
      <section className="flex flex-col justify-center items-center gap-4">
        <div className="gap-4 justify-center items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-5">
          {filteredToolList &&
            filteredToolList
              .slice(
                (currentPage - 1) * ITEMS_PER_PAGE,
                currentPage * ITEMS_PER_PAGE
              )
              .map((item) => (
                <CardElement
                  title={item.label!}
                  description={item.description}
                  route={item.slug}
                  categoryId={item.categoryId}
                />
              ))}
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </section>
    </div>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
