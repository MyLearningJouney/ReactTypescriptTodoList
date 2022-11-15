import { useContext, useState } from "react";
import ListDataContext from "../../../../../context/ListDataContext";
import { TodoItem } from "../../../../../types/TodoItem";
import ConfirmButton from "../../../../Buttons/ConfirmButton/ConfirmButton";
import DeleteButton from "../../../../Buttons/DeleteButton/DeleteButton";
import EditButton from "../../../../Buttons/EditButton/EditButton";

import styles from "../EditingListItem/EditingListItem.module.scss";
import handleBlur from "./ButtonHandlers/handleBlur";
import handleSubmit from "./ButtonHandlers/handleSubmit";

interface Props {
  TodoItem: TodoItem;
  listStyles: { list: string; text: string; buttons: string };
}
function EditingListItem({ TodoItem, listStyles }: Props) {
  const { listData, setListData } = useContext(ListDataContext);
  const [editValue, setEditValue] = useState(TodoItem.todo);

  return (
    <li className={listStyles.list}>
      <form
        onSubmit={(event) =>
          handleSubmit({ event, TodoItem, setListData, listData, editValue })
        }
        className={styles.editForm}
      >
        <div className={listStyles.text}>
          <input
            className={styles.editInput}
            type="text"
            name="editInput"
            id="editInput"
            value={editValue}
            onChange={(event) => setEditValue(event.target.value)}
            autoFocus
            onBlur={() =>
              setTimeout(
                () => handleBlur({ TodoItem, listData, setListData }),
                500
              )
            }
            required
          />
        </div>
        <div className={listStyles.buttons}>
          <ConfirmButton type={"submit"} />
          <EditButton hidden={true} />
          <DeleteButton hidden={true} />
        </div>
      </form>
    </li>
  );
}
export default EditingListItem;
