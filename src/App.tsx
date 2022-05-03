import React from 'react';

import {GlobalStyle} from './styles/GlobalStyles'

function App() {
  return (
    <>
    <GlobalStyle/>
    <div className="container">
    <div className='left-container'>
      <div className="logo">
        CryptoFest
      </div>
      <div className="list">
        <ul>
          <li>Dashboard</li>
          <li>Trade</li>
          <li>Deposits</li>
          <li>Protocols</li>
          <li>Settings</li>
          <li>Profile</li>
        </ul>
      </div>
      <div className="LogOut">Log out</div>
    </div>
    <div className="content"></div>
    </div>
    </>
    );
}

export default App;
