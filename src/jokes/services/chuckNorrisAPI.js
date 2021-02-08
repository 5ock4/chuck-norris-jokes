import axios from "axios"

const CHUCK_NORRIS_JOKES_API = "https://api.chucknorris.io/jokes"

export const fetchJoke = async (category, searchText) => {
  let path

  if (searchText != null) {
    path = `/search?query=${searchText}`
  } else if (category == null) {
    path = "/random"
  } else {
    path = `/random?category=${category}`
  }

  const response = await axios.get(CHUCK_NORRIS_JOKES_API + path)

  if (response.data.total === 0) {
    return `No joke with phrase "${searchText}" found.`
  }

  if (response.data.value === undefined) {
    const randInt = Math.floor(Math.random() * response.data.total)
    return response.data.result[randInt].value
  }

  return response.data.value
}

export const fetchCategories = async () => {
  const response = await axios.get(
    process.env.REACT_APP_CHUCK_NORRIS_JOKES_API + "/categories"
  )

  return response.data
}
