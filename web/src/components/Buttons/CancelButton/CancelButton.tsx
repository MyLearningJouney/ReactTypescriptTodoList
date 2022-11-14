import styles from "../CancelButton/CancelButton.module.scss";
import { CgClose } from "react-icons/cg";

interface Props {
  type?: "submit" | "reset" | "button";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
}

function CancelButton(props: Props) {
  return (
    <button
      type={props.type}
      onClick={props.onClick}
      className={props.className}
    >
      <CgClose className={styles.cancel} />
    </button>
  );
}
export default CancelButton;
