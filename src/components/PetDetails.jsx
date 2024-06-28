const PetDetail = (props, handleFormView, handleRemovePet) => {
  // return if props.selected is null
  if (!props.selected)
    return (
      <>
        <h1>NO DETAILS</h1>
      </>
    );
  return (
    // return statement if props.selected has a truthy value
    <>
      <h1>{props.selected.name}</h1>
      <h2>Breed: {props.selected.breed}</h2>
      <h2>
        Age: {props.selected.age} year{props.selected.age > 1 ? "s" : ""} old
      </h2>
      <button onClick={() => props.handleFormView(props.selected)}>Edit</button>
      <button onClick={() => props.handleRemovePet(props.selected._id)}>
          Delete Pet
        </button>
    </>
  );
};

export default PetDetail;
