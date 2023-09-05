import React from 'react';
import './ControlPanel.css';

export const ControlPanel = ({ keywords, mosaicSideSize, onChange, onClick }) => {
  const changeMosaicSize = (e) => {
    onChange(e.target.value);
  }

  return (
    <div>
      <button onClick={() => onClick(keywords)}>Shuffle</button>
      <input value={mosaicSideSize} onChange={changeMosaicSize}></input>
      <p>{mosaicSideSize}</p>
      <p>
        Shuffle to get some fresh photos.<br />
        To lock a photo in place, click it.<br />
        Click again to unlock it.</p>
    </div>
  );
}

