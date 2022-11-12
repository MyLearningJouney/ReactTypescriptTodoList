import React from "react";
import { TodoItem } from "../types/TodoItem";

type ListDataContextType = {
    listData: TodoItem[]
    setListData: React.Dispatch<React.SetStateAction<TodoItem[]>>

}

const default_value = {
    listData: [],
    setListData: () => {}
}

const ListDataContext = React.createContext<ListDataContextType>(default_value);

export default ListDataContext;
