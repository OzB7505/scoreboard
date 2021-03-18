import React from 'react';
import Player from './components/player';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerAScore: 0,
      winningScore: 0,
      winner: "Player A",
    }
  }  

  handlePlayerAClick = () => {
    this.setState(state => {
      state.playerAScore += 1
      return state
    });
  }

  reset = () => {
    this.setState({
      playerAScore: 0,
      winningScore: 0,
      winner: "Player A",
    });
  }

  render() {
    return (
      <div className="App">
        <div className="banner">SCOREBOARD</div>
        <h1 className="Winner">Player ## is in the lead!</h1>
        <h3>The winner has ## points</h3>
        <div className="Players">
          <Player id={0} name={"A"} score={this.state.playerAScore} clickHandler={this.handlePlayerAClick}/>
        </div>
        <button className="ResetButton" onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

export default App;
