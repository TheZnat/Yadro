import React from "react";
import BackPanel from "../../Widgets/BackPanel/BackPanel";
import styles from "./Edit.module.scss";
import InputFrom from "../../Features/InputFrom/InputFrom";

const Edit: React.FC = () => {
  return (
    <div className="wrapper">
      <header className="header">
        <h2>Тестовое задание в компанию yadro</h2>
      </header>
      <div>
        <BackPanel />
      </div>

      <main className={styles["edit"]}>
        <form className={styles["edit__form"]}>
          <InputFrom data={{ label: "Имя", oldInfo: "Кузинов Максим Алекс" }} />
        </form>
      </main>
    </div>
  );
};

export default Edit;
