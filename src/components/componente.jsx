import './componente.css'
import { Link } from 'react-router-dom'
import phone from '../data/phone';


export let Componente = ({allProducts, setAllProducts}) => {
  let onAddProductt = product => {
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
        <p dangerouslySetInnerHTML={{__html: product.precio}}></p>
        <button id='boton' onClick={() => onAddProductt(product)}>Añadir al carrito</button>
        </div>
      ))}
      </div>
      </>
  )
}

export default Componente
//<Link to={props.button}><button id='boton' dangerouslySetInnerHTML={{__html: props.button}}></button></Link><br />