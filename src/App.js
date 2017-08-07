import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Main from './components/MainLayout';
import './App.css';

const App = () => {
    return (
        <div className="App">
            <Navbar />
            <Main />
        </div>
    );
}

export default App;
