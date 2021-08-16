import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ComicCard from './ComicCard';
import Loader from '../components/Loader';

// const apiKey = '3a2ebc013795f313daf5621dc8bf3be2';

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

const ComicsList = ({ comicList }) => {
  console.log('comicList ComicCard ', comicList);

  // const [comics, setComics] = useState([]);
  // const [loading, setLoading] = useState(true);

  // console.log('charId1 ComicsLIst: ', char);

  // call comics api

  // useEffect(() => {
  //   const fetchEvents = async () => {
  //     setLoading(true);

  //     if (char) {
  //       const res = await fetch(
  //         `https://gateway.marvel.com:443/v1/public/characters/${char}/comics?apikey=3a2ebc013795f313daf5621dc8bf3be2`
  //       );
  //       const { data } = await res.json();
  //       console.log('api2 data: ', data);
  //       setComics(data.results);
  //     }
  //     setLoading(false);
  //   };
  //   fetchEvents();
  //   // console.log('charId2: ', char);

  //   return () => {
  //     setLoading(false);
  //   };
  // }, []);

  return (
    <>
      <Wrapper>
        <>
          {comicList.map((c) => (
            <ComicCard key={c.title} comic={c} />
          ))}
        </>
      </Wrapper>

      {/*     
      {loading ? (
        <LoadWrapper>
          <Loader />
        </LoadWrapper>
      ) : (
        <Wrapper>
          <>
            {comicList.map((c) => (
              <ComicCard key={c.title} comic={c} />
            ))}
          </>
        </Wrapper>
      )} */}
    </>
  );
};

export default ComicsList;
