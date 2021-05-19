import React, { Component } from 'react';
import './ControlPanel.css';

class ControlPanel extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
          <button onClick={() => this.props.onClick(this.props.keywords)}>Shuffle</button>
          <p>
          Shuffle to get some fresh photos.<br />
          To lock a photo in place, click it.<br />
          Click again to unlock it.</p>
        </div>
    );
  }
}

export default ControlPanel;

