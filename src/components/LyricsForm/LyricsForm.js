import React, { Component } from 'react';
import './LyricsForm.css';
import debounce from "lodash/debounce";

const LATENCY_MS = 500;

class LyricsForm extends Component {
  constructor(props) {
    super(props);

    var debouncedChange = 
      debounce((lyrics) => {
        this.props.onChange(lyrics);
      }, LATENCY_MS);

    this.onChange = (event) => {
        var lyrics = event.target.value;
        debouncedChange(lyrics);
    }
  }

  render() {
    return (
        <form>
            <textarea 
            value={this.props.text}
            onChange={this.onChange}></textarea>
        </form>
    );
  }
}

export default LyricsForm;

