import { React, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Chip } from '@material-ui/core';
import {useDispatch, useSelector} from 'react-redux'

import {fetchCategories, categoriesSelector} from '../../shared/slices/categories'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
    listStyle: 'none',
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}));

const JokeCategories = (props) => {
  const classes = useStyles();

  const dispatch = useDispatch()
  const {categories, loading, hasErrors} = useSelector(categoriesSelector)

  useEffect(() => {
    dispatch(fetchCategories())
  }, [])

  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  return(
    <div className={classes.root}>
      {categories.map((data, index) => {
        return (
          <li key={index}>
            <Chip
              label={data}
              onClick={handleClick}
              color='primary'
              className={classes.chip}
            />
          </li>
        )
      })}
    </div>
  );
}

export default JokeCategories;