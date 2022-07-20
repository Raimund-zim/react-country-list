export type BageLabel = "area" | "population";

export interface ICountry {
  name: string;
  capital: string[];
  population: number;
  flag: string;
  area: number;
  region: string;
}

export interface ICountryApi {
  name: { common: string };
  capital: string[];
  population: number;
  flags: { svg: string };
  area: number;
  region: string;
}

export enum Color {
  Primary = "primary",
  Secondary = "secondary",
}
