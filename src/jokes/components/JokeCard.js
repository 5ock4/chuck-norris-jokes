import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Paper, CircularProgress, Card, CardContent} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import {useDispatch, useSelector} from 'react-redux';

import {fetchRandomJoke, jokesSelector} from '../../shared/slices/joke'
import {categorySelector} from '../../shared/slices/category'
import {searchTextSelector} from '../../shared/slices/searchText'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    '&:hover': {
      cursor: 'pointer',
    },
  },
});

const JokeCard = () => {
  const classes = useStyles();
  const [elevation, setElevation] = useState(0);
  const dispatch = useDispatch();
  const {joke, loading, hasErrors} = useSelector(jokesSelector)
  const {category} = useSelector(categorySelector);
  const {searchText} = useSelector(searchTextSelector);

  useEffect(() => {
    dispatch(fetchRandomJoke())
  }, [dispatch])

  const handleOnMouseMove = () => {
    setElevation(5)
  }

  const handleOnMouseOut = () => {
    setElevation(0)
  }

  const handleOnClick = () => {
    console.log('clicking paper')
    if (searchText.length !== 0) {
      dispatch(fetchRandomJoke(category, searchText))
    } else {
      dispatch(fetchRandomJoke(category))
    }
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
          {!loading && !hasErrors && <Typography variant="body1" align='left'>
            {joke}
          </Typography>}
          {hasErrors && <Typography variant="body1" align='left'>
            No joke with phrase "<i>{searchText}</i>" found.
          </Typography>}
        </CardContent>
      </Card>
    </Paper>
  );
}

export default JokeCard;