import React, { useState } from 'react';

import { TextField } from '@material-ui/core';
const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();

    onFormSubmit(term);
  };

  const onInputChange = (e) => {
    let value = e.target.value;
    
    value = value.replace(/[^A-Za-z]/ig, '')
    if(value !== e.target.value) {
      alert("only english letters plz");
    }
    setTerm(value)
  
  }

  return (
    <div className="search-bar ui segment">
      <form onSubmit={onSubmit} className="ui form">
        <div className="field">
        
          <TextField id="outlined-basic" label="Location" variant="outlined"
            value={term}
            onChange={onInputChange}
          />

        </div>
      </form>
    </div>
  );
};

export default SearchBar;
