export type BageLabel = "area" | "population";

export interface ICountry {
  name: string;
  capital: string;
  population: number;
  flag: string;
  area: number;
  region: string;
}

interface ICountryApiName {
  official: string;
  common: string;
  nativeName: {
    [nameType: string]: string | {} | undefined;
  };
}

export interface ICountryApi {
  name: ICountryApiName;
  capital: string[];
  population: number;
  flags: {
    [format: string]: string;
  };
  area: number;
  region: string;
}

export enum Color {
  Primary = "primary",
  Secondary = "secondary",
  Success = "success",
  Danger = "danger",
  Warning = "warning",
  Info = "info",
  Light = "light",
  Dark = "dark",
}
