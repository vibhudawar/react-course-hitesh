export const getPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET",
  });

  //to convert the response to the object
  return await response.json();
};

export const getRandomUser = async () => {
  const userResponse = await fetch("https://randomuser.me/api/", {
    method: "GET",
  });

  return await userResponse.json();
};
