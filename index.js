import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import Title from './Title';
import Albums from './_Albums';
import './style.css';

const App = ()  => {

  //render() {
    return (
      <div>
        // <Title title={this.state.title} />
        // <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
        <Albums />
      </div>
    );
  //}
}

render(<App />, document.getElementById('root'));
