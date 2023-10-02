"use client";

import { Check, ChevronsUpDown } from "lucide-react";
import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { SelectItem } from "@/lib/types";
import { cn } from "@/lib/utils";

const frameworks: SelectItem[] = [
  {
    value: 0,
    label: "Todas as Categorias",
  },
  {
    value: 1,
    label: "Financeiro",
  },
  {
    value: 2,
    label: "Trabalhista",
  },
  {
    value: 3,
    label: "Desenvolvimento",
  },
  {
    value: 4,
    label: "Geradores",
  },
];

export function FakeDropDown() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<SelectItem | string>(
    frameworks[0].label
  );

  const labelToObjectMap: Record<string, SelectItem> = {};
  frameworks.forEach((framework) => {
    labelToObjectMap[framework.label.toLowerCase()] = framework;
  });

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="py-8 w-full rounded-none justify-between"
        >
          {selected
            ? frameworks.find(
                (framework) => framework.label === (selected as string)
              )?.label
            : frameworks[0].label}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[16rem] p-0 bg-white cursor-pointer">
        <Command className="w-full">
          <CommandInput placeholder="Search framework..." />
          <CommandEmpty>No framework found.</CommandEmpty>
          <CommandGroup className="cursor-pointer" about="">
            {frameworks
              .sort((a, b) => {
                if (a.label === "Todas as Categorias") return -1;
                if (b.label === "Todas as Categorias") return 1;
                return a.label.localeCompare(b.label);
              })
              .map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={(selected as SelectItem).label}
                  onSelect={(currentValue) => {
                    const selectedFramework = frameworks.find(
                      (item) => item.label.toLowerCase() === currentValue
                    );

                    if (selectedFramework) {
                      setSelected(
                        selectedFramework.label.toLowerCase() as string
                      );
                    }

                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      (selected as SelectItem).value === framework.value
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                  {framework.label}
                </CommandItem>
              ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
