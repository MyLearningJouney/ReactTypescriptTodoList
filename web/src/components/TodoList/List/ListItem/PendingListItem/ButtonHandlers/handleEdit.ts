import { SetStateAction } from "react";
import { TodoItem } from "../../../../../../types/TodoItem";

interface Props {
  TodoItem: TodoItem;
  event: React.MouseEvent<HTMLButtonElement>;
  listData: TodoItem[];
  setListData: React.Dispatch<SetStateAction<TodoItem[]>>;
}

function handleEdit({ event, TodoItem, setListData, listData }: Props) {
  event.preventDefault();
  TodoItem.status = "editing";
  setListData(
    listData.map((todo) => {
      return todo.id === TodoItem.id ? TodoItem : todo;
    })
  );
}

export default handleEdit;
