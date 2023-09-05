import React, { Component } from 'react';
import './ControlPanel.css';

class ControlPanel extends Component {
  constructor(props) {
    super(props);

    this.changeMosaicSize = (e) => {
      props.onChange(e.target.value);
    }
  }

  render() {
    return (
      <div>
        <button onClick={() => this.props.onClick(this.props.keywords)}>Shuffle</button>
        <input value={this.props.mosaicSideSize} onChange={this.changeMosaicSize}></input>
        <p>{this.props.mosaicSideSize}</p>
        <p>
          Shuffle to get some fresh photos.<br />
          To lock a photo in place, click it.<br />
          Click again to unlock it.</p>
      </div>
    );
  }
}

export default ControlPanel;

