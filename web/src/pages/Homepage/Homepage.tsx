import Footer from "../../components/Footer/Footer";
import TodoList from "../../components/TodoList/TodoList";
import { DateFormatDay } from "../../utils/DateFormat";

import styles from "../Homepage/Homepage.module.scss";
import CampSvg from "./Svg/CampSvg";
import ForestSvg from "./Svg/ForestSvg";

function Homepage() {
  const today = DateFormatDay(new Date(Date.now()));

  return (
    <main>
      <section className={styles.hero}>
        <ForestSvg />
        <h1>AWESOME TO DO LIST</h1>
        <p> Today is {today}</p>
      </section>
      <section className={styles.todoList}>
        <TodoList />
      </section>
      <section className={styles.finish}>
        <div>
          <CampSvg />
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default Homepage;
