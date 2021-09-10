import React from 'react'
import { Canvas } from '@react-three/fiber'

function Box() {
  return (
    <mesh>
      <boxBufferGeometry attach="geometry" />
      <meshLambertMaterial  attach="material" color="hotpink" />
    </mesh>
  )
}

function Game(props) {

  console.log(props.APIData)
  return (
    <Canvas>
      <Box />
    </Canvas>
  )
}

export default Game
