import React, { useState, useEffect } from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Paper, CircularProgress, Card, CardContent } from "@material-ui/core"
import Typography from "@material-ui/core/Typography"
import { useDispatch, useSelector } from "react-redux"

import { getRandomJoke, jokesSelector } from "../slices/joke"
import { categorySelector } from "../slices/category"
import { searchTextSelector } from "../slices/searchText"
import { fetchJoke } from "../services/chuckNorrisAPI"

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    "&:hover": {
      cursor: "pointer",
    },
  },
  noselect: {
    userSelect: "none",
  },
})

const JokeCard = () => {
  const classes = useStyles()
  const [elevation, setElevation] = useState(0)
  const dispatch = useDispatch()
  const { joke, loading, hasErrors } = useSelector(jokesSelector)
  const { category } = useSelector(categorySelector)
  const { searchText } = useSelector(searchTextSelector)

  useEffect(() => {
    dispatch(getRandomJoke(fetchJoke))
  }, [dispatch])

  const handleOnMouseMove = () => {
    setElevation(5)
  }

  const handleOnMouseOut = () => {
    setElevation(0)
  }

  const handleOnClick = () => {
    if (searchText.length !== 0) {
      dispatch(getRandomJoke(fetchJoke, category, searchText))
    } else {
      dispatch(getRandomJoke(fetchJoke, category))
    }
  }

  return (
    <Paper
      elevation={elevation}
      onMouseMove={handleOnMouseMove}
      onMouseOut={handleOnMouseOut}
      className={classes.root}
      onClick={handleOnClick}
    >
      <Card>
        <CardContent>
          {loading && <CircularProgress />}
          {!loading && !hasErrors && (
            <Typography
              className={classes.noselect}
              variant="body1"
              align="left"
            >
              {joke}
            </Typography>
          )}
          {hasErrors && (
            <Typography variant="body1" align="left">
              No joke with phrase "<i>{searchText}</i>" found.
            </Typography>
          )}
        </CardContent>
      </Card>
    </Paper>
  )
}

export default JokeCard
