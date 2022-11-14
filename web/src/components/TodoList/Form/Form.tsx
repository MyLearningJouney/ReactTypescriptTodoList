import { useContext, useState } from "react";
import ListDataContext from "../../../context/ListDataContext";
import { TodoItem } from "../../../types/TodoItem";
import ConfirmButton from "../../Buttons/ConfirmButton/ConfirmButton";
import { v4 as uuidv4 } from "uuid";

function Form() {
  const { setListData } = useContext(ListDataContext);
  const [todo, setTodo] = useState<string>("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newTodo: TodoItem = {
      todo: todo,
      createdDate: new Date(Date.now()).toString(),
      completedDate: new Date().toString(),
      status: "pending",
      id: uuidv4(),
    };
    setListData((prevTodoList) => [...prevTodoList, newTodo]);
  }

  const handleChangeInputForm = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setTodo(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder={"What you have to do today ?"}
        onChange={handleChangeInputForm}
        autoComplete="off"
      />
      <ConfirmButton type="submit" />
    </form>
  );
}

export default Form;
