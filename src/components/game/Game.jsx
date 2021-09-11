import React from 'react'
import { Canvas } from '@react-three/fiber'
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
    <Canvas>
      <Box />
    </Canvas>
  )
}

export default Game
