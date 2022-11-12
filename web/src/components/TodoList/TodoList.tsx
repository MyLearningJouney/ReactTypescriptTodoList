import { useContext } from "react";
import ListDataContext from "../../context/ListDataContext";
import styles from "../TodoList/TodoList.module.scss";
import Form from "./Form/Form";
import ListItem from "./List/ListItem/ListItem";

function TodoList() {
  const { listData, setListData } = useContext(ListDataContext);
  return (
    <>
      <Form />
      <ul>
        {listData.map((TodoItem) => (
          <ListItem key={TodoItem.id} TodoItem={TodoItem} />
        ))}
      </ul>
    </>
  );
}
export default TodoList;
