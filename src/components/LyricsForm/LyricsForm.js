import React, { Component } from 'react';
import './LyricsForm.css';
import debounce from "lodash/debounce";

class LyricsForm extends Component {
  constructor(props) {
    super(props);
    this.onChange = (event) => {
        var lyrics = event.target.value;
        debounce(() => {
          this.props.onChange(lyrics);
          }, 5000)();
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

