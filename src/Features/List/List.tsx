import React from "react";
import styles from "./List.module.scss";
import { RootState } from "../../app/Store/store";
import { useSelector } from "react-redux";
import { Employees } from "../../Shared/types/data";
import ListItem from "../../Widgets/ListItem/ListItem";
import filteredItems from "../../app/Store/data/dataSlice";

const List: React.FC = () => {
  const { filteredItems } = useSelector((state: RootState) => state.data);

  return (
    <section className={styles["list"]}>
      {filteredItems.map((item: Employees) => (
        <ListItem key={item.id} dataEmployee={item} />
      ))}
    </section>
  );
};

export default List;
