import React from "react";
import styles from "./Search.module.scss";

const Search: React.FC = () => {
  return (
    <div className={styles["search"]}>
      <div className={styles["search__input-main"]}>
        <input
          type="text"
          placeholder="Поиск сотрудника по ФИО"
          className={styles["search__input-main__input"]}
        />
        <select className={styles["search__input-main__select"]}>
          <option value="all">Все сотрудники</option>
          <option value="active">Активные сотрудники</option>
          <option value="inactive">Неактивные сотрудники</option>
        </select>

        <button className={styles["search__input-main__button"]}>Найти</button>
      </div>

      <div className={styles["search__dropdown"]}>
        <select className={styles["search__dropdown__item"]}>
          <option>Разработка</option>
          <option>Менаджмент</option>
          <option>Аналитики</option>
          <option>Офис</option>
        </select>

        <select className={styles["search__dropdown__item"]}>
          <option>Санкт-Петербург</option>
          <option>Москва</option>
          <option>Екатеренбург</option>
          <option>Станбул</option>
        </select>
      </div>
    </div>
  );
};

export default Search;
