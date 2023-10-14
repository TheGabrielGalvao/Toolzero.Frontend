import { EGenericStatus } from "@/core/types/Status";

export interface ToolModel {
  uuid?: string;
  name: string;
  label?: string;
  description: string;
  slug?: string;
  categoryId: string;
  status: EGenericStatus;
}
