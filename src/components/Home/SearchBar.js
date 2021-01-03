import React, { useState } from 'react';
import { withStyles } from "@material-ui/core/styles";

import { TextField } from '@material-ui/core';


const styles = {
  root: {
    background: "white",
  },
  // input: {
  //   color: "black"
  // }
};
const SearchBar = ({ onFormSubmit, classes }) => {
  const [term, setTerm] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();

    onFormSubmit(term);
  };

  const onInputChange = (e) => {
    let value = e.target.value;

    value = value.replace(/[^A-Za-z]/ig, '')
    if (value !== e.target.value) {
      alert("only english letters plz");
    }
    setTerm(value)

  }



  return (
    <div className="search-bar ui segment">
      <form onSubmit={onSubmit} className="ui form" style={{}}>
        <div className="field" style={{ maxWidth: '500px', margin: 'auto' }}>

          <TextField label="Location"
            value={term}
            fullWidth
            id="filled-basic"
            variant="filled"
            className={classes.root}

            InputProps={{
              className: classes.input
            }}
            onChange={onInputChange}
          />

        </div>
      </form>
    </div>
  );
};



export default withStyles(styles)(SearchBar);
