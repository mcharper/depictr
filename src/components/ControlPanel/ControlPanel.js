import React, { Component } from 'react';
import './ControlPanel.css';

class ControlPanel extends Component {
  constructor(props) {
    super(props);

    this.onClick = (event) => {
      this.props.onClick(this.props.keywords);
    }
  }

  render() {
    return (
        <div>
          <button onClick={this.onClick}>Shuffle</button>
        </div>
    );
  }
}

export default ControlPanel;

