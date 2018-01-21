import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import PageFooter from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Main />
        <PageFooter />
      </div>
    );
  }
}

export default App;
