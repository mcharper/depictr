import React, { Component } from 'react';
import MosaicFrame from './containers/MosaicFrame/MosaicFrame.js';
import LyricsFormFrame from './containers/LyricsFormFrame/LyricsFormFrame.js';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        {<header className="App-header">
          depictr
        </header>}
        <p className="App-intro">
        A plaything for visualising lyrics. Type some in now while I find a few pics on flickr to get my engine started.<br /> 
        It's on free hosting and sleeps when no-one visits so please be patient :-( 
        </p>
        <div className="Left-pane">
          <LyricsFormFrame></LyricsFormFrame>
        </div>
        <div className="right-pane">
          <MosaicFrame></MosaicFrame>
        </div>
      </div>
    );
  }
}

export default App;
