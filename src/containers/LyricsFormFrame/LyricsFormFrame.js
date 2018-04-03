import React, { Component } from 'react';
import LyricsForm from '../../components/LyricsForm/LyricsForm.js';
import { lyricsChangedAction } from '../../actions/index.js';
import { connect } from 'react-redux';

class LyricsFormFrame extends Component {
  render() {
    return (
        <LyricsForm text={this.props.text} onChange={this.props.onChange}></LyricsForm>
    );
  }
}

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {
     onChange: (text) => dispatch(lyricsChangedAction(text))
  }
}

const ConnectedLyricsFormFrame = connect(
  mapStateToProps,
  mapDispatchToProps
)(LyricsFormFrame)

export default ConnectedLyricsFormFrame;
