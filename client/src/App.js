import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import PlayerCard from './PlayerCard.js';

class App extends Component {
  constructor() {
    super();

    this.state = {
      players: []
    }
  }

  componentDidMount() {
    axios
    .get('http://localhost:5000/api/players')
    .then(res => this.setState({ players: res.data }))
    .catch(err => console.log(err));
  }

  render () {
    console.log('Do I have players??', this.state.players);
     return (
      <div className="App">
        <PlayerCard players={this.state.players} />
      </div>
    );
  }
}

export default App;
