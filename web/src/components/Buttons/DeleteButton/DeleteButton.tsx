import styles from "../DeleteButton/DeleteButton.module.scss";
import { FaTrash } from "react-icons/fa";

interface Props {
  type?: "submit" | "reset" | "button";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  hidden?: boolean;
}

function DeleteButton(props: Props) {
  return (
    <button
      type={props.type}
      onClick={props.onClick}
      className={props.hidden ? `${styles.hide}` : `${styles.deleteButton}`}
    >
      <FaTrash className={styles.trash} />
    </button>
  );
}
export default DeleteButton;
