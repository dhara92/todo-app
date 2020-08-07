import React, { Component } from 'react';
import FirstComponent from './components/learning-example/FirstComponent';
import SecondComponent from './components/learning-example/SecondComponent';
import ThirdComponent from './components/learning-example/ThirdComponent';
import Counter from './components/counter/counter';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">

      <Counter />

    </div>
  );
}

class LearingsComponent extends Component {
  render() {
    return (
      <div className="LearningComponent" >
        <FirstComponent></FirstComponent>
        <SecondComponent></SecondComponent>
        <ThirdComponent></ThirdComponent>
      </div>
    );
  }
}
export default App;
