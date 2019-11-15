import React from "react";
import {Route} from 'react-router-dom';
import Nav from './components/Nav'
import Header from "./components/Header.js";
import CharacterList from './components/CharacterList';

export default function App() {
  return (
    <main>
      <Nav />
      <Route exact path='/' component={Header} />
      <Route path='/characters' component={CharacterList} />
    </main>
  );
}
