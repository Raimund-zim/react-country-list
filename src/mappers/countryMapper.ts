import { ICountry, ICountryApi } from "../types";

export const transformCountries = (countries: ICountryApi[]): ICountry[] => {
  return countries.map(
    ({
      name: { common },
      capital,
      population,
      flags: { svg },
      area,
      region,
    }: ICountryApi) => {
      return {
        name: common,
        capital: capital[0],
        population,
        flag: svg,
        area,
        region,
      };
    }
  );
};
