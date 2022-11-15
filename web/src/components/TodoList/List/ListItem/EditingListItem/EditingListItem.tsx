import React, { useContext, useState } from "react";
import ListDataContext from "../../../../../context/ListDataContext";
import { TodoItem } from "../../../../../types/TodoItem";
import ConfirmButton from "../../../../Buttons/ConfirmButton/ConfirmButton";
import DeleteButton from "../../../../Buttons/DeleteButton/DeleteButton";
import EditButton from "../../../../Buttons/EditButton/EditButton";

import styles from "../EditingListItem/EditingListItem.module.scss";

interface Props {
  TodoItem: TodoItem;
  listStyles: { list: string; text: string; buttons: string };
}
function EditingListItem({ TodoItem, listStyles }: Props) {
  const { listData, setListData } = useContext(ListDataContext);
  const [editValue, setEditValue] = useState(TodoItem.todo);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setEditValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    TodoItem.todo = editValue;
    TodoItem.status = "pending";
    setListData(
      listData.map((todo) => {
        return todo.id === TodoItem.id ? TodoItem : todo;
      })
    );
  };

  const handleBlur = () => {
    TodoItem.status = "pending";
    setListData(
      listData.map((todo) => {
        return todo.id === TodoItem.id ? TodoItem : todo;
      })
    );
  };

  return (
    <li className={listStyles.list}>
      <form onSubmit={handleSubmit} className={styles.editForm}>
        <div className={listStyles.text}>
          <input
            className={styles.editInput}
            type="text"
            name="editInput"
            id="editInput"
            value={editValue}
            onChange={handleChange}
            onMouseDown={(e) => e.preventDefault()}
            autoFocus
            onBlur={() => setTimeout(handleBlur, 500)}
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
