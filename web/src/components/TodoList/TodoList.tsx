import { useContext, useState } from "react";
import ListDataContext from "../../context/ListDataContext";
import Filter from "./Filter/Filter";
import Form from "./Form/Form";
import ListItem from "./List/ListItem/ListItem";

import styles from "../TodoList/TodoList.module.scss";

function TodoList() {
  const { listData } = useContext(ListDataContext);
  const [filter, setFilter] = useState("all");
  console.log(filter);

  const filteredList = listData
    .filter((TodoItem) => TodoItem.status === filter)
    .map((TodoItem) => (
      <ul className={styles.list}>
        <ListItem key={TodoItem.id} TodoItem={TodoItem} />
      </ul>
    ));

  const completeList = (
    <ul className={styles.list}>
      {listData.map((TodoItem) => (
        <ListItem key={TodoItem.id} TodoItem={TodoItem} />
      ))}
    </ul>
  );

  return (
    <>
      <div className={styles.inputForm}>
        <Form />
        <Filter setFilter={setFilter} />
      </div>
      {filter === "all" ? completeList : filteredList}
    </>
  );
}
export default TodoList;
