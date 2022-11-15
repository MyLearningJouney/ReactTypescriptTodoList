import styles from "../Filter/Filter.module.scss";

interface Props {
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}

function Filter(props: Props) {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const target = event.target as HTMLButtonElement;
    props.setFilter(target.value);
  };

  return (
    <div className={styles.filterWrapper}>
      <button
        className={props.filter === "all" ? styles.active : ""}
        value="all"
        onClick={handleClick}
      >
        All
      </button>
      <button
        className={props.filter === "pending" ? styles.active : ""}
        value="pending"
        onClick={handleClick}
      >
        Pending
      </button>
      <button
        className={props.filter === "completed" ? styles.active : ""}
        value="completed"
        onClick={handleClick}
      >
        Completed
      </button>
    </div>
  );
}
export default Filter;
