import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ComicCard from './ComicCard';
import Loader from '../components/Loader';

const apiKey = '3a2ebc013795f313daf5621dc8bf3be2';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-content: center;
  margin: 0 auto;
  width: 90vw;
  margin-bottom: 100px;
`;

const LoadWrapper = styled.div`
  position: absolute;
  top: 25%;
  left: 45%;
`;

const ComicsList = ({ char }) => {
  const [comics, setComics] = useState([]);
  const [loading, setLoading] = useState(false);

  console.log('charId1: ', char);

  // call comics api
  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);

      const res = await fetch(
        `https://gateway.marvel.com:443/v1/public/characters/1009148/comics?apikey=3a2ebc013795f313daf5621dc8bf3be2`
      );
      const { data } = await res.json();
      console.log('api2 data: ', data);
      setComics(data.results);
      setLoading(false);
    };
    fetchEvents();
    console.log('charId2: ', char);
  }, []);

  const url = `https://gateway.marvel.com:443/v1/public/characters/1009148/comics?apikey=3a2ebc013795f313daf5621dc8bf3be2`;

  return (
    <>
      {loading ? (
        <LoadWrapper>
          <Loader />
        </LoadWrapper>
      ) : (
        <Wrapper>
          <>
            {comics.map((c) => (
              <ComicCard comic={c} />
            ))}
          </>
        </Wrapper>
      )}
    </>
  );
};

export default ComicsList;
