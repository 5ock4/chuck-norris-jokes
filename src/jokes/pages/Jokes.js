import React, { useEffect, useState } from 'react';

import JokeCard from '../components/JokeCard'
import ImgWrapper from '../../shared/components/UIElements/ImgWrapper'
import chuckImg from '../../shared/assets/chuck.png'


const Jokes = () => {
  return (
    <React.Fragment>
      <ImgWrapper image={chuckImg}/>
      <JokeCard/>
    </React.Fragment>
  );
};

export default Jokes;