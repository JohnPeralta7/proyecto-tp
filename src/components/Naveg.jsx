import React, { useState } from 'react'
import './Naveg.css'
import logo from '../img/logo-removebg-preview.png'
import kart from '../img/kartb.png'

export let Naveg = ({allProducts, setAllProducts}) => {
    const [active, setActive] = useState(false);
  return (
    <>
    <nav>
        <ul>
            <li><a>Icel<img src={logo} id='logo' alt='logo'></img></a></li>
            <form>
              <input type='text' id='search' placeholder='Encuenta el iPhone que necesitas'></input>
              <button id='send'>🔍</button>
            </form>            
            <div className='' onClick={() => setActive(!active)}><img src={kart} id='k'></img></div>	
				<div className={`container-cart-products ${active ? '' : 'hidden-cart'}`}>
					{allProducts.length ?(
						<>
					 <div className='row-product'>
						{allProducts.map(product => (
						<div className='cart-product' key={product.id}>
 							<div className='info-cart-product'>
								<span className='cantidad-producto-carrito'>
									{product.quantity}
									</span>
								<p className='titulo-producto-carrito'>
									{product.name}
								</p>
								<span className='precio-producto-carrito'>
									{product.precio}
								</span>
							</div>
						</div>
						))}
							</div>
							<div className='cart-total'>
								<h3>Total:</h3>
								<span className='total-pagar'>$200</span>
							</div></>
					) : (
						<p className='cart-empty'>El carrito está vacío</p>					  
					)
				}
        </div>
        </ul>
    </nav>
    </>
	)
}

export default Naveg
//<button onClick={handleclick} id='kart'><img src={kart} id='k' alt='carrito'></img><a>Carrito</a></button>