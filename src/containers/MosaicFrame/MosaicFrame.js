import React, { Component } from 'react';
import Mosaic from '../../components/Mosaic/Mosaic.js';
import { connect } from 'react-redux';
import { tileLocked } from '../../actions/index.js';

class MosaicFrame extends Component {
  render() {
      return (
          <Mosaic photos={this.props.photos} keywords={this.props.keywords} onClick={this.props.onClick}></Mosaic>
      );
    }
}

const mapStateToProps = state => {
  return {
    photos: state.photos,
    keywords: state.keywords
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onClick: (ordinal) => dispatch(tileLocked(ordinal))
 }
}

const ConnectedMosaicFrame = connect(
  mapStateToProps,
  mapDispatchToProps
)(MosaicFrame)

export default ConnectedMosaicFrame;
