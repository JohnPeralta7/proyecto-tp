import './componente.css'
import { Link } from 'react-router-dom'

function Componente(props) {
  return (
    <div className='Comp'>
      <Link to={props.img}><img src={props.img} alt="" id='imgg' /></Link>
        <Link to={props.title}><h2>{props.title}</h2></Link>
        <p>{props.image}</p>
        <p>{props.description}</p>
        <p> {props.pantalla}</p> 
        <p>{props.procesador}</p>
        <p>{props.ram}</p>
        <p>{props.almacenamiento}</p>
        <p>{props.expansion}</p>
        <p>{props.camara}</p>
        <p>{props.bateria}</p>
        <p>{props.os}</p>
        <p>{props.perfil}</p>
        <p>{props.peso}</p>
        <p>{props.precio}</p>
    </div>
  )
}

export default Componente