
const Description = (props) => {
  const { description, setDescription, onAddTasks} = props;

  const handleSubmint = (e) => {
    e.preventDefault();
    console.log(e.target);
    const newItem = {description};
    console.log(newItem);
    onAddTasks(newItem);
    setDescription("")
  };

  return (
    <div>
      <form onSubmit={handleSubmint}>
        <input
          type="text"
          placeholder="task"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button>Add</button>
      </form>
    </div>
  )
}

export default Description;