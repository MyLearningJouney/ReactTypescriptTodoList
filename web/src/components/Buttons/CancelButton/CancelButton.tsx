import styles from "../CancelButton/CancelButton.module.scss";
import { CgClose } from "react-icons/cg";

interface Props {
  type?: "submit" | "reset" | "button";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  hidden?: boolean;
}

function CancelButton({ type, onClick, hidden }: Props) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={hidden ? `${styles.hide}` : `${styles.cancelButton}`}
    >
      <CgClose className={styles.icon} />
    </button>
  );
}
export default CancelButton;
