import React, { Component } from 'react';
import LyricsForm from '../../components/LyricsForm/LyricsForm.js';
import { lyricsChangedAction } from '../../actions/index.js';
import { connect } from 'react-redux';
import moment from 'moment';

class LyricsFormFrame extends Component {
  componentDidMount() {
    // Get month and time of day to find appropriate photos to be retrieving
    // This kicks of a request to the API to wake it up while the user is typing
    var timeOfDayAndMonth = moment().format("MMMM ") + getHumanTime(moment()); 
    this.props.onChange('kickstart');
    this.props.onChange(timeOfDayAndMonth);
  }

  render() {
    return (
        <LyricsForm text={this.props.text} onChange={this.props.onChange}></LyricsForm>
    );
  }
}

function getHumanTime (m) {
	var g = null; //return g
	
	if(!m || !m.isValid()) { return; } //if we can't find a valid or filled moment, we return.
	
	var split_afternoon = 12 //24hr time to split the afternoon
	var split_evening = 17 //24hr time to split the evening
	var currentHour = parseFloat(m.format("HH"));
	
	if(currentHour >= split_afternoon && currentHour <= split_evening) {
		g = "afternoon";
	} else if(currentHour >= split_evening) {
		g = "evening";
	} else {
		g = "morning";
	}
	
	return g;
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
