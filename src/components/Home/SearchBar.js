import React, { useState } from 'react';

import { TextField } from '@material-ui/core';
const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();

    onFormSubmit(term);
  };

  return (
    <div className="search-bar ui segment">
      <form onSubmit={onSubmit} className="ui form">
        <div className="field">
        
          <TextField id="outlined-basic" label="Location" variant="outlined"
            value={term}
            onChange={(event) => setTerm(event.target.value)}
          />

        </div>
      </form>
    </div>
  );
};

export default SearchBar;
