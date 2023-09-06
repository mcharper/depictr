import React, { Component } from 'react';
import { ControlPanel } from './components/ControlPanel/ControlPanel.js';
import { Mosaic } from './components/Mosaic/Mosaic.js';
import LyricsFormFrame from './containers/LyricsFormFrame/LyricsFormFrame.js';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          epictr
        </div>
        <div className="control-panel">
          <LyricsFormFrame />
          <ControlPanel />
        </div>
        <div>
          <Mosaic />
        </div>
      </div>
    );
  }
}

export default App;
