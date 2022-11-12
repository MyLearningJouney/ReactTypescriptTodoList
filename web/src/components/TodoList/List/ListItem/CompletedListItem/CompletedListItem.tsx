import { TodoItem } from "../../../../../types/TodoItem";

interface Props {
  TodoItem: TodoItem;
}
function CompletedListItem({ TodoItem }: Props) {
  return <li>{TodoItem.todo}</li>;
}
export default CompletedListItem;
