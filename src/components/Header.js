import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  width: 100%;
  background-color: ${({ theme: { colors } }) => colors.carbon};
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img`
  height: 60px;
`;

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <Logo
          alt={'Marvel Logo'}
          src={`https://seeklogo.com/images/M/Marvel_Comics-logo-D489AEB9C1-seeklogo.com.png`}
        />
      </HeaderContainer>
    </>
  );
};

export default Header;
