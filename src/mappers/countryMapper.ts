import { ICountry, ICountryApi } from "../types";

const trasformCountry = ({
  name,
  capital,
  population,
  flags,
  area,
  region,
}: ICountryApi): ICountry => {
  const newCountry: ICountry = {
    name: name.common,
    capital,
    population,
    flag: flags.svg,
    area,
    region,
  };

  return newCountry;
};

export const transformCountries = (countries: ICountryApi[]): ICountry[] => {
  return countries.map(trasformCountry);
};
