import { OptionItem } from "../core/types/Options";
import { categoryMock } from "../mocks/categoryMock";
import { CategoryModel } from "../model/Category.model";
import { DEFAULT_CATEGORY_OPTIONS } from "../util/constants/DefaultOptions";
import { arrayFormat } from "../util/helpers/arrayFormat";
import { BaseService } from "./BaseService";

const API_URL = "Category";

export default new (class CategoryService extends BaseService<CategoryModel> {
  constructor() {
    super(API_URL, "uuid");
  }

  getOptions = async (): Promise<OptionItem[]> => {
    try {
      const data = [...DEFAULT_CATEGORY_OPTIONS, ...categoryMock];
      return arrayFormat
        .toSelectOptions(data as [], "key", "label")
        .sort((a, b) => a.value - b.value);
    } catch (error) {
      console.error("Erro ao obter as opções:", error);
      return [];
    }
  };
})();
