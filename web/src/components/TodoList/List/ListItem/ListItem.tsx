import CompletedListItem from "./CompletedListItem/CompletedListItem";
import EditingListItem from "./EditingListItem/EditingListItem";
import PendingListItem from "./PendingListItem/PendingListItem";
import { TodoItem } from "../../../../types/TodoItem";

import styles from "../ListItem/ListItem.module.scss";

interface Props {
  TodoItem: TodoItem;
}

function ListItem({ TodoItem }: Props) {
  return TodoItem.status === "pending" ? (
    <PendingListItem
      TodoItem={TodoItem}
      listStyles={{
        list: styles.listItem,
        text: styles.todoText,
        buttons: styles.todoButtons,
      }}
    />
  ) : TodoItem.status === "editing" ? (
    <EditingListItem
      TodoItem={TodoItem}
      listStyles={{
        list: styles.listItem,
        text: styles.todoText,
        buttons: styles.todoButtons,
      }}
    />
  ) : (
    <CompletedListItem
      TodoItem={TodoItem}
      listStyles={{
        list: styles.listItem,
        text: styles.todoText,
        buttons: styles.todoButtons,
      }}
    />
  );
}
export default ListItem;
