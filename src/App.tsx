import React from 'react';
import logo from './logo.svg';
import './App.css';
import './scss/main.scss'
import Sidebar from './components/Sidebar';
function App() {
  return (
    <div className="App">
        <Sidebar />
      <header className="App-header">
      
        <a
          className="App-link"
          href="/#"
        >
          Test Job
        </a>
      </header>
    </div>
  );
}

export default App;
