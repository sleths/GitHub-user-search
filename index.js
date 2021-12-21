const avatar = document.querySelector(".avatar");
const userTitle = document.querySelector(".usertitle");
const date = document.querySelector(".date");
const username = document.querySelector(".username");
const bio = document.querySelector(".bio");
const repos = document.querySelector(".repos");
const followers = document.querySelector(".followers");
const following = document.querySelector(".following");
const lcation = document.querySelector(".icon-text-location");
const twitter = document.querySelector(".icon-text-twitter");
const github = document.querySelector(".icon-text-github");
const text = "sleths";
const getUser = async () => {
  const response = await axios.get(`https://api.github.com/users/${text}`);
  const { login, bio, avatar_url, name } = response.data;
  username.textContent = login;
  userTitle.textContent = name;
  if (response.data.bio) {
    bio.textContent = bio;
  }
  console.log(response.data);

  avatar.setAttribute("src", avatar_url);
};

getUser();
