import React, { Component } from 'react';
import { ControlPanel } from './components/ControlPanel/ControlPanel.js';
import { Mosaic } from './components/Mosaic/Mosaic.js';
import { LyricsForm } from './components/LyricsForm/LyricsForm.js';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          depictr
        </div>
        <div className="grid">
          <div className="area1">
            <LyricsForm />
            <ControlPanel />
          </div>
          <Mosaic />
        </div>
      </div>
    );
  }
}

export default App;
