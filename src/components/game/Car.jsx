import React from 'react'

function Car(props) {

  const styles = {
    rectangle: {
      width: '50px',
      height: '50px',
      color: 'red'
    }
  }

  return (
    <div>
        <div class={styles.rectangle}></div>
    </div>
  )
}

export default Car