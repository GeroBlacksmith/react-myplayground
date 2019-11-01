import React, { Component, useState } from 'react';
import { render } from 'react-dom';
import MyButton from './App1/MyButton';
import Display from './App1/Display';
import './style.css';

function App() {
  const [counter, setCounter]=useState(0);
  return (
    <div>
      <MyButton counter={()=>setCounter(counter+1)}></MyButton>
      <Display message={counter} ></Display>
    </div>
  );
}

render(<App />, document.getElementById('root'));
