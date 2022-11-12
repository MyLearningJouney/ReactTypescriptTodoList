import { useContext, useState } from "react";
import ListDataContext from "../../../context/ListDataContext";
import { TodoItem } from "../../../types/TodoItem";
import CheckButton from "../../Buttons/CheckButton/CheckButton";

function Form() {
  const { listData, setListData } = useContext(ListDataContext);
  const [todo, setTodo] = useState<string>("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const newTodo: TodoItem = {
      todo: todo,
      createdDate: new Date(Date.now()).toString(),
      completedDate: new Date().toString(),
      status: "pending",
      id: "1234",
    };
    setListData((prevTodoList) => [...prevTodoList, newTodo]);
    console.log(listData);
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
      <CheckButton type="submit" />
    </form>
  );
}

export default Form;
