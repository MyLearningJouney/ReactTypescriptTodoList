import { useContext, useState } from "react";
import ListDataContext from "../../context/ListDataContext";
import Filter from "./Filter/Filter";
import Form from "./Form/Form";
import ListItem from "./List/ListItem/ListItem";

function TodoList() {
  const { listData, setListData } = useContext(ListDataContext);
  const [filter, setFilter] = useState("all");
  console.log(filter);

  const filteredList = listData
    .filter((TodoItem) => TodoItem.status === filter)
    .map((TodoItem) => (
      <ul>
        <ListItem key={TodoItem.id} TodoItem={TodoItem} />
      </ul>
    ));

  const completeList = (
    <ul>
      {listData.map((TodoItem) => (
        <ListItem key={TodoItem.id} TodoItem={TodoItem} />
      ))}
    </ul>
  );

  return (
    <>
      <Form />
      <Filter setFilter={setFilter} />
      {filter === "all" ? completeList : filteredList}
    </>
  );
}
export default TodoList;
