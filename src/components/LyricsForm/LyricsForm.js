import React, { Component } from 'react';
import './LyricsForm.css';

class LyricsForm extends Component {
  constructor(props) {
    super(props);
    this.onChange = (event) => {
        var lyrics = event.target.value;
        this.props.onChange(lyrics);
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

