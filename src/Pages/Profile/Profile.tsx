import React from "react";
import styles from "./Profile.module.scss";
import ProfileHeader from "../../Features/ProfileHeader/ProfileHeader";
import ListDataItem from "../../Features/ListDataItem/ListDataItem";
import BackPanel from "../../Widgets/BackPanel/BackPanel";

const Profile: React.FC = () => {
  return (
    <>
      <header className={styles["header"]}>
        <h1 className={styles["title"]}>Тестовое задание в компанию yadro</h1>
        <ProfileHeader
          dataEmployee={{
            name: "Кузинов Максим Алекс",
            workInfo: {
              division: "Разработчик",
              position: "Аналитик",
            },
            personal: {
              dateOfBirth: "02.02.2001",
            },
            status: "Работает",
          }}
        />
      </header>
      <BackPanel/>
      <main className={styles["list-data"]}>
        <ListDataItem
          dataEmployeeAllInfo={{
            contactInfo: {
              email: "Vazaar@gmail.com",
            },
          }}
        />

        <ListDataItem
          dataEmployeeAllInfo={{
            contactInfo: {
              email: "Vazaar@gmail.com",
            },
          }}
        />
      </main>
    </>
  );
};

export default Profile;
