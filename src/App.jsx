import React from 'react';
import {Header} from "./Header";
import { Routes } from './Routes';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div>
        <Router>
            Movie Theaters
            <Header />
            <Routes />
        </Router>
    </div>
  );
}

export default App;