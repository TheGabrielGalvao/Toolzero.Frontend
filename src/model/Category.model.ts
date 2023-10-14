import { EGenericStatus } from "../core/types/Status";

export interface CategoryModel {
  uuid?: string;
  key: string;
  icon?: string;
  name: string;
  label: string;
  type: CategoryType;
  description?: string;
  status: EGenericStatus;
}

export enum CategoryType {
  "Ferramentas Online" = 0,
  "Planilhas" = 1,
}
