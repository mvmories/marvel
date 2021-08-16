import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: fill;
`;

const Name = styled.p`
  color: white;
  margin: 0;
  padding: 10px;
  text-transform: uppercase;
  font-weight: bold;
`;

const Comics = styled.p`
  color: ${({ theme: { colors } }) => colors.pebble};
  margin: 0px;
  padding: 10px;
`;

const CardInfo = styled.div`
  position: relative;
  background-color: ${({ theme: { colors } }) => colors.carbon};
  border-top: solid 5px red;
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 12px;
  /* -webkit-clip-path: polygon(0 0, 0 100%, 100% 100%, 100% 25%, 75% 0); */
  clip-path: polygon(
    0 0,
    100% 0,
    100% 30%,
    100% 80%,
    91% 100%,
    30% 100%,
    0 100%,
    0% 30%
  );

  &:before {
    content: '';
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    position: absolute;
    z-index: -1;
    background-color: ${({ theme: { colors } }) => colors.red};
    clip-path: polygon(
      0 0,
      100% 0,
      100% 30%,
      100% 80%,
      91% 100%,
      30% 100%,
      0 100%,
      0% 30%
    );

    transition: transform 300ms ease-in-out;
    transform: scaleY(0);
    transform-origin: top;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  align-items: center;
  margin: 10px;
  overflow: hidden;
  &:hover {
    ${CardInfo} {
      &:before {
        transform: scaleY(1);
      }
    }

    ${Image} {
      transform: scale(1.1);
      transition: transform 0.5s ease;
    }
  }
`;

const Card = ({ hero }) => {
  return (
    <Wrapper>
      <Image
        alt={`${hero.thumbnail.name}`}
        src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
      />

      <CardInfo>
        <Name>{hero.name}</Name>
        <Comics>{`${hero.comics.available} comics`}</Comics>
      </CardInfo>
    </Wrapper>
  );
};

export default Card;
