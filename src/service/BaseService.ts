import { QueryFunctionContext } from "react-query";
import { api } from "../config/api";
import { OptionItem } from "../core/types/Options";
import { arrayFormat } from "../util/helpers/arrayFormat";

interface IBaseService<T> {
  getParamId(): keyof T;
  getUrl(): string;
  getAll(): Promise<T[]>;
  getByFilter(filter: object): Promise<T[]>;
}

export abstract class BaseService<T> implements IBaseService<T> {
  private url: string;
  private paramId?: keyof T;

  constructor(url: string, paramId?: keyof T) {
    this.url = url;
    this.paramId = paramId;
  }

  getUrl = () => this.url;

  getParamId(): keyof T {
    return this.paramId as keyof T;
  }

  async getAll(): Promise<T[]> {
    const { data } = await api.get<T[]>(this.url, {});
    return data;
  }

  async getByFilter(filter: object): Promise<T[]> {
    const { data } = await api.get<T[]>(this.url, {});
    return data;
  }
  find = async ({ queryKey }: QueryFunctionContext): Promise<T> => {
    const uuid = queryKey[1] as string;

    if (uuid) {
      const { data } = await api.get<T>(`${this.url}/${uuid}`);
      return data;
    } else {
      return {} as Promise<T>;
    }
  };

  getOptions = async (): Promise<OptionItem[]> => {
    try {
      const { data } = await api.get<T[]>(`${this.url}`);
      return arrayFormat.toSelectOptions(data as []);
    } catch (error) {
      console.error("Erro ao obter as opções:", error);
      return [];
    }
  };
}
