import { EGenericStatus } from "../core/types/Status";
import { CategoryModel, CategoryType } from "../model/Category.model";

export const categoryMock: CategoryModel[] = [
  {
    key: "0",
    name: "financial",
    label: "Financeiro",
    type: CategoryType["Ferramentas Online"],
    status: EGenericStatus.Ativo,
  },

  {
    key: "1",
    name: "work",
    label: "Trabalhista",
    type: CategoryType["Ferramentas Online"],
    status: EGenericStatus.Ativo,
  },
  {
    key: "2",
    name: "generators",
    label: "Geradores",
    type: CategoryType["Ferramentas Online"],
    status: EGenericStatus.Ativo,
  },
  {
    key: "3",
    name: "calculators",
    label: "Calculadoras",
    type: CategoryType["Ferramentas Online"],
    status: EGenericStatus.Ativo,
  },
];
