import React from 'react';
import { useSelector } from 'react-redux';
import './ControlPanel.css';

export const ControlPanel = ({ keywords, onChange, onClick }) => {
  const mosaicSideSize = useSelector(state => state.mosaicSideSize);

  const changeMosaicSize = (e) => {
    onChange(e.target.value);
  }

  return (
    <div>
      <button onClick={() => onClick(keywords)}>Shuffle</button>
      <input type="range" min="1" max="5" value={mosaicSideSize} onChange={changeMosaicSize} class="slider" ></input>
      <p>
        Shuffle to get some fresh photos.<br />
        To lock a photo in place, click it.<br />
        Click again to unlock it.</p>
    </div>
  );
}

