import React from "react";
import styles from "./Button.module.scss";
import { ButtonProps } from "./Button.props";

const Button: React.FC<ButtonProps> = ({
  className,
  onClickHandler,
  type = "button",
  children,
}) => {
  return (
    <button
      className={`${className} ${styles.button}`}
      onClick={onClickHandler}
      type={`${type}`}
    >
      {children}
    </button>
  );
};

export default Button;
