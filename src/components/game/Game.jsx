<<<<<<< HEAD
import React, { Component } from 'react'

class Game extends Component {
  render() {
    return (
      <div>
        
      </div>
    )
  }
=======
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
>>>>>>> 7b08dd3d405cc52336bcbb941cc6218bbbbea8ad
}

export default Game
