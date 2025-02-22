export interface ButtonProps {
  className: string;
  onClickHandler?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type: "button" | "submit" | "reset";
  children: React.ReactNode;
}
