import styles from "../ConfirmButton/ConfirmButton.module.scss";
import { FaCheck } from "react-icons/fa";

interface Props {
  type?: "submit" | "reset" | "button";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

function ConfirmButton(props: Props) {
  return (
    <button type={props.type} onClick={props.onClick}>
      <FaCheck className={styles.check} />
    </button>
  );
}
export default ConfirmButton;
