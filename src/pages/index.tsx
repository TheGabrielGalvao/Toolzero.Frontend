import { SelectItem } from "@/lib/types";
import * as React from "react";
import { CardElement, CardElementProps } from "../core/components/CardElement";
import { SelectElement } from "../core/components/SelectElement";
const IndexPage = () => {
  const toolList: CardElementProps[] = [
    {
      title: "Gerador de CPF",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text.",
      route: "",
    },
    {
      title: "Gerador de CPF",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text.",
      route: "",
    },
    {
      title: "Gerador de CPF",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text.",
      route: "",
    },
    {
      title: "Gerador de CPF",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text.",
      route: "",
    },
  ];

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
    <div className="w-screen  flex flex-col justify-center items-center">
      <section className="flex flex-col justify-center items-center w-full bg-primary h-80 gap-6">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Tudo o que você precisa em um só lugar!
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Selecione uma categoria e busque por ferramentas
          </p>
        </div>
        <div className="w-96 flex justify-center items-center   h-16  ">
          <SelectElement data={categories} label="Categorias" />
        </div>
      </section>
      <section className="w-full flex gap-5 justify-center items-center px-96 mt-10">
        {toolList.map((item) => (
          <CardElement
            title={item.title}
            description={item.description}
            route={item.route}
          />
        ))}
      </section>
    </div>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
