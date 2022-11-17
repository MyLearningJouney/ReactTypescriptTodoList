import { useContext, useRef, useState } from "react";
import ListDataContext from "../../../context/ListDataContext";
import { TodoItem } from "../../../types/TodoItem";
import { v4 as uuidv4 } from "uuid";

import styles from "../Form/Form.module.scss";
import AddButton from "../../Buttons/AddButton/AddButton";
import { DateFormatComplete } from "../../../utils/DateFormat";

function Form() {
  const { setListData } = useContext(ListDataContext);
  const [todo, setTodo] = useState<string>("");
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newTodo: TodoItem = {
      todo: todo,
      createdDate: DateFormatComplete(new Date(Date.now())),
      completedDate: "",
      status: "pending",
      id: uuidv4(),
    };
    setListData((prevTodoList) => [...prevTodoList, newTodo]);
    formRef.current?.reset();
  };

  const handleChangeInputForm = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    event.preventDefault();
    setTodo(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form} ref={formRef}>
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
