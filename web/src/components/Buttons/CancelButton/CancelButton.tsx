import styles from "../CancelButton/CancelButton.module.scss"
import { CgClose } from "react-icons/cg";

function CancelButton() {
  return (
    <CgClose className={styles.cancel}/>
  );
}
export default CancelButton;
