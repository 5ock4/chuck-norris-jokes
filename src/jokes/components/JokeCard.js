import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Paper, CircularProgress, Card, CardContent} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import {useDispatch, useSelector} from 'react-redux'

import {fetchJokes, jokesSelector} from '../../shared/slices/joke'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    '&:hover': {
      cursor: 'pointer',
    },
  },
});

const JokeCard = (props) => {
  const classes = useStyles();
  const [elevation, setElevation] = useState(0);

  const handleOnMouseMove = () => {
    setElevation(5)
  }

  const handleOnMouseOut = () => {
    setElevation(0)
  }

  const dispatch = useDispatch()
  const {joke, loading, hasErrors} = useSelector(jokesSelector)

  useEffect(() => {
    dispatch(fetchJokes())
  }, [])

  const handleOnClick = () => {
    console.log('clicking paper')
    dispatch(fetchJokes())
  }

  return (
    <Paper elevation={elevation} 
           onMouseMove={handleOnMouseMove}
           onMouseOut={handleOnMouseOut}
           className={classes.root}
           onClick={handleOnClick}
    >
      <Card>
        <CardContent>
          {loading && <CircularProgress/>}
          {!loading && <Typography variant="body1" align='left'>
            {joke}
          </Typography>}
        </CardContent>
      </Card>
    </Paper>
  );
}

export default JokeCard;