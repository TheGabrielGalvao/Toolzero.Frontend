import {
  Button,
  Input,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import React, { useState } from "react";

export const SearchInput = () => {
  const [category, setCategory] = useState<{ name: string }>();
  const categories = [
    { name: "Todas" },
    { name: "Financeiro" },
    { name: "Desenvolvimento" },
  ];

  return (
    <div className="relative flex w-full max-w-[24rem] bg-white rounded-lg focus-within:border-none focus-within:outline-none focus-within:shadow-none">
      <Menu placement="bottom-start">
        <MenuHandler>
          <Button
            ripple={false}
            variant="text"
            color="blue-gray"
            className="flex h-10 items-center gap-2 rounded-r-none border border-r-0 border-blue-gray-200 bg-blue-gray-500/10 pl-3"
          >
            {category?.name ?? "Categorias"}
          </Button>
        </MenuHandler>
        <MenuList className="max-h-[20rem] max-w-[18rem]">
          {categories.map(({ name }, index) => {
            return (
              <MenuItem
                key={name}
                value={name}
                className="flex items-center gap-2"
                onClick={() => setCategory({ name: name })}
              >
                {name}
              </MenuItem>
            );
          })}
        </MenuList>
      </Menu>
      <Input
        type="text"
        placeholder="Digite o que procura..."
        className="rounded-l-none !focus-within:shadow-none !focus:shadow-none !focus-within:outline-none focus:outline-none"
        labelProps={{
          className: "before:content-none after:content-none hidden",
        }}
        containerProps={{
          className: "min-w-0",
        }}
      />
    </div>
  );
};
