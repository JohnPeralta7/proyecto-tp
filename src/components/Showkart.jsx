import React, { useState } from 'react'

function Showkart() {

    const [show, setShow] = useState(false)

  return (
    <div>{show && <a>Showkart</a>}</div>
  )
}

export default Showkart