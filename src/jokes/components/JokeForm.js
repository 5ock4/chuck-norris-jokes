import React, { useEffect } from "react"
import { makeStyles } from "@material-ui/core/styles"
import TextField from "@material-ui/core/TextField"
import { useDispatch, useSelector } from "react-redux"

import { getRandomJoke } from "../slices/joke"
import { setSearchText, searchTextSelector } from "../slices/searchText"
import { setCategory } from "../slices/category"
import { fetchJoke } from "../services/chuckNorrisAPI"

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(3),
      width: theme.spacing(25),
      height: theme.spacing(8),
    },
  },
}))

const JokeForm = (props) => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const { searchText, textTooShort } = useSelector(searchTextSelector)

  const handleOnChange = (e) => {
    dispatch(setSearchText(e.target.value))
    if (e.target.value.length > 0) {
      dispatch(setCategory(null))
    }
  }

  useEffect(() => {
    if (!textTooShort && searchText.length !== 0) {
      dispatch(getRandomJoke(fetchJoke, null, searchText))
    }
  })

  return (
    <div className={classes.root}>
      <TextField
        value={searchText}
        error={textTooShort}
        helperText={textTooShort ? "Phrase is too short." : ""}
        id="standard-basic"
        label="Find joke with phrase"
        onChange={handleOnChange}
      />
    </div>
  )
}

export default JokeForm
