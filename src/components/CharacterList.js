import React, { useEffect, useState } from "react";

import axios from 'axios';
import CharacterCard from './CharacterCard';
import SearchForm from './SearchForm'
import { format } from "path";
import styled from 'styled-components';

const ListContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export default function CharacterList() {
  // const [characters, setCharacters] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character/')
      .then( response => {
        setSearchResults(response.data.results);
      })
      .catch( err => console.log('Uh oh! Something went wrong. ', err));
  }, []);

  useEffect( () => {
    const results = searchResults.filter( character => {
      character.name.toLowerCase().includes(searchTerm.toLowerCase())
    })
    console.log(results); //Currently returning an empty array.
    setSearchResults(results);
  }, [searchTerm])

  function handleChange(e) {
    setSearchTerm(e.target.value);
    console.log(searchTerm); //Search term is being set correctly.
  }

  return (
    <div>
      <SearchForm onChange={handleChange} value={searchTerm}/>
      {/* <form>
        <label htmlFor='search'>Search: </label>
        <input 
          type='text'
          name='search'
          id='search'
          placeholder='type a character name'
          onChange={handleChange}
          value={searchTerm}
          />
      </form> */}
      <ListContainer>
        {searchResults.map( (character, index) => (
            <CharacterCard key={index} character={character}/>
        ))}
      </ListContainer>
    </div>
  );
}
