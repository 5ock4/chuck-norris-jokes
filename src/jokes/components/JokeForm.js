import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

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

  return(
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-basic" label="Find joke with phrase" />
    </form>
  );
}

export default JokeForm;