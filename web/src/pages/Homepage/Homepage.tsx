import { useState } from "react";

import { TodoItem } from "../../types/TodoItem";
import ListDataContext from "../../context/ListDataContext";
import TodoList from "../../components/TodoList/TodoList";

import styles from "../Homepage/Homepage.module.scss";

function Homepage() {
  const [listData, setListData] = useState<TodoItem[]>([]);

  return (
    <ListDataContext.Provider value={{ listData, setListData }}>
      <main >
        <section className={styles.todoList}>
        <TodoList />
        </section>
      </main>
    </ListDataContext.Provider>
  );
}

export default Homepage;
