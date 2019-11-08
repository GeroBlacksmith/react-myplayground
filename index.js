import React, { Component, useState } from 'react';
import { render } from 'react-dom';
import { MyButton } from './App1/MyButton';
import { Display } from './App1/Display';
import './style.css';

function App() {

  const [counter, setCounter]=useState(0);
  const incrementCounter=  ()=>setCounter(counter+1);

  return (
    <div className="container">
      <MyButton onClickFunction={incrementCounter}></MyButton>
      <Display message={counter} ></Display>
    </div>
  );

}

render(<App />, document.getElementById('root'));
