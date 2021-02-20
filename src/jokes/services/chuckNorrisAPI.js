import axios from "axios"

const CHUCK_NORRIS_JOKES_API = "https://api.chucknorris.io/jokes"
const PATH_RANDOM = "/random"
const PATH_CATEGORY = "/random?category="
const PATH_QUERY = "/search?query="
const PATH_CATEGORIES = "/categories"

export const fetchRandomJoke = async () => {
  const response = await axios.get(CHUCK_NORRIS_JOKES_API + PATH_RANDOM)

  return response.data.value
}

export const fetchQuerriedRandomJoke = async (params) => {
  const response = await axios.get(
    CHUCK_NORRIS_JOKES_API + PATH_QUERY + params["searchText"]
  )

  if (response.data.total === 0) {
    return false
  }

  const randInt = Math.floor(Math.random() * response.data.total)
  return response.data.result[randInt].value
}

export const fetchJokeFromCategory = async (params) => {
  const response = await axios.get(
    CHUCK_NORRIS_JOKES_API + PATH_CATEGORY + params["category"]
  )

  return response.data.value
}

export const fetchCategories = async () => {
  const response = await axios.get(CHUCK_NORRIS_JOKES_API + PATH_CATEGORIES)

  return response.data
}
