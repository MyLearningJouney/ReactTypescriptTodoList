import { useContext } from "react";
import ListDataContext from "../../../../../context/ListDataContext";
import { TodoItem } from "../../../../../types/TodoItem";
import CancelButton from "../../../../Buttons/CancelButton/CancelButton";
import DeleteButton from "../../../../Buttons/DeleteButton/DeleteButton";
import EditButton from "../../../../Buttons/EditButton/EditButton";

interface Props {
  TodoItem: TodoItem;
}
function CompletedListItem({ TodoItem }: Props) {
  const { listData, setListData } = useContext(ListDataContext);

  const handleCancel = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    TodoItem.status = "pending";
    setListData(
      listData.map((todo) => {
        if (todo.id === TodoItem.id) {
          return TodoItem;
        } else {
          return todo;
        }
      })
    );
  };
  return (
    <li>
      <div>
        <p>Completed - {TodoItem.todo}</p>
      </div>
      <div>
        <CancelButton onClick={handleCancel} />
        <EditButton />
        <DeleteButton />
      </div>
    </li>
  );
}
export default CompletedListItem;
