import React from "react";
import styles from "./HomePage.module.scss";
import Search from "../../Features/Search/Search";
import ListItem from "../../Features/ListItem/ListItem";

const HomePage: React.FC = () => {
  return (
    <>
      <header className={styles["header"]}>
        <h1 className={styles["title"]}>Тестовое задание в компанию yadro</h1>
        <Search />
      </header>

      <main>
        <section className={styles["list"]}>
          <ListItem
            dataEmployee={{
              name: "Кузинов Максим Александровчи",
              workInfo: {
                division: "Разработчик",
                position: "Frontend",
              },
              contactInfo: {
                email: "maxim.kuzinov@yadro.ru",
                phone: "+7 (999) 999-99-99",
              },
              status: "Работает",
            }}
          />

          <ListItem
            dataEmployee={{
              name: "Кузинов Максим Алекс",
              workInfo: {
                division: "Разработчик",
                position: "Аналитик",
              },
              contactInfo: {
                email: "maxim.kuzinov@",
                phone: "+7 (999) 999-99-99",
              },
              status: "Работает",
            }}
          />
        </section>
      </main>
    </>
  );
};

export default HomePage;
