import React, { Fragment } from 'react';
import './App.css';
import Header from './Header/Header';
import Login from './Login/Login';
import Footer from './Footer/Footer';

function App() {
  return (
    <Fragment>
      <div className="App">
        <Header />
        <Login />
        <Footer />
      </div>
    </Fragment>
  );
}

export default App;
