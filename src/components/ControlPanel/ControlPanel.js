import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { shuffleAction } from '../../actions/index.js';
import { lyricsChangedAction } from '../../actions/index.js';
import './ControlPanel.css';

export const ControlPanel = () => {
  const mosaicSideSize = useSelector(state => state.mosaicSideSize);
  const keywords = useSelector(state => state.keywords);
  const dispatch = useDispatch();

  const changeMosaicSize = (e) => {
    dispatch({ type: 'ChangeMosaicSideSize', data: e.target.value });
  }

  const shuffle = () => {
    dispatch(shuffleAction(keywords));
  }

  const example1 = () => {
    const text = "Red yellow orange";
    dispatch(lyricsChangedAction(text, mosaicSideSize));
  }

  return (
    <div style={{ display: "inline-block" }}>
      <button onClick={shuffle}>Shuffle</button>
      <label style={{ color: 'gray' }}>Mosaic Size:</label>
      <input type="range" min="1" max="5" value={mosaicSideSize} onChange={changeMosaicSize} class="slider" ></input>
      <button onClick={example1}>Example</button>
    </div>
  );
}

