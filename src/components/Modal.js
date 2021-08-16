import React from 'react';
import styled from 'styled-components';

const ModalBg = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: calc(100vh * 10);
  justify-content: center;
  margin: 0 auto;
  overflow-y: hidden;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1;
`;

const ModalContent = styled.div`
  /* display: flex; */
  position: absolute;

  left: 25vw;
  width: 50vw;
  height: calc(50vh);
  /* justify-content: center;
  align-items: center; */
  margin: 0 auto;
  background-color: white;
  z-index: 200;
`;

const Close = styled.h2`
  position: absolute;
  top: 5px;
  right: 30px;
`;

const Title = styled.h3`
  display: block;
  padding: 20px;
  width: 100%;
`;

const Description = styled.p`
  width: 100%;
  padding-left: 30px;
  padding-right: 60px;
`;

const Image = styled.img`
  height: 60%;
`;

const Details = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
  padding: 0 40px;
`;

const Modal = ({ comic }) => {
  console.log(comic);

  return (
    <>
      <ModalBg />
      <ModalContent>
        <Title>{comic.title}</Title>
        <Close>x</Close>

        <Details>
          <Image
            alt={`${comic.title}`}
            src={`${comic.images[0].path}.${comic.images[0].extension}`}
          />
          <Description>
            {comic.description ? comic.description : 'No description'}
          </Description>
        </Details>
      </ModalContent>
    </>
  );
};

export default Modal;
