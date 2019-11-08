import React, { Component, useState } from 'react';
import { render } from 'react-dom';
import { MyButton } from './App1/MyButton';
import { Display } from './App1/Display';
import './style.css';

function App() {

  const [counter, setCounter]=useState(0);
  const incrementCounter=  (incrementValue)=>setCounter(counter + incrementValue);

  return (
    <div className="container">
      <MyButton onClickFunction={incrementCounter} increment={5}> </MyButton>
      <MyButton onClickFunction={incrementCounter} increment={3}> </MyButton>
      <Display message={counter} ></Display>
    </div>
  );

}

render(<App />, document.getElementById('root'));
