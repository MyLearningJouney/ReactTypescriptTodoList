import styles from "../EditButton/EditButton.module.scss";
import { FaPen } from "react-icons/fa";

interface Props {
  type?: "submit" | "reset" | "button";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  hidden?: boolean;
}
function EditButton({ type, onClick, hidden }: Props) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={hidden ? `${styles.hide}` : `${styles.editButton}`}
    >
      <FaPen className={styles.icon} />
    </button>
  );
}
export default EditButton;
