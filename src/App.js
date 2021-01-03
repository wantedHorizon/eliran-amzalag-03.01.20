import './App.css';
import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './containers/Home/Home';
import Favorites from './containers/Favorites/Favorites';
import Header from './components/Header';

function App() {
  const [darkmode, setDarkState] = React.useState(false);
  


  return (
    <div className={`App ${darkmode&&'dark-mode'}`} >

      <Router >
        <Header darkmode={darkmode} setDarkState={setDarkState}></Header>
       
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/favorites">
            <Favorites />
          </Route>


        </Switch>
      </Router>

      {/* <header className="App-header">
      My name is eliran
      </header> */}
    </div>
  );
}

export default App;
