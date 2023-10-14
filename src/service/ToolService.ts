import { toolMock } from "../mocks/toolMock";
import { ToolModel } from "../model/Tool.model";
import { BaseService } from "./BaseService";

const API_URL = "Tool";

export default new (class CategoryService extends BaseService<ToolModel> {
  constructor() {
    super(API_URL, "uuid");
  }

  getAll = async (): Promise<ToolModel[]> => {
    const data = toolMock;
    return data;
  };
})();
