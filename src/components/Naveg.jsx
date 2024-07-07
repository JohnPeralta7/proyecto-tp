import React, { useState } from 'react'
import './Naveg.css'
import logo from '../img/logo-removebg-preview.png'
import kart from '../img/kartb.png'
function Naveg() {
    const [active, setActive] = useState(false);
  return (
    <>
    <nav>
        <ul>
            <li><a>Icel<img src={logo} id='logo' alt='logo'></img></a></li>           
            <div className='' onClick={() => setActive(!active)}><img src={kart} id='k'></img></div>	
				<div
					className={`container-cart-products ${active ? '' : 'hidden-cart'}`}>
						<>
							<div className='cart-total'>
								<h3>Total:</h3>
								<span className='total-pagar'></span>
							</div>
              <p className='cart-empty'>El carrito está vacío</p>
        </>
        </div>
        </ul>
    </nav>
    <div className='container-cart-products'>
							<div className='row-product'>
									<div className='cart-product'>
										<div className='info-cart-product'>
											<span className='cantidad-producto-carrito'>
											</span>
											<p className='titulo-producto-carrito'>
											</p>
											<span className='precio-producto-carrito'>
											</span>
										</div>
									</div>
							</div>
    </div>

    </>
	)
}

export default Naveg
//<button onClick={handleclick} id='kart'><img src={kart} id='k' alt='carrito'></img><a>Carrito</a></button>