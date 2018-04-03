import React, { Component } from 'react';
import Mosaic from '../../components/Mosaic/Mosaic.js';
import { connect } from 'react-redux';

class MosaicFrame extends Component {
  render() {
    return (
        <Mosaic photos={this.props.photos}></Mosaic>
    );
  }
}

const mapStateToProps = state => {
  return {
    photos: state.photos
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

const ConnectedMosaicFrame = connect(
  mapStateToProps,
  mapDispatchToProps
)(MosaicFrame)

export default ConnectedMosaicFrame;
