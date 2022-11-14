interface Props {
    setFilter: React.Dispatch<React.SetStateAction<string>>
}

function Filter(props:Props) {

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        event.preventDefault()
        props.setFilter(event.target.value)
    }
  return (
    <>
      <label htmlFor="filter-select">Filter:</label>

      <select name="todo" id="filter-select" onChange={handleChange}>
        <option value="all" selected>All</option>
        <option value="completed">Completed</option>
        <option value="pending">Pending</option>
      </select>
    </>
  );
}
export default Filter;
