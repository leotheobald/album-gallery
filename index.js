import React, { Component } from 'react';
import { render } from 'react-dom';
import Albums from './_Albums';
import './style.css';

const App = ()  => {
  return (
    <div>
      <p>
        Start editing to see some magic happen :)
      </p>
      <Albums />
    </div>
  );
}

render(<App />, document.getElementById('root'));
