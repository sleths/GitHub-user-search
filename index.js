const avatar = document.querySelector(".avatar");
const userTitle = document.querySelector(".usertitle");
const date = document.querySelector(".date");
const username = document.querySelector(".username");
const info = document.querySelector(".bio");
const repos = document.querySelector(".repos");
const follower = document.querySelector(".followers");
const followings = document.querySelector(".following");
const lcation = document.querySelector(".icon-text-location");
const twitter = document.querySelector(".icon-text-twitter");
const github = document.querySelector(".icon-text-github");
const link = document.querySelector(".icon-text-link");
const searchBtn = document.querySelector(".search-btn");
const input = document.querySelector(".search-input");

let user;
const convertDateToString = (dt) => {
  dt = new Date(dt);
  const year = dt.getFullYear();
  const day = dt.getDate();
  const month = dt.toLocaleString("en", { month: "short" });
  dt
    ? (date.textContent = `Joined ${day} ${month} ${year}`)
    : (date.textContent = "Unknown");
};
const getRepo = async (text) => {
  const response = await axios.get(
    `https://api.github.com/users/${text}/repos`
  );
  repos.textContent = response.data.length;
};

const getUser = async (text) => {
  const response = await axios.get(`https://api.github.com/users/${text}`);
  const {
    login,
    bio,
    avatar_url,
    name,
    created_at,
    followers,
    following,
    twitter_username,
    location,
    html_url,
    blog,
  } = response.data;
  avatar.setAttribute("src", avatar_url);
  username.textContent = `@${login}`;
  userTitle.textContent = name;
  follower.textContent = followers;
  followings.textContent = following;
  const userLocation = location !== null ? location : "Not available";
  const userTwitter = twitter_username ? twitter_username : "Not available";
  const userBlog = blog !== "" ? blog : "Not available";
  const userBio = bio ? bio : "This profile has no bio";
  lcation.textContent = userLocation;
  twitter.textContent = userTwitter;
  github.textContent = html_url;
  link.textContent = userBlog;
  info.textContent = userBio;
  convertDateToString(created_at);
  getRepo(text);
};

const inputValue = () => {
  user = input.value;
  document
    .querySelector(".input-form")
    .addEventListener("submit", (e) => e.preventDefault());
  getUser(user);
};

searchBtn.addEventListener("click", inputValue);
