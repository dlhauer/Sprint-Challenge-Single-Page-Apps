import React from "react";
import styled from 'styled-components';

const CharacterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 5px solid dodgerblue;
  border-radius: 30px;
  background-color: whitesmoke;
  margin: 20px 0;
  padding: 10px 0;
  width: 450px;

  h2 {
  }

  img {
    // border: 5px solid dodgerblue;
    border-radius: 20px;
    margin-bottom: 10px;
  }
  
  p {
    margin: 2px;
  }
`;

export default function CharacterCard( {character} ) {
  return (
    <CharacterContainer>
      <h2>{character.name}</h2>
      <img src={character.image}/>
      <p>Species: {character.species}</p>
      <p>Status: {character.status}</p>
    </CharacterContainer>
  );
}
