import React from 'react'
import './Naveg.css'
import logo from '../img/logo-removebg-preview.png'
import kart from '../img/kartb.png'
function Naveg() {
  return (
    <nav>
        <ul>
            <li><a>Icel<img src={logo} id='logo' alt='logo'></img></a></li>
            <form>
              <input type='text' id='search' placeholder='Encuenta el iPhone que necesitas'></input>
              <button id='send'>🔍</button>
            </form>
            <li><img src={kart} id='k' alt='carrito'></img><a>Carrito</a></li>
        </ul>
    </nav>
  )
}

export default Naveg