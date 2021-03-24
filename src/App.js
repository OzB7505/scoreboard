import React from 'react';
import Player from './components/player';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerAScore: 0,
      playerBScore: 0,
      winningScore: 0,
      winner: "?",
    }
  }  

  handlePlayerAClick = () => {
    this.setState(state => {
      state.playerAScore += 1
      if (this.state.playerAScore > this.state.playerBScore){
          state.winner = "A"
          state.winningScore = state.playerAScore
          return state

      } else if (this.state.playerAScore === this.state.playerBScore) {
          state.winner="?"
          state.winningScore = "Tie"
          return state
      } else {
          return state
      }
    });
  }
  handlePlayerBClick = () => {
    this.setState(state => {
      state.playerBScore += 1
      if (this.state.playerBScore > this.state.playerAScore){
          state.winner = "B"
          state.winningScore = state.playerBScore
          return state

      } else if (this.state.playerAScore === this.state.playerBScore) {
          state.winner="?"
          state.winningScore = "tie"
          return state
      } else {
          return state
      }
    });
  }

  reset = () => {
    this.setState({
      playerAScore: 0,
      playerBScore: 0,
      winningScore: 0,
      winner: "?" ,
    });
  }
  
  render() {
    return (
      <div className="App">
        <div className="banner">SCOREBOARD</div>
        <h1 className="Winner">Player {this.state.winner} is in the lead!</h1>
        <h3>The winner has {this.state.winningScore} points</h3>
        <div className="Players">
          <Player id={0} name={"A"} score={this.state.playerAScore} clickHandler={this.handlePlayerAClick}/>
          <Player id={1} name={"B"} score={this.state.playerBScore} clickHandler={this.handlePlayerBClick}/>
        </div>
        <button className="ResetButton" onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

export default App;
