import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  colors = ['white','yellow','black','purple','orange','green'];





  render() {

    var p = this.colors.map((c)=>{
      return <p>{c}</p>;
    });

    var p2 = this.colors.map((c)=>{
      return <p>{c}</p>;
    });

    var p3 = this.colors.map((c)=>{
      return <p>{c}</p>;
    });


    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Continuous Integration app, Working with CI
          {p}{p2}{p3}         
        </p>
      </div>
    );
  }
}

export default App;
