import { SetStateAction } from "react";
import { TodoItem } from "../../../../../../types/TodoItem";

interface Props {
  TodoItem: TodoItem;
  event: React.MouseEvent<HTMLButtonElement>;
  listData: TodoItem[];
  setListData: React.Dispatch<SetStateAction<TodoItem[]>>;
}

function handleDelete({ event, TodoItem, setListData, listData }: Props) {
  event.preventDefault();
  setListData(listData.filter((todo) => todo.id !== TodoItem.id));
}

export default handleDelete;
