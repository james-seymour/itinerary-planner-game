import { useRef, useEffect, useState, useCallback } from "react"


const arrowKeys = {
  up: 38,
  down: 40,
  left: 37,
  right: 39,
}

const arrowKeysReverse = {
  38: "up",
  40: "down",
  37: "left",
  39: "right",
}

const useKeys = () => {
  const [keysDown, setKeysDown] = useState({
    left: false,
    right: false,
  })

  const handleKeyDown = useCallback((event) => {
    const { keyCode } = event

    setKeysDown((prevPressed) => {
      return { ...prevPressed, [arrowKeysReverse[keyCode]]: true }
    })
  })

  const handleKeyUp = useCallback((event) => {
    const { keyCode } = event

    setKeysDown((prevPressed) => {
      return { ...prevPressed, [arrowKeysReverse[keyCode]]: false }
    })
  })

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)
    window.addEventListener("keyup", handleKeyUp)

    return function cleanup() {
      window.removeEventListener("keydown", handleKeyDown)
      window.removeEventListener("keyup", handleKeyUp)
    }
  }, [])

  return keysDown

}


export default useKeys