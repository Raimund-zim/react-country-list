import { Color, ICountry } from "../types";
import { Badge } from "./Badge";

interface IProps {
  country: ICountry;
}

export const CountryItem = ({
  country: { flag, name, capital, region, area, population },
}: IProps) => {
  return (
    <li className="d-flex align-items-center gap-3 border secondary fw-bold">
      <img className="col-1 m-1" src={flag} alt="flag" />
      <p className="col">{name}</p>
      <p className="col">{capital}</p>
      <p className="col">{region}</p>
      <Badge color={Color.Primary} label={"area"} value={area} />
      <Badge color={Color.Secondary} label={"population"} value={population} />
    </li>
  );
};
