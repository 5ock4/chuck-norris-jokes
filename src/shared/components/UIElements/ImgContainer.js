import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  [theme.breakpoints.up("sm")]: {
    container: {
      marginRight: theme.spacing(4),
    },
  },
}))

const ImgContainer = (props) => {
  const classes = useStyles()

  return (
    <img
      className={classes.container}
      src={props.image}
      alt="Chuck does not exist."
    />
  )
}

export default ImgContainer
