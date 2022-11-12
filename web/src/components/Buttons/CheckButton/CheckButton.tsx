import styles from "../CheckButton/CheckButton.module.scss";
import { FaCheck } from "react-icons/fa";

interface Props {
  type?: "submit" | "reset" | "button";
}

function CheckButton(props: Props) {
  return (
    <button type={props.type}>
      <FaCheck className={styles.check} />
    </button>
  );
}
export default CheckButton;
