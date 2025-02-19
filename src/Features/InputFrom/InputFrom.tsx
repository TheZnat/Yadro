import React from "react";
import styles from "./InputFrom.module.scss";

const InputFrom: React.FC = ({ data = {} }) => {
  return (
    <div className={styles["input-from"]}>
      <div className={styles["input-from__old-info"]}>
        <label className={styles["input-from__old-info__label"]}>
          {data.label}:
        </label>
        <p className={styles["input-from__old-info__data"]}>{data.oldInfo}</p>
      </div>
      <input
        type="text"
        name="name"
        placeholder="Введите новое значение"
        className={styles["input-from__input"]}
      />
    </div>
  );
};

export default InputFrom;
