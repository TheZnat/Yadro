import React, { useEffect } from "react";
import styles from "./HomePage.module.scss";
import Search from "../../Features/Search/Search";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/Store/store";
import List from "../../Features/List/List";
import { fetchEmployees } from "../../app/entities/employee/model/thunks";

const HomePage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading } = useSelector((state: RootState) => state.data);

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <header className={styles["header"]}>
        <h1 className={styles["title"]}>Тестовое задание в компанию yadro</h1>
        <Search />
      </header>
      <main>
        <List />
      </main>
    </>
  );
};

export default HomePage;
