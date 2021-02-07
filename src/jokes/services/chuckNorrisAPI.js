import axios from "axios";

const CHUCK_NORRIS_JOKES_API = "https://api.chucknorris.io/jokes";
const SEARCH_TEXT_MAX_LENGTH = 3;

export const fetchJokes = async (category, searchText) => {
  let path;

  if (searchText != null) {
    path = `/search?query=${searchText}`;
  } else if (category == null) {
    path = "/random";
  } else {
    path = `/random?category=${category}`;
  }

  const response = await axios.get(
    process.env.REACT_APP_CHUCK_NORRIS_JOKES_API + path
  );

  if (response.data.value === undefined) {
    console.log(response.data.total);
    const randInt = Math.floor(Math.random() * response.data.total);
    console.log(randInt);
    return response.data.result[randInt].value;
  }

}











export const getPath = (category, searchText) => {
  let path;

  if (searchText != null) {
    path = `/search?query=${searchText}`;
  } else if (category == null) {
    path = "/random";
  } else {
    path = `/random?category=${category}`;
  }

  return path;
};

export const getData = (response) => {
  if (response.data.value === undefined) {
    console.log(response.data.total);
    const randInt = Math.floor(Math.random() * response.data.total);
    console.log(randInt);
    return response.data.result[randInt].value;
  }

  return response.data.value;
};
