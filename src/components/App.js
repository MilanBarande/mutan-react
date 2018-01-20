import React, { Component } from 'react';
import DemoForm from './DemoForm';
import Header from './Header';
import Footer from './Footer';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <DemoForm />
        <Footer />
      </div>
    );
  }
}
