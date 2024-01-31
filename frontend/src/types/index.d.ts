type FormType = // where radio dey?
  | "text"
  | "tel"
  | "email"
  | "password"
  | "textarea"
  | "select"
  | "range"
  | "file"
  | "search"
  | "time"
  | "date"
  | "number"
  | "checkbox";

type Svg = {
  className: string;
  onClick?: () => void;
  stroke?: string;
  fill?: string;
};
