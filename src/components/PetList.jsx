const PetList = (props) => {
  // Next, we’ll use .map() to create a list of <li> elements. Each <li> element will display the name property of each pet in petList. React will also insist that each top-level element in a list must have a unique key - fortunately, MongoDB generates an id (as ._id) for us when creating a resource, so we can use pet._id for the key:
  const pets = props.petList?.map((pet) => <li key={pet._id}>{pet.name}</li>);
  return (
    <>
      <div>
        <h1>Pet List</h1>
        {props.petList.length === 0 ? <h2>No Pets Yet!</h2> : <ul>{pets}</ul>}
      </div>
    </>
  );
};

export default PetList;
