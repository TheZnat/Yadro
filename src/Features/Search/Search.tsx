import React from "react";
import styles from "./Search.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/Store/store";
import { v4 as uuidv4 } from "uuid";
import {
  setStatus,
  setDivision,
  setCity,
  resetFilters,
  setSearch,
  applyFilters,
} from "../../app/Store/filterSlice/filterSlice";
import Dropdown from "../Dropdown/Dropdown";
const Search: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { dataStatusOptions, dataDivisionOptions, dataCityOptions } =
    useSelector((state: RootState) => state.data);

  const {
    status: selectedStatus,
    division: selectedDivision,
    city: selectedCity,
  } = useSelector((state: RootState) => state.filter);

  const optionsStatus = dataStatusOptions.map((item: string) => ({
    value: item,
    label: item,
    id: uuidv4(),
  }));

  const optionsDivision = dataDivisionOptions.map((item: string) => ({
    value: item,
    label: item,
    id: uuidv4(),
  }));

  const optionsCity = dataCityOptions.map((item: string) => ({
    value: item,
    label: item,
    id: uuidv4(),
  }));

  const handleChangeDropdownStatus = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    dispatch(setStatus(event.target.value));
  };

  const handleChangeDropdownDivision = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    dispatch(setDivision(event.target.value));
  };

  const handleChangeDropdownCity = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    dispatch(setCity(event.target.value));
  };

  const handleReset = () => {
    dispatch(resetFilters());
  };

  const handleChangeSearch = (value: string) => {
    dispatch(setSearch(value.trim()));
    dispatch(applyFilters());
  };

  return (
    <div className={styles["search"]}>
      <div className={styles["search__input-main"]}>
        <input
          type="text"
          placeholder="Поиск сотрудника по ФИО"
          className={styles["search__input-main__input"]}
          onChange={(e) => handleChangeSearch(e.target.value)}
        />

        <Dropdown
          id="dropdownlevel"
          name="Статус сотрудника"
          value={selectedStatus}
          handleChangeDropdown={handleChangeDropdownStatus}
          options={optionsStatus}
          className={styles["search__input-main__select"]}
        />

        <button
          className={styles["search__input-main__button"]}
          onClick={handleReset}
          type="button"
        >
          Сбросить
        </button>
      </div>

      <div className={styles["search__dropdown"]}>
        <Dropdown
          id="dropdownDivision"
          name="Позиция"
          value={selectedDivision}
          handleChangeDropdown={handleChangeDropdownDivision}
          options={optionsDivision}
          className={styles["search__dropdown__item"]}
        />

        <Dropdown
          id="dropdownCity"
          name="Город проживания"
          value={selectedCity}
          handleChangeDropdown={handleChangeDropdownCity}
          options={optionsCity}
          className={styles["search__dropdown__item"]}
        />
      </div>
    </div>
  );
};

export default Search;
