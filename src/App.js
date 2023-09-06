import React, { Component } from 'react';
import MosaicFrame from './containers/MosaicFrame/MosaicFrame.js';
import LyricsFormFrame from './containers/LyricsFormFrame/LyricsFormFrame.js';
import ControlPanelFrame from './containers/ControlPanelFrame/ControlPanelFrame.js';
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
          <ControlPanelFrame></ControlPanelFrame>
        </div>
        <div>
          <MosaicFrame></MosaicFrame>
        </div>
      </div>
    );
  }
}

export default App;
