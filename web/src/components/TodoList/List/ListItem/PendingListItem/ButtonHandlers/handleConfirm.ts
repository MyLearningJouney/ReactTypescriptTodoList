import { SetStateAction } from "react";
import { TodoItem } from "../../../../../../types/TodoItem";
import DateFormat from "../../../../../../utils/DateFormat";

interface Props {
  TodoItem: TodoItem;
  event: React.MouseEvent<HTMLButtonElement>;
  listData: TodoItem[];
  setListData: React.Dispatch<SetStateAction<TodoItem[]>>;
}

function handleConfirm({ event, TodoItem, setListData, listData }: Props) {
  event.preventDefault();
  TodoItem.status = "completed";
  TodoItem.completedDate = DateFormat(new Date(Date.now()));
  setListData(
    listData.map((todo) => {
      return todo.id === TodoItem.id ? TodoItem : todo;
    })
  );
}

export default handleConfirm;
