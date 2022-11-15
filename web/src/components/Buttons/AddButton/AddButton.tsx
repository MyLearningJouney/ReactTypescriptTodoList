import styles from "../AddButton/AddButton.module.scss";
import { FaPlus } from "react-icons/fa";

interface Props {
  type?: "submit" | "reset" | "button";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  hidden?: boolean;
}
function AddButton(props: Props) {
  return (
    <button
      type={props.type}
      onClick={props.onClick}
      className={props.hidden ? `${styles.hide}` : `${styles.addButton}`}
    >
      <FaPlus className={styles.icon} />
    </button>
  );
}
export default AddButton;
