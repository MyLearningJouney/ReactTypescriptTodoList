import styles from "../CancelButton/CancelButton.module.scss";
import { CgClose } from "react-icons/cg";

interface Props {
  type?: "submit" | "reset" | "button";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  hidden?: boolean;
}

function CancelButton(props: Props) {
  return (
    <button
      type={props.type}
      onClick={props.onClick}
      className={props.hidden ? `${styles.hide}` : `${styles.cancelButton}`}
    >
      <CgClose className={styles.icon} />
    </button>
  );
}
export default CancelButton;
