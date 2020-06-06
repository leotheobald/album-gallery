import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import Title from './Title';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      title: 'My first React'
    };
  }

  render() {
    return (
      <div>
        <Title title={this.state.title} />
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
