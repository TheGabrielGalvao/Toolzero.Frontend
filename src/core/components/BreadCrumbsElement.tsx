import { Breadcrumbs } from "@material-tailwind/react";
import { Link } from "gatsby";
import React from "react";
import { HiHome } from "react-icons/hi2";

type BreadCrumbElementProps = {
  page: string;
};

export const BreadcrumbsElement = ({ page }: BreadCrumbElementProps) => {
  return (
    <Breadcrumbs
      className="flex gap-3 text-white"
      separator={<span className="ml-3">/</span>}
    >
      <Link
        to="/"
        className="opacity-60 flex justify-center items-center gap-1 hover:opacity-100"
      >
        <HiHome />
        Home
      </Link>
      <Link to="#" className="opacity-60 hover:opacity-100">
        Ferramentas
      </Link>
      <Link to="#" className="">
        {page}
      </Link>
    </Breadcrumbs>
  );
};
