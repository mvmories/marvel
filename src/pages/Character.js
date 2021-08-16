import React, { useEffect, useState } from 'react';
// import styled from 'styled-components';
import CharacterHeader from '../components/CharacterHeader';
import ComicsList from '../components/ComicsList';
import Header from '../components/Header';
import Modal from '../components/Modal';
import Theme from '../utils/ThemeProvider';

const Character = (props) => {
  const [char, setChar] = useState({});
  const [comics, setComics] = useState([]);

  useEffect(() => {
    setChar(props.history.location.state.h);
    setComics(props.history.location.state.h.comics.items);
  }, []);

  console.log('char 1 ', char);
  console.log('comics charPage', comics);

  return (
    <>
      <Theme>
        <Header />
        <CharacterHeader char={char} />
        <ComicsList char={char.id} />
        {/* <Modal /> */}
      </Theme>
    </>
  );
};

export default Character;
