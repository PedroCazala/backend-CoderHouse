import { useEffect, useState } from 'react';
import './App.css';
// import List from './components/List';

// const frutas = ['banana','pera','manzana','kiwi']

function App() {
  const [datos,setDatos] = useState([  ])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts ')
    .then(res=>res.json())
    .then(data => setDatos (data))
  },[])

  console.log(datos);
  return(
    <div>
      {datos.map(dato=>{
        return <p key={dato.id}> {dato.title}</p>
      })}
    </div>
  )
  // return (
  //   <div className="App">
  //     <div>Hola Mundo</div>
  //     <h1 >Frutas</h1>
  //     <List frutas={frutas} />
  //   </div>
  // );
}

export default App;
