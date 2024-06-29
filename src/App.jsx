
import Naveg from './components/Naveg';
import './App.css';
import Showkart from './components/Showkart';
import Componente from './components/componente';
import phone from './data/phone';
function App() {
  let phoneList = phone.map((d) => {
    return <Componente img={d.img} title={d.name} description=
    {d.description} pantalla={d.pantalla} procesador={d.procesador}
    ram={d.ram} almacenamiento={d.almacenamiento} expansion={d.expansion} 
    camara={d.camara} bateria={d.bateria} os={d.os} 
    perfil={d.perfil} peso={d.peso} precio={d.precio} button={d.button} add={d.add} />
  })
  return (
    <>
    <Naveg />
    <Showkart/>
    <div className='Pos'>
      {phoneList}
    </div>
    
    </>
      
    
  );
}

export default App;
