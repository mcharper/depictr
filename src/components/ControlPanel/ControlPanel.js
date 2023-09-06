import React from 'react';
import { useSelector } from 'react-redux';
import './ControlPanel.css';

export const ControlPanel = ({ keywords, onChange, onClick }) => {
  const mosaicSideSize = useSelector(state => state.mosaicSideSize);

  const changeMosaicSize = (e) => {
    onChange(e.target.value);
  }

  return (
    <div style={{ display: "inline-block" }}>
      <button onClick={() => onClick(keywords)}>Shuffle</button>
      <label style={{ color: 'gray' }}>Mosaic Size:</label>
      <input type="range" min="1" max="5" value={mosaicSideSize} onChange={changeMosaicSize} class="slider" ></input>
      <button onClick={() => onClick(['green', 'trees'])}>Example</button>
    </div>
  );
}

