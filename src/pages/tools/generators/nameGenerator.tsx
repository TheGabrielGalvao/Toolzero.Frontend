import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import { BreadcrumbsElement } from "../../../core/components/BreadCrumbsElement";
import { HeroElement } from "../../../core/components/HeroElement";

const NameGenerator = () => {
  return (
    <div className="w-screen  flex flex-col justify-center items-center">
      <HeroElement className="h-64">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Gerador de Nome
        </h1>
        <BreadcrumbsElement page="Gerador de Nome" />
      </HeroElement>
      <section className="w-screen flex gap-5 justify-center items-center ">
        <Tabs defaultValue="tool" className="w-full flex flex-col">
          <TabsList className="w-full ">
            <TabsTrigger className="w-full" value="tool">
              Ferramenta
            </TabsTrigger>
            <TabsTrigger className="w-full" value="about">
              Sobre
            </TabsTrigger>
          </TabsList>
          <TabsContent
            className="w-full flex flex-col items-center justify-center p-5"
            value="tool"
          >
            Make changes to your account here.
          </TabsContent>
          <TabsContent
            className="w-full flex flex-col items-center justify-center p-5"
            value="about"
          >
            Change your password here.
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
};

export default NameGenerator;
