import { useEffect, useState } from "react";

import { TodoItem } from "../../types/TodoItem";
import ListDataContext from "../../context/ListDataContext";
import TodoList from "../../components/TodoList/TodoList";

import styles from "../Homepage/Homepage.module.scss";

function Homepage() {
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

  return (
    <ListDataContext.Provider value={{ listData, setListData }}>
      <main>
        <section className={styles.todoList}>
          <h1>Awesome Todo-List</h1>
          <p>By: Danilo Packer</p>
          <TodoList />
        </section>
      </main>
    </ListDataContext.Provider>
  );
}

export default Homepage;
