import React from 'react'

function Acceuil(props) {
  return (
    <div>
        <h1>Acceuil</h1>
        <p>bonjour {props.name}</p>
    </div>
  )
}

export default Acceuil