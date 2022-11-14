import { useContext } from "react";
import ListDataContext from "../../../../../context/ListDataContext";
import { TodoItem } from "../../../../../types/TodoItem";
import CancelButton from "../../../../Buttons/CancelButton/CancelButton";
import DeleteButton from "../../../../Buttons/DeleteButton/DeleteButton";
import EditButton from "../../../../Buttons/EditButton/EditButton";

import styles from "../CompletedListItem/CompletedListItem.module.scss"

interface Props {
  TodoItem: TodoItem;
  className: { list: string; text: string; buttons: string };
}
function CompletedListItem({ TodoItem, className }: Props) {
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
    <li className={className.list}>
      <div className={className.text}>
        <p>Completed - {TodoItem.todo}</p>
      </div>
      <div className={className.buttons}>
        <CancelButton onClick={handleCancel} />
        <EditButton className={styles.hide}/>
        <DeleteButton className={styles.hide}/>
      </div>
    </li>
  );
}
export default CompletedListItem;
