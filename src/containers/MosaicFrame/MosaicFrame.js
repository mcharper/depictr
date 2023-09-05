import React, { Component } from 'react';
import { Mosaic } from '../../components/Mosaic/Mosaic.js';
import { connect } from 'react-redux';
import { hoverOverTile, cancelHover, lockTile } from '../../actions/index.js';

class MosaicFrame extends Component {
  render() {
    return (
      <Mosaic
        photos={this.props.photos}
        keywords={this.props.keywords}
        hoverOverTile={this.props.hoverOverTile}
        lockedTiles={this.props.lockedTiles}
        onClick={this.props.onClick}
        onMouseEnter={this.props.onMouseEnter}
        onMouseLeave={this.props.onMouseLeave}>
      </Mosaic>
    );
  }
}

const mapStateToProps = state => {
  return {
    photos: state.photos,
    keywords: state.keywords,
    hoverOverTile: state.hoverOverTile,
    lockedTiles: state.lockedTiles
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onClick: (ordinal) => dispatch(lockTile(ordinal)),
    onMouseEnter: (ordinal) => dispatch(hoverOverTile(ordinal)),
    onMouseLeave: (ordinal) => dispatch(cancelHover(ordinal))
  }
}

const ConnectedMosaicFrame = connect(
  mapStateToProps,
  mapDispatchToProps
)(MosaicFrame)

export default ConnectedMosaicFrame;
