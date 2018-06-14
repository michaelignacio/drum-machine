import React, { Component } from 'react';

class DrumPad extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  handleClick() {
    let audio = document.getElementById(this.props.text);
    audio.play();
    this.props.onInstrumentChange(this.props.id);
  }

  handleKeyPress(event) {
    if (event.key === this.props.text.toLowerCase()) {
      let audio = document.getElementById(this.props.text);
      audio.play();
      this.props.onInstrumentChange(this.props.id);
    }
  }

  render() {
    return (
      <div 
        className="drum-pad" 
        id={this.props.id} 
        onClick={this.handleClick}
        onKeyPress={this.handleKeyPress}
      >
        {this.props.text}
        <audio 
          src={this.props.src} 
          id={this.props.text}
          className="clip"
        >
        </audio>
      </div>
    );
  }
}

export default DrumPad;