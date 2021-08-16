import React, { useEffect, useState } from 'react';
// import styled from 'styled-components';
import CharacterHeader from '../components/CharacterHeader';
import ComicsList from '../components/ComicsList';
import Header from '../components/Header';
import Theme from '../utils/ThemeProvider';
import styled from 'styled-components';

import Loader from '../components/Loader';

const LoadWrapper = styled.div`
  position: absolute;
  top: 25%;
  left: 45%;
`;

const Character = (props) => {
  const [char, setChar] = useState({});
  const [comics, setComics] = useState([]);
  const [charImg, setCharImg] = useState({});
  const [comicList, setComicList] = useState([]);
  const [loading, setLoading] = useState(false);

  console.log('comicList ', comicList);

  useEffect(() => {
    setChar(props.history.location.state.h);
    setCharImg(
      `${props.history.location.state.h.thumbnail.path}.${props.history.location.state.h.thumbnail.extension}`
    );
    setComics(props.history.location.state.h.comics.items);

    const fetchEvents = async () => {
      setLoading(true);

      if (char.id) {
        const res = await fetch(
          `https://gateway.marvel.com:443/v1/public/characters/${char.id}/comics?apikey=3a2ebc013795f313daf5621dc8bf3be2`
        );
        const { data } = await res.json();

        setComicList(data.results);
        console.log('2');
      }
      setLoading(false);
      console.log('1');
    };
    fetchEvents();

    return () => {
      setLoading(false);
    };
  }, [char.id]);

  // useEffect(() => {

  // }, []);

  // console.log('char 1 ', char);
  // console.log('comics charPage', comics);

  return (
    <>
      <Theme>
        <Header />
        <CharacterHeader char={char} charImg={charImg} />
        {loading ? (
          <LoadWrapper>
            <Loader />
          </LoadWrapper>
        ) : (
          <ComicsList comicList={comicList} />
        )}
      </Theme>
    </>
  );
};

export default Character;
