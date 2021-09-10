import { useState } from 'react'

const Game = (props) => {
    
  const [gameState, updateGameState] = useState(0)
  
  return (
    <>
    <button onClick={() => updateGameState(prevState => prevState + 1)}></button>
    <div>
      Button has {gameState} clicks
    </div>
    </>
  )

}

export default Game