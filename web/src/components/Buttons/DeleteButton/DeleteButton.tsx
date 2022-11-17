import styles from "../DeleteButton/DeleteButton.module.scss";
import { FaTrash } from "react-icons/fa";

interface Props {
  type?: "submit" | "reset" | "button";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  hidden?: boolean;
}
function DeleteButton({ type, onClick, hidden }: Props) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={hidden ? `${styles.hide}` : `${styles.deleteButton}`}
    >
      <FaTrash className={styles.icon} />
    </button>
  );
}
export default DeleteButton;
