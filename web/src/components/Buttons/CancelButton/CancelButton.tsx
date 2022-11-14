import styles from "../CancelButton/CancelButton.module.scss";
import { CgClose } from "react-icons/cg";

interface Props {
  type?: "submit" | "reset" | "button";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

function CancelButton(props: Props) {
  return (
    <button type={props.type} onClick={props.onClick}>
      <CgClose className={styles.cancel} />
    </button>
  );
}
export default CancelButton;
