import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import { Switch, Route } from 'react-router-dom';
import './App.css';

const HatsPage = () => (
  <div>
    <h1>hello</h1>
  </div>
);

const App = () => {
  return (
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/hats' component={HatsPage} />
    </Switch>
  );
};

export default App;
