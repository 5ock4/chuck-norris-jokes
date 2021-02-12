export const fetchJoke = async (category, searchText) => {
  if (searchText != null) {
    return "Joke:searchQuerry"
  } else if (category == null) {
    return "Joke:random"
  } else {
    return "Joke:categoryRandom"
  }
}

export const fetchCategories = async () => {
  return ["cat1", "cat2"]
}