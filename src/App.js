import React, { Component } from 'react';
import Navigation from './components/Navigation'
import Masthead from './components/Masthead'
import Portfolio from './components/Portfolio'
import PortfolioModal from './components/PortfolioModal';
import SimpleSlider from './components/SimpleSlider';
import Login from './components/Login';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation/>
        <Masthead/>
        <Portfolio/>
        <PortfolioModal/>
        <Login/>

      </div>
    );
  }
}
export default App;