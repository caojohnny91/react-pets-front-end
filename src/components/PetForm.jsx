import { useState } from "react";

const PetForm = (props) => {
  // formData state to control the form
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    breed: "",
  });

  // handleChange function to update formData state
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <>
      <form>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value="{formData.name}"
          onChange={handleChange}
          required
        />
        <label htmlFor="name">Age:</label>
        <input
          type="number"
          id="age"
          name="age"
          value="{formData.age}"
          onChange={handleChange}
          required
        />
        <label htmlFor="name">Breed:</label>
        <input
          type="text"
          id="breed"
          name="breed"
          value="{formData.breed}"
          onChange={handleChange}
          required
        />
        <buttton type="submit">Add New Pet</buttton>
      </form>
    </>
  );
};

export default PetForm;
