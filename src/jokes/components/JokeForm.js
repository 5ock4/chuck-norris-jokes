import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {useDispatch, useSelector} from 'react-redux';

import {fetchRandomJoke} from '../../shared/slices/joke';
import {setSearchText, searchTextSelector} from '../../shared/slices/searchText';
import {setCategory} from '../../shared/slices/category'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(3),
      width: '25ch',
    },
  },
}));

const JokeForm = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch()
  const {searchText, textTooShort} = useSelector(searchTextSelector);

  //TOOD: find a way how to get fresh data from redux in handler 
  const handleOnChange = (e) => {
    dispatch(setSearchText(e.target.value))
    if (e.target.value.length > 0) {
      dispatch(setCategory(null))
    }
  }

  useEffect(() => {
    if (!textTooShort && searchText.length !== 0) {
      dispatch(fetchRandomJoke(null, searchText));
    }
  });

  return(
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        error={textTooShort}
        id="standard-basic" 
        label="Find joke with phrase" 
        onChange={handleOnChange} />
    </form>
  );
}

export default JokeForm;