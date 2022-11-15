import { SetStateAction } from "react";
import { TodoItem } from "../../../../../../types/TodoItem";

interface Props {
  TodoItem: TodoItem;
  listData: TodoItem[];
  setListData: React.Dispatch<SetStateAction<TodoItem[]>>;
}

function handleBlur({ TodoItem, setListData, listData }: Props) {
  TodoItem.status = "pending";
  setListData(
    listData.map((todo) => {
      return todo.id === TodoItem.id ? TodoItem : todo;
    })
  );
}

export default handleBlur;
