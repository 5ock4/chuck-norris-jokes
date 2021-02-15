export const fetchJoke = async (category, searchText) => {
  if (searchText != null) {
    return Promise.resolve(process.env.JOKE_SEARCH_QUERRY + ":" + searchText)
  } else if (category == null) {
    return Promise.resolve(process.env.JOKE_RANDOM)
  } else {
    return Promise.resolve(process.env.JOKE_CATEGORY_RANDOM)
  }
}

export const fetchCategories = async () => {
  return [process.env.CAT1, process.env.CAT2]
}