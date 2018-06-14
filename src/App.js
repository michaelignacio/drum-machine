import React, { Component } from 'react';
import DrumPad from './DrumPad.js';
import data from './data.js';
import './App.css';

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
    const listItems = data.content.map(item => {
      return (
        <DrumPad
          key={item.id}
          id={item.id}
          text={item.text}
          src={item.src}
          name={item.name}
          onInstrumentChange={this.handleInstrumentChange}
          >
        </DrumPad>
      );
    });

    return (
      <div className="App">
        <div id="drum-machine">
          <h1>808s</h1>
          <div id="display">
            <em>{this.state.nowPlaying}</em>
          </div>
          <div className="drum-pad-area">
            {listItems}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
