import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello from V3</h1>
      </header>
    </div>
  );
}

export default App;

/*
	AccessDeniedException: User: arn:aws:iam::914796728742:user/Kyrylo.P is not authorized to perform: amplify:ListJobs on resource: arn:aws:amplify:eu-central-1:914796728742:apps/dc3jm554il4st/branches/master/jobs/*
*/

/* import logo from './logo.svg';
import './App.css';

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
    </div>
  );
}

export default App;
 */