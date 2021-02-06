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
