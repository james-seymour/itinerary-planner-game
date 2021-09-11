import React from 'react'
import saveJSON from '../../tools/saveJSON'

function Box() {
  return (
    <mesh>
      <boxBufferGeometry attach="geometry" />
      <meshLambertMaterial  attach="material" color="hotpink" />
    </mesh>
  )
}

function Game({ APIData }) {

  // saveJSON(props.APIData, "tokyoReponse")
  console.log(APIData.current)
  return (
    <div></div>
  )
}

export default Game
