import React, {useEffect, useState} from "react";
import {Route} from 'react-router-dom';
import Nav from './components/Nav'
import Header from "./components/Header.js";
import CharacterList from './components/CharacterList';
import axios from 'axios';


export default function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character/')
      .then( response => {
        setCharacters(response.data.results);
    
      })
      .catch( err => console.log('Uh oh! Something went wrong. ', err));
  }, []);

  return (
    <main>
      <Nav />
      <Route exact path='/' component={Header} />
      <Route path='/characters' render={ props => <CharacterList characters={characters}/>} />
    </main>
  );
}
