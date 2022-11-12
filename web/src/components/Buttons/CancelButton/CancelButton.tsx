import styles from "../CancelButton/CancelButton.module.scss";
import { CgClose } from "react-icons/cg";

function CancelButton() {
  return (
    <button>
      <CgClose className={styles.cancel} />
    </button>
  );
}
export default CancelButton;
