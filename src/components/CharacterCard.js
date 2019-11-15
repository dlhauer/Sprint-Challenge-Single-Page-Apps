import React from "react";
import styled from 'styled-components';

const CharacterContainer = styled.div`

`;

export default function CharacterCard( {character} ) {
  return (
    <CharacterContainer>
      <h2>{character.name}</h2>
      <img src={character.image}/>
      <p>{character.species}</p>
      <p>{character.status}</p>
    </CharacterContainer>
  );
}
