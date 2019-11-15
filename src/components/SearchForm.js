import React, { useState } from "react";

export default function SearchForm(props) {
 
  return (
    <section className="search-form">
     <form>
        <label htmlFor='search'>Search: </label>
        <input 
          type='text'
          name='search'
          id='search'
          placeholder='type a character name'
          onChange={props.onChange}
          value={props.value}
          />
      </form>
    </section>
  );
}
