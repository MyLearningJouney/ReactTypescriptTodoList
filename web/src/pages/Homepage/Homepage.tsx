import Footer from "../../components/Footer/Footer";
import TodoList from "../../components/TodoList/TodoList";
import { DateFormatDay } from "../../utils/DateFormat";

import styles from "../Homepage/Homepage.module.scss";
import ForestSvg from "./Svg/ForestSvg";

function Homepage() {
  const today = DateFormatDay(new Date(Date.now()));

  return (
    <main>
      <section className={styles.hero}>
        <ForestSvg />
        <h1>Awesome Todo-List</h1>
        <p> Today is {today}</p>
      </section>
      <section className={styles.todoList}>
        <TodoList />
      </section>
      <Footer />
    </main>
  );
}

export default Homepage;
