import { useContext } from "react";
import ListDataContext from "../../../../../context/ListDataContext";
import { TodoItem } from "../../../../../types/TodoItem";
import CancelButton from "../../../../Buttons/CancelButton/CancelButton";
import DeleteButton from "../../../../Buttons/DeleteButton/DeleteButton";
import EditButton from "../../../../Buttons/EditButton/EditButton";

import styles from "../CompletedListItem/CompletedListItem.module.scss";
import handleCancel from "./ButtonsHandlers/handleCancel";

interface Props {
  TodoItem: TodoItem;
  listStyles: { list: string; text: string; buttons: string };
}
function CompletedListItem({ TodoItem, listStyles }: Props) {
  const { listData, setListData } = useContext(ListDataContext);

  return (
    <li className={`${listStyles.list} ${styles.completed}`}>
      <div className={listStyles.text}>
        <p>{TodoItem.todo}</p>
        <p>{TodoItem.completedDate}</p>
      </div>
      <div className={listStyles.buttons}>
        <CancelButton
          onClick={(event) =>
            handleCancel({ event, TodoItem, listData, setListData })
          }
        />
        <EditButton hidden={true} />
        <DeleteButton hidden={true} />
      </div>
    </li>
  );
}
export default CompletedListItem;
