const PetList = (props) => {
  // Next, we’ll use .map() to create a list of <li> elements. Each <li> element will display the name property of each pet in petList. React will also insist that each top-level element in a list must have a unique key - fortunately, MongoDB generates an id (as ._id) for us when creating a resource, so we can use pet._id for the key:
  const pets = props.petList.map((pet) => (

    // Adding the UI for showing a single pet
// Inside of PetList.jsx where you .map() over the pets, wrap each li element in an a tag.
// Because the a tag is now the top-level element, you’ll need to move the key attribute from the li to the a element.
// Next, add an onClick event to the a element. For testing purposes, let’s add an inline function that logs the clicked pet to the console.
    <a key={pet._id} onClick={() => console.log(pet)}>
      <li>{pet.name}</li>
    </a>
  ));
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
