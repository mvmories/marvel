import React from 'react';
import Card from './Card';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  justify-content: center;
  margin: 0 50px;
`;

const CardList = ({ heroes, filteredHeroes }) => {
  return (
    <>
      <Wrapper>
        {heroes
          .filter((h) => h.name.toLowerCase().includes(filteredHeroes))
          .map((h) => (
            <Link
              key={h.id}
              to={{ pathname: `/character/${h.name}`, state: { h } }}
            >
              <Card key={h.id} hero={h} />
            </Link>
          ))}
      </Wrapper>
    </>
  );
};

export default CardList;
