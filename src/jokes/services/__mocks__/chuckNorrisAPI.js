export const fetchJoke = async (category, searchText) => {
  if (searchText != null) {
    return Promise.resolve(process.env.JOKE_SEARCH_QUERRY)
  } else if (category == null) {
    return Promise.resolve(process.env.JOKE_RANDOM)
  } else {
    return Promise.resolve(process.env.JOKE_SEARCH_QUERRY)
  }
}

export const fetchCategories = async () => {
  return ["cat1", "cat2"]
}