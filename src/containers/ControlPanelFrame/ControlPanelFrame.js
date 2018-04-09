import React, { Component } from 'react';
import ControlPanel from '../../components/ControlPanel/ControlPanel.js';
import { shuffleAction } from '../../actions/index.js';
import { connect } from 'react-redux';
import moment from 'moment';

class ControlPanelFrame extends Component {
  componentDidMount() {
  }

  render() {
    return (
        <ControlPanel keywords={this.props.keywords} onClick={this.props.onClick}></ControlPanel>
    );
  }
}

const mapStateToProps = state => {
  return {
    keywords: state.keywords
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onClick: (keywords) => dispatch(shuffleAction(keywords))
  }
}

const ConnectedControlPanelFrame = connect(
  mapStateToProps,
  mapDispatchToProps
)(ControlPanelFrame)

export default ConnectedControlPanelFrame;
