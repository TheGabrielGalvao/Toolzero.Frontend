import { OptionItem } from "../core/types/Options";
import { categoryMock } from "../mocks/categoryMock";
import { CategoryModel } from "../model/Category.model";
import { arrayFormat } from "../util/helpers/arrayFormat";
import { BaseService } from "./BaseService";

const API_URL = "Contact";

export default new (class CategoryService extends BaseService<CategoryModel> {
  constructor() {
    super(API_URL, "uuid");
  }

  getOptions = async (): Promise<OptionItem[]> => {
    try {
      const data = categoryMock;
      return arrayFormat.toSelectOptions(data as [], "key", "label");
    } catch (error) {
      console.error("Erro ao obter as opções:", error);
      return [];
    }
  };
})();
