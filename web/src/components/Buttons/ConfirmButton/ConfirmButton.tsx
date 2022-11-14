import styles from "../ConfirmButton/ConfirmButton.module.scss";
import { FaCheck } from "react-icons/fa";

interface Props {
  type?: "submit" | "reset" | "button";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  hidden?: boolean;
}

function ConfirmButton(props: Props) {
  return (
    <button
      type={props.type}
      onClick={props.onClick}
      className={props.hidden ? `${styles.hide}` : `${styles.confirmButton}`}
    >
      <FaCheck />
    </button>
  );
}
export default ConfirmButton;
