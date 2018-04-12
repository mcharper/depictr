import React, { Component } from 'react';
import LyricsForm from '../../components/LyricsForm/LyricsForm.js';
import { lyricsChangedAction } from '../../actions/index.js';
import { connect } from 'react-redux';
import moment from 'moment';

class LyricsFormFrame extends Component {
  componentDidMount() {
    // Get time of day to find appropriate photos to be retrieving
    // This kicks of a request to the API to wake it up while the user is typing
    var timeOfDay = getTimeOfDay(moment()); 
    this.props.onChange(timeOfDay);
  }

  render() {
    return (
        <LyricsForm text={this.props.text} onChange={this.props.onChange}></LyricsForm>
    );
  }
}

function getTimeOfDay (m) {
  if(!m || !m.isValid()) { return ''; }

  var currentHour = parseFloat(m.format('HH'));
  if(currentHour < 0 || currentHour > 23) { return '' };

  var timesOfDay = [
      'midnight', 'night', 'night', 'night',
      'night', 'early morning', 'early morning', 'early morning',
      'morning', 'morning', 'morning', 'morning',
      'afternoon', 'afternoon', 'afternoon', 'afternoon',
      'afternoon', 'afternoon', 'evening', 'evening',
      'evening', 'late evening', 'late evening', 'night',
  ];

  return timesOfDay[currentHour];
}

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {
     onChange: (text) => dispatch(lyricsChangedAction(text))
  }
}

const ConnectedLyricsFormFrame = connect(
  mapStateToProps,
  mapDispatchToProps
)(LyricsFormFrame)

export default ConnectedLyricsFormFrame;
