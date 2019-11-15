import React, { useEffect, useState } from "react";

import axios from 'axios';
import CharacterCard from './CharacterCard';

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get('https://rickandmortyapi.com/api/character/')
      .then( response => {
        console.log(response.data.results);
        setCharacters(response.data.results);
      })
      .catch( err => console.log('Uh oh! Something went wrong. ', err));
  }, []);

  return (
    <section className="character-list">
      {characters.map( (character, index) => (
          <CharacterCard key={index} character={character}/>
      ))}
    </section>
  );
}
