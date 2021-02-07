import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Box } from "@material-ui/core"

import JokeCard from "../components/JokeCard"
import JokeCategories from "../components/JokeCategories"
import JokeForm from "../components/JokeForm"
import ImgContainer from "../../shared/components/UIElements/ImgContainer"
import chuckImg from "../../shared/assets/chuck.png"

const useStyles = makeStyles((theme) => ({
  boxPos: {
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "20px",
    },
  },
}))

const Jokes = () => {
  const classes = useStyles()

  return (
    <React.Fragment>
      <Box className={classes.boxPos}>
        <ImgContainer image={chuckImg} />
        <JokeCard />
      </Box>
      <JokeForm />
      <JokeCategories />
    </React.Fragment>
  )
}

export default Jokes
