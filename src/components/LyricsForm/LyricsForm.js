import React, { useEffect } from 'react';
import './LyricsForm.css';
import { lyricsChangedAction } from '../../actions/index.js';
import debounce from "lodash/debounce";
import { getTimeOfDay } from '../../utility/getTimeOfDay';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

const LATENCY_MS = 250;

export const LyricsForm = () => {
  const mosaicSideSize = useSelector(state => state.mosaicSideSize);
  const dispatch = useDispatch();
  useEffect(() => {
    // Get time of day to find appropriate photos to be retrieving
    // This kicks of a request to the API to wake it up while the user is typing
    var timeOfDay = getTimeOfDay(moment());
    dispatch(lyricsChangedAction(timeOfDay, mosaicSideSize ** 2));
  }, []);

  const debouncedChange = debounce((lyrics) => {
    dispatch(lyricsChangedAction(lyrics, mosaicSideSize ** 2));
  }, LATENCY_MS);

  const onTextChanged = (event) => {
    var lyrics = event.target.value;
    debouncedChange(lyrics);
  };

  return (
    <form id="lyricsForm">
      <textarea placeholder='Type something, maybe a haiku, a verse from a song or a poem ...'
        onChange={onTextChanged}>
      </textarea>
    </form>
  );
};

