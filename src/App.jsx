
import Naveg from './components/Naveg';
import './App.css';
import Componente from './components/componente';
import { useState } from 'react';


function App() {

  let [allProducts, setAllProducts] = useState([])
  let [total, setTotal] = useState(0)
  
  return (
    <>

    <Naveg 
    allProducts={allProducts}
    setAllProducts={setAllProducts}
    total={total}
    setTotal={setTotal}/>
    <Componente
    allProducts={allProducts}
    setAllProducts={setAllProducts}
    total={total}
    setTotal={setTotal}/>   

    </>
      
  );
}
export default App;
