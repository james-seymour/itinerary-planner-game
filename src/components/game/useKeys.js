import { useRef, useEffect, useState, useCallback } from "react"


const arrowKeys = {
  up: 38,
  down: 40,
  left: 39,
  right: 37,
}

const arrowKeysReverse = {
  38: "up",
  40: "down",
  39: "left",
  37: "right",
}

const useKeys = () => {
  const [keysDown, setKeysDown] = useState({
    left: false,
    right: false,
  })

  const handleKeyDown = useCallback((event) => {
    const { keyCode } = event
    window.event.preventDefault()
    setKeysDown((prevPressed) => {
      return { ...prevPressed, [arrowKeysReverse[keyCode]]: true }
    })
  })

  const handleKeyUp = useCallback((event) => {
    const { keyCode } = event
    window.event.preventDefault()
    setKeysDown((prevPressed) => {
      return { ...prevPressed, [arrowKeysReverse[keyCode]]: false }
    })
  })

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)
    window.addEventListener("keyup", handleKeyUp)


    window.addEventListener('keydown', (e) => {
      if (e.target.localName != 'input') {   // if you need to filter <input> elements
          switch (e.keyCode) {
              case 37: // left
                e.preventDefault()
                break
              case 39: // right
                e.preventDefault()
                break
              default:
                  break;
          }
      }
    }, {
      capture: true,   // this disables arrow key scrolling in modern Chrome
      passive: false   // this is optional, my code works without it
    });


    return function cleanup() {
      window.removeEventListener("keydown", handleKeyDown)
      window.removeEventListener("keyup", handleKeyUp)
    }
  }, [])

  return keysDown

}


export default useKeys