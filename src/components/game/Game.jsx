import React, { Component } from 'react'
import Car from './Car'

class Game extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      playerX: 100,
      playerY: 100,
      playerDir: 'n',
      playerCanMove: true
    };

  }

  render() {
    return <div onKeyDown={this.onKeyDown} tabIndex="0">
        <Car />
      </div>
  }

}

export default Game