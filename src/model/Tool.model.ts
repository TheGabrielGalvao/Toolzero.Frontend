import { EGenericStatus } from "@/core/types/Status";
import { CategoryModel } from "./Category.model";

export interface ToolModel {
  uuid?: string;
  name: string;
  description: string;
  category: CategoryModel;
  status: EGenericStatus;
}
