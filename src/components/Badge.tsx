import { BageLabel, Color } from "../types";

interface IProps {
  color: Color;
  label: BageLabel;
  value: number;
}

export const Badge = ({ color, label, value }: IProps) => {
  return (
    <span className={`badge bg-${color} col-2 mb-0 m-1`}>
      <h6>{label}: {value}</h6>
    </span>
  );
};
