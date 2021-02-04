import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Chip } from '@material-ui/core';

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
  const [chipData, setChipData] = React.useState([
    { key: 0, label: 'Cat1' },
    { key: 1, label: 'Cat2' },
    { key: 2, label: 'Cat3' },
    { key: 3, label: 'Cat4' },
    { key: 4, label: 'Cat5' },
  ]);

  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  return(
    <div className={classes.root}>
      {chipData.map((data) => {
        return (
          <li key={data.key}>
            <Chip
              label={data.label}
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