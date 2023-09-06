import React, { Component } from 'react';
import { ControlPanel } from '../../components/ControlPanel/ControlPanel.js';
import { changeMosaicSideSize, shuffleAction } from '../../actions/index.js';
import { connect } from 'react-redux';

class ControlPanelFrame extends Component {
  componentDidMount() {
  }

  render() {
    return (
      <ControlPanel></ControlPanel>
    );
  }
}

const mapStateToProps = state => {
  return {
  }
}

const mapDispatchToProps = dispatch => {
  return {
  }
}

const ConnectedControlPanelFrame = connect(
  mapStateToProps,
  mapDispatchToProps
)(ControlPanelFrame)

export default ConnectedControlPanelFrame;
