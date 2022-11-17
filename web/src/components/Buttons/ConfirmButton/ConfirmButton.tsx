import styles from "../ConfirmButton/ConfirmButton.module.scss";
import { FaCheck } from "react-icons/fa";

interface Props {
  type?: "submit" | "reset" | "button";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  hidden?: boolean;
}

function ConfirmButton({ type, onClick, hidden }: Props) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={hidden ? `${styles.hide}` : `${styles.confirmButton}`}
    >
      <FaCheck className={styles.icon} />
    </button>
  );
}
export default ConfirmButton;
