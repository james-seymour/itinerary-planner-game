import React, { Component } from 'react'

class Game extends Component {
  
  constructor(props) {

    this.state = {
      playerX: 100,
      playerY: 100,
      playerWidth: 10,
      playerHeight: 10,
      playerDir: 'n',
      playerCanMove: true
    };
    
  }

  render() {
    return <div onKeyDown={this.onKeyDown} tabIndex="0">

      </div>
  }

}

export default Game