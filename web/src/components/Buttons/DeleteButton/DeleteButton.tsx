import styles from "../DeleteButton/DeleteButton.module.scss";
import { FaTrash } from "react-icons/fa";

function DeleteButton() {
  return (
    <button>
      <FaTrash className={styles.trash} />
    </button>
  );
}
export default DeleteButton;
