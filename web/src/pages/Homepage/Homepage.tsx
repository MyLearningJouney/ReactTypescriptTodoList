import TodoList from "../../components/TodoList/TodoList";

import styles from "../Homepage/Homepage.module.scss";

function Homepage() {
  return (
    <main>
      <section className={styles.todoList}>
        <h1>Awesome Todo-List</h1>
        <TodoList />
        <p>By: Danilo Packer</p>
      </section>
    </main>
  );
}

export default Homepage;
