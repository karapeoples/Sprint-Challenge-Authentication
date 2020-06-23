import React from 'react';
import {Route, Link } from 'react-router-dom'
import './App.css';
import Jokes from './components/Jokes'
import FavJokes from './components/FavJokes'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Play Around Jokes
         <div>
          <Link to="/jokes">Jokes</Link>
          <Link to="/favs">Fav Jokes</Link>
         </div>
      </header>
      <div>
        <Route  path='/jokes' component={Jokes}/>
        <Route path='/favs' component={FavJokes}/>
        
      </div>
    </div>
  );
}

export default App;
