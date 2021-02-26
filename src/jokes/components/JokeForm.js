import React, { useEffect, useState, useRef } from "react"
import { makeStyles } from "@material-ui/core/styles"
import TextField from "@material-ui/core/TextField"
import { useDispatch, useSelector } from "react-redux"

import { getRandomJoke } from "../slices/joke"
import { setSearchText, searchTextSelector } from "../slices/searchText"
import { setCategory, categorySelector } from "../slices/category"
import { fetchQuerriedRandomJoke } from "../services/chuckNorrisAPI"

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(3),
      width: theme.spacing(25),
      height: theme.spacing(8),
    },
  },
}))

const JokeForm = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const { searchText, textTooShort } = useSelector(searchTextSelector)
  const { category } = useSelector(categorySelector)

  const handleOnChange = (e) => {
    dispatch(setSearchText(e.target.value))
    if (e.target.value.length > 0) {
      dispatch(setCategory(null))
    }
  }

  const prevSearchTextRef = useRef()
  useEffect(() => {
    prevSearchTextRef.current = searchText
  })
  const prevSearchText = prevSearchTextRef.current

  useEffect(() => {
    console.log("Use effect: call in the beginning")
    setLoading(true)
    const timer = setTimeout(() => {
    // TODO: Call only the last timer
      if (
        searchText.length !== 0 &&
        prevSearchText.length !== 0 &&
        category !== null
      ) {
        dispatch(setSearchText(""))
      } else if (!textTooShort && searchText.length !== 0) {
        dispatch(
          getRandomJoke(fetchQuerriedRandomJoke, { searchText: searchText })
        )
      }

      setLoading(false)
    }, 5000)
    return () => {
      console.log("Use effect: call in return")
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
