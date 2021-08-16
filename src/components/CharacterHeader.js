import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  width: 180px;
  height: 180px;
  object-fit: fill;
  border-radius: 50%;
  margin-left: 20px;
`;

const Name = styled.p`
  color: white;
  margin: 0;
  padding: 10px;
  text-transform: uppercase;
  font-weight: bold;
`;

const HeroWrapper = styled.div`
  display: flex;
  height: 380px;
  background-color: black;
  justify-content: center;
  align-items: center;
  clip-path: polygon(
    0 0,
    100% 0,
    100% 30%,
    100% 70%,
    0 89%,
    0 89%,
    0 100%,
    0 26%
  );
`;

const CharacterHeader = ({ char }) => {
  return (
    <>
      <HeroWrapper>
        <Name>{char.name}</Name>
        <Image
          alt={`${char.name}`}
          // src={`${char.thumbnail.path}.${char.thumbnail.extension}`}
        />
      </HeroWrapper>
    </>
  );
};

export default CharacterHeader;
