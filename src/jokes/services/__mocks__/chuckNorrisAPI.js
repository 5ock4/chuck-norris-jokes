export const TST_JOKE_RANDOM = "joke:random"
export const TST_JOKE_CATEGORY_RANDOM = "joke:categoryRandom"
export const TST_JOKE_SEARCH_QUERRY = "joke:searchQuerry"
export const TST_CAT1 = "cat1"
export const TST_CAT2 = "cat2"

export const fetchRandomJoke = async () => {
  return Promise.resolve(TST_JOKE_RANDOM)
}

export const fetchQuerriedRandomJoke = async (params) => {
  return Promise.resolve(TST_JOKE_SEARCH_QUERRY + ":" + params["searchText"])
}

export const fetchJokeFromCategory = async () => {
  return Promise.resolve(TST_JOKE_CATEGORY_RANDOM)
}

export const fetchCategories = async () => {
  return Promise.resolve([TST_CAT1, TST_CAT2])
}
