import React, { Component } from 'react';
import './LyricsForm.css';
import debounce from "lodash/debounce";

const LATENCY_MS = 500;

export const LyricsForm = ({ text, onChange }) => {
  const debouncedChange = debounce((lyrics) => {
    onChange(lyrics);
  }, LATENCY_MS);

  const onTextChanged = (event) => {
    var lyrics = event.target.value;
    debouncedChange(lyrics);
  };

  return (
    <form>
      <textarea value={text} placeholder='Type something, maybe a poem or some lyrics ...'
        onChange={onTextChanged}>
      </textarea>
    </form>
  );
};

