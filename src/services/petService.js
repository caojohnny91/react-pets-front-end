const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/pets`;

const index = async () => {
  try {
    const response = await fetch(BASE_URL);

    // Great, in this code we’re getting back a Response object and assigning it to a new res variable.
    // In order to get this Response object to resolve to a useable JavaScript object, we need to invoke the .json() method on it. We also know that, on the front end, we’ll want to use this data to populate a list of Pets, so we’d better return the parsed res data out of this function:
    return response.json();
  } catch (error) {
    console.log(error);
  }
};

export { index };
