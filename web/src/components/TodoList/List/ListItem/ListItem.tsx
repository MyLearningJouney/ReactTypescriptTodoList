import CompletedListItem from "./CompletedListItem/CompletedListItem";
import EditingListItem from "./EditingListItem/EditingListItem";
import PendingListItem from "./PendingListItem/PendingListItem";
import { TodoItem } from "../../../../types/TodoItem";

import styles from "../ListItem/ListItem.module.scss";

interface Props {
  TodoItem: TodoItem;
}

const listItemEnum = ({ TodoItem }: Props) => ({
  pending: (
    <PendingListItem
      TodoItem={TodoItem}
      listStyles={{
        list: styles.listItem,
        text: styles.todoText,
        buttons: styles.todoButtons,
      }}
    />
  ),
  editing: (
    <EditingListItem
      TodoItem={TodoItem}
      listStyles={{
        list: styles.listItem,
        text: styles.todoText,
        buttons: styles.todoButtons,
      }}
    />
  ),
  completed: (
    <CompletedListItem
      TodoItem={TodoItem}
      listStyles={{
        list: styles.listItem,
        text: styles.todoText,
        buttons: styles.todoButtons,
      }}
    />
  ),
});

function ListItem({ TodoItem }: Props) {
  return listItemEnum({ TodoItem })[TodoItem.status];
}
export default ListItem;
