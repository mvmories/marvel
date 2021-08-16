import React from 'react';
import { SpinnerRoundFilled } from 'spinners-react';
import styled from 'styled-components';

const Spinner = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
`;

function Loader() {
  return (
    <div className="loader">
      <Spinner>
        <SpinnerRoundFilled
          size={150}
          thickness={100}
          speed={100}
          color="#333"
        />
      </Spinner>
    </div>
  );
}

export default Loader;
