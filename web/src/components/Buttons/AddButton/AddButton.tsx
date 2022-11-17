import styles from "../AddButton/AddButton.module.scss";
import { FaPlus } from "react-icons/fa";

interface Props {
  type?: "submit" | "reset" | "button";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  hidden?: boolean;
}
function AddButton({ type, onClick, hidden }: Props) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={hidden ? `${styles.hide}` : `${styles.addButton}`}
    >
      <FaPlus className={styles.icon} />
    </button>
  );
}
export default AddButton;
