import { SetStateAction } from "react";
import { TodoItem } from "../../../../../../types/TodoItem";

interface Props {
  TodoItem: TodoItem;
  event: React.FormEvent<HTMLFormElement>;
  listData: TodoItem[];
  setListData: React.Dispatch<SetStateAction<TodoItem[]>>;
  editValue: string;
}

function handleSubmit({
  event,
  TodoItem,
  setListData,
  listData,
  editValue,
}: Props) {
  event.preventDefault();
  TodoItem.todo = editValue;
  TodoItem.status = "pending";
  setListData(
    listData.map((todo) => {
      return todo.id === TodoItem.id ? TodoItem : todo;
    })
  );
}

export default handleSubmit;
