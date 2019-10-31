import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import MyButton from './MyButton';
import {HelloMe} from './HelloMe';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React Playground'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <MyButton></MyButton>
        <HelloMe></HelloMe>
        <p>
          Start editing to see some magic happen :)
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
