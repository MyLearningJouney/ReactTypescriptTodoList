import { useContext } from "react";
import ListDataContext from "../../../../../context/ListDataContext";
import { TodoItem } from "../../../../../types/TodoItem";
import DateFormat from "../../../../../utils/DateFormat";
import ConfirmButton from "../../../../Buttons/ConfirmButton/ConfirmButton";
import DeleteButton from "../../../../Buttons/DeleteButton/DeleteButton";
import EditButton from "../../../../Buttons/EditButton/EditButton";

interface Props {
  TodoItem: TodoItem;
  listStyles: { list: string; text: string; buttons: string };
}
function PendingListItem({ TodoItem, listStyles }: Props) {
  const { listData, setListData } = useContext(ListDataContext);

  const handleConfirm = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    TodoItem.status = "completed";
    TodoItem.completedDate = DateFormat(new Date(Date.now()));
    setListData(
      listData.map((todo) => {
        return todo.id === TodoItem.id ? TodoItem : todo;
      })
    );
  };
  const handleEdit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    TodoItem.status = "editing";
    setListData(
      listData.map((todo) => {
        return todo.id === TodoItem.id ? TodoItem : todo;
      })
    );
  };
  const handleDelete = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setListData(listData.filter((todo) => todo.id !== TodoItem.id));
    console.log(listData);
  };

  return (
    <li className={listStyles.list}>
      <div className={listStyles.text}>
        <p>{TodoItem.todo}</p>
        <p>{TodoItem.createdDate}</p>
      </div>
      <div className={listStyles.buttons}>
        <ConfirmButton onClick={handleConfirm} />
        <EditButton onClick={handleEdit} />
        <DeleteButton onClick={handleDelete} />
      </div>
    </li>
  );
}
export default PendingListItem;
