import { useState, useEffect } from "react";
// import all (*) of the exported functions as methods on a new petService object
import * as petService from "./services/petService";
import PetList from "./components/PetList";
import PetDetail from "./components/PetDetails";
import PetForm from "./components/PetForm";
// import "./App.css";

const App = () => {
  const [petList, setPetList] = useState([]);

  // After making the li links. Create a new state variable that will hold a single pet. This should be an object that represents the selected pet, or null if no pet is selected:
  const [selected, setSelected] = useState(null);

  // create a new state variable inside of App.jsx to represent the form component being “open” or “closed”. When the page loads initially the form should not be open, so we can set the initial value to false:
  const [isFormOpen, setIsFormOpen] = useState(false);

  // create a function called handleFormView to toggle the above state variable. When the function is called, the Boolean value of isFormOpen should change from false to true, or vice versa.
  const handleFormView = () => {
    setIsFormOpen(!isFormOpen);
  };

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
    setSelected(pet);
  };

  // Now that our create function is complete, it’s time to write the function that will use it. Because creating a new Pet will impact our petList state, we’ll want to place the new function where that state lives
  // This function will make an async call to petService.create, passing it formData. If everything goes well, create returns the created pet object from the database. We’ll invoke setPetList and pass it a new array comprised of the new pet object, followed by the existing petList which we’ll add using the spread operator.
  const handleAddPet = async (formData) => {
    try {
      // Call petService.create, assign return value to newPet
      const newPet = await petService.create(formData);

      // Let’s check if the response - newPet - has an error property. If so, we’ll throw a new Error and pass it to the catch block.
      if (newPet.error) {
        throw new Error(newPet.error);
      }
      // Add the pet object and the current petList to a new array, and
      // set that array as the new petList
      setPetList([newPet, ...petList]);
      setIsFormOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {/* Once the function is created, we’ll pass it down to PetList as a prop. */}
      <PetList
        petList={petList}
        updateSelected={updateSelected}
        handleFormView={handleFormView}
        isFormOpen={isFormOpen}
      />
      {isFormOpen ? (
        <PetForm handleAddPet={handleAddPet} />
      ) : (
        <PetDetail selected={selected} />
      )}
    </>
  );
};
export default App;
