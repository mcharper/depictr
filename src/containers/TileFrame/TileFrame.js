import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tile from '../../components/Tile/Tile.js';
import { hoverOverTile, cancelHover, lockTile } from '../../actions/index.js';

class TileFrame extends Component {
  render() {
    return (
      <Tile
        url={this.props.url}
        text={this.props.text}
        link={this.props.link}
        ordinal={this.props.ordinal}
        isBeingHovered={this.props.isBeingHovered}
        isLocked={this.props.isLocked}
        onClick={this.props.onClick}
        onMouseEnter={this.props.onMouseEnter}
        onMouseLeave={this.props.onMouseLeave}>
      </Tile>
    );
  }
}

const mapStateToProps = state => {
  return {
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

const ConnectedTileFrame = connect(
  mapStateToProps,
  mapDispatchToProps
)(TileFrame)

export default ConnectedTileFrame;
