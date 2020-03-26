import React from 'react';
import logo from './logo.svg';
import './App.css';

import FacebookLogin from 'react-facebook-login';

const responseFacebook = (response) => {
  console.log(response);
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div className='content'>
      <h1>LOGIN WITH FACEBOOK</h1>

        <FacebookLogin
          appId="551060735530547" //APP ID NOT CREATED YET
          fields="name,email,picture"
          callback={responseFacebook}
        />
      </div>
    </div>
  );
}

export default App;
