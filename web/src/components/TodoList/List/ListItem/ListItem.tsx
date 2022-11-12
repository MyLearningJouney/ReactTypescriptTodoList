import styles from "../TodoList/TodoList.module.scss";
import CompletedListItem from "./CompletedListItem/CompletedListItem";
import EditingListItem from "./EditingListItem/EditingListItem";
import PendingListItem from "./PendingListItem/PendingListItem";
import { TodoItem } from "../../../../types/TodoItem";

interface Props {
  TodoItem: TodoItem;
}

function ListItem({ TodoItem }: Props) {
  return TodoItem.status === "pending" ? (
    <PendingListItem TodoItem={TodoItem} />
  ) : TodoItem.status === "editing" ? (
    <EditingListItem TodoItem={TodoItem} />
  ) : (
    <CompletedListItem TodoItem={TodoItem} />
  );
}
export default ListItem;
