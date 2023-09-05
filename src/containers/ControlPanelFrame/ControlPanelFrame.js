import React, { Component } from 'react';
import { ControlPanel } from '../../components/ControlPanel/ControlPanel.js';
import { changeMosaicSideSize, shuffleAction } from '../../actions/index.js';
import { connect } from 'react-redux';

class ControlPanelFrame extends Component {
  componentDidMount() {
  }

  render() {
    return (
      <ControlPanel keywords={this.props.keywords} mosaicSideSize={this.props.mosaicSideSize} onChange={this.props.onChange} onClick={this.props.onClick}></ControlPanel>
    );
  }
}

const mapStateToProps = state => {
  return {
    keywords: state.keywords,
    mosaicSideSize: state.mosaicSideSize
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onClick: (keywords) => dispatch(shuffleAction(keywords)),
    onChange: (size) => dispatch(changeMosaicSideSize(size))
  }
}

const ConnectedControlPanelFrame = connect(
  mapStateToProps,
  mapDispatchToProps
)(ControlPanelFrame)

export default ConnectedControlPanelFrame;
