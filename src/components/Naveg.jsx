import React, { useState } from 'react'
import './Naveg.css'
import logo from '../img/logo-removebg-preview.png'
import kart from '../img/kartb.png'
import garbage from '../img/image-removebg-preview.png'

export let Naveg = ({allProducts, setAllProducts, total, setTotal}) => {
    const [active, setActive] = useState(false);
	const Deleteproduct = (product) => {
		const results = allProducts.filter((item)=> item.id !== product.id)
		setAllProducts(results)
	}
  return (
    <>
    <nav>
        <ul>
            <li><a>Icel<img src={logo} id='logo' alt='logo'></img></a></li>           
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
									${product.precio}
								</span>
							</div>
								<div className='' onClick={()=> Deleteproduct(product)}><img src={garbage} id='g'></img></div>
						</div>
						))}
							</div>
							<div className='cart-total'>
								<h3>Total:</h3>
								<span className='total-pagar'>${total}</span>
							</div>
							</>
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