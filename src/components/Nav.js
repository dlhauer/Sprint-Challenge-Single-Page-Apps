import React from 'react';
import {Route, Link} from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-between;
`;

function Nav(props) {
  return (
    <NavContainer>
      <Link to='/'>Home</Link>
      <Link to='/characters'>Characters</Link>
    </NavContainer>
  );
}

export default Nav;
