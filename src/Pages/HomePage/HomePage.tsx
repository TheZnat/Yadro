import React, { lazy, Suspense, useEffect } from "react";
import styles from "./HomePage.module.scss";
import { Search } from "../../Widgets/index";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/Store/store";
import { fetchEmployees } from "../../app/entities/employee/model/thunks";

const HomePage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading } = useSelector((state: RootState) => state.data);
  const List = lazy(() =>
    import("../../Widgets/index").then((module) => ({ default: module.List }))
  );

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
        <Suspense fallback={<div>Загрузка информации...</div>}>
          <List />
        </Suspense>
      </main>
    </>
  );
};

export default HomePage;
