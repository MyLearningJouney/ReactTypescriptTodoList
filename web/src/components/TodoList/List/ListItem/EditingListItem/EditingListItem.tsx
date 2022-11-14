import React, { useContext, useState } from "react";
import ListDataContext from "../../../../../context/ListDataContext";
import { TodoItem } from "../../../../../types/TodoItem";
import ConfirmButton from "../../../../Buttons/ConfirmButton/ConfirmButton";
import DeleteButton from "../../../../Buttons/DeleteButton/DeleteButton";
import EditButton from "../../../../Buttons/EditButton/EditButton";

interface Props {
  TodoItem: TodoItem;
}
function EditingListItem({ TodoItem }: Props) {
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
        if (todo.id === TodoItem.id) {
          return TodoItem;
        } else {
          return todo;
        }
      })
    );
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
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
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="editInput"
            id="editInput"
            value={editValue}
            onChange={handleChange}
            onMouseDown={(e) => e.preventDefault()}
            autoFocus
            onBlur={() => setTimeout(handleBlur, 100)}
          />
        </div>
        <div>
          <ConfirmButton type={"submit"} />
          <EditButton />
          <DeleteButton />
        </div>
      </form>
    </li>
  );
}
export default EditingListItem;
