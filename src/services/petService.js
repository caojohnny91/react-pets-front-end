const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/pets`;

const index = async () => {
  try {
    const res = await fetch(BASE_URL);
    //in this code we’re getting back a Response object and assigning it to a new res variable.
    // In order to get this Response object to resolve to a useable JavaScript object, we need to invoke the .json() method on it. We also know that, on the front end, we’ll want to use this data to populate a list of Pets, so we’d better return the parsed res data out of this function:
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

// This function should:
// Accept a pet object as an argument.
// Use fetch to make a POST request to the base URL.
// Use a try...catch block to handle any errors.
// Use .json() method to parse the response. Ex: res.json().
// Return the parsed response.
const create = async (formData) => {
  try {
    const res = await fetch(BASE_URL, {
      // We specify that this is a 'POST' request
      method: "POST",
      // We're sending JSON data, so we attach a Content-Type header
      // and specify that the data being sent is type 'application/json'
      headers: {
        "Content-Type": "application/json",
      },
      // The formData, converted to JSON, is sent as the body
      // This will be received on the backend as req.body
      body: JSON.stringify(formData),
    });
    return res.json();
  } catch (err) {
    console.log(err);
  }
};

const updatePet = async (formData, petId) => {
  try {
    const res = await fetch(`${BASE_URL}/${petId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export { index, create, updatePet };
