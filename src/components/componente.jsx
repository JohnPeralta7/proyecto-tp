import './componente.css'



function Componente(props) {

  return (
    <div className='Comp'>
      <img src={props.img} alt="" id='imgg' />
        <h2>{props.title}</h2>
        <p dangerouslySetInnerHTML={{__html: props.pantalla}}></p> 
        <p dangerouslySetInnerHTML={{__html: props.procesador}}></p>
        <p dangerouslySetInnerHTML={{__html: props.ram}}></p>
        <p dangerouslySetInnerHTML={{__html: props.almacenamiento}}></p>
        <p dangerouslySetInnerHTML={{__html: props.expansion}}></p>
        <p dangerouslySetInnerHTML={{__html: props.camara}}></p>
        <p dangerouslySetInnerHTML={{__html: props.bateria}}></p>
        <p dangerouslySetInnerHTML={{__html: props.os}}></p>
        <p dangerouslySetInnerHTML={{__html: props.perfil}}></p>
        <p dangerouslySetInnerHTML={{__html: props.peso}}></p>
        <p dangerouslySetInnerHTML={{__html: props.precio}}></p>
        <button id='boton' onClick>{props.add}</button>
    </div>
  )
}

export default Componente
//<Link to={props.button}><button id='boton' dangerouslySetInnerHTML={{__html: props.button}}></button></Link><br />