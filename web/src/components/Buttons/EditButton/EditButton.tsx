import styles from "../EditButton/EditButton.module.scss";
import { FaPen } from "react-icons/fa";


interface Props {
  type?: "submit" | "reset" | "button";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
function EditButton(props: Props) {
  return (
    <button type={props.type} onClick={props.onClick}>
      <FaPen className={styles.edit} />
    </button>
  );
}
export default EditButton;
