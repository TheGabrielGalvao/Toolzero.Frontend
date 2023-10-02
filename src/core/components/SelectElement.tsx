import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type SelectElementProps = {
  data?: { value: string | number; label: string }[];
  label?: string;
  onValueChange?(value: string): void;
};

export const SelectElement: React.FC<SelectElementProps> = ({
  data,
  label,
  onValueChange,
}) => {
  return (
    <Select
      defaultValue={data?.[0].value as string}
      onValueChange={onValueChange}
    >
      <SelectTrigger className="w-full h-full focus:outline-none focus-within:outline-none visited:outline-none border-none shadow-none">
        <SelectValue placeholder={label} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{label}</SelectLabel>
          {data?.map((item) => (
            <SelectItem value={item.value as string}>{item.label}</SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
