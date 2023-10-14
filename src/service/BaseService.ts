import { api } from "@/config/api";
import { OptionItem } from "@/core/types/Options";
import { QueryFunctionContext } from "react-query";

interface IBaseService<T> {
  getAll(): Promise<T[]>;
  getByFilter(filter: object): Promise<T[]>;
}

export abstract class BaseService<T> implements IBaseService<T> {
  private url: string;

  constructor(url: string) {
    this.url = url;
  }

  getUrl = () => this.url;

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
      const { data } = await api.get<OptionItem[]>(`${this.url}/option-items`);
      return data;
    } catch (error) {
      console.error("Erro ao obter as opções:", error);
      return [];
    }
  };
}
