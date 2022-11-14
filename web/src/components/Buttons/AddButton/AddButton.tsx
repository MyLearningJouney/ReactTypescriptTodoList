import styles from "../EditButton/EditButton.module.scss";
import { FaPlus } from "react-icons/fa";

interface Props {
  type?: "submit" | "reset" | "button";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
}
function AddButton(props: Props) {
  return (
    <button
      type={props.type}
      onClick={props.onClick}
      className={props.className}
    >
      <FaPlus className={styles.edit} />
    </button>
  );
}
export default AddButton;
