import React, { Component } from 'react';
import './App.css';

let data = [
{  
  id: "heater-1",
  text: "Q",
  src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
},
{
  id: "heater-2",
  text: "W",
  src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
},
{
  id: "heater-3",
  text: "E",
  src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
},
{  
  id: "heater-4",
  text: "A",
  src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
},
{ 
  id: "clap",
  text: "S",
  src: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"
},
{
  id: "open-hh",
  text: "D",
  src: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"
},
{ 
  id: "kick-n-hat",
  text: "Z",
  src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
},
{
  id: "kick",
  text: "X",
  src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
},
{
  id: "closed-hh",
  text: "C",
  src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
}
];

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
    const listItems = data.map(item => {
      return (
        <DrumPad
          key={item.id}
          id={item.id}
          text={item.text}
          src={item.src}
          onInstrumentChange={this.handleInstrumentChange}
          >
        </DrumPad>
      );
    });

    return (
      <div className="App">
        <div id="drum-machine">
          <div id="display">
            Now Playing: {this.state.nowPlaying}
          </div>
          {listItems}
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
