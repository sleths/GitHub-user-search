const text = "sleths";
const getUser = async () => {
  const response = await axios.get(`https://api.github.com/users/${text}`);
  console.log(response.data);
};

getUser();
