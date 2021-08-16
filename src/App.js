import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import CardList from './components/CardList';
import Theme from './utils/ThemeProvider';
import Loader from './components/Loader';

import styled from 'styled-components';

const LoadMore = styled.div`
  display: flex;
  justify-content: center;
  margin: 40px 0;
`;

const Input = styled.input`
  display: flex;
  justify-content: center;
  width: 91vw;
  margin: 20px auto;
  border-left: none;
  border-right: none;
  border-top: none;
  border-bottom: 1px solid grey;
  padding: 10px;
`;

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: red;
  color: white;
  cursor: pointer;

  height: 50px;
  width: 200px;
  font-size: 12px;
  text-transform: uppercase;

  padding: 0.25em 1em;
  border: none;

  clip-path: polygon(
    10% 0,
    100% 0,
    100% 30%,
    100% 70%,
    91% 100%,
    30% 100%,
    0 100%,
    0 26%
  );
`;

const apiKey = '3a2ebc013795f313daf5621dc8bf3be2';

function App() {
  // save superheroes in state
  const [heroes, setHeroes] = useState([]);
  const [numberOfHeroes, setNumberOfHeroes] = useState(20);
  const [loading, setLoading] = useState(false);
  const [filteredHeroes, setFilteredHeroes] = useState([]);

  const handleSearch = (e) => {
    setFilteredHeroes(e.target.value.toLowerCase());
    console.log(filteredHeroes);
  };

  const handleClick = () => {
    setNumberOfHeroes(numberOfHeroes + 20);
  };

  // call superheroes api
  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      const res = await fetch(
        `https://gateway.marvel.com:443/v1/public/characters?limit=${numberOfHeroes}&apikey=${apiKey}`
      );
      const { data } = await res.json();
      console.log(data);
      setHeroes(data.results);
      setLoading(false);
    };
    fetchEvents();
  }, [numberOfHeroes]);

  return (
    <>
      <Theme>
        <Header />
        {/* Filter Heroes */}
        <Input
          type="text"
          onChange={handleSearch}
          placeholder="Search Marvel Character..."
        ></Input>

        {/* Show list of superheroes */}

        {loading ? (
          <Loader />
        ) : (
          <>
            <CardList heroes={heroes} filteredHeroes={filteredHeroes} />
            <LoadMore>
              <Button onClick={handleClick}>Load More</Button>
            </LoadMore>
          </>
        )}
      </Theme>
    </>
  );
}

export default App;
