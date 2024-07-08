import './componente.css'

import { Link } from 'react-router-dom'
import phone from '../data/phone';


export let Componente = ({allProducts, setAllProducts, total, setTotal}) => {
  let onAddProductt = product => {

    if(allProducts.find(item => item.id === product.id)){
      let products = allProducts.map(item => item.id === product.id ? {...item, quantity: item.quantity +1} :
        item
      )
      setTotal(total + product.precio * product.quantity)
      return setAllProducts([...products])
    }


    setTotal(total + product.precio * product.quantity)
    setAllProducts([...allProducts, product])


  }
  console.log(allProducts)
  return (
    <>
      <div className='conten'>          
    {phone.map(product => (
        <div className='Comp' key={product.id}>
      <figure>
        <img src={product.img} alt="" id='imgg' />
      </figure>
        <h2>{product.name}</h2>
        <p className='price'>${product.precio}</p>
        <p dangerouslySetInnerHTML={{__html: product.pantalla}}></p> 
        <p dangerouslySetInnerHTML={{__html: product.procesador}}></p>
        <p dangerouslySetInnerHTML={{__html: product.ram}}></p>
        <p dangerouslySetInnerHTML={{__html: product.almacenamiento}}></p>
        <p dangerouslySetInnerHTML={{__html: product.expansion}}></p>
        <p dangerouslySetInnerHTML={{__html: product.camara}}></p>
        <p dangerouslySetInnerHTML={{__html: product.bateria}}></p>
        <p dangerouslySetInnerHTML={{__html: product.os}}></p>
        <p dangerouslySetInnerHTML={{__html: product.perfil}}></p>
        <p dangerouslySetInnerHTML={{__html: product.peso}}></p>
        <button id='boton' onClick={() => onAddProductt(product)}>Añadir al carrito</button>
        </div>
      ))}
      </div>
      </>
  )
}

export default Componente
//<Link to={props.button}><button id='boton' dangerouslySetInnerHTML={{__html: props.button}}></button></Link><br />