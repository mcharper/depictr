import React, { useEffect, useState } from 'react';
import './LyricsForm.css';
import { lyricsChangedAction } from '../../actions/index.js';
import debounce from "lodash/debounce";
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

const LATENCY_MS = 500;

export const LyricsForm = () => {
  const [isNewSession, setNewSession] = useState(true);
  console.log(`isNewSession ${isNewSession}`);
  const mosaicSideSize = useSelector(state => state.mosaicSideSize);
  const dispatch = useDispatch();
  useEffect(() => {
    if (isNewSession) {
      // Get time of day to find appropriate photos to be retrieving
      // This kicks of a request to the API to wake it up while the user is typing
      var timeOfDay = getTimeOfDay(moment());
      dispatch(lyricsChangedAction(timeOfDay, mosaicSideSize ** 2));
      setNewSession(false);
    }
  });

  const debouncedChange = debounce((lyrics) => {
    dispatch(lyricsChangedAction(lyrics, mosaicSideSize ** 2));
  }, LATENCY_MS);

  const onTextChanged = (event) => {
    var lyrics = event.target.value;
    debouncedChange(lyrics);
  };

  const getTimeOfDay = (m) => {
    if (!m || !m.isValid()) { return ''; }

    var currentHour = parseFloat(m.format('HH'));
    if (currentHour < 0 || currentHour > 23) { return '' };

    var timesOfDay = [
      'midnight', 'early hours', '2am', '3am',
      'night shift', 'before dawn', 'dawn', 'early morning',
      'coffee', 'morning', 'morning', 'lunch',
      'afternoon', 'afternoon', 'afternoon', 'afternoon',
      'afternoon', 'afternoon', 'evening', 'evening',
      'evening', 'late evening', 'late evening', 'night',
    ];

    return timesOfDay[currentHour];
  }

  return (
    <form>
      <textarea placeholder='Type something, maybe a haiku, a verse from a song or a poem ...'
        onChange={onTextChanged}>
      </textarea>
    </form>
  );
};

