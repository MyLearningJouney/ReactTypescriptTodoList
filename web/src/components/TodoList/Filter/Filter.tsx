import styles from "../Filter/Filter.module.scss";

interface Props {
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}

function Filter(props: Props) {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault();
    props.setFilter(event.target.value);
  };
  return (
    <div className={styles.filterWrapper}>
      <select
        name="todo"
        id="filter-select"
        onChange={handleChange}
        className={styles.select}
      >
        <option value="all" defaultValue={"all"}>
          All
        </option>
        <option value="completed">Completed</option>
        <option value="pending">Pending</option>
      </select>
    </div>
  );
}
export default Filter;
