import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ComicCard from './ComicCard';
import Loader from '../components/Loader';

// const apiKey = '3a2ebc013795f313daf5621dc8bf3be2';

const HeaderText = styled.h1`
  padding-left: 90px;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-content: center;
  margin: 0 auto;
  width: 90vw;
  margin-bottom: 100px;
`;

const ComicsList = ({ comicList }) => {
  console.log('comicList ComicCard ', comicList);

  return (
    <>
      <HeaderText>Comics</HeaderText>
      <Wrapper>
        <>
          {comicList.map((c) => (
            <ComicCard key={c.id} comic={c} />
          ))}
        </>
      </Wrapper>
    </>
  );
};

export default ComicsList;
