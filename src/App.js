import React, { Component } from "react";
import "./App.css";
import DemoForm from "./components/DemoForm";
import Header from "./components/Header";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <DemoForm />
        <Footer />
      </div>
    );
  }
}

export default App;
