import { useContext } from "react";
import ListDataContext from "../../../../../context/ListDataContext";
import { TodoItem } from "../../../../../types/TodoItem";
import ConfirmButton from "../../../../Buttons/ConfirmButton/ConfirmButton";
import DeleteButton from "../../../../Buttons/DeleteButton/DeleteButton";
import EditButton from "../../../../Buttons/EditButton/EditButton";
import handleConfirm from "./ButtonHandlers/handleConfirm";
import handleDelete from "./ButtonHandlers/handleDelete";
import handleEdit from "./ButtonHandlers/handleEdit";

interface Props {
  TodoItem: TodoItem;
  listStyles: { list: string; text: string; buttons: string };
}
function PendingListItem({ TodoItem, listStyles }: Props) {
  const { listData, setListData } = useContext(ListDataContext);

  return (
    <li className={listStyles.list}>
      <div className={listStyles.text}>
        <p>{TodoItem.todo}</p>
        <p>{TodoItem.createdDate}</p>
      </div>
      <div className={listStyles.buttons}>
        <ConfirmButton
          onClick={(event) =>
            handleConfirm({ event, TodoItem, listData, setListData })
          }
        />
        <EditButton
          onClick={(event) =>
            handleEdit({ event, TodoItem, listData, setListData })
          }
        />
        <DeleteButton
          onClick={(event) =>
            handleDelete({ event, TodoItem, listData, setListData })
          }
        />
      </div>
    </li>
  );
}
export default PendingListItem;
