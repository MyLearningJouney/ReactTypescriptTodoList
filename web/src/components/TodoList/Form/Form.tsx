import { useContext, useState } from "react";
import ListDataContext from "../../../context/ListDataContext";
import { TodoItem } from "../../../types/TodoItem";
import ConfirmButton from "../../Buttons/ConfirmButton/ConfirmButton";
import { v4 as uuidv4 } from "uuid";

function Form() {
  const { setListData } = useContext(ListDataContext);
  const [todo, setTodo] = useState<string>("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const newTodo: TodoItem = {
      todo: todo,
      createdDate: new Date(Date.now()).toString(),
      completedDate: new Date().toString(),
      status: "pending",
      id: uuidv4(),
    };
    setListData((prevTodoList) => [...prevTodoList, newTodo]);
  }

  function handleChangeInputForm(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setTodo(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder={"What you have to do today ?"}
        onChange={(event) => handleChangeInputForm(event)}
        autoComplete="off"
      />
      <ConfirmButton type="submit" />
    </form>
  );
}

export default Form;
