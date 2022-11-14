import styles from "../DeleteButton/DeleteButton.module.scss";
import { FaTrash } from "react-icons/fa";

interface Props {
  type?: "submit" | "reset" | "button";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

function DeleteButton(props: Props) {
  return (
    <button type={props.type} onClick={props.onClick}>
      <FaTrash className={styles.trash} />
    </button>
  );
}
export default DeleteButton;
