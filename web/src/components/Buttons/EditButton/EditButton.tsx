import styles from "../EditButton/EditButton.module.scss";
import { FaPen } from "react-icons/fa";

function EditButton() {
  return (
    <button>
      <FaPen className={styles.edit} />
    </button>
  );
}
export default EditButton;
