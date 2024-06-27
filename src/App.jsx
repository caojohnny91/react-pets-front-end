import { useState, useEffect } from "react";
// import all (*) of the exported functions as methods on a new petService object
import * as petService from "./services/petService";
import PetList from "./components/PetList";
import PetDetail from "./components/PetDetails";
// import "./App.css";

const App = () => {
  const [petList, setPetList] = useState([]);
  
  // After making the li links. Create a new state variable that will hold a single pet. This should be an object that represents the selected pet, or null if no pet is selected:
  const [selected, setSelected] = useState(null);

  // Create a new useEffect
  useEffect(() => {
    // create a new async function
    const fetchPets = async () => {
      try {
        // call on the index function
        const pets = await petService.index();

        if (pets.error) {
          throw new Error(pets.error);
        }
        // Set petList state to the returned pets data
        setPetList(pets);
      } catch (error) {
        console.log(error);
      }
    };
    // invoke the function
    fetchPets();
    // add an empty dependency array to the `useEffect` hook.
  }, []);

  // Next, we’ll need a create a new function to handle the click event we set up in the PetList component. We’ll build it inside of App.jsx, as it will need to access to the setSelected method we just set up.
// This function should accept a pet object as an argument, and set the selected pet to the state variable
const updateSelected = (pet) => {
  setSelected(pet)
}


  return (
    <>
      <PetList petList={petList} updateSelected={updateSelected} />
      <PetDetail selected={selected}  />
    </>
  );
};

export default App;
