import { useEffect, useState } from "react";
import ListDataContext from "../../context/ListDataContext";
import Filter from "./Filter/Filter";
import Form from "./Form/Form";
import ListItem from "./List/ListItem/ListItem";

import styles from "../TodoList/TodoList.module.scss";
import { TodoItem } from "../../types/TodoItem";

function TodoList() {
  const [filter, setFilter] = useState("all");
  const [listData, setListData] = useState<TodoItem[]>([]);

  useEffect(() => {
    const localStorageList = JSON.parse(
      window.localStorage.getItem("AWESOME_TODO_LIST") || ""
    );
    if (localStorageList) {
      setListData(localStorageList);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("AWESOME_TODO_LIST", JSON.stringify(listData));
  }, [listData]);

  const filteredList = listData
    .filter(
      (TodoItem) => TodoItem.status === filter || TodoItem.status === "editing"
    )
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
      <ListDataContext.Provider value={{ listData, setListData }}>
        <div className={styles.inputForm}>
          <Form />
          <Filter setFilter={setFilter} />
        </div>
        {filter === "all" ? completeList : filteredList}
      </ListDataContext.Provider>
    </>
  );
}
export default TodoList;
