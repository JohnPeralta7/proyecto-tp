import React, { useState } from 'react'
import './Naveg.css'
import logo from '../img/logo-removebg-preview.png'
import kart from '../img/kartb.png'
function Naveg() {
    const [show, setShow] = useState(false);
    const handleclick = () => setShow(!show);
  return (
    <>
    <nav>
        <ul>
            <li><a>Icel<img src={logo} id='logo' alt='logo'></img></a></li>
            <form>
              <input type='text' id='search' placeholder='Encuenta el iPhone que necesitas'></input>
              <button id='send'>🔍</button>
            </form>
            <button onClick={handleclick} id='kart'><img src={kart} id='k' alt='carrito'></img><a>Carrito</a></button>
        </ul>
    </nav>
    <div>{show && <table><><tr><th>Mi Carrito</th></tr> <tr><td>hola, anademe funcion de lo que agregas productos</td></tr></></table>}</div>
    </>
    
   
  )
}

export default Naveg