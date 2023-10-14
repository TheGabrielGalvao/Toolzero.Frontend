import React, { useState } from "react";
import { CardElement, CardElementProps } from "../core/components/CardElement";
import { HeroElement } from "../core/components/HeroElement";
import SearchBar from "../core/components/SearchBar";
const IndexPage = () => {
  const toolList: CardElementProps[] = [
    {
      title: "Gerador de CPF",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text.",
      route: "",
      categoryId: "1",
    },
    {
      title: "Gerador de CPF",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text.",
      route: "",
      categoryId: "1",
    },
    {
      title: "Gerador de CPF",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text.",
      route: "",
      categoryId: "1",
    },
    {
      title: "Gerador de Nome",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text.",
      route: "/tools/generators/nameGenerator",
      categoryId: "1",
    },
  ];
  const [selectedCategory, setSelectedCategory] = useState("0");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredToolList = toolList.filter((tool) => {
    if (selectedCategory !== "0" && tool.categoryId !== selectedCategory) {
      return false;
    }

    if (
      searchTerm &&
      !tool.title.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return false;
    }

    return true;
  });
  return (
    <div className="w-screen  flex flex-col justify-center items-center">
      <HeroElement>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Tudo o que você precisa em um só lugar!
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Selecione uma categoria e busque por ferramentas
          </p>
        </div>
        <div className="w-full flex justify-center items-center h-16 px-[32rem]">
          {/* <SelectElement data={categories} label="Categorias" /> */}
          <SearchBar
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
        </div>
      </HeroElement>
      <section className="w-full flex gap-5 justify-center items-center px-96 mt-10">
        {filteredToolList.map((item) => (
          <CardElement
            title={item.title}
            description={item.description}
            route={item.route}
            categoryId={item.categoryId}
          />
        ))}
      </section>
    </div>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
