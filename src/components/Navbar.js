import React from 'react';
import memelogo from '../images/meme2.jpg';
import '../App.css';

function Navbar() {
  return (
    <nav className="navbar">    
        <div className="title">
            <img src={memelogo} alt="logo"/>
            <h1>Meme Generator</h1>
        </div>

        <p>React Course - Project 3</p>
    </nav>
  )
}

export default Navbar