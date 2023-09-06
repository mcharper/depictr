import React, { Component } from 'react';
import { ControlPanel } from './components/ControlPanel/ControlPanel.js';
import MosaicFrame from './containers/MosaicFrame/MosaicFrame.js';
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
          <LyricsFormFrame></LyricsFormFrame>
          <ControlPanel></ControlPanel>
        </div>
        <div>
          <MosaicFrame></MosaicFrame>
        </div>
      </div>
    );
  }
}

export default App;
