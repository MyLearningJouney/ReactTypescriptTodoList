import { TodoItem } from "../../../../../types/TodoItem";
import styles from "../TodoList/TodoList.module.scss";

interface Props {
  TodoItem: TodoItem;
}
function EditingListItem({ TodoItem }: Props) {
  return <li>{TodoItem.todo}</li>;
}
export default EditingListItem;
