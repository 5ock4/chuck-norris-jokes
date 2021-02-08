import { React, useEffect } from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Chip, CircularProgress, Typography } from "@material-ui/core"
import { useDispatch, useSelector } from "react-redux"

import { getRandomJoke } from "../slices/joke"
import { getCategories, categoriesSelector } from "../slices/categories"
import { setCategory, categorySelector } from "../slices/category"
import { setSearchText } from "../slices/searchText"
import { fetchJoke } from "../services/chuckNorrisAPI"
import { fetchCategories } from "../services/chuckNorrisAPI"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5),
    },
    listStyle: "none",
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}))

const JokeCategories = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const { categories, loading, hasErrors } = useSelector(categoriesSelector)
  const { category } = useSelector(categorySelector)

  useEffect(() => {
    dispatch(getCategories(fetchCategories))
  }, [dispatch])

  const handleClick = (data) => {
    // dispatch(setSearchText(null, "")) //TODO
    if (category === data) {
      dispatch(setCategory(null))
      dispatch(getRandomJoke(fetchJoke, null))
    } else {
      dispatch(setCategory(data))
      dispatch(getRandomJoke(fetchJoke, data))
    }
  }

  return (
    <div className={classes.root}>
      {loading && <CircularProgress />}
      {!loading &&
        !hasErrors &&
        categories.map((data, index) => {
          return (
            <li key={index}>
              <Chip
                label={data}
                onClick={() => handleClick(data)}
                color={data === category ? "primary" : "secondary"}
                className={classes.chip}
              />
            </li>
          )
        })}
      {hasErrors && (
        <Typography variant="body1" align="left">
          No categories found.
        </Typography>
      )}
    </div>
  )
}

export default JokeCategories