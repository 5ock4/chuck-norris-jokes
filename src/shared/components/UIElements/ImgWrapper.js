import React from 'react';
import Paper from '@material-ui/core/Paper';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  pos: {
    float: "left"
  }
});

const ImgContainer = (props) => {
  console.log(props.image)

  const classes = useStyles();

  return (
    
    <Paper elevation={0} className={classes.pos}>
      <img src={props.image} alt='No image exists.' />
    </Paper>
  );
};

export default ImgContainer;
