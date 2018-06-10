import React, { Component } from 'react';
import './App.css';

const soundbytes = [
  {
    id: "heater-1",
    text: "Q",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    string: "Heater 1"
  }
]

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nowPlaying: 'Nothing'
    }

    this.handleInstrumentChange = this.handleInstrumentChange.bind(this);
  }

  handleInstrumentChange(instrument) {
    this.setState({nowPlaying: instrument})
  }

  render() {
    return (
      <div className="App">
        <div id="drum-machine">
          <div id="display">
            Now Playing: {this.state.nowPlaying}
          </div>

          <DrumPad
            id="heater-1"
            text="Q"
            src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
            onInstrumentChange={this.handleInstrumentChange}
          />
          <DrumPad
            id="heater-2"
            text="W"
            onInstrumentChange={this.handleInstrumentChange}
            src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
          />
          <DrumPad
            id="heater-3"
            text="E"
            onInstrumentChange={this.handleInstrumentChange}
            src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
          />
          <DrumPad
            id="heater-4"
            text="A"
            onInstrumentChange={this.handleInstrumentChange}
            src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
          />
          <DrumPad
            id="clap"
            text="S"
            onInstrumentChange={this.handleInstrumentChange}
            src="https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"
          />
          <DrumPad
            id="open-hh"
            text="D"
            onInstrumentChange={this.handleInstrumentChange}
            src="https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"
          />
          <DrumPad
            id="kick-n-hat"
            text="Z"
            onInstrumentChange={this.handleInstrumentChange}
            src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
          />
          <DrumPad
            id="kick"
            text="X"
            onInstrumentChange={this.handleInstrumentChange}
            src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
          />
          <DrumPad
            id="closed-hh"
            text="C"
            onInstrumentChange={this.handleInstrumentChange}
            src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
          />
        </div>
      </div>
    );
  }
}

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

export default App;
