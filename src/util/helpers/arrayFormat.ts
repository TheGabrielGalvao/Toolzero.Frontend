import { OptionItem } from "@/core/types/Options";

const toSelectOptions = (
  array: Record<string, any>[],
  optionValue: string = "uuid",
  optionLabel: string = "name"
): OptionItem[] => {
  return array.map((item) => ({
    value: item[optionValue],
    label: item[optionLabel],
  }));
};

export const arrayFormat = {
  toSelectOptions,
};
