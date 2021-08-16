import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Modal from './Modal';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

const Image = styled.img`
  width: 100%;
  height: 300px;
  object-fit: inherit;
`;

const Name = styled.p`
  color: black;
  margin: 0;
  padding: 10px;
  font-size: 12px;
  font-weight: bold;
`;

const Creators = styled.p`
  color: grey;
  margin: 0;
  padding: 10px;
  font-size: 10px;
  line-height: 1rem;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  align-items: center;
  margin: 10px;
  overflow: hidden;
  background-color: none;
  padding: 20px;
`;

const ComicCard = ({ comic }) => {
  const [showModal, setShowModal] = useState(false);
  const [creatorList, setCreatorList] = useState([]);

  useEffect(() => {
    setCreatorList(comic.creators.items);
  }, []);
  console.log('comic ComicCardCOmponent', comic);

  const handleModal = () => {
    setShowModal(!showModal);
  };

  showModal ? disableBodyScroll(document) : enableBodyScroll(document);

  let creators = creatorList.map((a) =>
    a.name.split(/\s+/).slice(1, 2).join(' ').concat(', ')
  );

  return (
    <>
      <CardWrapper onClick={handleModal}>
        {comic.images[0] ? (
          <Image
            alt={`${comic.title}`}
            src={`${comic.images[0].path}.${comic.images[0].extension}`}
          />
        ) : (
          <Image alt={`${comic.title}`} src={` null`} />
        )}
        <Name>{comic.title}</Name>
        <Creators>{creators}</Creators>
        {showModal ? <Modal comic={comic} /> : <></>}
      </CardWrapper>
    </>
  );
};

export default ComicCard;
