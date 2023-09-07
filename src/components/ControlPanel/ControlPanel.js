import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeMosaicSideSize, shuffleAction } from '../../actions/index.js';
import { lyricsChangedAction } from '../../actions/index.js';
import './ControlPanel.css';

export const ControlPanel = () => {
  const mosaicSideSize = useSelector(state => state.mosaicSideSize);
  const keywords = useSelector(state => state.keywords);
  const dispatch = useDispatch();

  const changeMosaicSize = (e) => {
    dispatch(changeMosaicSideSize(e.target.value));
    dispatch(shuffleAction(keywords, e.target.value ** 2));
  }

  const shuffle = () => {
    dispatch(shuffleAction(keywords, mosaicSideSize ** 2));
  }

  const example1 = () => {
    const text = "Red yellow orange";
    dispatch(lyricsChangedAction(text, mosaicSideSize ** 2));
  }

  return (
    <div style={{ display: "inline-block" }}>
      <button onClick={shuffle}>Shuffle</button>
      <label style={{ color: 'gray' }}>Mosaic Size:</label>
      <input type="range" min="1" max="10" value={mosaicSideSize} onChange={changeMosaicSize} className="slider" ></input>
      <button onClick={example1}>Example</button>
    </div>
  );
}

