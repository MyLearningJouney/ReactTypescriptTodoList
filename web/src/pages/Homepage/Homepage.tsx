import { useState, useEffect } from "react";

import CancelButton from "../../components/Buttons/CancelButton/CancelButton";
import CheckButton from "../../components/Buttons/ConfirmButton/ConfirmButton";
import { TodoItem } from "../../types/TodoItem";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import ListDataContext from "../../context/ListDataContext";
import TodoList from "../../components/TodoList/TodoList";

function Homepage() {
  const [listData, setListData] = useState<TodoItem[]>([]);
  console.log(listData);

  return (
    <ListDataContext.Provider value={{ listData, setListData }}>
      <main>
        <TodoList />
        <CheckButton type="button" />
        <CancelButton />
      </main>
    </ListDataContext.Provider>
  );
}

export default Homepage;
