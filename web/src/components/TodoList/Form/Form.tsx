import { useContext, useState } from "react";
import ListDataContext from "../../../context/ListDataContext";
import { TodoItem } from "../../../types/TodoItem";
import { v4 as uuidv4 } from "uuid";

import styles from "../Form/Form.module.scss";
import AddButton from "../../Buttons/AddButton/AddButton";
import DateFormat from "../../../utils/DateFormat";

function Form() {
  const { setListData } = useContext(ListDataContext);
  const [todo, setTodo] = useState<string>("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newTodo: TodoItem = {
      todo: todo,
      createdDate: DateFormat(new Date(Date.now())),
      completedDate: "",
      status: "pending",
      id: uuidv4(),
    };
    setListData((prevTodoList) => [...prevTodoList, newTodo]);
  };

  const handleChangeInputForm = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    event.preventDefault();
    setTodo(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        className={styles.input}
        type="text"
        placeholder={"What you have to do today ?"}
        onChange={handleChangeInputForm}
        autoComplete="off"
        required
      />
      <AddButton type="submit" />
    </form>
  );
}

export default Form;
