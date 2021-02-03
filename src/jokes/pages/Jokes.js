import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

import JokeCard from '../components/JokeCard'
import ImgContainer from '../../shared/components/UIElements/ImgContainer'
import chuckImg from '../../shared/assets/chuck.png'

const useStyles = makeStyles(theme => ({
  pos: {
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      alignItems: 'center',
      padding: '20px'
    },
  }
}));

const Jokes = () => {
  const classes = useStyles();

  return (
    <Box className={classes.pos}>
      <ImgContainer image={chuckImg}/>
      <JokeCard/>
    </Box>
  );
};

export default Jokes;