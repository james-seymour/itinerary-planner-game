import { useState } from 'react'
import Car from './Car'

const Game = (props) => {
    
  const [gameState, updateGameState] = useState(0)
  
  return (
    <>
    <button onClick={() => updateGameState(prevState => prevState + 1)}></button>
    <div>
      Button has {gameState} clicks
    </div>
    <Car />
    </>
  )

}

export default Game