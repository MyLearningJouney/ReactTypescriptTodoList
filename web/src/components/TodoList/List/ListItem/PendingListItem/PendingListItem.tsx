import { useContext } from "react";
import ListDataContext from "../../../../../context/ListDataContext";
import { TodoItem } from "../../../../../types/TodoItem";
import ConfirmButton from "../../../../Buttons/ConfirmButton/ConfirmButton";
import DeleteButton from "../../../../Buttons/DeleteButton/DeleteButton";
import EditButton from "../../../../Buttons/EditButton/EditButton";

interface Props {
  TodoItem: TodoItem;
}
function PendingListItem({ TodoItem }: Props) {
  const { listData, setListData } = useContext(ListDataContext);

  const handleConfirm = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log(TodoItem.todo);
  };
  return (
    <li>
      <div>
        <p>{TodoItem.todo}</p>
      </div>
      <div>
        <ConfirmButton onClick={handleConfirm} />
        <EditButton />
        <DeleteButton />
      </div>
    </li>
  );
}
export default PendingListItem;
