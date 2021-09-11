import React, { Component } from 'react'
import Car from './Car'
import Background from './Background'

class Game extends Component {

  constructor(props) {
    super(props);

    //Game state variables
    this.state = {
      playerX: 0,
      playerVel: 0,
      playerDir: 1, // 0 = left, 1 = right
      playerMoving: false,
    };

    //Bind all necessary function callbacks so
    //that they are called correctly
    this.onKeyDown = this.onKeyDown.bind(this);
  }

  //Handle constant key press
  onKeyDown(e) {
    switch(e.key) {
      case "a":
      case "ArrowLeft":
        if (Math.abs(this.state.playerVel) < 5) this.state.playerVel += 0.5;
        break;
      case "d":
      case "ArrowRight":
        if (Math.abs(this.state.playerVel) < 5) this.state.playerVel += -0.5;
        break;
    }
    console.log(this.state.playerVel)
  }

  render() {
    return <div
            tabIndex="0">
            <Car />
            <Background />
          </div>
  }

}

export default Game
