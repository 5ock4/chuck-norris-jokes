import React from 'react';
import { Paper, Box } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    marginRight: '2em',
    marginBottom: '1em'
  }
}));

const ImgContainer = (props) => {
  const classes = useStyles();

  return (
    <React.Fragment >
      <img className={classes.container} src={props.image} alt='No image exists.' />
    </React.Fragment>
  );
};

export default ImgContainer;
