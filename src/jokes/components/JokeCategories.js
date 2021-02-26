import { React, useEffect } from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Chip, CircularProgress, Typography } from "@material-ui/core"
import { useDispatch, useSelector } from "react-redux"

import { getRandomJoke } from "../slices/joke"
import { getCategories, categoriesSelector } from "../slices/categories"
import { setCategory, categorySelector } from "../slices/category"
import {
  fetchRandomJoke,
  fetchJokeFromCategory,
} from "../services/chuckNorrisAPI"
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

  const handleClick = (e) => {
    if (category === e.target.textContent) {
      dispatch(setCategory(null))
      dispatch(getRandomJoke(fetchRandomJoke))
    } else {
      dispatch(setCategory(e.target.textContent))
      dispatch(getRandomJoke(fetchJokeFromCategory, { category: e.target.textContent }))
    }
  }

  return (
    <div className={classes.root}>
      {loading && <CircularProgress />}
      {!loading &&
        !hasErrors &&
        categories.map((data) => {
          return (
              <Chip
                key={data}
                label={data}
                onClick={handleClick}
                color={data === category ? "primary" : "secondary"}
                className={classes.chip}
              />
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
