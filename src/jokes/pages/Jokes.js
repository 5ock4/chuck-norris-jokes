import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import {useDispatch, useSelector} from 'react-redux'

import {fetchJokes, jokesSelector} from '../../shared/slices/joke'
import JokeCard from '../components/JokeCard'
import JokeCategories from '../components/JokeCategories'
import JokeForm from '../components/JokeForm'
import ImgContainer from '../../shared/components/UIElements/ImgContainer'
import chuckImg from '../../shared/assets/chuck.png'

const useStyles = makeStyles(theme => ({
  pos: {
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px'
    },
  }
}));

const Jokes = () => {
  // const dispatch = useDispatch()
  // const {joke, loading, hasErrors} = useSelector(jokesSelector)

  // useEffect(() => {
  //   dispatch(fetchJokes())
  // }, [dispatch])

  const classes = useStyles();

  return (
    <React.Fragment>
      <Box className={classes.pos}>
        <ImgContainer image={chuckImg}/>
        <JokeCard/>
      </Box>
      <JokeForm/>
      <JokeCategories/>
    </React.Fragment>
  );
};

export default Jokes;