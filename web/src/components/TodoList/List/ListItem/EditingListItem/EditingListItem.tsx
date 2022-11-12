import { TodoItem } from "../../../../../types/TodoItem";

interface Props {
  TodoItem: TodoItem;
}
function EditingListItem({ TodoItem }: Props) {
  return <li>{TodoItem.todo}</li>;
}
export default EditingListItem;
